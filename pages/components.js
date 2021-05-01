import MainMenu from "../components/MainMenu"

function Components() {
  return (
    <div className="h-screen py-4 bg-gray-100">
      <div className="max-w-xs mx-auto my-4 rounded shadow">
        <MainMenu open={true} />
      </div>
    </div>
  )
}

export default Components
