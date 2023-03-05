
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://api-sa-east-1.hygraph.com/v2/clehxlq7c2iud01upb4227mwd/master",
  documents: "src/**/*.graphql",
  generates: {
    "src/gql/": {
      preset: "client",
      plugins: []
    }
  }
};

export default config;
