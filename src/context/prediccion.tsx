import { ReactNode, createContext, useState } from "react";
import { Prediced } from "../types/prediced";

export const PredicedContext = createContext<Prediced>({
    predicedFeel : "" ,
    predicedText : "",
    setPredicedFeel : () => {},
    setPredicedText: () => {}
});

export const PredicedProvider = ({ children }: { children: ReactNode }) => {
  const [predicedFeel, setPredicedFeel] = useState("");
  const [predicedText, setPredicedText] = useState("");

  return (
    <PredicedContext.Provider
      value={{ predicedFeel, predicedText, setPredicedFeel, setPredicedText }}
    >
      {children}
    </PredicedContext.Provider>
  );
};

