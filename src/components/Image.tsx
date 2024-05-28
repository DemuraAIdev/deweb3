import NextImage, { ImageProps } from 'next/image'
const Image = ({ ...rest }: ImageProps) => {
  return <NextImage className="rounded-md" {...rest} />
}

export default Image
