import React from 'react';
import { Query } from 'react-apollo';
import ReactMarkdown from 'react-markdown/with-html';

import { faqsUrl } from 'client/utils/page-urls';

import gql from 'graphql-tag';

const FAQ_DATA = gql`
  query Faq($id: Int!) {
    faq(id: $id) {
      title
      body
    }
  }
`;

const Faq = ({ id }) => (
  <Query variables={{ id }} query={FAQ_DATA}>
    {({ loading, error, data: { faq } }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return (
        <div>
          <h4>{faq.title}</h4>
          <ReactMarkdown source={faq.body} escapeHtml={false} />
        </div>
      );
    }}
  </Query>
);

export default Faq;
