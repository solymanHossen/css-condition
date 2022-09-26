import React from 'react';
import CardHeader from './CardHeader';
import Search from './Search';

const CommonCard = ({data}) => {
  return (
    <div>
      <div className="container">
      <Search/>
      <CardHeader data={data}/>
      </div>
    </div>
  );
};

export default CommonCard;