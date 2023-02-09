import React from "react";
import { Quoteform } from "./NewQuote/Quoteform";
import {useNavigate} from 'react-router-dom';

export const NewQuote = () =>{
    const navigate = useNavigate();
    const addQuoteHandler = (quotedata) =>{
        console.log(quotedata);
        navigate('/quotes');
    }
    return(<div>NewQuote
            <Quoteform addQuote={addQuoteHandler}></Quoteform>
    </div>);
}