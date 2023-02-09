import React from "react";
import { QuoteList } from "./Quotes/QuoteList";

const DUMMY_QUOTES = [
    { id: 'q1', author: 'Max', text:'Learning React is fun!'},
    { id: 'q2', author: 'Min', text: 'Learning React is great!'},
];

export const AllQuotes = () => {
  return(<QuoteList quotes = {DUMMY_QUOTES}/>);
};
