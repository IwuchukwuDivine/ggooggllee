import React, { createContext, useState } from 'react';

const ResultContext = createContext();
const baseUrl = 'https://api.search.brave.com/res/v1'

export const ResultProvider = ({ children }) => {
    const [resultLoading, setResultLoading] = useState(false)
    const [searchTerm,  setSearchTerm] = useState('Books+search')
    const [results, setResults] = useState([])
    
    const getResults = async (terms, type='web') => {
        setResultLoading(true);
        try{
            const res = await fetch(`${baseUrl}${terms}`,{
                method: 'GET',
                headers: {
                    "Accept": "application/json" ,
                    "X-Subscription-Token": process.env.REACT_APP_SEARCH_KEY
                }}
            );
            if (!res.ok) {
                const errorText = await res.text();
                console.error(`Error: ${res.status} - ${errorText}`);
                throw new Error(`HTTP error! Status: ${res.status} - ${errorText}`);
            }
            const data = await res.json()
            setResults(data.results || [])
            console.log(data)
        }catch(error){
            console.error(error)
        }finally{
            setResultLoading(false);
        }
    }

  return (
    <ResultContext.Provider value={{ resultLoading, searchTerm, setSearchTerm, getResults, results }}>
      {children}
    </ResultContext.Provider>
  );
};

export default ResultContext;
