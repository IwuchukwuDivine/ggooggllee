import React from 'react'

const News = ({res}) => {
  return (
    <div className='flex align-center gap-6 mb-8' >
      <div>
        <div className='flex items-center gap-2 text-sm font-normal dark:text-dark-grey-2 text-text-grey-2'>
            <img className='object-cover object-center w-5' src={res?.meta_url.favicon} alt={res.type}/>
            <span>{res.meta_url?.netloc}</span>
            <span className='font-bold text-2xl'>&#183;</span>
            <span> {res?.age}</span>
        </div>
        <a href={res?.url} target='_blank' rel='noreferrer'>
            <p className='text-blue dark:text-dark-blue text-xl my-2'>{res?.title}</p>
        </a>
        <p className='text-light-black dark:text-[#a1b2ba]'>{res?.description}</p>
      </div>
      <div className='min-w-[150px]'>
        <a href={res.url} target='_blank' rel='noreferrer'>
        <img className='w-full object-cover object-center rounded-md' src={res?.thumbnail?.src} alt={res?.type}/>
        </a>
      </div>
    </div>
  )
}

export default News
