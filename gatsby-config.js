module.exports = {
  siteMetadata: {
    title: 'Keith Condray-Raderstorf',
    author: 'Keith Condray-Raderstorf',
    description: 'The personal website and blog of Keith Condray-Raderstorf.',
    siteUrl: 'https://keithcr.com/',
    social: {
      twitter: 'keithc_r',
      github: 'keith-cr',
      linkedin: 'keith-cr',
      email: 'keith@kmddigital.com'
    },
    menuLinks: [
      {
        name: 'Home',
        link: '/'
      },
      {
        name: 'About',
        link: '/about'
      }
    ]
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/blog`,
        name: 'blog',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/assets`,
        name: 'assets',
      },
    },
    {
      resolve: 'gatsby-plugin-sass',
    },
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.md', '.mdx'],
        remarkPlugins: [],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-autolink-headers',
          },
          {
            resolve: 'gatsby-remark-external-links',
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              showLineNumbers: true,
            }
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
          },
          {
            resolve: 'gatsby-remark-smartypants',
          },
        ]
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: '#f92300',
        showSpinner: false,
      },
    },
    {
      resolve: 'gatsby-plugin-page-progress',
      options: {
        includePaths: [{ regex: '^/blog' }],
        excludePaths: ['/blog'],
        height: 3,
        prependToBody: false,
        color: '#f92300',
        footerHeight: 300
      },
    },
  ],
};
