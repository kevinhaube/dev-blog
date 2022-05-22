import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Site Title`,
    siteUrl: `https://haube.me/`
  },
  plugins: [
      "gatsby-plugin-react-helmet",
      "gatsby-plugin-dts-css-modules",
      "gatsby-plugin-mdx",
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          "name": "pages",
          "path": `${__dirname}/posts/`
      },
    //@ts-ignore
    __key: "pages"
  }]
};

export default config;
