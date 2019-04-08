import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown/with-html';
import gql from 'graphql-tag';
import classNames from 'classnames';

import Faq from 'client/components/faqs/Faq';
import styles from 'client/components/faqs/faqs.module.scss';
import { faqsUrl } from 'client/utils/page-urls';

const FAQS_DATA = gql`
  {
    faqs {
      title
    }
  }
`;

class Faqs extends Component {
  state = {
    currentFaq: 0,
  };

  componentDidMount() {
    console.log('faqs component did mount!');
  }

  render() {
    return (
      <Query query={FAQS_DATA}>
        {({ loading, error, data: { faqs } }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :(</p>;

          return (
            <div className={styles.faqsContainer}>
              <h1 className={styles.faqsContainer__heading}>Some frequently asked questions</h1>

              <div className={styles.faqsContainer__columnLayout}>
                <div className={styles.faqsContainer__columnLayout__body}>
                  <Faq id={this.state.currentFaq} />
                </div>

                <aside className={styles.sidebar}>
                  {faqs.map(({ title }, index) => (
                    <a
                      key={index}
                      onClick={() => this.setState({ currentFaq: index })}
                      className={classNames(styles.sidebar__item, {
                        [styles['sidebar__item--active']]: this.state.currentFaq === index,
                      })}
                    >
                      {title}
                    </a>
                  ))}
                </aside>
              </div>
            </div>
          );
        }}
      </Query>
    );
  }
}

export default Faqs;
