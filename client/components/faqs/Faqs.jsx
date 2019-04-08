import React from 'react';
import { Query } from "react-apollo";
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import htmlParser from 'react-markdown/plugins/html-parser';

// See https://github.com/aknuds1/html-to-react#with-custom-processing-instructions
// for more info on the processing instructions
const parseHtml = htmlParser({
  isValidNode: node => {
    console.log('isvalid node!', node);
    node.type !== 'script'
  },
  processingInstructions: [/* ... */],
})

import { faqsUrl } from 'client/utils/page-urls';

import gql from "graphql-tag";

const Faq = ({ title, body }) => (
    <div>
      <h4>{title}</h4>
      <ReactMarkdown
        source={body}
        escapeHtml={false}
      />
    </div>
);

const Faqs = () => (
  <Query
    query={gql`
      {
        faqs {
          title
          body
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return (
        <div>
          <h1>Some frequently asked questions</h1>

          {data.faqs.map(({ title, body }, index) => <Faq key={index} {...{ title, body }} />)}
        </div>
      );
    }}
  </Query>
);

export default Faqs;
