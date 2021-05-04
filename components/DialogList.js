function DialogList({ children }) {
  return (
    <div className="flex-grow relative">
      <div className="absolute top-0 bottom-0 left-0 right-0 overflow-x-auto overflow-y-auto bg-white">
        {children}
      </div>
    </div>
  )
}

export default DialogList
