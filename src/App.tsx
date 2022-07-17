import React, { FunctionComponent} from 'react'
import  Main from './pages/Main.page';
import { Header } from './components'

interface propsInt {

}

const App:FunctionComponent<propsInt> = ({}) => {

  return (
      <div className='app' >
        <Header />
        <Main />
      </div>
    )
}

export default App;