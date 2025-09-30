import { defineDocumentType, makeSource } from "contentlayer/source-files";
import remarkGfm from "remark-gfm";

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `blog/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    slug: { type: "string", required: true },
    lang: { type: "enum", options: ["ar", "en"], required: true },
    summary: { type: "string", required: true },
    date: { type: "date", required: true },
    cover: { type: "string" },
    tags: { type: "list", of: { type: "string" } }
  }
}));

export const Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: `projects/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    slug: { type: "string", required: true },
    lang: { type: "enum", options: ["ar", "en"], required: true },
    summary: { type: "string", required: true },
    date: { type: "date", required: true },
    cover: { type: "string" },
    tags: { type: "list", of: { type: "string" } }
  }
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Post, Project],
  mdx: { remarkPlugins: [remarkGfm] }
});
