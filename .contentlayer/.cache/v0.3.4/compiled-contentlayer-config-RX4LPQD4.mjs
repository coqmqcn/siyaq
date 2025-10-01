// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import remarkGfm from "remark-gfm";
var Post = defineDocumentType(() => ({
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
var Project = defineDocumentType(() => ({
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
var contentlayer_config_default = makeSource({
  contentDirPath: "content",
  contentDirExclude: ["messages"],
  documentTypes: [Post, Project],
  mdx: { remarkPlugins: [remarkGfm] }
});
export {
  Post,
  Project,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-RX4LPQD4.mjs.map
