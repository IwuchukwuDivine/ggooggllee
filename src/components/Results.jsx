import React from 'react'
import { useContext, useEffect} from 'react';
import ResultContext from '../contexts/ResultsContext';
import { useLocation } from 'react-router-dom';
import Loading from './loader';
import WebSearch from './web';
import ImagesSearch from './images';
import '../style/main.css'
import News from './News';
import Videos from './Videos';

const Results = () => {
    const { resultLoading, searchTerm, getResults, results } = useContext(ResultContext)
    const location = useLocation();
    const currentPath = location.pathname;
    
    useEffect(() => {
          if(searchTerm.trim()){
            getResults(`${currentPath}/search?q=${searchTerm}`)
          }
    }, [searchTerm, currentPath]);

  
    if (resultLoading) return <Loading />;
    switch (currentPath) {
        case '/web':
            return(
                <div className='mx-20 my-10 rounded-3xl max-w-[900px] p-10 border border-light-grey border-solid dark:border-dark-border'>
                    {results.map((res, index) => (
                        <WebSearch res={res} key={index}/>
                    ))}
                </div>
            )
    
        case '/images':
            return(
              <div className="container mx-auto p-6 max-w-[1200px]">
                <div className="masonry">
                  {results.map((src, index) => (
                  <ImagesSearch key={index} src={src} />
                  ))}
                </div>
              </div>
            )
        case '/news':
          return(
            <div className='mx-20 my-10 rounded-3xl max-w-[900px] p-10 border border-light-grey border-solid dark:border-dark-border'>
                    {results.map((res, index) => (
                        <News res={res} key={index}/>
                    ))}
                </div>
          )
        case '/videos':
          return(
            <div className='mx-20 my-10 rounded-3xl max-w-[900px] p-10 border border-light-grey border-solid dark:border-dark-border'>
            {results.map((res, index) => (
                <Videos res={res} key={index}/>
            ))}
        </div>
          )
        default:
            return 'ERROR'
            }
  
  
}

export default Results
