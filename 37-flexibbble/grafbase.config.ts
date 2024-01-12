import { config, connector, graph } from '@grafbase/sdk';

const g = graph.Standalone();

const mongodb = connector.MongoDB('MongoDB', {
  url: 'https://data.mongodb-api.com/app/data-asdf/endpoint/data/v1',
  apiKey: 'SECRET',
  dataSource: 'myDatasource',
  database: 'blogPlatform',
});

g.datasource(mongodb);

// const address = g.type('Address', {
//   street: g.string().mapped('street_name'),
// });

const User = mongodb.model('User', {
  name: g.string().length({ min: 2, max: 100 }),
  email: g.string().unique(),
  avatarUrl: g.url(),
  description: g.string().length({ min: 2, max: 1000 }).optional(),
  githubUrl: g.url().optional(),
  linkedinUrl: g.url().optional(), 
})

const Project = mongodb.model('Project', {
  title: g.string().length({ min: 3 }),
  description: g.string(),
  image: g.url(),
  liveSiteUrl: g.url(),
  githubUrl: g.url(),
  category: g.string(),
  createdById: g.string(),
});

export default config({
  graph: g,
});