export default function Sidebar() {
    return (
        <div className="w-64 h-full bg-white shadow-lg rounded-r-lg">
            <div className="flex flex-col h-full">
                <div className="flex items-center px-4 py-6 border-b">
                    <img
                        className="h-12 w-auto"
                        src="/images/R-Wx_NHvZBci3KLrgXhp1.png"
                        alt="Logo"
                    />
                </div>
                {/* chats */}
                <div className="flex">
                    <div className="w-full m-3 p-2 rounded-md border-emerald-500 text-emerald-500 button border-2">New chat</div>
                </div>
                <div className="flex-grow overflow-y-auto">
                    <div className="px-4">
                        <div className="text-xs font-semibold text-gray-400 uppercase mt-8">Main</div>
                        <nav className="flex flex-col mt-4 space-y-2">
                            <a
                                href="#"
                                className="flex items-center py-3 px-4 rounded-md text-sm font-medium text-gray-800 hover:bg-gray-100 hover:text-blue-600 transition duration-200"
                            >
                                <svg
                                    className="mr-4 h-5 w-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                    />
                                </svg>
                                Dashboard
                            </a>
                            <a
                                href="#"
                                className="flex items-center py-3 px-4 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-blue-600 transition duration-200"
                            >
                                <svg
                                    className="mr-4 h-5 w-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                                    />
                                </svg>
                                Messages
                                <span className="ml-auto rounded-full bg-blue-600 px-2 text-xs text-white">
                                    6
                                </span>
                            </a>
                            <div className="relative transition">
                                <input
                                    className="peer hidden"
                                    type="checkbox"
                                    id="menu-1"
                                />
                                <button className="flex items-center py-3 px-4 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-blue-600 transition duration-200">
                                    <span className="mr-5 w-5">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                            />
                                        </svg>
                                    </span>
                                    Analytics
                                    <label
                                        htmlFor="menu-1"
                                        className="absolute inset-0 h-full w-full cursor-pointer"
                                    />
                                </button>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute right-0 top-4 ml-auto mr-5 h-4 text-gray-600 transition peer-checked:rotate-180 peer-hover:text-blue-600"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                                <ul className="duration-400 flex m-2 max-h-0 flex-col overflow-hidden rounded-xl bg-gray-100 font-medium transition-all duration-300 peer-checked:max-h-96">
                                    <li className="flex m-2 cursor-pointer py-3 pl-5 text-sm text-gray-600 transition-all duration-100 ease-in-out hover:bg-gray-200 hover:text-blue-600">
                                        Revenue
                                    </li>
                                    <li className="flex m-2 cursor-pointer py-3 pl-5 text-sm text-gray-600 transition-all duration-100 ease-in-out hover:bg-gray-200 hover:text-blue-600">
                                        Refunds
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}