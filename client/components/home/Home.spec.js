import React from 'react';
import { mount } from 'enzyme';
import wait from 'waait';
import { MockedProvider } from 'react-apollo/test-utils';
import Home, { HOMEPAGE_DATA_QUERY } from 'client/components/home/Home';
import { Router } from 'react-router-dom';
import history from 'client/utils/history';

const dummyHeading = 'The cow says, "mooo"';
const dummySubHeading = 'The sheep says, "baaah"';
const dummyHeroImage = {
  fullRes: '//this.is.a.url',
  halfRes: '//this.is.another.url',
};
const graphqlMocks = [
  {
    request: { query: HOMEPAGE_DATA_QUERY },
    result: {
      data: {
        homepage: {
          heading: dummyHeading,
          subheading: dummySubHeading,
          __typename: 'homepage',
          heroImage: {
            ...dummyHeroImage,
            __typename: 'heroImage',
          },
        },
      },
    },
  },
];

history.push = jest.fn();

const renderComponent = () => {
  history.push.mockClear();
  const fixture = mount(
    <Router history={history}>
      <MockedProvider mocks={graphqlMocks}>
        <Home />
      </MockedProvider>
    </Router>,
  );

  return { fixture };
};

describe('<Home />', () => {
  it('should render out Homepage content correctly from graphql query', async () => {
    const { fixture } = renderComponent();

    await wait(30);
    fixture.update();

    console.log('!!!!!!!!!!!!', fixture.find('[data-test-reference="image-srcset"]'));
    expect(fixture.find('[data-test-reference="heading"]').text()).toBe(dummyHeading);
    expect(fixture.find('[data-test-reference="sub-heading"]').text()).toContain(dummySubHeading);
  });
});
