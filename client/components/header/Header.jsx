import React, { Component, useState } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Icon from 'client/components/icon/Icon';
import history from 'client/utils/history';

import { homeUrl, faqsUrl } from 'client/utils/page-urls';

import styles from 'client/components/header/header.module.scss';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const gotoThenCloseLink = link => {
    history.push(link);
    setMenuOpen(false);
  };

  return (
    <header
      className={classNames(styles.header, {
        [styles['header--menuOpen']]: menuOpen,
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
          [styles['nav--menuOpen']]: menuOpen,
        })}
      >
        <a className={styles.nav__navItem} onClick={() => gotoThenCloseLink(homeUrl())}>
          <span className={styles.nav__navItem__inner}>Home</span>
        </a>
        <a className={styles.nav__navItem} onClick={() => gotoThenCloseLink(faqsUrl())}>
          <span className={styles.nav__navItem__inner}>Faqs</span>
        </a>
      </nav>

      <button className={styles.header__menuButton} onClick={() => setMenuOpen(!menuOpen)}>
        <Icon type="menu" />
      </button>
    </header>
  );
};

export default Header;
