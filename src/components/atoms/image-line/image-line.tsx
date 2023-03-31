import './image-line.scss'
import { FC } from 'react'

interface Image {
  name: string
  url: string
}

interface ImageLineProps {
  images: Image[]
}

export const ImageLine: FC<ImageLineProps> = ({ images }) => {
  const containerHeight = `${100 / images.length}%`

  return (
    <section className="image-line">
      {images.map((image) => (
        <div
          className="image-line__image-container"
          style={{ maxHeight: containerHeight }}
          key={image.name}
        >
          <img src={image.url} alt={image.name} className="image-line__image" />
        </div>
      ))}
    </section>
  )
}
