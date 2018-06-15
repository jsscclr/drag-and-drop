import React from "react"
import { SearchIcon } from "../icons"
import style from "./index.css"

const Search = () => (
  <label className={style.search}>
    <SearchIcon />
    <input className={style.searchInput} type="search" />
  </label>
)

export default Search
