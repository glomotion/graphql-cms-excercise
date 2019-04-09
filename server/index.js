import express from 'express';
import express_graphql from 'express-graphql';
import { buildSchema } from 'graphql';
import fs from 'fs';
import path from 'path';
import cors from 'cors';

// GraphQL schema
const schema = buildSchema(`
  type HeroImage {
    fullRes: String
    halfRes: String
  },
  type Homepage {
    heading: String
    subheading: String
    heroImage: HeroImage
  },
  type Faq {
    title: String
    body: String
  },
  type Query {
    homepage: Homepage
    faq(id: Int!): Faq
    faqs: [Faq]
    test: String
  }
`);

export const loadCmsData = ({ selector }) => new Promise((res) => {
  fs.readFile(
    path.join(__dirname, '/static/data/cms-data.json'),
    'utf8',
    (err, data) => {
      if (err) throw err;
      res(JSON.parse(data)[selector]);
    },
  );
});

export const getHomepage = () => loadCmsData({ selector: 'homepage' });
export const getFaqs = () => loadCmsData({ selector: 'faqs' });
export const getFaq = ({ id }) => loadCmsData({ selector: 'faqs' }).then(faqs => faqs[id]);

const root = {
  test: () => 'testing out that shiz!',
  homepage: getHomepage,
  faq: getFaq,
  faqs: getFaqs,
};

const app = express();
app.use(cors());
app.use(
  '/graphql',
  express_graphql({
    schema,
    rootValue: root,
    graphiql: true,
  }),
);

app.listen(4000, () => console.log('Express GraphQL Server Now Running On localhost:4000/graphql'));
