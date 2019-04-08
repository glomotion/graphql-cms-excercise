import React, { Component } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Icon from 'client/components/icon/Icon';

import { homeUrl, faqsUrl } from 'client/utils/page-urls';

import styles from 'client/components/header/header.module.scss';

class Header extends Component {
  state = {
    menuOpen: false,
  };

  render() {
    return (
      <header
        className={classNames(styles.header, {
          [styles['header--menuOpen']]: this.state.menuOpen,
        })}
      >
        <Link to={homeUrl()} className={styles.header__logo}>
          <img
            className={styles.header__logo__image}
            src="client/static/images/logo--qantas.svg"
            alt="Qantas Logo"
          />
        </Link>

        <nav
          className={classNames(styles.nav, {
            [styles['nav--menuOpen']]: this.state.menuOpen,
          })}
        >
          <Link to={homeUrl()} className={styles.nav__navItem}>
            <span className={styles.nav__navItem__inner}>Home</span>
          </Link>
          <Link to={faqsUrl()} className={styles.nav__navItem}>
            <span className={styles.nav__navItem__inner}>Faqs</span>
          </Link>
        </nav>

        <button
          className={styles.header__menuButton}
          onClick={() => this.setState({ menuOpen: !this.state.menuOpen })}
        >
          <Icon type="menu" />
        </button>
      </header>
    );
  }
}

export default Header;
