import React from 'react'
import ReactPlayer from 'react-player'

const Videos = ({res}) => {
    function convertToShorthand(number) {
        if (number >= 1_000_000) {
          return (number / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M';
        } else if (number >= 1_000) {
          return (number / 1_000).toFixed(1).replace(/\.0$/, '') + 'K';
        } else {
          return number?.toString();
        }
      }
  return (
    <div className='flex items-center gap-5 mb-8'>
        <div>
        <ReactPlayer url={res?.url} controls width={300} height={200} />
        </div>
        <div>
            <div className='flex items-center gap-2 text-sm text-text-grey-2 dark:text-dark-grey-2'>
                <img className='w-5' src={res.meta_url?.favicon} alt='favicon' />
                <span>{res.video?.publisher}</span>
                <span>&gt;</span>
                <span>{res.video?.creator}</span>
            </div>
            <a href={res?.url} target='_blank' rel='noreferrer'>
                <p className='text-blue dark:text-dark-blue text-2xl my-2'>{res?.title}</p>
            </a>
            <p className='text-light-black dark:text-dark-light'>{res?.description}</p>
            <p className='flex gap-2 my-1 items-center text-sm text-text-grey-2 dark:text-dark-grey-2'>
                <span>{res?.age}</span>
                <span className="material-symbols-outlined text-[14px]">visibility</span>
                <span>{convertToShorthand(res.video?.views)}</span>
            </p>
        </div>
    </div>
  )
}

export default Videos
