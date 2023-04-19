import { useEffect } from "react";
import { useState } from "react";
import { Ajax } from "../../services/AjaxService";

export function Jokes(props) {
    const [Joke, setJoke] = useState('Loading..');
    useEffect(()=>{
        //initiate ajax calling
        const ajax = new Ajax();
        (async function() {
            const data = await ajax.getData();
            setJoke(data.value);
        })();
        
    },[]);
    return (
        <div>{Joke}</div>
    );
}