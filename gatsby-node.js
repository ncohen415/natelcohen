const path = require("path")

//CREATE INDIVIDUAL PRODUCT PAGES & WP PAGES
exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const pages = await graphql(`
    query PagesQuery {
      allWpPage {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  //WP Pages
  pages.data.allWpPage.edges.forEach(edge => {
    createPage({
      path: `/${edge.node.slug}`,
      component: path.resolve("./src/templates/wp-page-template.js"),
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
