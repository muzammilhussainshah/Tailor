import React,{useEffect} from 'react';
import StackNavigation from './src/navigation/StackNavigation'
const App = () => {
  useEffect(() => {
    console.disableYellowBox = true
  }, [])
  return (
      <StackNavigation />
  )
};
export default (App);
