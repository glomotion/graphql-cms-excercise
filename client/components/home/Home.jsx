import React from 'react';
import { Query } from "react-apollo";
import { Link } from 'react-router-dom';

import { faqsUrl } from 'client/utils/page-urls';

import gql from "graphql-tag";

const Home = () => (
  <Query
    query={gql`
      {
        homepage {
          heading
          subheading
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return (
        <div>
          <h1>{data.homepage.heading}</h1>
          <h2>{data.homepage.subheading}</h2>

          <Link to={faqsUrl()}>Learn more</Link>
        </div>
      );
    }}
  </Query>
);

export default Home;
