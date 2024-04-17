import { useContext } from "react"
import { PredicedContext } from "../context/prediccion"


export const usePredicer = () => {
    const context = useContext(PredicedContext);

    if(context == undefined){
        console.log("El elemento debe de estar rodeado de un provider");    
    }
    return context
}
