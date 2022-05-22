import * as React from "react"
import * as styles from "./collectionList.module.css"
import {graphql, useStaticQuery} from "gatsby";

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

const queryBlogPosts = graphql`
    query {
        allMdx {
            nodes {
                frontmatter {
                    title
                    author
                    description
                    timestamp
               }
            }   
       }
    }
`

const CollectionList = () => {
    const feed = useStaticQuery(queryBlogPosts)
    return (
        <ul className={styles.collectionList}>
            {feed.allMdx.nodes.map((item: {
                frontmatter: PostMetadata
                }) =>
                <li>
                    <CollectionItem
                        title={item.frontmatter.title}
                        description={item.frontmatter.description}
                        author={item.frontmatter.author}
                        timestamp={item.frontmatter.timestamp}
                    />
                </li>
            )}
        </ul>
    )
}

export default CollectionList
