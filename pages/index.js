import Head from "next/head"
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

      <div className="flex h-screen bg-gray-200">
        <div className="flex flex-1 max-w-screen-lg pb-4 mx-auto bg-blue-200">
          {/* left */}
          <div className="flex-1 max-w-xs bg-red-200">
            <MainMenu />
            <Search />
          </div>
          {/* right */}
          <div className="flex-1 bg-purple-200"></div>
        </div>
      </div>
    </div>
  )
}
