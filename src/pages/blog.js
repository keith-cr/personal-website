import React from 'react';
import { Link, graphql } from 'gatsby';

import SEO from '../components/seo';
import Footer from '../components/footer';
import NavBar from '../components/navbar';

const BlogPage = ({data}) => {
  const posts = data.allMdx.edges;

  return (
    <>
      <SEO
        title="Blog"
        keywords={['blog', 'developer', 'keith', 'condray', 'raderstorf']}
        description="The personal website and blog of Keith Condray-Raderstorf."
      />
      <NavBar active="blog" />
      <div className="section pb-0">
        <div className="container is-max-desktop">
          <h1 className="title is-1">Blog Posts</h1>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug;
            return (
              <div key={node.fields.slug} className="mb-4">
                <h3 className="title is-3 mb-0">
                  <Link style={{ boxShadow: 'none' }} to={`/blog${node.fields.slug}`}>
                    {title}
                  </Link>
                </h3>
                <small>{node.frontmatter.date} &middot; {node.fields.readingTime.text}</small>
                <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        menuLinks {
          name
          link
        }
        social {
          twitter,
          github,
          linkedin,
          email
        }
      }
    }
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: {eq: true} } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 360)
          fields {
            slug
            readingTime {
              text
            }
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`;