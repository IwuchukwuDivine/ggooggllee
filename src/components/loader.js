import React from "react";
import { Puff } from 'react-loader-spinner';

const Loading = () => {
  return (
    <div className="flex justify-center items-center">
      <Puff color="#DB3E25" height={550} width={80} /> 
    </div>
  )
}

export default Loading;
