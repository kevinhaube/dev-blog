import * as React from "react"
import * as styles from "./collectionList.module.css"
import {BlogIndexQuery, FrontMatter, PostMetadata} from "../../data-types/posts";

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

const CollectionList = ({feed}: {feed?: BlogIndexQuery[]}) => {
    return (
        <ul className={styles.collectionList}>
            {feed?.map(item =>
                <a className={styles.blogLink} href={`post/${item.slug}`}>
                    <li>
                        <CollectionItem
                            frontmatter={item.frontmatter}
                        />
                    </li>
                </a>
            )}
        </ul>
    )
}

export default CollectionList
