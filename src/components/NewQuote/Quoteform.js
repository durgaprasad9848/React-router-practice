import React,{Fragment, useRef,useState} from "react";
 

export const Quoteform = (props) =>{
    const[isEntering,setIsEntering] = useState(false);
    const text = useRef();
    const author = useRef();
    const submithandler = (e)=>{
        e.preventDefault();
    
        props.addQuote({author :author.current.value, text : text.current.value });
    }

    const focusHandler = ()=>{
        console.log("Focus");
        setIsEntering(true);
    }
    return(<Fragment>
       
        <form onSubmit={submithandler} onFocus={focusHandler}>
            <label>Author</label>
            <input type= "text" ref={author}/>
            <label>Text</label>
            <input type = "text" ref={text}/>
            <button>Add a Quote</button>
        </form>
    </Fragment>)
    
}