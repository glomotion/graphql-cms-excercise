// @flow
import React, { useState } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import classNames from 'classnames';

import HandleStatus from 'client/components/transactional-status/HandleStatus';
import Faq from 'client/components/faqs/Faq';
import styles from 'client/components/faqs/faqs.module.mscss';

const Faqs = ({ faqs }: { faqs: Array<Object> }) => {
  const [currentFaqIndex, setCurrentFaqIndex] = useState(0);
  return (
    <div className={styles.faqsContainer}>
      <h1 className={styles.faqsContainer__heading}>Some frequently asked questions</h1>

      <div className={styles.faqsContainer__columnLayout}>
        <div className={styles.faqsContainer__columnLayout__body}>
          <Faq id={currentFaqIndex} />
        </div>

        <aside
          className={styles.sidebar}
          data-test-reference="faqs-sidebar"
        >
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

export const FAQS_DATA_QUERY = gql`
  {
    faqs {
      title
    }
  }
`;

const EnhancedFaqs = () => (
  <Query query={FAQS_DATA_QUERY}>
    {({ loading, error, data: { faqs } }) => (loading || error
      ? <HandleStatus {...{ loading, error }} />
      : <Faqs faqs={faqs} />
    )}
  </Query>
);

export default EnhancedFaqs;
