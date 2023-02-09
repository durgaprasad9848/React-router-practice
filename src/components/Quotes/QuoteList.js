import React, { Fragment } from "react";
import { useNavigate,useLocation } from "react-router-dom";
import { QuoteItem } from "./QuoteItem";

const sortQuotes = (quotes,ascending) =>{
    return quotes.sort((quoteA,quoteB)=>{
        if(ascending){
            return quoteA.id > quoteB.id ? 1 : -1;
        }
        else{
            return quoteA.id < quoteB.id ? 1 : -1;
        }
    });
};



export const QuoteList = (props) =>{

   

  



    console.log(props.quotes);
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);
    
    const queryParams = new URLSearchParams(location.search);

    const isSortingAscending = queryParams.get('sort') === 'asc';

    const sortedQuotes = sortQuotes(props.quotes,isSortingAscending);

    const changeSortingHandler = () =>{
        navigate('/quotes?sort='+ (isSortingAscending ? 'desc' : 'asc'));
    }

    return(<Fragment>
        <div>
            <button onClick={changeSortingHandler}>Sort {isSortingAscending ? 'Assending':'Dessing'}</button>
        </div>
        <ul>
            {props.quotes.map((quote)=>(
                <QuoteItem
                key = {quote.id}
                id= {quote.id}
                author ={quote.author}
                text = {quote.text}
                />
            ))}
        </ul>
    </Fragment>);
};