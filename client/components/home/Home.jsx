import React from 'react';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';

import { faqsUrl } from 'client/utils/page-urls';
import HandleStatus from 'client/components/graphql-transactional/HandleStatus';

import styles from 'client/components/home/home.module.scss';

import gql from 'graphql-tag';

const HOMEPAGE_DATA = gql`
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
  <Query query={HOMEPAGE_DATA}>
    {({ loading, error, data: { homepage } }) =>
      loading || error ? (
        <HandleStatus {...{ loading, error }} />
      ) : (
        <div className={styles.homepage}>
          <img
            srcSet={`${homepage.heroImage.halfRes} 600w,
                ${homepage.heroImage.fullRes} 1200w`}
            sizes={'(max-width: 660px) 600px, 1200px'}
            src={homepage.heroImage.halfRes}
            className={styles.homepage__bgImage}
            alt={`Photograph of ${name}`}
          />

          <div className={styles.homepage__caption}>
            <div className={styles.homepage__caption__inner}>
              <h1 className={styles.homepage__caption__heading}>{homepage.heading}</h1>
              <h4 className={styles.homepage__caption__subheading}>
                {homepage.subheading}.{' '}
                <Link to={faqsUrl()} className={styles.homepage__caption__link}>
                  Learn more
                </Link>
              </h4>
            </div>
          </div>
        </div>
      )
    }
  </Query>
);

export default Home;
