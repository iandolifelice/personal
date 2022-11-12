import { createContext, useState } from "react";

export const LanguageCtx = createContext();

function Language(props){
    const [state , setState] = useState({
        lang: "eng",
        setLang: (newLang)=>{
            setState(state=>({...state, lang: newLang}))
        }
    });
    return (
        <LanguageCtx.Provider value = {state}>{props.children}</LanguageCtx.Provider>
    )
}

export default Language;