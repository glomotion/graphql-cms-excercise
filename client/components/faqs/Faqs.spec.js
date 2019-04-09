import React from 'react';
import { mount } from 'enzyme';
import wait from 'waait';
import { MockedProvider } from 'react-apollo/test-utils';
import Faqs, { FAQS_DATA_QUERY } from 'client/components/faqs/Faqs';
import { FAQ_DATA_QUERY } from 'client/components/faqs/Faq';

describe('<Faqs />', () => {
  it('should render correctly', async () => {
    const mocks = [
      {
        request: { query: FAQS_DATA_QUERY },
        result: {
          data: {
            faqs: [
              { title: 'moo cow', __typename: 'faq' },
              { title: 'woof dog', __typename: 'faq' },
            ],
          },
        },
      },
      {
        request: { query: FAQ_DATA_QUERY, variables: { id: 0 } },
        result: {
          data: {
            faq: {
              title: 'faq title in here!',
              body: 'faq body content in here!',
              __typename: 'faq',
            },
          },
        },
      },
    ];

    const fixture = mount(
      <MockedProvider mocks={mocks}>
        <Faqs />
      </MockedProvider>,
    );

    await wait(1);
    fixture.update();

    console.log(fixture.debug());

    expect(fixture.find('[data-test-reference="faq-title"]').text()).toBe('faq title in here!');
    expect(fixture.find('[data-test-reference="faq-body"]').text()).toBe('faq body content in here!');
  });
});
