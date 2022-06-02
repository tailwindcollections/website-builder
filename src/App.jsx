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
import SquarePlusIcon from "./icons/square-plus.svg?component";
import LayoutIcon from "./icons/layout.svg?component";
import Palette from "./icons/palette.svg?component";
import FileIcon from "./icons/file.svg?component";
import ImageIcon from "./icons/image.svg?component";
import AlertCircleIcon from "./icons/alert-circle.svg?component";
import SettingsIcon from "./icons/settings.svg?component";
import AlignBottomIcon from "./icons/align-bottom.svg?component";
import AlignCenterIcon from "./icons/align-center.svg?component";
import AlignLeftIcon from "./icons/align-left.svg?component";
import AlignRightIcon from "./icons/align-right.svg?component";
import AlignTopIcon from "./icons/align-top.svg?component";
import AlignMiddleIcon from "./icons/align-middle.svg?component";
import BarsIcon from "./icons/bars.svg?component";
import PencilIcon from "./icons/pencil.svg?component";
import Tooltip from "./components/Tooltip";

function App() {
  return (
    <div className="flex bg-gray-100 font-sans text-gray-900">
      <aside className="flex h-screen w-18 flex-col items-center border-r border-gray-200 bg-white">
        <div className="flex h-18 w-full items-center justify-center border-b border-gray-200">
          <LogoIcon />
        </div>
        <nav className="flex flex-1 flex-col gap-y-4 pt-10">
          <a
            href="#"
            className="group relative rounded-xl bg-gray-100 p-2 text-blue-600 hover:bg-gray-50"
          >
            <SquarePlusIcon className="h-6 w-6 stroke-current" />
            <Tooltip>
              Add elements <span className="text-gray-400">(A)</span>
            </Tooltip>
          </a>
          <a
            href="#"
            className="group relative rounded-xl p-2 text-gray-400 hover:bg-gray-100"
          >
            <LayoutIcon className="h-6 w-6 stroke-current" />
            <Tooltip>
              Layouts <span className="text-gray-400">(Y)</span>
            </Tooltip>
          </a>
          <a
            href="#"
            className="group relative rounded-xl p-2 text-gray-400 hover:bg-gray-100"
          >
            <Palette className="h-6 w-6 stroke-current" />
            <Tooltip>
              Themes <span className="text-gray-400">(T)</span>
            </Tooltip>
          </a>
          <a
            href="#"
            className="group relative rounded-xl p-2 text-gray-400 hover:bg-gray-100"
          >
            <FileIcon className="h-6 w-6 stroke-current" />
            <Tooltip>
              Assets <span className="text-gray-400">(S)</span>
            </Tooltip>
          </a>
          <a
            href="#"
            className="group relative rounded-xl p-2 text-gray-400 hover:bg-gray-100"
          >
            <ImageIcon className="h-6 w-6 fill-current" />
            <Tooltip>
              Images <span className="text-gray-400">(I)</span>
            </Tooltip>
          </a>
        </nav>
        <div className="flex flex-col items-center gap-y-4 py-10">
          <button className="group relative rounded-xl p-2 text-gray-400 hover:bg-gray-100">
            <AlertCircleIcon className="h-6 w-6 stroke-current" />
            <Tooltip>
              Help <span className="text-gray-400">(H)</span>
            </Tooltip>
          </button>
          <button className="group relative rounded-xl p-2 text-gray-400 hover:bg-gray-100">
            <SettingsIcon className="h-6 w-6 stroke-current" />
            <Tooltip>
              Settings <span className="text-gray-400">(T)</span>
            </Tooltip>
          </button>
          <button className="mt-2 rounded-full bg-gray-100">
            <img
              className="h-10 w-10 object-cover"
              src="/img/avatar.png"
              alt=""
            />
          </button>
        </div>
      </aside>
      <div className="flex h-screen flex-1 flex-col">
        <header className="flex h-18 items-center justify-center gap-x-6 border-b border-gray-200 bg-white px-8">
          <button className="flex items-center justify-center rounded-xl bg-gray-100 p-2">
            <ChevronLeftIcon className="h-6 w-6 stroke-current text-gray-400" />
          </button>
          <button className="flex flex-col items-start rounded-xl border border-gray-200 bg-gray-100 px-6 py-2">
            <div className="flex items-center gap-x-2">
              <span className="text-sm">Page: Homepage - Dipa</span>
              <ChevronDownIcon className="h-5 w-5 stroke-current text-gray-400" />
            </div>
            <div className="text-xs text-gray-400">
              https://dipainhouse.com/
            </div>
          </button>
          <button className="flex items-center justify-center gap-x-2 rounded-xl bg-gray-100 px-4 py-2">
            <EyeIcon className="h-6 w-6 stroke-current text-gray-400" />
            <span className="text-sm font-semibold leading-6">Preview</span>
          </button>

          {/* Separator */}
          <div className="h-full w-px bg-gray-200" />

          <div className="flex items-center gap-x-3">
            <button className="rounded-xl bg-gray-100 p-2 text-blue-600">
              <DeviceDesktopIcon className="h-6 w-6 stroke-current" />
            </button>
            <button className="rounded-xl p-2 text-gray-400 hover:bg-gray-100">
              <DeviceTabletIcon className="h-6 w-6 stroke-current" />
            </button>
            <button className="rounded-xl p-2 text-gray-400 hover:bg-gray-100">
              <DeviceMobileIcon className="h-6 w-6 stroke-current" />
            </button>
            <button className="rounded-xl p-2 text-gray-400 hover:bg-gray-100">
              <DeviceMobilerotatedIcon className="h-6 w-6 stroke-current" />
            </button>
          </div>

          {/* Separator */}
          <div className="h-full w-px bg-gray-200" />

          <button className="flex items-center justify-center gap-x-2 rounded-xl bg-gray-100 px-4 py-2">
            <span className="text-sm font-semibold leading-6">
              960 PX / 100%
            </span>
            <ChevronDownIcon className="h-6 w-6 stroke-current text-gray-400" />
          </button>

          <button className="flex items-center justify-center rounded-xl bg-gray-100 p-2">
            <PackageIcon className="h-6 w-6 stroke-current text-gray-400" />
          </button>
        </header>
        <main className="flex-1 overflow-y-scroll px-12">
          <div className="my-12 bg-white">
            <nav className="flex items-center justify-between px-12 py-6">
              <img className="h-11 w-11" src="/img/logo.png" alt="" />
              <div className="flex gap-x-6">
                <button className="rounded-full bg-blue-600 py-3 px-8 text-white">
                  Hire Us
                </button>
                <button className="p-2">
                  <BarsIcon className="h-6 w-6 stroke-current" />
                </button>
              </div>
            </nav>
            <section className="py-16">
              <div className="px-12">
                <div className="group relative">
                  <div className="pointer-events-none absolute inset-0 hidden border-2 border-blue-600 group-focus-within:block">
                    <div className="absolute -translate-y-full pl-2">
                      <div className="flex items-center gap-x-2 rounded-t-lg bg-blue-600 px-3 py-1 text-white">
                        <span className="text-sm">H1 - hero title</span>
                        <PencilIcon className="h-4 w-4 fill-current" />
                      </div>
                    </div>
                    <div className="absolute left-0 top-0 h-2 w-2 -translate-x-full -translate-y-full border-2 border-blue-600"></div>
                    <div className="absolute right-0 top-0 h-2 w-2 translate-x-full -translate-y-full border-2 border-blue-600"></div>
                    <div className="absolute right-0 bottom-0 h-2 w-2 translate-x-full translate-y-full border-2 border-blue-600"></div>
                    <div className="absolute left-0 bottom-0 h-2 w-2 -translate-x-full translate-y-full border-2 border-blue-600"></div>
                    <div className="absolute inset-x-0 top-0 flex -translate-y-1/2 items-center justify-center">
                      <div className="h-2 w-2 border-2 border-blue-600 bg-white"></div>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 flex translate-y-1/2 items-center justify-center">
                      <div className="h-2 w-2 border-2 border-blue-600 bg-white"></div>
                    </div>
                  </div>
                  <h1
                    className="max-w-3xl text-5xl font-bold leading-[1.4] focus:outline-none"
                    contentEditable
                  >
                    We craft digital products for business and user goals.
                  </h1>
                </div>
                <p className="mt-4 text-lg leading-loose text-gray-400">
                  Help find solutions with UI / UX designs that are intuitive
                  and in accordance with client business goals. We provide a
                  high-quality service in UI/ UX Design & Development.
                </p>
              </div>
              <div className="flex items-center gap-4 px-12 pt-8">
                <button className="rounded-full bg-blue-600 px-8 py-5 font-semibold text-white">
                  Let's work together
                </button>
                <button className="rounded-full border border-gray-200 px-8 py-5 font-semibold text-blue-600">
                  Check our work
                </button>
              </div>
            </section>
            <section className="bg-gray-50 py-16">
              <div className="px-12">
                <span className="text-sm uppercase text-gray-400">
                  Our Projects
                </span>
                <div className="flex items-center justify-between">
                  <h2 className="max-w-3xl text-4xl font-bold leading-[1.4]">
                    Our latest cool projects.
                  </h2>
                  <button className="rounded-full bg-white px-8 py-5 font-semibold text-blue-600">
                    Check our work
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-8 px-12 pt-8">
                <div className="flex aspect-square w-full items-center overflow-hidden bg-gray-100">
                  <img
                    className="h-full w-full object-cover"
                    src="/img/billy.png"
                    alt=""
                  />
                </div>
                <div className="flex aspect-square w-full items-center overflow-hidden bg-gray-100">
                  <img
                    className="h-full w-full object-cover"
                    src="/img/alpha-pay.png"
                    alt=""
                  />
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
      <aside className="flex h-screen w-[300px] flex-col border-l border-gray-200 bg-white">
        <div className="flex h-18 items-center gap-x-4 border-b border-gray-200 px-6">
          <button className="flex items-center justify-center gap-x-2 rounded-xl bg-gray-100 px-4 py-2">
            <UsersIcon className="h-5 w-5 stroke-current text-gray-400" />
            <span className="text-sm font-semibold leading-6">Invite</span>
          </button>
          <button className="flex flex-1 items-center justify-center gap-x-2 rounded-xl bg-blue-600 px-4 py-2 text-sm leading-6 text-white">
            Publish
          </button>
        </div>
        <div className="flex flex-1 flex-col overflow-y-auto">
          <div className="border-b border-gray-200 py-4 px-6">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold"> Selector </span>
              <span className="text-sm text-gray-400">
                Inheriting{" "}
                <span className="text-sm font-medium text-gray-900">
                  2 Selectors
                </span>
              </span>
            </div>
          </div>
          <div className="border-b border-gray-200 py-4 px-6">
            <button className="flex w-full items-center justify-between rounded-xl border border-gray-200 bg-gray-50 px-3 py-1.5">
              <div className="flex items-center gap-x-2">
                <span className="rounded-lg bg-white p-1 shadow">
                  <DeviceDesktopIcon className="h-5 w-5 stroke-current text-blue-600" />
                </span>
                <span className="rounded-lg bg-blue-100 py-1 px-3 text-sm font-semibold text-blue-600 ">
                  H1 - hero_title
                </span>
              </div>
              <ChevronDownIcon className="h-5 w-5 stroke-current text-gray-400" />
            </button>
            <div className="mt-2 text-xs text-gray-400">
              1 on this page, 7 on other pages
            </div>
          </div>
          <details className="group">
            <summary className="cursor-pointer list-none border-b border-gray-200 py-4 px-6">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold">Layout</span>
                <div className="rotate-90 rounded-lg p-1 transition-transform group-open:rotate-0">
                  <ChevronDownIcon className="h-5 w-5 stroke-current text-gray-400" />
                </div>
              </div>
            </summary>
            <div className="border-b border-gray-200 py-4 px-6">
              <div className="flex items-center justify-between">
                <button className="rounded-lg border border-gray-200 p-2 hover:bg-gray-100">
                  <AlignBottomIcon className="h-5 w-5 stroke-current text-gray-400" />
                </button>
                <button className="rounded-lg border border-gray-200 p-2 hover:bg-gray-100">
                  <AlignCenterIcon className="h-5 w-5 stroke-current text-gray-400" />
                </button>
                <button className="rounded-lg border border-gray-200 p-2 hover:bg-gray-100">
                  <AlignLeftIcon className="h-5 w-5 stroke-current text-gray-400" />
                </button>
                <button className="rounded-lg border border-gray-200 p-2 hover:bg-gray-100">
                  <AlignRightIcon className="h-5 w-5 stroke-current text-gray-400" />
                </button>
                <button className="rounded-lg border border-gray-200 p-2 hover:bg-gray-100">
                  <AlignTopIcon className="h-5 w-5 stroke-current text-gray-400" />
                </button>
                <button className="rounded-lg border border-gray-200 p-2 hover:bg-gray-100">
                  <AlignMiddleIcon className="h-5 w-5 stroke-current text-gray-400" />
                </button>
              </div>
            </div>
          </details>
          <details className="group">
            <summary className="cursor-pointer list-none border-b border-gray-200 py-4 px-6">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold">Spacing</span>
                <div className="rotate-90 rounded-lg p-1 transition-transform group-open:rotate-0">
                  <ChevronDownIcon className="h-5 w-5 stroke-current text-gray-400" />
                </div>
              </div>
            </summary>
            <div className="border-b border-gray-200 py-4 px-6">
              <div className="relative flex items-center rounded-xl border-2 border-dashed border-gray-200 py-10 px-12">
                <span className="absolute top-2 left-2 text-[10px] uppercase text-gray-400">
                  margin
                </span>
                <div className="relative w-full">
                  <div className="absolute inset-x-0 top-0 flex -translate-y-1/2 flex-col items-center gap-2">
                    <input
                      className="h-4 w-4 text-center text-sm outline-none"
                      defaultValue={20}
                    />
                    <div className="h-2 w-2 border-2 border-blue-600 bg-white" />
                    <input
                      className="h-4 w-4 text-center text-sm outline-none"
                      defaultValue={0}
                    />
                  </div>
                  <div className="absolute inset-y-0 right-0 flex translate-x-1/2 items-center gap-2">
                    <input
                      className="h-4 w-4 text-center text-sm outline-none"
                      defaultValue={0}
                    />
                    <div className="h-2 w-2 border-2 border-blue-600 bg-white" />
                    <input
                      className="h-4 w-4 text-center text-sm outline-none"
                      defaultValue={0}
                    />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 flex translate-y-1/2 flex-col items-center gap-2">
                    <input
                      className="h-4 w-4 text-center text-sm outline-none"
                      defaultValue={0}
                    />
                    <div className="h-2 w-2 border-2 border-blue-600 bg-white" />
                    <input
                      className="h-4 w-4 text-center text-sm outline-none"
                      defaultValue={20}
                    />
                  </div>
                  <div className="absolute inset-y-0 left-0 flex -translate-x-1/2 items-center gap-2">
                    <input
                      className="h-4 w-4 text-center text-sm outline-none"
                      defaultValue={0}
                    />
                    <div className="h-2 w-2 border-2 border-blue-600 bg-white" />
                    <input
                      className="h-4 w-4 text-center text-sm outline-none"
                      defaultValue={0}
                    />
                  </div>
                  <div className="h-24 w-full rounded-xl border-2 border-blue-600 px-10 py-8">
                    <div className="h-full w-full rounded bg-gray-200"></div>
                  </div>
                </div>
              </div>
            </div>
          </details>
          <details className="group">
            <summary className="cursor-pointer list-none border-b border-gray-200 py-4 px-6">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold">Size</span>
                <div className="rotate-90 rounded-lg p-1 transition-transform group-open:rotate-0">
                  <ChevronDownIcon className="h-5 w-5 stroke-current text-gray-400" />
                </div>
              </div>
            </summary>
            <div className="border-b border-gray-200 py-4 px-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="relative">
                    <div className="absolute inset-y-0 flex items-center px-4">
                      <span className="text-sm text-gray-400">W</span>
                    </div>
                    <input
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-right text-sm font-semibold leading-6"
                      type="text"
                      defaultValue="Auto"
                    />
                  </div>
                </div>
                <div>
                  <div className="relative">
                    <div className="absolute inset-y-0 flex items-center px-4">
                      <span className="text-sm text-gray-400">H</span>
                    </div>
                    <input
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-right text-sm font-semibold leading-6"
                      type="text"
                      defaultValue="Auto"
                    />
                  </div>
                </div>
                <div>
                  <div className="relative">
                    <div className="absolute inset-y-0 flex items-center px-4">
                      <span className="text-sm text-gray-400">Min W</span>
                    </div>
                    <input
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-right text-sm font-semibold leading-6"
                      type="text"
                      defaultValue="Auto"
                    />
                  </div>
                </div>
                <div>
                  <div className="relative">
                    <div className="absolute inset-y-0 flex items-center px-4">
                      <span className="text-sm text-gray-400">Max W</span>
                    </div>
                    <input
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-right text-sm font-semibold leading-6"
                      type="text"
                      defaultValue="Auto"
                    />
                  </div>
                </div>
                <div>
                  <div className="relative">
                    <div className="absolute inset-y-0 flex items-center px-4">
                      <span className="text-sm text-gray-400">Max W</span>
                    </div>
                    <input
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-right text-sm font-semibold leading-6"
                      type="text"
                      defaultValue="Auto"
                    />
                  </div>
                </div>
                <div>
                  <div className="relative">
                    <div className="absolute inset-y-0 flex items-center px-4">
                      <span className="text-sm text-gray-400">Max H</span>
                    </div>
                    <input
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-right text-sm font-semibold leading-6"
                      type="text"
                      defaultValue="Auto"
                    />
                  </div>
                </div>
                <div className="col-span-2">
                  <button className="relative w-full rounded-xl border border-gray-200 bg-gray-50 py-2 pl-4 pr-10 text-right">
                    <div className="absolute inset-y-0 flex items-center px-4">
                      <span className="text-sm text-gray-400">Overflow</span>
                    </div>
                    <span className="flex items-center justify-end gap-x-2 text-sm font-semibold leading-6">
                      <EyeIcon className="h-5 w-5 stroke-current text-gray-400" />
                      <span>Invisible</span>
                    </span>
                    <div className="absolute inset-y-0 right-0 flex items-center px-4">
                      <ChevronDownIcon className="h-5 w-5 stroke-current text-gray-400" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </details>
          <details className="group">
            <summary className="cursor-pointer list-none border-b border-gray-200 py-4 px-6">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold">Typography</span>
                <div className="rotate-90 rounded-lg p-1 transition-transform group-open:rotate-0">
                  <ChevronDownIcon className="h-5 w-5 stroke-current text-gray-400" />
                </div>
              </div>
            </summary>
          </details>
          <details className="group">
            <summary className="cursor-pointer list-none border-b border-gray-200 py-4 px-6">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold">Position</span>
                <div className="rotate-90 rounded-lg p-1 transition-transform group-open:rotate-0">
                  <ChevronDownIcon className="h-5 w-5 stroke-current text-gray-400" />
                </div>
              </div>
            </summary>
          </details>
          <details className="group">
            <summary className="cursor-pointer list-none border-b border-gray-200 py-4 px-6">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold">Border</span>
                <div className="rotate-90 rounded-lg p-1 transition-transform group-open:rotate-0">
                  <ChevronDownIcon className="h-5 w-5 stroke-current text-gray-400" />
                </div>
              </div>
            </summary>
          </details>
          <details className="group">
            <summary className="cursor-pointer list-none border-b border-gray-200 py-4 px-6">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold">Background</span>
                <div className="rotate-90 rounded-lg p-1 transition-transform group-open:rotate-0">
                  <ChevronDownIcon className="h-5 w-5 stroke-current text-gray-400" />
                </div>
              </div>
            </summary>
          </details>
        </div>
      </aside>
    </div>
  );
}

export default App;
