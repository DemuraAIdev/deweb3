import { visit } from 'unist-util-visit'
import yaml from 'js-yaml'

// Code By timlrx
function remarkExtractFrontmatter() {
  return (tree, file) => {
    visit(tree, 'yaml', (node) => {
      file.data.frontmatter = yaml.load(node.value)
    })
  }
}

export { remarkExtractFrontmatter }
