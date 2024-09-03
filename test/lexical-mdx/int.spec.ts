/* eslint jest/no-conditional-in-test: 0 */
import type {
  BlockFields,
  LexicalRichTextAdapter,
  SanitizedServerEditorConfig,
  SerializedBlockNode,
} from '@payloadcms/richtext-lexical'
import type { RichTextField, SanitizedConfig } from 'payload'
import type { MarkOptional } from 'ts-essentials'

import path from 'path'
import { fileURLToPath } from 'url'

import { initPayloadInt } from '../helpers/initPayloadInt.js'
import { postsSlug } from './collections/Posts/index.js'
import { editorJSONToMDX, mdxToEditorJSON } from './mdx/hooks.js'
import { tableJson } from './tableJson.js'
import { textToRichText } from './textToRichText.js'

let config: SanitizedConfig
let editorConfig: SanitizedServerEditorConfig

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

type Tests = Array<{
  blockNode?: {
    fields: Omit<BlockFields, 'id'>
  } & Omit<
    MarkOptional<SerializedBlockNode, 'children' | 'fields' | 'format' | 'type' | 'version'>,
    'fields'
  >
  input: string
  inputAfterConvertFromEditorJSON?: string
  rootChildren?: any[]
}>

describe('Lexical MDX', () => {
  // --__--__--__--__--__--__--__--__--__
  // Boilerplate test setup/teardown
  // --__--__--__--__--__--__--__--__--__
  beforeAll(async () => {
    const { config: incomingConfig } = await initPayloadInt(dirname, undefined, false)
    config = incomingConfig

    const richTextField: RichTextField = config.collections
      .find((collection) => collection.slug === postsSlug)
      .fields.find(
        (field) => 'name' in field && field.name === 'richText',
      ) as unknown as RichTextField

    editorConfig = (richTextField.editor as LexicalRichTextAdapter).editorConfig
  })

  const INPUT_AND_OUTPUT: Tests = [
    {
      input: `
<PackageInstallOptions
  packageId="444"
  uniqueId="xxx" update/>
      `,
      blockNode: {
        fields: {
          blockType: 'PackageInstallOptions',
          packageId: '444',
          update: true,
          uniqueId: 'xxx',
        },
      },
    },
    {
      input: `
<PackageInstallOptions packageId="444">
  ignored
</PackageInstallOptions>
`,
      inputAfterConvertFromEditorJSON: `<PackageInstallOptions packageId="444"/>`,
      blockNode: {
        fields: {
          blockType: 'PackageInstallOptions',
          packageId: '444',
        },
      },
    },
    {
      input: `
<PackageInstallOptions update packageId="444">
  ignored
</PackageInstallOptions>
`,
      inputAfterConvertFromEditorJSON: `<PackageInstallOptions packageId="444" update/>`,
      blockNode: {
        fields: {
          blockType: 'PackageInstallOptions',
          packageId: '444',
          update: true,
        },
      },
    },
    {
      input: `
<PackageInstallOptions
  update
  packageId="444">
  ignored
</PackageInstallOptions>
`,
      inputAfterConvertFromEditorJSON: `<PackageInstallOptions packageId="444" update/>`,
      blockNode: {
        fields: {
          blockType: 'PackageInstallOptions',
          packageId: '444',
          update: true,
        },
      },
    },
    {
      inputAfterConvertFromEditorJSON: `<PackageInstallOptions packageId="444" update/>`,
      input: `
<PackageInstallOptions
  update
  packageId="444"
>
  ignored
</PackageInstallOptions>
`,
      blockNode: {
        fields: {
          blockType: 'PackageInstallOptions',
          packageId: '444',
          update: true,
        },
      },
    },
    {
      inputAfterConvertFromEditorJSON: `<PackageInstallOptions packageId="444" someNestedObject={{"test":"hello"}} update/>`, // Not test - test is not part of the block
      input: `
<PackageInstallOptions
  update
  packageId="444"
  someNestedObject={{test: "hello"}} test={4}
>
  ignored
</PackageInstallOptions>
`,
      blockNode: {
        fields: {
          blockType: 'PackageInstallOptions',
          packageId: '444',
          update: true,
          someNestedObject: { test: 'hello' },
        },
      },
    },
    {
      inputAfterConvertFromEditorJSON: `<PackageInstallOptions packageId="444" update/>`,

      input: `
<PackageInstallOptions
  update
  packageId="444"
>
  ignored
  <PackageInstallOptions
    update
    packageId="444"
    someNestedObject={{test: "hello"}} test={4}
  >
    ignored
  </PackageInstallOptions>
</PackageInstallOptions>
`,
      blockNode: {
        fields: {
          blockType: 'PackageInstallOptions',
          packageId: '444',
          update: true,
        },
      },
    },
    {
      input: `
\`\`\`ts\n hello\`\`\`
`,
      blockNode: {
        fields: {
          blockType: 'Code',
          code: 'hello',
          language: 'ts',
        },
      },
    },
    {
      input: `
\`\`\`ts x\n hello\`\`\`
`,
      blockNode: {
        fields: {
          blockType: 'Code',
          code: 'x\n hello',
          language: 'ts',
        },
      },
    },
    {
      input: `
\`\`\`ts hello\`\`\`
`,
      blockNode: {
        fields: {
          blockType: 'Code',
          code: 'ts hello',
          language: '',
        },
      },
    },
    {
      input: `
\`\`\`hello\`\`\`
`,
      blockNode: {
        fields: {
          blockType: 'Code',
          code: 'hello',
          language: '',
        },
      },
    },
    {
      input: `
\`\`\`ts
hello
\`\`\`
`,
      blockNode: {
        fields: {
          blockType: 'Code',
          code: 'hello',
          language: 'ts',
        },
      },
    },
    {
      input: `
\`\`\`ts hello
there
\`\`\`
`,
      blockNode: {
        fields: {
          blockType: 'Code',
          code: 'hello\nthere',
          language: 'ts',
        },
      },
    },
    {
      input: `
\`\`\`ts hello
there
!!\`\`\`
`,
      blockNode: {
        fields: {
          blockType: 'Code',
          code: 'hello\nthere\n!!',
          language: 'ts',
        },
      },
    },
    {
      input: `
\`\`\`ts
Hello
there\`\`\`
`,
      blockNode: {
        fields: {
          blockType: 'Code',
          code: 'Hello\nthere',
          language: 'ts',
        },
      },
    },
    {
      input: `
\`\`\`ts
Hello
\`\`\`ts
nested
\`\`\`!
there\`\`\`
`,
      blockNode: {
        fields: {
          blockType: 'Code',
          code: 'Hello\n```ts\nnested\n```!\nthere',
          language: 'ts',
        },
      },
    },
    {
      input: `
| Option            | Default route           | Description                                     |
| ----------------- | ----------------------- | ----------------------------------------------- |
| \`account\`         |                         | The user's account page.                        |
| \`createFirstUser\` | \`/create-first-user\`    | The page to create the first user.              |
`,
      inputAfterConvertFromEditorJSON: `
| Option            | Default route           | Description                                     |
|---|---|---|
| \`account\`         |                         | The user's account page.                        |
| \`createFirstUser\` | \`/create-first-user\`    | The page to create the first user.              |
`,
      rootChildren: [tableJson],
    },
    {
      input: `
<Banner>
  children text
</Banner>
`,
      blockNode: {
        fields: {
          blockType: 'Banner',
          content: textToRichText('children text'),
        },
      },
    },
    {
      input: `\`inline code\``,
      rootChildren: [
        {
          children: [
            {
              detail: 0,
              format: 16, // Format 16 => inline code
              mode: 'normal',
              style: '',
              text: 'inline code',
              type: 'text',
              version: 1,
            },
          ],
          direction: null,
          format: '',
          indent: 0,
          type: 'paragraph',
          version: 1,
          textFormat: 0,
          textStyle: '',
        },
      ],
    },
    {
      // This test ensures that the JSX within the code block is does not disrupt the main JSX parsing
      input: `
<Banner>
    \`https://<some link>.payloadcms.com/page\`
</Banner>
`,
      blockNode: {
        fields: {
          blockType: 'Banner',
          content: {
            root: {
              children: [
                {
                  children: [
                    {
                      detail: 0,
                      format: 16, // Format 16 => inline code
                      mode: 'normal',
                      style: '',
                      text: 'https://<some link>.payloadcms.com/page',
                      type: 'text',
                      version: 1,
                    },
                  ],
                  direction: null,
                  format: '',
                  indent: 0,
                  type: 'paragraph',
                  version: 1,
                  textFormat: 0,
                  textStyle: '',
                },
              ],
              direction: null,
              format: '',
              indent: 0,
              type: 'root',
              version: 1,
            },
          },
        },
      },
    },
  ]

  for (const {
    input,
    inputAfterConvertFromEditorJSON,
    blockNode,
    rootChildren,
  } of INPUT_AND_OUTPUT) {
    it(`can convert to editor JSON: ${input}"`, () => {
      const result = mdxToEditorJSON({
        mdxWithFrontmatter: input,
        editorConfig,
      })

      if (blockNode) {
        const receivedBlockNode: SerializedBlockNode = result.editorState.root
          .children[0] as unknown as SerializedBlockNode
        expect(receivedBlockNode).not.toBeNull()

        // By doing it like this, the blockNode defined in the test does not need to have all the top-level properties
        const receivedBlockNodeToTest = {}
        for (const key in blockNode) {
          receivedBlockNodeToTest[key] = receivedBlockNode[key]
          if (key === 'fields') {
            delete receivedBlockNodeToTest[key].id
            // Delete all undefined values
            for (const fieldKey in receivedBlockNodeToTest[key]) {
              if (receivedBlockNodeToTest[key][fieldKey] === undefined) {
                delete receivedBlockNodeToTest[key][fieldKey]
              }
            }
          }
        }

        console.log({ receivedBlockNodeToTest, blockNode })

        expect(receivedBlockNodeToTest).toStrictEqual(blockNode)
      } else if (rootChildren) {
        const receivedRootChildren = result.editorState.root.children
        removeUndefinedRecursively(receivedRootChildren)
        //
        expect(receivedRootChildren).toStrictEqual(rootChildren)
      } else {
        throw new Error('Test not configured properly')
      }
    })

    it(`can convert from editor JSON: ${input}"`, () => {
      const editorState = {
        root: {
          children: blockNode
            ? [
                {
                  format: '',
                  type: 'block',
                  version: 2,
                  ...blockNode,
                },
              ]
            : rootChildren,
          direction: null,
          format: '',
          indent: 0,
          type: 'root',
          version: 1,
        },
      }
      const result = editorJSONToMDX({
        editorConfig,
        editorState,
      })
      // Remove all spaces and newlines
      const resultNoSpace = result.replace(/\s/g, '')
      const inputNoSpace = (inputAfterConvertFromEditorJSON ?? input).replace(/\s/g, '')

      console.log({ result, expected: inputAfterConvertFromEditorJSON ?? input })

      expect(resultNoSpace).toBe(inputNoSpace)
    })
  }
})

function removeUndefinedRecursively(obj: object) {
  for (const key in obj) {
    const value = obj[key]
    if (value && typeof value === 'object') {
      removeUndefinedRecursively(value)
    } else if (value === undefined) {
      delete obj[key]
    }
  }
}
