import DialogType from "../models/DialogType"

const assets = {
  pin: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-full"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
    </svg>
  ),
}

function DialogItem({
  isPinned,
  unreadCount,
  photoUrl,
  title,
  sender,
  type,
  messageText,
  timestamp,
}) {
  return (
    <div className="flex justify-between px-3 py-2 cursor-pointer hover:bg-blue-primary hover:bg-opacity-10">
      {/* user pic */}
      <div className="w-12 h-12 bg-gray-300 rounded-full">
        {photoUrl ? (
          <img src={photoUrl} alt={title} className="w-full" />
        ) : null}
      </div>
      {/* message preview */}
      <div className="relative flex flex-grow ml-3">
        <div className="absolute top-0 bottom-0 left-0 right-0 flex">
          <div className="flex-grow max-w-full overflow-hidden">
            <div className="overflow-hidden text-sm font-bold text-gray-700 overflow-ellipsis whitespace-nowrap">
              {title}
            </div>
            <div className="flex items-baseline mt-0.5">
              {type === DialogType.GROUP || sender === "You" ? (
                <div className="mr-1 text-sm text-blue-primary">{sender}:</div>
              ) : null}
              <div className="overflow-hidden text-sm text-gray-500 overflow-ellipsis whitespace-nowrap">
                {messageText}
              </div>
            </div>
          </div>
          <div className="ml-3">
            <div className="text-xs text-gray-400">3/9/21</div>
            <div className="flex justify-end mt-2">
              {unreadCount > 0 ? (
                <div className="p-1 text-xs font-bold text-white bg-gray-300 rounded-full">
                  {unreadCount}
                </div>
              ) : null}
              {isPinned && unreadCount <= 0 ? (
                <div className="w-4 text-blue-primary text-opacity-60">
                  {assets.pin}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DialogItem
