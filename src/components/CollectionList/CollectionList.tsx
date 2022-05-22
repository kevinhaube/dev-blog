import * as React from "react"
import * as styles from "./collectionList.module.css"
import {FrontMatter, PostMetadata} from "../../pages";

const CollectionItem = ({
    frontmatter
}: FrontMatter<PostMetadata>) => {
    return (
        <section className={styles.metaContainer}>
            <section className={styles.contentMeta}>
                <a href={"/"}>{frontmatter.title}</a>
                <p>{frontmatter.description}</p>
            </section>
            <section className={styles.creationMeta}>
                <span>{frontmatter.author}</span>
                <span>{frontmatter.timestamp}</span>
            </section>
        </section>
    )
}

const CollectionList = ({feed}: {feed: FrontMatter<PostMetadata>[]}) => {
    return (
        <ul className={styles.collectionList}>
            {feed.map(item =>
                <li>
                    <CollectionItem
                        frontmatter={item.frontmatter}
                    />
                </li>
            )}
        </ul>
    )
}

export default CollectionList
