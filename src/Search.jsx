import React, { useState } from 'react'
import SearchResult from './SearchResult'

const Search = () => {
    const [imgs, setImg] = useState()
    const inputEvent = (event) => {
        setImg(event.target.value)

    }
    return (
        <>
            <div className="searchbar">
                <input placeholder="search anything" type="text" value={imgs} onChange={inputEvent} />
                {imgs===''? null : <SearchResult name={imgs}/>}
            </div>
        </>
    )
}
export default Search