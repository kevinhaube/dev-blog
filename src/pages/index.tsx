import * as React from "react"
import PageContainer from "../components/PageContainer/PageContainer";
import FeaturedRotator from "../components/FeaturedRotator/FeaturedRotator";
import CollectionList from "../components/CollectionList/CollectionList";
import {graphql, PageProps} from "gatsby";

export type FrontMatter<T> = { frontmatter: T }
export interface PostMetadata {
    title: string,
    description: string,
    author: string,
    timestamp: string,
    featured: boolean
}
interface BlogIndexQueryResponse {
    allMdx: {
        nodes: FrontMatter<PostMetadata>[]
    }
}

const BlogIndex = ({ data }: PageProps<BlogIndexQueryResponse>) => {
    const featured = data.allMdx.nodes.filter(node => node.frontmatter.featured)
    return (
        <PageContainer>
            <FeaturedRotator rotation={featured} />
            <CollectionList feed={data.allMdx.nodes} />
        </PageContainer>
    )
}

export const query = graphql`
    query PostMetadataQuery {
        allMdx {
            nodes {
                frontmatter {
                    title
                    author
                    description
                    timestamp
                    featured
               }
            }   
       }
    }
`

export default BlogIndex
