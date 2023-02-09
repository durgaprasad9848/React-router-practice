import React from 'react';
import { useParams } from 'react-router-dom';

export const Comments=()=> {
  const param = useParams();
    return (
       <div>
            {param.quoteId}
            <h1>Comments Page</h1>

       </div> 
    
  );
}

 