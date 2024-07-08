import React from "react";
import { createContext, useEffect, useState } from "react";


export const mediaContext = createContext({});

const MediaWrapper = ({children}) => {
  const [mediaWidth, setMediaWidth] = useState(window.innerWidth);
  const update = () => setMediaWidth(window.innerWidth)
  const [search, setSearch] = useState('')
  useEffect(() => {
      window.addEventListener('resize', update)
      
      return () => window.removeEventListener('resize', update)
    },  [])

  return <mediaContext.Provider value={{mediaWidth, search, setSearch}}>{children}</mediaContext.Provider>;
};

export default MediaWrapper;
