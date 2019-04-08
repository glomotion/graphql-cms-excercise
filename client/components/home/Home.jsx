import React from 'react';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';

import { faqsUrl } from 'client/utils/page-urls';

import styles from 'client/components/home/home.module.scss';

import gql from 'graphql-tag';

const Home = () => (
  <Query
    query={gql`
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
    `}
  >
    {({ loading, error, data: { homepage } }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return (
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
            <h1 className={styles.homepage__caption__heading}>{homepage.heading}</h1>
            <h4 className={styles.homepage__caption__subheading}>{homepage.subheading}</h4>

            <Link to={faqsUrl()} className={styles.homepage__caption__subheading}>
              Learn more
            </Link>
          </div>
        </div>
      );
    }}
  </Query>
);

export default Home;
