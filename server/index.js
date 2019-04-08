import express from 'express';
import express_graphql from 'express-graphql';
import { buildSchema } from 'graphql';
import fs from 'fs';
import path from 'path';
import cors from 'cors';

// GraphQL schema
var schema = buildSchema(`
  type Homepage {
    heading: String
    subheading: String
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

const loadCmsData = ({ selector }) => new Promise((res,rej) => {
  fs.readFile(path.join(__dirname, '/static/data/cms-data.json'), 'utf8', (err, data) => {
    if (err) throw err;
    res(JSON.parse(data)[selector]);
  });
});

// loadCmsData({ selector: 'homepage' }).then(data => console.log(data));

const getHomepage = () => loadCmsData({ selector: 'homepage' });
const getFaqs = () => loadCmsData({ selector: 'faqs' });
const getFaq = ({ id }) => loadCmsData({ selector: 'faqs' }).then(faqs => faqs[id]);

const root = {
  test: () => 'testing out that shiz!',
  homepage: getHomepage,
  faq: getFaq,
  faqs: getFaqs,
};

// Create an express server and a GraphQL endpoint
var app = express();
app.use(cors());
app.use('/graphql', express_graphql({
  schema: schema,
  rootValue: root,
  graphiql: true
}));

app.listen(4000, () => console.log('Express GraphQL Server Now Running On localhost:4000/graphql'));
