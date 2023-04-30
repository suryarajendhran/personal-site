import { defineConfig } from "tinacms";
import { blog_post_templateFields } from "./templates";
import { blog_postFields } from "./templates";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "91cfb097-4419-4ee2-b3f5-3d13c26aab47", // Get this from tina.io
  token: "2d0369d1fc98a070f29e5596f4ab25c792af5ef1", // Get this from tina.io
  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [
      {
        format: "md",
        label: "Content",
        name: "content",
        path: "content",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...blog_post_templateFields(),
        ],
      },
    ],
  },
});
