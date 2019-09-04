import React from 'react';
import {HorizontalBar} from 'react-chartjs-2';

var createReactClass = require('create-react-class');
const data = {
 
  datasets: [
    {
      label: 'amoxicillina',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      data: [65]
    },
    {
        label: 'Naproxen',
        backgroundColor: 'rgba(24,4,181,0.2)',
        borderColor: 'rgba(24,4,181,1)',
        borderWidth: 1,
        data: [50]
    },
    {
        label: 'Omeoprazole',
        backgroundColor: 'rgba(5,140,0,0.2)',
        borderColor: 'rgba(5,140,0,1)',
        borderWidth: 1,
        data: [80]
    },
    {
        label: 'Antibiotic',
        backgroundColor: 'rgba(247,231,2,0.2)',
        borderColor: 'rgba(247,231,2,1)',
        borderWidth: 1,
        data: [25]
    },
   
  ]
};

export default createReactClass({
  displayName: 'BarExample',

  render() {
    return (
      <div>
        <HorizontalBar 
        data={data}
        width={350}
        height={400} />
        <h5 style={{textAlign:"center"}}>QUANTITY</h5>
      </div>
    );
  }
});