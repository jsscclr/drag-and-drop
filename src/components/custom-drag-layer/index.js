import React from "react"
import { DragLayer } from "react-dnd"
import style from "./index.css"

const CustomDragLayer = ({
  currentOffset,
  initialOffsetDifference,
  item,
  itemType,
  isDragging,
}) => {
  return isDragging && currentOffset ? (
    <div className={style.customDragLayer}>
      <div
        className={style.dragPreview}
        style={{
          "--x": `${currentOffset.x}px`,
          "--y": `${currentOffset.y}px`,
        }}
      >
        <img src={item.src} />
      </div>
    </div>
  ) : null
}

const collect = monitor => ({
  item: monitor.getItem(),
  itemType: monitor.getItemType(),
  initialOffsetDifference: monitor.getDifferenceFromInitialOffset(),
  initialOffset: monitor.getInitialSourceClientOffset(),
  currentOffset: monitor.getSourceClientOffset(),
  isDragging: monitor.isDragging(),
})

export default DragLayer(collect)(CustomDragLayer)
