import NextImage, { ImageProps } from 'next/image'
const Image = ({ ...rest }: ImageProps) => {
  return <NextImage {...rest} />
}

export default Image
