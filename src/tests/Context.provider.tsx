import React, {FunctionComponent, ReactNode} from 'react'
import GlobalContextProvider from '../contexts/Global.context'
import { QueryClientProvider } from 'react-query';
import { queryClient } from '../config/reactQuery.config'

interface providerInt {
  children: ReactNode;
}

const ContextProvider:FunctionComponent<providerInt> = ({children}) => {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalContextProvider>
        {children}
      </GlobalContextProvider>
  </QueryClientProvider>
  )
}

export default ContextProvider;