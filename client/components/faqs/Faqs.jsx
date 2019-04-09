import React, { useState } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import HandleStatus from 'client/components/transactional-status/HandleStatus';
import Faq from 'client/components/faqs/Faq';
import styles from 'client/components/faqs/faqs.module.scss';

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

Faqs.propTypes = {
  faqs: PropTypes.array,
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
