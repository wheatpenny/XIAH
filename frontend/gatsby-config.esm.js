export default {
  siteMetadata: {
    title: `XIAH, LLC: Levi Sigworth`,
    siteUrl: 'https://xiah.io',
    description:
      'I build resilient systems. Sometimes software. Sometimes people. Often both.',
    twitter: '@levisigworth',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-gatsby-cloud',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `static/icon.svg`,
      },
    },
  ],
};
