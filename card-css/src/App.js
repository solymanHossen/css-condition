import React, { useEffect, useState } from 'react';
import '../src/styles/main.scss'
import CommonCard from './components/CommonCard';
// import {sampleData as Users} from "../src/data"
import {sampleData} from "../src/data"




const App = () => {
  const [filteredResults, setFilteredResults] = useState(sampleData);

  const searchItems = (searchValue) => {
    if(!searchValue){
      setFilteredResults(sampleData)
    }
    if (searchValue !== "") {
        const filteredData = sampleData.filter((item) => item.name.toLocaleLowerCase().includes(searchValue.toLowerCase()));
        setFilteredResults(filteredData)
        console.log('filteredData',filteredData);
    }
}

  return (
    <div>
     <CommonCard searchItems={searchItems} data={filteredResults}/>       
      
    </div>
  );
};

export default App;