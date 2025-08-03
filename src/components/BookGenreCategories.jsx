import React from 'react'

function BookGenreCategories({genreName,bgColor}) {
    const categoryclass="w-60 h-fit py-0.5 px-2 mt-5 "+bgColor+" border-2 border-white text-black";
  return (
    <div className={categoryclass}>{genreName}</div>
  )
}

export default BookGenreCategories