import MainMenu from "../components/MainMenu"
import Search from "../components/Search"

function Components() {
  return (
    <div className="h-screen py-4 bg-gray-100">
      <div className="max-w-xs mx-auto my-4 rounded shadow">
        <MainMenu open={true} />
      </div>
      <div className="max-w-xs mx-auto my-4 bg-white rounded shadow">
        <Search />
      </div>
    </div>
  )
}

export default Components
