import React from 'react';
import { mount } from 'enzyme';
import wait from 'waait';
import { MockedProvider } from 'react-apollo/test-utils';
import Faqs, { FAQS_DATA_QUERY } from 'client/components/faqs/Faqs';
import { FAQ_DATA_QUERY } from 'client/components/faqs/Faq';

const faqs = [
  {
    title: 'How Now Brown Cow?',
    body: 'The cow is indeed very brown and now.',
    __typename: 'faq',
  },
  {
    title: 'The dog can say woof',
    body: 'And also, pants and howls',
    __typename: 'faq',
  },
];

const graphqlMocks = [
  {
    request: { query: FAQS_DATA_QUERY },
    result: {
      data: {
        faqs: [
          { ...faqs[0] },
          { ...faqs[1] },
        ],
      },
    },
  },
  {
    request: { query: FAQ_DATA_QUERY, variables: { id: 0 } },
    result: {
      data: {
        faq: { ...faqs[0] },
      },
    },
  },
  {
    request: { query: FAQ_DATA_QUERY, variables: { id: 1 } },
    result: {
      data: {
        faq: { ...faqs[1] },
      },
    },
  },
];

const renderComponent = () => {
  const fixture = mount(
    <MockedProvider mocks={graphqlMocks}>
      <Faqs />
    </MockedProvider>,
  );

  return { fixture };
};

describe('<Faqs />', () => {
  it('should render out FAQ content correctly from graphql query', async () => {
    const { fixture } = renderComponent();

    await wait(30);
    fixture.update();

    expect(fixture.find('[data-test-reference="faq-title"]').text()).toBe(faqs[0].title);
    expect(fixture.find('[data-test-reference="faq-body"]').text()).toBe(faqs[0].body);
  });

  it('should render a list of faq titles as buttons', async () => {
    const { fixture } = renderComponent();

    await wait(30);
    fixture.update();

    const sidebar = fixture.find('[data-test-reference="faqs-sidebar"]');
    const buttons = sidebar.find('a');
    expect(buttons.get(0).props.children).toBe(faqs[0].title);
    expect(buttons.get(1).props.children).toBe(faqs[1].title);
  });

  it('should render new FAQ content, when a sidebar faq item is clicked', async () => {
    const { fixture } = renderComponent();

    await wait(30);
    fixture.update();

    const sidebar = fixture.find('[data-test-reference="faqs-sidebar"]');
    sidebar.find('a').at(1).simulate('click');

    await wait(30);
    fixture.update();

    expect(fixture.find('[data-test-reference="faq-title"]').text()).toBe(faqs[1].title);
    expect(fixture.find('[data-test-reference="faq-body"]').text()).toBe(faqs[1].body);
  });
});
