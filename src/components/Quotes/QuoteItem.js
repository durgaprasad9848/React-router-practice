import React from "react";
import { Link } from "react-router-dom";

export const QuoteItem = (props) =>{
    const{id,author,text} = props;
    return(<div>
       <section>
        {id} - {author} - {text}
        <Link to ={`/quotes/${props.id}`}>
        <button>Quote Details</button>
        </Link>
       </section>
            
    </div>)
}