import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "indexPage",
        label: "Homepage Sections",
        path: "src/content/IndexPage",
        fields: [
          {
            type: "string",
            name: "header",
            label: "Header",
          },
          {
            type: "rich-text",
            name: "description",
            label: "Description",
          },
          {
            type: "image",
            name: "image",
            label: "Image",
          },
          {
            type: "string",
            name: "PreviewVideo",
            label: "Preview Video URL",
          },
          {
            type: "object",
            name: "form",
            label: "Form Settings",
            fields: [
              {
                type: "string",
                name: "placeholder",
                label: "Placeholder Text",
              },
              {
                type: "string",
                name: "buttonText",
                label: "Button Text",
              },
              {
                type: "string",
                name: "text",
                label: "Form Description",
              },
            ],
          },
        ],
      },
      {
        name: "aboutPage",
        label: "About Page Sections",
        path: "src/content/aboutPage",
        fields: [
          {
            type: "string",
            name: "header",
            label: "Header",
          },
          {
            type: "rich-text",
            name: "description",
            label: "Description",
          },
          {
            type: "image",
            name: "image",
            label: "Image",
          },
        ],
      },
      {
        name: "blogs",
        label: "Blog Posts",
        path: "src/content/blogs",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            required: true,
          },
          {
            type: "datetime",
            name: "publishDate",
            label: "Publish Date",
          },
          {
            type: "image",
            name: "image",
            label: "Featured Image",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Article Content",
            isBody: true,
          },
        ],
      },
      {
        name: "site",
        label: "Site Settings",
        path: "src/content/site",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Site Title",
          },
          {
            type: "string",
            name: "description",
            label: "Site Description",
          },
        ],
      },
    ],
  },
});
