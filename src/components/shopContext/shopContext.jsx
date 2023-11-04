import React, { createContext, useState } from "react";

export const ShopContext = createContext();

export const ShopComponentContext = ({ children }) => {
  const [numero, setNumero] = useState(1);

  return (
    <ShopContext.Provider value={{ numero, setNumero }}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopComponentContext;
