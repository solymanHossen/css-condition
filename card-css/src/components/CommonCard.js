import React from 'react';
import CardHeader from './CardHeader';
import Search from './Search';

const CommonCard = ({data,searchItems}) => {
  return (
    <div>
      <div className="container">
    <Search searchItems={searchItems}/>
      <CardHeader data={data}/>
      </div>
    </div>
  );
};

export default CommonCard;