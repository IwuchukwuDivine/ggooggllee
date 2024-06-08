import React from 'react'
import { useContext, useEffect, useState } from 'react';
import ResultContext from '../contexts/ResultsContext';
import { useLocation } from 'react-router-dom';
import Loading from './loader';

const Results = () => {
    const { resultLoading, searchTerm, getResults, results } = useContext(ResultContext)
    const location = useLocation();
    const currentPath = location.pathname;
    
    useEffect(() => {
          getResults(`${currentPath}/search?q=${searchTerm}`)
    }, [searchTerm, currentPath]);

  
    if (resultLoading) return <Loading />;
  
}

export default Results
