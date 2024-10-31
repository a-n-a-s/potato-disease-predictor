

const Header = () => {
    return(
        <header class="text-gray-600 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-10 h-10 bg-purple-500 p-2 text-white rounded-full"
              viewBox="0 0 24 24"
            >
              <g width="100%" height="100%" transform="matrix(1,0,0,1,0,0)"><path d="m23.458.047c-.574.024-14.099.646-18.57,5.117-3.727,3.727-3.842,9.719-.345,13.585L.005,23.288l.707.707,4.539-4.539c1.872,1.693,4.242,2.539,6.611,2.539,2.525,0,5.051-.961,6.974-2.884C23.397,14.55,23.958,1.134,23.979.565l.021-.542-.541.023Zm-5.33,18.357c-3.336,3.336-8.694,3.451-12.169.343l10.394-10.394-.707-.707-10.394,10.394c-3.108-3.476-2.994-8.833.343-12.169C9.308,2.16,20.354,1.243,22.951,1.077c-.156,2.584-1.034,13.54-4.822,17.327Z" fill="#fff" fill-opacity="1" data-original-color="#000000ff" stroke="none" stroke-opacity="1"/></g>
            </svg>
            <span class="ml-3 text-xl">Potato Disease Detector</span>
          </a>
        </div>
      </header>
    )
}
export default Header