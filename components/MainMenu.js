import { useCallback, useEffect, useRef, useState } from "react"
import HeadButton from "./HeadButton"

const assets = {
  burger: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  ),
  group: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-full"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
    </svg>
  ),
  contact: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-full"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
        clipRule="evenodd"
      />
    </svg>
  ),
  settings: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-full"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
        clipRule="evenodd"
      />
    </svg>
  ),
  faq: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-full"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
        clipRule="evenodd"
      />
    </svg>
  ),
  about: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-full"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z"
        clipRule="evenodd"
      />
    </svg>
  ),
}

function MenuToggle({ onClick }) {
  return (
    <HeadButton onClick={onClick}>
      <span>{assets.burger}</span>
      <span className="text-sm font-semibold ml-9">Telegram</span>
    </HeadButton>
  )
}

function Menu({ children, open }) {
  return (
    <div
      className={`absolute left-0 right-0 z-10 py-2 origin-top transform transition-transform bg-white top-full border shadow-lg border-blue-primary border-opacity-40 ${
        open ? "scale-y-100" : "scale-y-0"
      }`}
    >
      {children}
    </div>
  )
}

function MenuItem({ children }) {
  return (
    <div className="flex px-5 py-2.5 text-blue-primary bg-white cursor-pointer hover:bg-blue-primary hover:bg-opacity-10">
      {children}
    </div>
  )
}

function MenuLabel({ children }) {
  return <span className="text-xs ml-9">{children}</span>
}

function MenuIcon({ children }) {
  return <span className="w-5">{children}</span>
}

function MainMenu() {
  const ref = useRef()
  const [open, setOpen] = useState(false)
  const toggle = () => setOpen(!open)
  useOnClickOutside(
    ref,
    useCallback(() => setOpen(false))
  )
  return (
    <div className="relative" ref={ref}>
      <MenuToggle onClick={toggle} />
      <Menu open={open}>
        <MenuItem>
          <MenuIcon>{assets.group}</MenuIcon>
          <MenuLabel>New group</MenuLabel>
        </MenuItem>
        <MenuItem>
          <MenuIcon>{assets.contact}</MenuIcon>
          <MenuLabel>Contacts</MenuLabel>
        </MenuItem>
        <MenuItem>
          <MenuIcon>{assets.settings}</MenuIcon>
          <MenuLabel>Settings</MenuLabel>
        </MenuItem>
        <MenuItem>
          <MenuIcon>{assets.faq}</MenuIcon>
          <MenuLabel>Telegram FAQ</MenuLabel>
        </MenuItem>
        <MenuItem>
          <MenuIcon>{assets.about}</MenuIcon>
          <MenuLabel>About</MenuLabel>
        </MenuItem>
      </Menu>
    </div>
  )
}

function useOnClickOutside(ref, handler) {
  useEffect(
    () => {
      const listener = (event) => {
        // Do nothing if clicking ref's element or descendent elements
        if (!ref.current || ref.current.contains(event.target)) {
          return
        }
        handler(event)
      }
      document.addEventListener("mousedown", listener)
      document.addEventListener("touchstart", listener)
      return () => {
        document.removeEventListener("mousedown", listener)
        document.removeEventListener("touchstart", listener)
      }
    },
    // Add ref and handler to effect dependencies
    // It's worth noting that because passed in handler is a new ...
    // ... function on every render that will cause this effect ...
    // ... callback/cleanup to run every render. It's not a big deal ...
    // ... but to optimize you can wrap handler in useCallback before ...
    // ... passing it into this hook.
    [ref, handler]
  )
}

export default MainMenu
