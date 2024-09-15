import type { CodegenConfig } from '@graphql-codegen/cli';

export default {
  overwrite: true,
  generates: {
    './src/generated/': {
      // This references the exposed graphql schema at the /app/graphql/route.ts api route.
      // This route is exposed at http://localhost:3000/graphql.
      // The app needs to be running in order to run the graphql codegen.
      schema: ['http://localhost:3000/graphql'],
      documents: ['./src/app/**/*.{ts,tsx}', './src/services/graphql/*.ts'],
      preset: 'client',
      config: {
        arrayInputCoercion: false,
        enumsAsTypes: true,
        dedupeFragments: true,
      },
      presetConfig: {
        fragmentMasking: false,
      },
    },
  },
} satisfies CodegenConfig;