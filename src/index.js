import React from "react"
import { render } from "react-dom"
import { App } from "./components"

const ROOT_ELEMENT_ID = "root"

/*
 * Thin entrypoint to the application.
 */
const renderApplication = () => {
  render(<App />, document.getElementById(ROOT_ELEMENT_ID))
}

renderApplication()
