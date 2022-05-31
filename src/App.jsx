import LogoIcon from "./icons/logo.svg?component";
import ChevronLeftIcon from "./icons/chevron-left.svg?component";
import ChevronDownIcon from "./icons/chevron-down.svg?component";
import EyeIcon from "./icons/eye.svg?component";
import DeviceDesktopIcon from "./icons/device-desktop.svg?component";
import DeviceTabletIcon from "./icons/device-tablet.svg?component";
import DeviceMobileIcon from "./icons/device-mobile.svg?component";
import DeviceMobilerotatedIcon from "./icons/device-mobile-rotated.svg?component";
import PackageIcon from "./icons/package.svg?component";
import UsersIcon from "./icons/users.svg?component";

function App() {
  return (
    <div className="flex bg-gray-100 font-sans text-gray-900">
      <aside className="flex min-h-screen w-18 flex-col items-center border border-gray-200 bg-white">
        <div className="flex h-[79px] w-full items-center justify-center border-b border-gray-200">
          <LogoIcon />
        </div>
      </aside>
      <div className="flex min-h-screen flex-1 flex-col">
        <header className="flex h-20 items-center justify-between gap-x-6 border-y border-gray-200 bg-white px-6">
          <button className="flex items-center justify-center rounded-2xl bg-gray-100 p-3">
            <ChevronLeftIcon className="h-6 w-6 stroke-current text-gray-400" />
          </button>
          <button className="flex flex-col items-start rounded-2xl bg-gray-100 px-6 py-3">
            <div className="flex items-center gap-x-2">
              <span className="text-sm">Page: Homepage - Dipa</span>
              <button>
                <ChevronDownIcon className="h-5 w-5 stroke-current text-gray-400" />
              </button>
            </div>
            <div className="text-xs text-gray-400">
              https://dipainhouse.com/
            </div>
          </button>
          <button className="flex items-center justify-center gap-x-2 rounded-2xl bg-gray-100 px-5 py-3">
            <EyeIcon className="h-6 w-6 stroke-current text-gray-400" />
            <span className="text-sm font-semibold leading-6">Preview</span>
          </button>

          {/* Separator */}
          <div className="h-full w-px bg-gray-200" />

          <div className="flex items-center gap-x-1">
            <button className="rounded-2xl bg-gray-100 p-2">
              <DeviceDesktopIcon className="h-6 w-6 stroke-current text-gray-400" />
            </button>
            <button className="rounded-2xl  p-2">
              <DeviceTabletIcon className="h-6 w-6 stroke-current text-gray-400" />
            </button>
            <button className="rounded-2xl  p-2">
              <DeviceMobileIcon className="h-6 w-6 stroke-current text-gray-400" />
            </button>
            <button className="rounded-2xl  p-2">
              <DeviceMobilerotatedIcon className="h-6 w-6 stroke-current text-gray-400" />
            </button>
          </div>

          {/* Separator */}
          <div className="h-full w-px bg-gray-200" />

          <button className="flex items-center justify-center gap-x-2 rounded-2xl bg-gray-100 px-5 py-3">
            <span className="text-sm font-semibold leading-6">
              960 PX / 100%
            </span>
            <ChevronDownIcon className="h-6 w-6 stroke-current text-gray-400" />
          </button>

          <button className="flex items-center justify-center rounded-2xl bg-gray-100 p-3">
            <PackageIcon className="h-6 w-6 stroke-current text-gray-400" />
          </button>
        </header>
      </div>
      <aside className="flex min-h-screen w-[300px] flex-col border border-gray-200 bg-white">
        <div className="flex h-20 items-center gap-x-4 border-b border-gray-200 px-6">
          <button className="flex items-center justify-center gap-x-2 rounded-2xl bg-gray-100 px-5 py-3">
            <UsersIcon className="h-6 w-6 stroke-current text-gray-400" />
            <span className="text-sm font-semibold leading-6">Invite</span>
          </button>
          <button className="flex flex-1 items-center justify-center gap-x-2 rounded-2xl bg-blue-400 px-5 py-3 text-sm leading-6 text-white">
            Publish
          </button>
        </div>
      </aside>
    </div>
  );
}

export default App;
