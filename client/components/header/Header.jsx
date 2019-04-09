import React, { useState } from 'react';
import classNames from 'classnames';
import Icon from 'client/components/icon/Icon';
import history from 'client/utils/history';

import { homeUrl, faqsUrl } from 'client/utils/page-urls';

import styles from 'client/components/header/header.module.mscss';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const gotoThenCloseLink = (link) => {
    history.push(link);
    setMenuOpen(false);
  };

  return (
    <header
      className={classNames(styles.header, {
        [styles['header--menuOpen']]: menuOpen,
      })}
    >
      <a
        onClick={() => gotoThenCloseLink(homeUrl())}
        className={styles.header__logo}
        data-test-reference="header-logo"
      >
        <img
          className={styles.header__logo__image}
          src="client/static/images/logo--qantas.svg"
          alt="Qantas Logo"
        />
      </a>

      <nav
        className={classNames(styles.nav, {
          [styles['nav--menuOpen']]: menuOpen,
        })}
        data-test-reference="nav"
      >
        <a
          className={styles.nav__navItem}
          onClick={() => gotoThenCloseLink(homeUrl())}
        >
          <span className={styles.nav__navItem__inner}>Home</span>
        </a>
        <a
          className={styles.nav__navItem}
          data-test-reference="faqs-link"
          onClick={() => gotoThenCloseLink(faqsUrl())}
        >
          <span className={styles.nav__navItem__inner}>Faqs</span>
        </a>
      </nav>

      <button
        className={styles.header__menuButton}
        onClick={() => setMenuOpen(!menuOpen)}
        data-test-reference="menu-button"
      >
        <Icon type="menu" />
      </button>
    </header>
  );
};

export default Header;
