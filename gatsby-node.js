const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
            title
          }
          id
        }
      }
    }
  `);

  result.data.allMarkdownRemark.nodes.forEach((node) => {
    createPage({
      path: `${node.frontmatter.slug}`,
      component: path.resolve(`./src/templates/content.tsx`),
      context: {
        id: node.id,
      },
    });
  });
};
