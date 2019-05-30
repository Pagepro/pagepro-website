import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Image from 'gatsby-image';

const Instagram = () => (
  <StaticQuery
    query={graphql`
      query InstagramPosts {
        allInstagramContent {
          edges {
            node {
              link
              localImage {
                childImageSharp {
                  fixed(height: 150, width: 150 quality: 100) {
                    ...GatsbyImageSharpFixed_withWebp_tracedSVG
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => (
      <div>
        {
          data.allInstagramContent.edges.slice(0, 10).map((item, i) => {
            return (
              item.node.localImage
                ? <Image
                  fixed={item.node.localImage.childImageSharp.fixed}
                  key={i}
                /> : null
            );
          })
        }
      </div>
    )}
  />
);

export default Instagram;