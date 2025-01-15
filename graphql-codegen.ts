import type { CodegenConfig } from "@graphql-codegen/cli";

export default {
  overwrite: true,
  generates: {
    "src/generated/": {
      // @note - We don't need to use plugins when using the client preset
      // plugins: ["typescript"],
      schema: ["http://localhost:3000/graphql"],
      documents: ["./src/queries/**/*.ts"],
      preset: "client",
      config: {
        arrayInputCoercion: false,
        enumsAsTypes: true,
        dedupeFragments: true,
      },
      presetConfig: {
        fragmentMasking: false,
      },
      hooks: { afterOneFileWrite: ["prettier --write"] },
    },
  },
} satisfies CodegenConfig;
