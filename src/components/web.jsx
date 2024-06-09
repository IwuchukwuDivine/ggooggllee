import React from 'react'

const WebSearch = ({res}) => {
  return (
    <div className='mb-8'>
        <div className='flex items-center gap-3 mb-2'>
            <div className='flex rounded-lg items-center justify-center bg-favicon w-[35px] h-[35px]'>
            <img className='object-center object-cover w-6'  src={res.profile?.img} alt='favicon'/>
            </div>
            <div>
                <h6 className='font-semibold dark:text-dark-light text-light-black text-lg'>{res.profile?.name}</h6>
                <a href={res.profile?.url} target="_blank" rel="noreferrer">
                    <p className='text-text-grey-2 text-sm dark:text-dark-grey-2'>{res.profile?.long_name}{res.meta_url?.path}</p>
                </a>
            </div>
        </div>
        <a href={res.profile?.url} target="_blank" rel="noreferrer">
            <h2 className='text-blue dark:text-dark-blue mb-2 text-[20px] hover:underline font-normal'>{res?.title}</h2>
        </a>
        <div className='text-light-black dark:text-dark-light'>
            <span>{res?.age}</span> - <span dangerouslySetInnerHTML={{ __html: res?.description }}></span>
        </div>
    </div>               
  )
}

export default WebSearch
