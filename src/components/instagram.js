import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Image from 'gatsby-image';

const Instagram = () => (
  <StaticQuery
    query={graphql`
    query {
      allInstaNode {
        edges {
          node {
            id
            likes
            comments
            mediaType
            preview
            original
            timestamp
            caption
            localFile {
              childImageSharp {
                fixed(width: 150, height: 150) {
                  ...GatsbyImageSharpFixed
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
          data.allInstaNode.edges.map((item, i) => {
            return (
              item.node.localFile
                ? <Image
                  fixed={item.node.localFile.childImageSharp.fixed}
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