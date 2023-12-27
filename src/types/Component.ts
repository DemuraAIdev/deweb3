import { AnchorHTMLAttributes } from 'react'
import type { LinkProps } from 'next/link'

export interface CustomLinkType extends LinkProps, AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  showIcon?: boolean
  [key: string]: unknown
}
