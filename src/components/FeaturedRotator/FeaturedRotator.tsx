import * as React from "react";
import * as styles from "./featuredRotator.module.css"
import useEventTimer from "../../hooks/useEventTimer";

interface RotatorItemProps {
    title: string
    timestamp: string
}

const RotatorItem = ({title, timestamp}: RotatorItemProps) => (
    <section>
        <h3>{title}</h3>
        <span>{timestamp}</span>
    </section>
)

interface FeaturedRotatorProps {
    rotation: RotatorItemProps[]
}

const FeaturedRotator = ({
    rotation
}: FeaturedRotatorProps) => {
    const { trigger } = useEventTimer({seconds: 30})
    return (
        <div className={styles.rotatorContainer}>
            {rotation.map(item => <RotatorItem {...item} />)}
        </div>
    )
}

export default FeaturedRotator
