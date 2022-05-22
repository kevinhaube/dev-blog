import * as React from "react"
import * as styles from "./collectionList.module.css"

interface PostMetadata {
    title: string,
    description: string,
    author: string,
    timestamp: string
}

const CollectionItem = ({
    title,
    description,
    author,
    timestamp
}: PostMetadata) => {
    return (
        <section className={styles.metaContainer}>
            <section className={styles.contentMeta}>
                <a href={"/"}>{title}</a>
                <p>{description}</p>
            </section>
            <section className={styles.creationMeta}>
                <span>{author}</span>
                <span>{timestamp}</span>
            </section>
        </section>
    )
}

const CollectionList = () => {
    return (
        <ul className={styles.collectionList}>
            <li>
                <CollectionItem
                    title={"Test title for my blog post"}
                    description={
                    "A story about how I once began a blog" +
                        " and decided that I'd write to it once " +
                        "in a blue moon because the real blog was" +
                        "the friends we made along the way."
                    }
                    author={"Kevin Haube"}
                    timestamp={"2022-05-25"}
                />
            </li>
        </ul>
    )
}

export default CollectionList
