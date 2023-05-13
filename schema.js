import pkg from 'nexus';
const { makeSchema, declarativeWrappingPlugin } = pkg;
import path from 'path';
import * as modelTypes from './index.js';

const schema = makeSchema({
  types: modelTypes,
  plugins: [declarativeWrappingPlugin()],
  shouldGenerateArtifacts: true,
  outputs: {
    schema: path.resolve('./') + '/generated/schema.graphql',
    typegen: path.resolve('./') + '/generated/nexus.ts',
  },
  sourceTypes: {
    modules: [],
  },
});

export default schema;
