import type { TinaField } from "tinacms";
export function blog_post_templateFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "datetime",
      name: "date",
      label: "date",
    },
    {
      type: "string",
      name: "description",
      label: "description",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "tags",
      label: "tags",
      list: true,
    },
    {
      type: "image",
      name: "banner",
      label: "banner",
    },
  ] as TinaField[];
}
export function blog_postFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "datetime",
      name: "date",
      label: "date",
    },
    {
      type: "string",
      name: "slug",
      label: "slug",
    },
    {
      type: "string",
      name: "canonicalUrl",
      label: "canonicalUrl",
    },
  ] as TinaField[];
}
