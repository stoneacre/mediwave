// tina/config.ts
import { defineConfig } from "tinacms";
var branch = process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || "main";
var config_default = defineConfig({
  branch,
  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public"
    }
  },
  schema: {
    collections: [
      {
        name: "indexPage",
        label: "Homepage Sections",
        path: "src/content/IndexPage",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "header",
            label: "Header"
          },
          {
            type: "string",
            name: "description",
            label: "Description"
          },
          {
            type: "image",
            name: "image",
            label: "Image"
          },
          {
            type: "string",
            name: "PreviewVideo",
            label: "Preview Video URL"
          },
          {
            type: "object",
            name: "form",
            label: "Form Settings",
            fields: [
              {
                type: "string",
                name: "placeholder",
                label: "Placeholder Text"
              },
              {
                type: "string",
                name: "buttonText",
                label: "Button Text"
              },
              {
                type: "string",
                name: "text",
                label: "Form Description"
              }
            ]
          },
          {
            type: "rich-text",
            name: "body",
            label: "Content",
            isBody: true
          }
        ]
      },
      {
        name: "aboutPage",
        label: "About Page Sections",
        path: "src/content/aboutPage",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "header",
            label: "Header"
          },
          {
            type: "object",
            name: "button",
            label: "Button",
            fields: [
              {
                type: "string",
                name: "text",
                label: "Button Text"
              },
              {
                type: "string",
                name: "link",
                label: "Button Link"
              }
            ]
          },
          {
            type: "number",
            name: "SatisfiedClients",
            label: "Satisfied Clients (in thousands)"
          },
          {
            type: "number",
            name: "ActiveEngagement",
            label: "Active Engagement"
          },
          {
            type: "number",
            name: "SuccessProjects",
            label: "Success Projects"
          },
          {
            type: "number",
            name: "AwardsWinning",
            label: "Awards Winning"
          },
          {
            type: "rich-text",
            name: "body",
            label: "Content",
            isBody: true
          }
        ]
      },
      {
        name: "blogs",
        label: "Blog Posts",
        path: "src/content/blogs",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            required: true
          },
          {
            type: "datetime",
            name: "publishDate",
            label: "Publish Date"
          },
          {
            type: "image",
            name: "image",
            label: "Featured Image"
          },
          {
            type: "rich-text",
            name: "body",
            label: "Article Content",
            isBody: true
          }
        ]
      },
      {
        name: "site",
        label: "Site Settings",
        path: "src/content/site",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "siteName",
            label: "Site Name"
          },
          {
            type: "string",
            name: "description",
            label: "Site Description"
          },
          {
            type: "image",
            name: "favicon",
            label: "Favicon"
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
