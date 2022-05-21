import {useEffect, useMemo, useState} from "react";

interface EventTimerOptions {
    milliseconds: number
    seconds: number
    minutes: number
    hours: number
}
const toMilliseconds = (unit: keyof EventTimerOptions, amount: number) => {
    switch (unit) {
        case "milliseconds": return amount
        case "seconds": return amount * 1000
        case "minutes": return amount * 1000 * 60
        case "hours": return amount * 1000 * 60 * 60
    }
}
const useEventTimer = (options: Partial<EventTimerOptions>) => {
    const [callback, setCallback] = useState<boolean>(false)
    const constantTime = useMemo(() => {
        let time: number = 0;
        Object.entries(options).forEach(([unit, amount]) => {
            time += toMilliseconds(unit as keyof EventTimerOptions, amount)
        })
        return time
    }, [options])

    useEffect(() => {
        setTimeout(() => setCallback(!callback), constantTime)
    }, [callback, constantTime])

    return {
        trigger: callback
    }
}

export default useEventTimer
