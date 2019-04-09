import React from 'react';
import { mount } from 'enzyme';
import wait from 'waait';
import { MockedProvider } from 'react-apollo/test-utils';
// import Faq, { FAQ_DATA_QUERY } from 'client/components/faqs/Faq';

// test('Mounted Cat', async () => {
//   const mocks = [
//     {
//       request: { query: FAQ_DATA_QUERY },
//       result: {
//         data: {
//           faq: {
//             title: 'faq title in here!',
//             body: 'faq body content in here!',
//           },
//         },
//       },
//     },
//   ];
//
//   const wrapper = mount(
//     <MockedProvider mocks={mocks}>
//       <Faq />
//     </MockedProvider>,
//   );
//
//   await wait(0); // Wait a tick to get past the loading state
//   console.log(wrapper.text());
// });
