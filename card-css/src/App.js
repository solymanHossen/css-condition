import React from 'react';
import '../src/styles/main.scss'
import CommonCard from './components/CommonCard';
import {sampleData as data} from "../src/data"




const App = () => {
  
  return (
    <div>
      <CommonCard data={data}/>
    </div>
  );
};

export default App;