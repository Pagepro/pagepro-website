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
                fixed(quality: 80, width: 225, height: 228) {
                  ...GatsbyImageSharpFixed_noBase64
                }
              }
            }
          }
        }
      }
    }
  `}
    render={(data) => (
      <section className="l-sec">
        <div className="l-row">
          <div className="row">
            <div className="l-sec__box gr-12 no-gutter js__instagram-feed">
              <ul className="c-mini-gallery-list" id="instagram-photos">
                <li className="c-mini-gallery-list__item c-mini-gallery-list__item--last">
                  <div className="c-mini-gallery">
                    <div className="c-mini-gallery__inner u-bg-1 u-paint-4 g-gutter-3 g-gutter-2@desktop-small g-gutter-1@mobile-medium g-gutter-2@mobile-small g-gutter-1@mobile-mini">
                      <div className="c-mini-gallery__head">
                        <h3 className="t-style-fpn-s-r-u">Get to know us better</h3>
                      </div>
                      <div className="c-mini-gallery__actions g-gutter-top-1">
                        <a className="c-cta-link s-btn-style-4 u-paint-4" href="https://www.instagram.com/pagepro_/" target="_blank">
                          <span className="c-label">Follow us</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                {data.allInstaNode.edges.map((item, i) => {
                  return (

                    item.node.localFile
                      ? <li className="c-mini-gallery-list__item" key={i}>
                        <div className="c-mini-gallery">
                          <a className="c-mini-gallery__inner" href="#" target="_blank">
                            <div className="c-mini-gallery__ico">
                              <span className="o-icon-wrapper u-bg-1 u-paint-4">
                                <span className="o-icon o-icon--instagram"></span>
                              </span>
                            </div>
                            <div className="c-mini-gallery__content">
                              <figure className="o-img-wrapper">
                                <Image
                                  fixed={item.node.localFile.childImageSharp.fixed}
                                  key={i}
                                />
                              </figure>
                            </div>
                          </a>
                        </div>
                      </li> : null
                  );
                })
                }
              </ul>
            </div>
          </div>
        </div>
      </section>
    )
    }
  />
);

export default Instagram;