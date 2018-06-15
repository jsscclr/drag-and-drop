import React, { Component } from "react"
import classnames from "classnames"
import { DropTarget } from "react-dnd"
import CanvasImage from "../canvas-image"
import { getStyle } from "./helpers"
import style from "./index.css"

const spec = {
  drop(props, monitor, component) {
    const item = monitor.getItem()

    component.addImage(item)
  },
}

class Canvas extends Component {
  constructor() {
    super()

    this.state = { images: [] }
  }

  addImage = image => {
    this.setState(({ images }) => ({
      images: [...images, image],
    }))
  }

  swapImage = (index1, index2) => {
    this.setState(({ images }) => {
      let items = [...images]
      let itemA = items[index1]
      let itemB = items[index2]
      items[index2] = itemA
      items[index1] = itemB

      return {
        images: items,
      }
    })
  }

  render() {
    const {
      props: { connectDropTarget, isOver, item },
      state: { images },
    } = this

    const imagesToShow =
      item && isOver ? [...images, { ...item, isPreview: true }] : images

    return (
      connectDropTarget &&
      connectDropTarget(
        <section className={style.canvas}>
          {imagesToShow.map((image, index, { length }) => (
            <CanvasImage
              key={`${image.src}--${index}`}
              computedStyle={getStyle(index, length)}
              index={index}
              image={image}
              swapImage={this.swapImage}
            />
          ))}
        </section>,
      )
    )
  }
}

const collect = (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  item: monitor.getItem(),
})

export default DropTarget("IMAGE", spec, collect)(Canvas)
