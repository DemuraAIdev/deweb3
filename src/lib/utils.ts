import { omit } from 'contentlayer/utils'
import type { Document, MDX } from 'contentlayer/core'
const isProduction = process.env.NODE_ENV === 'production'
export type MDXDocument = Document & { body: MDX }
export type MDXDocumentDate = MDXDocument & {
    date: string
}
export type MDXBlog = MDXDocumentDate & {
    tags?: string[]
    draft?: boolean
}

export type MDXAuthor = MDXDocument & {
    name: string
}

export function dateSortDesc(a: string, b: string) {
    if (a > b) return -1
    if (a < b) return 1
    return 0
}

export type CoreContent<T> = Omit<T, 'body' | '_raw' | '_id'>

export function sortPosts<T extends MDXDocumentDate>(allBlogs: T[], dateKey: string = 'date') {
    return allBlogs.sort((a, b) => dateSortDesc(a[dateKey], b[dateKey]))
}

export function coreContent<T extends MDXDocument>(content: T): CoreContent<T> {
    return omit(content, ['body', '_raw', '_id'])
}

export function allCoreContent<T extends MDXDocument>(contents: T[]): CoreContent<T>[] {
    if (isProduction)
        return contents.map((c) => coreContent(c)).filter((c) => !('draft' in c && c.draft === true))
    return contents.map((c) => coreContent(c))
}