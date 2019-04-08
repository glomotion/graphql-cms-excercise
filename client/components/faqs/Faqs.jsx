import React, { Component } from 'react';
import { Query } from "react-apollo";
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown/with-html';

import Faq from 'client/components/faqs/Faq';

import { faqsUrl } from 'client/utils/page-urls';

import gql from "graphql-tag";

class Faqs extends Component {
  state = {
    currentFaq: 0,
  };

  render() {
    return (
      <Query
        query={gql`{
          faqs {
            title
          }
        }`}
      >
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :(</p>;

          return (
            <div>
              <h1>Some frequently asked questions</h1>

              <Faq id={this.state.currentFaq} />

              <aside>
                {data.faqs.map(({ title }, index) => (
                  <a
                    key={index}
                    onClick={() => this.setState({ currentFaq: index })}
                  >
                    {title}
                  </a>
                ))}
              </aside>
            </div>
          );
        }}
      </Query>
    );
  }
}

export default Faqs;
