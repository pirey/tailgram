function HeadButton({ children, onClick, grow }) {
  return (
    <div
      className={`flex group px-5 py-3 text-white cursor-pointer bg-blue-primary hover:bg-blue-secondary ${
        grow ? "flex-grow" : ""
      } `}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

export default HeadButton
