import type { CodegenConfig } from '@graphql-codegen/cli';

export default {
  overwrite: true,
  generates: {
    './src/generated/': {
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
      hooks: { afterOneFileWrite: ['prettier --write'] }
    },
  },
} satisfies CodegenConfig;