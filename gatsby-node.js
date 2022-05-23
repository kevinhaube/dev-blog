exports.createPages = async function ({ actions, graphql }) {
    const { data } = await graphql(`
        query PostPages {
            allMdx {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `)
    data.allMdx.edges.forEach(edge => {
        const slug = edge.node.slug
        actions.createPage({
            path: `/post/${slug}`,
            component: require.resolve(`./src/templates/post.tsx`),
            context: { slug: slug },
        })
    })
}