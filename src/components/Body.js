import React, { useState, useEffect} from 'react';
import './Body.css';
import Data from './tutors.json';

const temp = [
    {
        id : 1,
        coordinates: ['-71%','88%'],
        radius : '7vw',
        url : ""
    },{
        id : 2,
        coordinates: ['-11%','69%'],
        radius : "8vw",
        url : ""
    },{
        id : 3,
        coordinates: ['54%','88%'],
        radius : '3vw',
        url : ""
    },{
        id : 4,
        coordinates: ['31%','53%'],
        radius : '3vw',
        url : ""
    },{
        id : 5,
        coordinates: ['44%','39%'],
        radius : '4vw',
        url : ""
    },{
        id : 6,
        coordinates: ['-20%','24%'],
        radius : '7vw',
        url : ""
    },{
        id : 7,
        coordinates: ['50%','14%'],
        radius : '3vw',
        url : ""
    },{
        id : 8,
        coordinates: ['5%','6%'],
        radius : '8vw',
        url : ""
    },{
        id : 9,
        coordinates: ['-70%','3%'],
        radius : '8vw',
        url : ""
    },
]

const url = "https://bolkar-club.s3.ap-south-1.amazonaws.com/task/tutors.json";


function Body() {
const [circles, setCircles] = useState([])
  const urldata = [...Data];
  useEffect(() => {
    for( let i=0; i<urldata.length; i++ ){
        temp[i].url = urldata[i]
    }
    setCircles(temp);
  },[])

  return (
      <div className="network">
          {circles.map((node) => {
            return <div className = "circle" 
                    key = {node.id}
                    style = {{
                        position: 'absolute',
                        borderWidth: '0.5em',
                        borderColor: 'white',
                        borderStyle: 'solid',
                        borderRadius:'50%',
                        backgroundSize : "cover",
                        top : node.coordinates[0],
                        right: node.coordinates[1],
                        width: `${node.radius}`,
                        height: `${node.radius}`,
                        backgroundImage: `url(${node.url})`
                     }}>
            </div>
          })}
      </div>
  );
}

export default Body;
