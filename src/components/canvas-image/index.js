import React, { Component } from "react"
import classnames from "classnames"
import { DragSource, DropTarget } from "react-dnd"
import { getEmptyImage } from "react-dnd-html5-backend"
import style from "./index.css"

const sourceSpec = {
  beginDrag({ image, index }) {
    return { image, index }
  },
}

const targetSpec = {
  drop(props, monitor, component) {
    const item = monitor.getItem()
    component.props.swapImage(component.props.index, item.index)
  },
}

class CanvasImage extends Component {
  componentDidMount() {
    const { connectDragPreview } = this.props

    connectDragPreview && connectDragPreview(getEmptyImage())
  }

  render() {
    const {
      connectDragSource,
      connectDropTarget,
      isOver,
      item,
      image,
      computedStyle,
      swapImage,
    } = this.props

    return (
      connectDragSource &&
      connectDropTarget &&
      connectDropTarget(
        connectDragSource(
          <picture
            className={classnames(style.canvasImage, {
              [style.active]: !image.isPreview,
              [style.preview]: image.isPreview,
            })}
            style={computedStyle}
          >
            <img src={image.src} />
          </picture>,
        ),
      )
    )
  }
}

export default DropTarget("CANVAS_IMAGE", targetSpec, connect => ({
  connectDropTarget: connect.dropTarget(),
}))(
  DragSource("CANVAS_IMAGE", sourceSpec, (connect, monitor) => ({
    connectDragPreview: connect.dragPreview(),
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  }))(CanvasImage),
)
