"use client"
import NextImage, { ImageProps } from 'next/image'
import React from 'react'
const Image = ({ ...rest }: ImageProps) => {
    const [isLoading, setLoading] = React.useState(true)
    return (

        <NextImage
            {...rest}
            onLoad={() => setLoading(false)}
            className={`transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'
                }`}
        />
    )
}

export default Image