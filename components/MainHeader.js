import HeadButton from "./HeadButton"

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
  menu: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-full"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
    </svg>
  ),
}

function DialogHeader() {
  return (
    <HeadButton grow>
      <div className="flex items-baseline h-6">
        <div className="text-sm font-bold">Saved Messages</div>
        <div className="ml-2 text-sm text-white text-opacity-60 group-hover:text-opacity-100">
          Last seen recently
        </div>
      </div>
    </HeadButton>
  )
}

function DialogSearchButton() {
  return (
    <HeadButton>
      <div className="flex items-center h-6">
        <span className="block w-5">{assets.search}</span>
      </div>
    </HeadButton>
  )
}

function DialogMenu() {
  return (
    <HeadButton>
      <div className="flex items-center h-6">
        <span className="block w-5">{assets.menu}</span>
      </div>
    </HeadButton>
  )
}

function MainHeader() {
  return (
    <div className="flex items-stretch">
      <DialogHeader />
      <DialogSearchButton />
      <DialogMenu />
    </div>
  )
}

export default MainHeader
