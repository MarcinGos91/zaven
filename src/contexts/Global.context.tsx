import { createContext, FunctionComponent, ReactNode, useState } from "react";
import { ALL_CHARACTERS } from '../config/constants'

interface globalContextInt {
  filterValue: string,
  status: string,
  handleNewFilterValue: (newValue: string) => void,
  handleSetNewStatus: (newStatus: string) => void
}

interface providerInt {
  children: ReactNode;
}

export const GlobalContext = createContext<globalContextInt>({} as globalContextInt);


const GlobalContextProvider:FunctionComponent<providerInt> = ({children}) => {

  const [filterValue, setFilterValue] = useState<string>('')
  const [status, setStatus] = useState<string>(ALL_CHARACTERS)
  const handleNewFilterValue = (newValue: string):void => setFilterValue(newValue)
  const handleSetNewStatus = (newStatus: string): void => setStatus(newStatus)

  return (
    <GlobalContext.Provider value={{filterValue, status, handleSetNewStatus, handleNewFilterValue}}>
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalContextProvider;

