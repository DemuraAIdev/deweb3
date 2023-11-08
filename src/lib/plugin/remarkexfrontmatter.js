import { visit } from 'unist-util-visit';
import yaml from 'js-yaml';

// src/mdx-plugins/remark-extract-frontmatter.ts
export default function remarkExtractFrontmatter() {
  return (tree, file) => {
    visit(tree, "yaml", (node) => {
      file.data.frontmatter = yaml.load(node.value);
    });
  };
}

