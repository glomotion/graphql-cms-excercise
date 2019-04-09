import React, { Component, useState } from 'react';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown/with-html';
import gql from 'graphql-tag';
import classNames from 'classnames';

import HandleStatus from 'client/components/transactional-status/HandleStatus';
import Faq from 'client/components/faqs/Faq';
import styles from 'client/components/faqs/faqs.module.scss';
import { faqsUrl } from 'client/utils/page-urls';

const Faqs = ({ faqs }) => {
  const [currentFaqIndex, setCurrentFaqIndex] = useState(0);
  return (
    <div className={styles.faqsContainer}>
      <h1 className={styles.faqsContainer__heading}>Some frequently asked questions</h1>

      <div className={styles.faqsContainer__columnLayout}>
        <div className={styles.faqsContainer__columnLayout__body}>
          <Faq id={currentFaqIndex} />
        </div>

        <aside className={styles.sidebar}>
          {faqs.map(({ title }, index) => (
            <a
              key={index}
              onClick={() => setCurrentFaqIndex(index)}
              className={classNames(styles.sidebar__item, {
                [styles['sidebar__item--active']]: currentFaqIndex === index,
              })}
            >
              {title}
            </a>
          ))}
        </aside>
      </div>
    </div>
  );
};

const FAQS_DATA = gql`
  {
    faqs {
      title
    }
  }
`;

const EnhancedFaqs = () => (
  <Query query={FAQS_DATA}>
    {({ loading, error, data: { faqs } }) =>
      loading || error ? <HandleStatus {...{ loading, error }} /> : <Faqs faqs={faqs} />
    }
  </Query>
);

export default EnhancedFaqs;
