import React, { Fragment } from "react";
import { useParams, Route, NavLink,Routes,BrowserRouter } from "react-router-dom";
import {Comments} from "./Comments/Comments";


const DUMMY_QUOTES = [
    { id: 'q1', author: 'Max', text:'Learning React is fun!'},
    { id: 'q2', author: 'Min', text: 'Learning React is great!'},
];

export const QuoteDetail = () => {
  const params = useParams();

  const quote = DUMMY_QUOTES.find((quote)=> quote.id === params.quoteId);
  
  if(!quote)
  {
    return (<p>No Quote found</p>)
  }

  return (
    <Fragment>
      <h1> Quote Detail Page</h1>
    {quote.author} ---  {quote.text}
        
      <p>{params.quoteId}</p>
             
    </Fragment>
  );
};
