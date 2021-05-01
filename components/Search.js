import { useState } from "react"

const assets = {
  search: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-full"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
        clipRule="evenodd"
      />
    </svg>
  ),
  clear: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-full"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  ),
}

function Search() {
  const [search, setSearch] = useState("")
  const clear = () => setSearch("")
  return (
    <div className="p-3 bg-white">
      <div className="flex items-center p-1 font-thin bg-gray-100 border border-transparent focus-within:border-gray-200 focus-within:bg-white">
        <span className="w-5 text-gray-400 transform -scale-x-1">
          {assets.search}
        </span>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-2 text-sm bg-transparent appearance-none focus:outline-none"
          placeholder="Search"
        />
        {search.trim().length > 0 ? (
          <span onClick={clear} className="w-5 text-gray-400 cursor-pointer">
            {assets.clear}
          </span>
        ) : null}
      </div>
    </div>
  )
}

export default Search
