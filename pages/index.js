import Head from "next/head"
import DialogItem from "../components/DialogItem"
import DialogType from "../models/DialogType"
import DialogList from "../components/DialogList"
import MainMenu from "../components/MainMenu"
import Search from "../components/Search"

const dialogs = [
  {
    id: 1,
    isPinned: true,
    messageText: "You need to go out tonight",
    unreadCount: 204,
    sender: "You",
    title: "Bob The Marley",
    type: DialogType.DIRECT,
  },
  {
    id: 2,
    isPinned: false,
    messageText: "Hello kim, you there?",
    unreadCount: 0,
    sender: "You",
    title: "Jotaro Kujo",
    type: DialogType.DIRECT,
  },
  {
    id: 3,
    isPinned: true,
    messageText: "Everyone ready?",
    unreadCount: 0,
    sender: "John",
    title: "Johny Squad",
    type: DialogType.GROUP,
  },
  {
    id: 5,
    isPinned: false,
    messageText: "Hello kim, you there?",
    unreadCount: 0,
    sender: "You",
    title: "Takumi Fujiwara",
    type: DialogType.DIRECT,
  },
  {
    id: 8,
    isPinned: false,
    messageText: "Hello",
    unreadCount: 0,
    sender: "Jackjack",
    title: "Phantom Troupe",
    type: DialogType.GROUP,
  },
  {
    id: 11,
    isPinned: false,
    messageText: "Hello kim, you there?",
    unreadCount: 0,
    sender: "You",
    title: "Kimberly",
    type: DialogType.DIRECT,
  },
  {
    id: 12,
    isPinned: false,
    messageText: "Everyone ready?",
    unreadCount: 0,
    sender: "John",
    title: "Johny Squad",
    type: DialogType.GROUP,
  },
  {
    id: 13,
    isPinned: false,
    messageText: "Hello kim, you there?",
    unreadCount: 997,
    sender: "You",
    title: "Alphonse Elric",
    type: DialogType.DIRECT,
  },
  {
    id: 14,
    isPinned: false,
    messageText: "Hello kim, you there?",
    unreadCount: 507,
    sender: "You",
    title: "Tatiana",
    type: DialogType.DIRECT,
  },
  {
    id: 15,
    isPinned: false,
    messageText: "Everyone ready?",
    unreadCount: 0,
    sender: "You",
    title: "Natalia",
    type: DialogType.GROUP,
  },
  {
    id: 16,
    isPinned: false,
    messageText: "Everyone ready?",
    unreadCount: 704,
    sender: "You",
    title: "Grim Reaper",
    type: DialogType.DIRECT,
  },
  {
    id: 17,
    isPinned: false,
    messageText: "Everyone ready?",
    unreadCount: 0,
    sender: "You",
    title: "Gilder",
    type: DialogType.DIRECT,
  },
]

function isPinned(dialog) {
  return dialog.isPinned
}

function isNotPinned(dialog) {
  return !isPinned(dialog)
}

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

            <DialogList>
              {dialogs.filter(isPinned).map((dialog) => (
                <DialogItem key={dialog.id} {...dialog} />
              ))}
              {dialogs.filter(isNotPinned).map((dialog) => (
                <DialogItem key={dialog.id} {...dialog} />
              ))}
            </DialogList>
          </div>
          {/* right */}
          <div className="flex-1 bg-purple-200"></div>
        </div>
      </div>
    </div>
  )
}
