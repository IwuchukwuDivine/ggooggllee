import React from 'react'

const ImagesSearch = ({src}) => {
  return (
    <div className="masonry-item" >
    <div className=" rounded-md overflow-hidden shadow-md">
      <img
        src={src.thumbnail?.src}
        alt={`Gallery`}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex items-center gap-1 my-2">
          <img
            className="object-cover object-center w-5 rounded-sm"
            src={src.meta_url?.favicon}
            alt="source"
          />
          <span className="text-text-grey-2 dark:text-dark-grey-2">{src?.source}</span>
        </div>
        <p className="truncate text-light-black font-medium dark:text-dark-light">{src?.title}</p>
      </div>
    </div>
  </div>
  )
}

export default ImagesSearch
