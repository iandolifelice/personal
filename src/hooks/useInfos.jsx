import { useContext } from "react";
import { LanguageCtx } from "./../contextes/Language";


function useInfos(props){
    let context = useContext(LanguageCtx);
    if (context === undefined){
        throw new Error("Le contexte n'existe pas");
    }

    return context;

}
export default useInfos;
