import React from 'react';
import { Link, graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { StaticImage } from 'gatsby-plugin-image';

import Footer from '../components/footer';
import NavBar from '../components/navbar';
import SEO from '../components/seo';

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx;
    const { previous, next, readingTime } = this.props.pageContext;

    return (
      <>
        <SEO title={post.frontmatter.title} description={post.excerpt} />
        <NavBar />
        <div className="section pb-0">
          <div className="container is-max-desktop">
            <h1 className="title is-1">{post.frontmatter.title}</h1>
            <p className="subtitle">
              {post.frontmatter.date}  &middot; {readingTime.text}
            </p>
            <div className="content">
              <MDXRenderer>{post.body}</MDXRenderer>
            </div>
            <hr/>
            <div className="card">
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-60x60">
                      <StaticImage
                        src="../images/profile-pic.jpg"
                        alt="Keith C-R"
                        width={60}
                        height={60}
                        layout="fixed"
                        imgStyle={{
                          borderRadius: '50%',
                        }}
                      />
                    </figure>
                  </div>
                  <div className="media-content">
                    <p className="title is-4">Keith C-R</p>
                    <p className="subtitle is-6">Written by <strong>Keith C-R</strong>, an entrepreneur, software developer and student currently studying at RHIT.</p>
                  </div>
                </div>
              </div>
            </div>


            <div className="is-flex is-flex-wrap-wrap is-justify-content-space-between my-5">
              <span>
                {previous && (
                  <Link to={`/blog${previous.fields.slug}`} rel="prev">
                    <button className="button is-primary is-light">← {previous.frontmatter.title}</button>
                  </Link>
                )}
              </span>
              <span>
                {next && (
                  <Link to={`/blog${next.fields.slug}`} rel="next">
                    <button className="button is-primary is-light">{next.frontmatter.title} →</button>
                  </Link>
                )}
              </span>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
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
    mdx(
      fields: { slug: { eq: $slug } }
      frontmatter: { published: {eq: true} }
    ) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
