// @flow
import React from 'react';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';
import gql from 'graphql-tag';

import { faqsUrl } from 'client/utils/page-urls';
import HandleStatus from 'client/components/transactional-status/HandleStatus';
import styles from 'client/components/home/home.module.mscss';

export const HOMEPAGE_DATA_QUERY = gql`
  {
    homepage {
      heading
      subheading
      heroImage {
        fullRes
        halfRes
      }
    }
  }
`;

const Home = () => (
  <Query query={HOMEPAGE_DATA_QUERY}>
    {({
      loading,
      error,
      data,
    }: {
      loading: boolean,
      error: boolean,
      data: Object,
    }) => (loading || error
      ? <HandleStatus {...{ loading, error }} />
      : (
        <div className={styles.homepage}>
          <img
            srcSet={`${data.homepage.heroImage.halfRes} 600w,
                ${data.homepage.heroImage.fullRes} 1200w`}
            sizes={'(max-width: 660px) 600px, 1200px'}
            src={data.homepage.heroImage.halfRes}
            className={styles.homepage__bgImage}
            alt="Photograph of a Car"
            data-test-reference="image-srcset"
          />

          <div className={styles.homepage__caption}>
            <div className={styles.homepage__caption__inner}>
              <h1
                className={styles.homepage__caption__heading}
                data-test-reference="heading"
              >
                {data.homepage.heading}
              </h1>
              <h4
                className={styles.homepage__caption__subheading}
                data-test-reference="sub-heading"
              >
                {data.homepage.subheading}.{' '}
                <Link
                  to={faqsUrl()}
                  className={styles.homepage__caption__link}
                >
                  Learn more
                </Link>
              </h4>
            </div>
          </div>
        </div>
      ))}
  </Query>
);

export default Home;
