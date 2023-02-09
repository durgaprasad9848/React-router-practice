import logo from "./logo.svg";
import "./App.css";
import  Navbar  from "./components/Navbar";
import { AllQuotes } from "./components/AllQuotes";
import { NewQuote } from "./components/NewQuote";
import { QuoteDetail } from "./components/QuoteDetail";
import { Comments } from "./components/Comments/Comments";
import { Notfound } from "./components/Notfound";

import React from "react";
import { BrowserRouter, Route,Routes } from "react-router-dom";
 

function App() {
  return (
   
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path ="quotes" element ={<AllQuotes/>}/>
        <Route path = "/quotes/:quoteId" element={<QuoteDetail/>} />
        <Route path = "new-quote" element={<NewQuote/>}/>
        <Route path = "/quotes/:quoteId/comments" element = {<Comments/>}/>
        <Route path ="*" element ={<Notfound/>}></Route>
      </Routes>
      </BrowserRouter>
 
        
    </div>
        

  );
}

export default App;
