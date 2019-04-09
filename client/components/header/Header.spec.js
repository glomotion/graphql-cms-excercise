import React from 'react';
import { mount } from 'enzyme';
import { Router } from 'react-router-dom';
import history from 'client/utils/history';

import Header from 'client/components/header/Header';

history.push = jest.fn();

const renderComponent = () => {
  history.push.mockClear();
  const fixture = mount((
    <Router history={history}>
      <Header />
    </Router>
  ));
  return { fixture, history };
};

describe('<Header />', () => {
  it('should link to homepage when the user clicks the logo', () => {
    const { fixture } = renderComponent();

    expect(history.push.mock.calls.length).toBe(0);
    fixture.find('[data-test-reference="header-logo"]').simulate('click');

    expect(history.push.mock.calls.length).toBe(1);
    expect(history.push.mock.calls[0]).toContain('/');
  });

  it('should open the menu when the menu button is clicked', () => {
    const { fixture } = renderComponent();

    expect(fixture.find('[data-test-reference="nav"]').prop('className')).not.toContain('nav--menuOpen');

    fixture.find('[data-test-reference="menu-button"]').simulate('click');

    expect(fixture.find('[data-test-reference="nav"]').prop('className')).toContain('nav--menuOpen');
  });

  it('should close the menu and redirect to a new page, when a menu item is clicked', () => {
    const { fixture } = renderComponent();

    expect(history.push.mock.calls.length).toBe(0);
    expect(fixture.find('[data-test-reference="nav"]').prop('className')).not.toContain('nav--menuOpen');

    fixture.find('[data-test-reference="menu-button"]').simulate('click');

    expect(fixture.find('[data-test-reference="nav"]').prop('className')).toContain('nav--menuOpen');

    fixture.find('[data-test-reference="faqs-link"]').simulate('click');

    expect(fixture.find('[data-test-reference="nav"]').prop('className')).not.toContain('nav--menuOpen');

    expect(history.push.mock.calls.length).toBe(1);
    expect(history.push.mock.calls[0]).toContain('/faqs');
  });
});
