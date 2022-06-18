import { Menu } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'

export default function Dropdown1() {
  return (
    <div>
      <div className="min-h-screen bg-indigo-400 w-96 mx-auto flex justify-end p-4">
        <Menu as="div" className="relative">
          <Menu.Button className="inline-flex justify-center w-full rounded-sm border border-gray-400 shadow-sm px-4 bg-white text-sm font-medium text-gray-700 hover:bg-gray-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
            Options Menu
            <ChevronDownIcon
              className="-mr-1 ml-2 h-5 w-5"
              aria-hidden="true"
            />
          </Menu.Button>
          <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-500 focus:outline-none">
            <Menu.Item>
              <a
                href=""
                className="group flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-indigo-500 hover:text-white"
              >
                tet set{' '}
              </a>
            </Menu.Item>
          </Menu.Items>
        </Menu>
      </div>

      {/* // <Menu>
    //   <Menu.Button>More</Menu.Button>
    //   <Menu.Items>
    //     <Menu.Item>
    //       {({ active }) => (
    //         <a
    //           className={`${active && 'bg-blue-500'}`}
    //           href="/account-settings"
    //         >
    //           Account settings
    //         </a>
    //       )}
    //     </Menu.Item>
    //     <Menu.Item>
    //       {({ active }) => (
    //         <a
    //           className={`${active && 'bg-blue-500'}`}
    //           href="/account-settings"
    //         >
    //           Documentation
    //         </a>
    //       )}
    //     </Menu.Item>
    //     <Menu.Item disabled>
    //       <span className="opacity-75">Invite a friend (coming soon!)</span>
    //     </Menu.Item>
    //   </Menu.Items>
    // </Menu> */}
    </div>
  )
}
