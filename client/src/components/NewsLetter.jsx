import React from 'react';

function NewsLetter() {
  return (
<div class="flex flex-col items-center justify-between rounded-2xl bg-gray-800 py-8 px-12 sm:flex-row sm:gap-5">
  <h4 class="mb-5 font-bold text-white sm:mb-0 md:min-w-fit">Subscribe For Latest Newsletter</h4>
  <div class="flex flex-col gap-3 pb-1 sm:flex-row sm:gap-0 sm:pb-0">
    <input type="email" class="text-md relative w-64 rounded-lg border-2 border-gray-200 bg-gray-100 p-3 text-gray-600 placeholder-gray-400 focus:border-blue-600 disabled:border-gray-300 disabled:bg-gray-300 sm:w-60 md:w-72 lg:w-96" placeholder="Your Email" />
    <button class="rounded-r-md rounded-l-md sm:rounded-l-none sm:rounded-r-md text-md relative bg-blue-600 px-6 py-3 font-medium text-white transition-all hover:bg-blue-700 disabled:bg-gray-400 sm:-left-2 md:px-8 lg:px-12">Subscribe</button>
  </div>
</div>
  )
}
export default NewsLetter;