import {useContext} from 'react';
import { GlobalContext } from '../contexts/Global.context';

const useGlobalContext = () => useContext(GlobalContext)

export default useGlobalContext;