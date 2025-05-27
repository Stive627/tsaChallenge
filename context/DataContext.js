import { createContext, useContext, useState } from "react";

const DataContext = createContext(undefined);

export const DataProvider = ({ children }) => {
  const [data, setData] = useState({score:'undefined', userAnswer:undefined});

  return (
    <DataContext.Provider
      value={{
        data,
        handleData: (score, useranswer) => setData({...data, score:score, userAnswer:useranswer}),
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData= () => useContext(DataContext)