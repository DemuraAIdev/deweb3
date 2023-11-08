

const isProduction = process.env.NODE_ENV === 'production'



export function dateSortDesc(a, b) {
  if (a > b) return -1
  if (a < b) return 1
  return 0
}

/**
 * Sorts a list of MDX documents by date in descending order
 *
 * @param {MDXDocumentDate[]} allBlogs
 * @param {string} [dateKey='date']
 * @return {*}
 */
export function sortPosts(allBlogs, dateKey) {
  return allBlogs.sort((a, b) => dateSortDesc(a[dateKey], b[dateKey]))
}

/**
 * Kept for backwards compatibility
 * Please use `sortPosts` instead
 * @deprecated
 * @param {MDXBlog[]} allBlogs
 * @return {*}
 */
export function sortedBlogPost(allBlogs) {
  return sortPosts(allBlogs)
}

/**
 * A typesafe omit helper function
 * @example pick(content, ['title', 'description'])
 *
 * @param {Obj} obj
 * @param {Keys[]} keys
 * @return {*}  {ConvertPick<{ [K in Keys]: Obj[K] }>}
 */
export const pick = (
  obj,
  keys
) => {
  return keys.reduce((acc, key) => {
    acc[key] = obj[key] ?? null
    return acc
  })
}

/**
 * A typesafe omit helper function
 * @example omit(content, ['body', '_raw', '_id'])
 *
 * @param {Obj} obj
 * @param {Keys[]} keys
 * @return {*}  {Omit<Obj, Keys>}
 */
export const omit =(obj, keys)=> {
  const result = Object.assign({}, obj)
  keys.forEach((key) => {
    delete result[key]
  })
  return result
}


/**
 * Omit body, _raw, _id from MDX document and return only the core content
 *
 * @param {T} content
 * @return {*}  {CoreContent<T>}
 */
export function coreContent(content) {
  return omit(content, ['body', '_raw', '_id'])
}

/**
 * Omit body, _raw, _id from a list of MDX documents and returns only the core content
 * If `NODE_ENV` === "production", it will also filter out any documents with draft: true.
 *
 * @param {T[]} contents
 * @return {*}  {CoreContent<T>[]}
 */
export function allCoreContent(contents)[] {
  if (isProduction)
    return contents.map((c) => coreContent(c)).filter((c) => !('draft' in c && c.draft === true))
  return contents.map((c) => coreContent(c))
}