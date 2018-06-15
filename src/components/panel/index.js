import React from "react"
import classnames from "classnames"
import Search from "../search"
import DraggableImage from "../draggable-image"
import style from "./index.css"

const Panel = ({ images }) => (
  <div className={style.panel}>
    <Search />
    {images.map(image => <DraggableImage key={image.src} {...image} />)}
  </div>
)

Panel.defaultProps = {
  images: [
    { src: "bg10.jpg", columnSpan: 7 },
    { src: "bg7.jpg", columnSpan: 5 },
    { src: "bg6.jpg", columnSpan: 4 },
    { src: "bg5.jpg", columnSpan: 6 },
    { src: "bg8.jpg" },
    { src: "bg4.jpg", columnSpan: 5 },
    { src: "bg3.jpg", columnSpan: 7 },
    { src: "bg1.jpg", columnSpan: 7 },
  ],
}

export default Panel
