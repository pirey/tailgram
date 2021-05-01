import Head from "next/head"
import DialogList from "../components/DialogList"
import MainMenu from "../components/MainMenu"
import Search from "../components/Search"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Telegram Web</title>
        <meta name="description" content="Unambitious clone of telegram web" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* page */}
      <div className="flex h-screen bg-gray-200">
        {/* main container */}
        <div className="flex flex-1 max-w-screen-lg pb-4 mx-auto">
          {/* left */}
          <div className="flex flex-col flex-1 max-w-xs overflow-hidden">
            <MainMenu />
            <Search />
            <div className="flex-grow overflow-auto">
              <DialogList />
            </div>
          </div>
          {/* right */}
          <div className="flex-1 bg-purple-200"></div>
        </div>
      </div>
    </div>
  )
}
