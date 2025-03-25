import './App.css'
import React, {  useEffect } from 'react';
function App() {
  const [clicks, setClicks] = React.useState([])
  const rows = [0, 1, 2];
  const cols = [0, 1, 2];
  const[gridColour, setGridColour] = React.useState(Array(9).fill("bg-pink-500"))

 
  
            function greenColor(index){

              setClicks([...clicks, index])
              setGridColour((prevColors) => {
                const newColors = [...prevColors];
                newColors[index] = "bg-green-500";
                return newColors;
              });
             
            }

            function orangeColor(index) {
              
             
              clicks.forEach((click, i) => {
                setTimeout(() => {
                  setGridColour((prevColors) => {
                    const newColors = [...prevColors];
                    newColors[click] = "bg-orange-500"; 
                    return newColors;
                  });
                }, (i + 1) * 500); 
              
              });
               
              setTimeout(() => {
                setGridColour((prevColors) => prevColors.map(() => "bg-orange-500"));
              }, (clicks.length + 1) * 500);
          
            }

  return (
    <table className="table-auto border-collapse border border-black w-[400px] h-[400px] mx-auto my-[100px]">
      <tbody>
        {rows.map((row) => (
          <tr key={row} className="border border-black-800">
            {cols.map((col) => {
              
              
              const index = (row * 3) + col;
               
              return (
                <td
                  key={index}
                  className={`border border-green-800 p-4 ${gridColour[index]}`}
                  onClick={() => {index === 8 ? orangeColor(index) : greenColor(index);
                  console.log("first",index)}}
                />
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default App
