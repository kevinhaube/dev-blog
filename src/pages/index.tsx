import * as React from "react"
import PageContainer from "../components/PageContainer/PageContainer";
import FeaturedRotator from "../components/FeaturedRotator/FeaturedRotator";
import CollectionList from "../components/CollectionList/CollectionList";
import {graphql, PageProps} from "gatsby";
import {BlogIndexQueryResponse} from "../data-types/posts";

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
               slug
            }   
       }
    }
`

export default BlogIndex
