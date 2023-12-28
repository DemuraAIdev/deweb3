import NextImage, { ImageProps } from 'next/image'
const Image = ({ ...rest }: ImageProps) => {
  return <NextImage {...rest} className={`transition-opacity duration-300`} />
}

export default Image
