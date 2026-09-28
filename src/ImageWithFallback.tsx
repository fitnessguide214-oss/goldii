import { useState } from 'react'

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string
  alt: string
  fallback?: string
}

export function ImageWithFallback({ src, alt, fallback, className, style, ...rest }: Props) {
  const [errored, setErrored] = useState(false)
  return (
    <img
      src={errored ? (fallback ?? '') : src}
      alt={alt}
      className={className}
      style={style}
      onError={() => setErrored(true)}
      {...rest}
    />
  )
}
