import React, { Fragment } from 'react';
import { Query } from 'react-apollo';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown/with-html';
import gql from 'graphql-tag';

import HandleStatus from 'client/components/transactional-status/HandleStatus';
import styles from 'client/components/faqs/faqs.module.scss';

export const FAQ_DATA_QUERY = gql`
  query Faq($id: Int!) {
    faq(id: $id) {
      title
      body
    }
  }
`;

const Faq = ({ id }) => (
  <Query variables={{ id }} query={FAQ_DATA_QUERY}>
    {({ loading, error, data }) => (loading || error
      ? (
        <HandleStatus {...{ loading, error }} />
      ) : (
        <Fragment>
          <h2
            className={styles.faq__title}
            data-test-reference="faq-title"
          >{data.faq.title}</h2>
          <div
            className={styles.faq__body}
            data-test-reference="faq-body"
          >
            <ReactMarkdown source={data.faq.body} escapeHtml={false} />
          </div>
        </Fragment>
      ))}
  </Query>
);

Faq.propTypes = {
  id: PropTypes.number,
};


export default Faq;
