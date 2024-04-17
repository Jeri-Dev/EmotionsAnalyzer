import { Dispatch, SetStateAction } from "react"

export type Prediced = {
    predicedFeel : string 
    predicedText : string
    setPredicedFeel : Dispatch<SetStateAction<string>>
    setPredicedText: Dispatch<SetStateAction<string>>
}