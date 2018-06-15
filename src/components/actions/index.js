import React, { Fragment } from "react"
import Button from "../button"

const Actions = ({ items }) => (
  <Fragment>{items.map(item => <Button key={item.text} {...item} />)}</Fragment>
)

Actions.defaultProps = {
  items: [
    { text: "Share", type: "overlay" },
    { text: "Publish", type: "secondary" },
  ],
}

export default Actions
