import React, { useState, createContext } from "react";
export const Sidebarcontext = createContext();
const SidebarContext = ({ children }) => {
  const [isopen, setisopen] = useState(false);

  const handleclose = () => {
    setisopen(false);
  };
  return (
    <Sidebarcontext.Provider value={{ isopen, handleclose, setisopen }}>
      {children}
    </Sidebarcontext.Provider>
  );
};

export default SidebarContext;
