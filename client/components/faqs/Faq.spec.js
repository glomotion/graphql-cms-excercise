import React from 'react';
import { mount } from 'enzyme';
import wait from 'waait';
import { MockedProvider } from 'react-apollo/test-utils';
import Faq, { FAQ_DATA_QUERY } from 'client/components/faqs/Faq';

describe('<Faq />', () => {
  it('should render a FAQ content correctly from graphql query', async () => {
    const mocks = [
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
        <Faq id={0} />
      </MockedProvider>,
    );

    await wait(0);
    fixture.update();

    expect(fixture.find('[data-test-reference="faq-title"]').text()).toBe('faq title in here!');
    expect(fixture.find('[data-test-reference="faq-body"]').text()).toBe('faq body content in here!');
  });
});
