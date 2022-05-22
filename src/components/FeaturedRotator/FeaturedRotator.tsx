import * as React from "react";
import * as styles from "./featuredRotator.module.css"
import useEventTimer from "../../hooks/useEventTimer";
import {useEffect, useReducer} from "react";
import {FrontMatter, PostMetadata} from "../../pages";

export interface ItemConfig {
    title: string
    timestamp: string
}

interface RotatorItemProps {
    item: ItemConfig;
    display: boolean
}

const RotatorItem = ({item, display}: RotatorItemProps) => (
    <section className={
        !display
            ? `${styles.rotatorItemContainer} ${styles.invisible}`
            : styles.rotatorItemContainer
    }>
        <h3>{item.title}</h3>
        <span>{item.timestamp}</span>
    </section>
)

const RotatorCounter = ({display}: {display: boolean}) => (
    <div className={
        display
            ? `${styles.rotatorCounter} ${styles.activeCounter}`
            : styles.rotatorCounter}
    />
)

interface FeaturedRotatorProps {
    rotation: FrontMatter<PostMetadata>[]
}

const FeaturedRotator = ({
    rotation
}: FeaturedRotatorProps) => {
    const displayReducer = (state: number, action: "next" | "prev") => {
        switch (action) {
            case "next":
                return state + 1 > rotation.length - 1
                    ? 0
                    : state + 1;
            case "prev":
                return state === 0
                    ? rotation.length - 1
                    : state - 1;
        }
    }
    const [displayIdx, setDisplayIdx] = useReducer(displayReducer, -1)
    const { trigger } = useEventTimer({ seconds: 5 })

    /* Sets the display index every time the trigger resets */
    useEffect(() => {
        setDisplayIdx("next")
    }, [trigger, setDisplayIdx])

    return (
        <div className={styles.rotatorContainer}>
            {rotation.map((item, idx) =>
                <RotatorItem
                    item={item.frontmatter}
                    display={idx === displayIdx}
                />
            )}
            <div className={styles.rotatorCounterContainer}>
                {rotation.map((item, idx) =>
                    <RotatorCounter display={idx === displayIdx} />
                )}
            </div>
        </div>
    )
}

export default FeaturedRotator
