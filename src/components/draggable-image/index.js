import React, { Component } from "react"
import { DragSource } from "react-dnd"
import { getEmptyImage } from "react-dnd-html5-backend"
import classnames from "classnames"
import { IMAGE_TYPE } from "./constants"
import style from "./index.css"

const spec = {
  beginDrag({ src }) {
    return { src }
  },
}

class DraggableImage extends Component {
  componentDidMount() {
    const { connectDragPreview } = this.props

    connectDragPreview && connectDragPreview(getEmptyImage())
  }

  render() {
    const {
      columnSpan,
      connectDragSource,
      description,
      dragSource,
      src,
      isDragging,
    } = this.props

    return connectDragSource(
      <picture
        className={classnames(style.draggableImage, {
          [style.dragged]: isDragging,
        })}
        data-columnspan={columnSpan}
      >
        <img alt={description} src={src} />
      </picture>,
    )
  }
}

const collect = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  connectDragPreview: connect.dragPreview(),
  isDragging: monitor.isDragging(),
})

export default DragSource(IMAGE_TYPE, spec, collect)(DraggableImage)
