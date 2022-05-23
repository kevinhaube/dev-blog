
export type AllMdx<T> = { allMdx: { nodes: T[] }}
export type Mdx<T> = { mdx: T }
export type FrontMatter<T> = { frontmatter: T }

/* Info available at the top of every mdx blog
* post. */
export interface PostMetadata {
    title: string,
    description: string,
    author: string,
    timestamp: string,
    featured: boolean
}

export interface PostData {
    frontmatter: PostMetadata;
    body: string
}

export interface BlogIndexQuery {
    frontmatter: PostMetadata,
    slug: string
}
export type BlogIndexQueryResponse = AllMdx<BlogIndexQuery>
