import * as React from "react"
import PageContainer from "../components/PageContainer/PageContainer";
import {graphql, useStaticQuery} from "gatsby";
import {Mdx, PostData} from "../data-types/posts";
import {MDXRenderer} from "gatsby-plugin-mdx";

const PostPage = () => {
    const { mdx } = useStaticQuery<Mdx<PostData>>(graphql`
        query ($slug: String) {
          mdx(slug: {eq: $slug}) {
            body
            frontmatter {
              author
              featured
              timestamp
              title
              featured
            }
          }
        }
    `)
    return (
        <PageContainer>
            <MDXRenderer>
                {mdx.body}
            </MDXRenderer>
        </PageContainer>
    )
}

export default PostPage
