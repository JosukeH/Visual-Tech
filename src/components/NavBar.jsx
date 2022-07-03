import React from 'react'

const NavBar = () => {
  return (
    <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
    <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
      <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
        <div className="flex items-center justify-between w-full md:w-auto">
          <a href="#">
            <span className="sr-only">Workflow</span>
            <img alt="Workflow" className="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" />
          </a>
          <div className="-mr-2 flex items-center md:hidden">
            <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-vtwhite hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
        <a href="#" className="font-medium text-vtwhite hover:text-gray-900">Product</a>

        <a href="#" className="font-medium text-vtwhite hover:text-gray-900">Features</a>

        <a href="#" className="font-medium text-vtwhite hover:text-gray-900">Marketplace</a>

        <a href="#" className="font-medium text-vtwhite hover:text-gray-900">Company</a>

        <a href="#" className="font-medium text-indigo-500 hover:text-blue-500">Log in</a>
      </div>
    </nav>
  </div>

  )
}

export default NavBar