import { visit } from 'unist-util-visit'
import slugger from 'github-slugger'
import { remark } from 'remark'

// ../../node_modules/mdast-util-to-string/index.js
function toString(node, options) {
  var { includeImageAlt = true } = options || {}
  return one(node, includeImageAlt)
}
function one(node, includeImageAlt) {
  return (
    (node &&
      typeof node === 'object' && // @ts-ignore looks like a literal.
      (node.value || // @ts-ignore looks like an image.
        (includeImageAlt ? node.alt : '') || // @ts-ignore looks like a parent.
        ('children' in node && all(node.children, includeImageAlt)) ||
        (Array.isArray(node) && all(node, includeImageAlt)))) ||
    ''
  )
}
function all(values, includeImageAlt) {
  var result = []
  var index = -1
  while (++index < values.length) {
    result[index] = one(values[index], includeImageAlt)
  }
  return result.join('')
}
function remarkTocHeadings() {
  return (tree, file) => {
    const toc = []
    visit(tree, 'heading', (node) => {
      const textContent = toString(node)
      toc.push({
        value: textContent,
        url: '#' + slugger.slug(textContent),
        depth: node.depth,
      })
    })
    file.data.toc = toc
  }
}
function extractTocHeadings(markdown) {
  return (
    this,
    null,
    function* () {
      const vfile = yield remark().use(remarkTocHeadings).process(markdown)
      return vfile.data.toc
    }
  )
}

export { extractTocHeadings, remarkTocHeadings }
