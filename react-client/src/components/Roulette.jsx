import React, { useState } from 'react'
import { Wheel } from 'react-custom-roulette'

const red = { backgroundColor: 'red', textColor: 'black', outerBorderColor: 'gold' };
const black = { backgroundColor: 'black', textColor: 'red', outerBorderColor: 'gold' };

const data = [
  { option: '0', style: { backgroundColor: 'green', textColor: 'black', outerBorderColor: 'gold' } },
  { option: '1', style: black },
  { option: '2', style: red },
  { option: '3', style: black  },
  { option: '4', style: red },
  { option: '5', style: black },
  { option: '6', style: red },
  { option: '7', style: black },
  { option: '8', style: red },
  { option: '9', style: black },
  { option: '10', style: red },
  { option: '11', style: black },
  { option: '12', style: red },
  { option: '13', style: black },
  { option: '14', style: red },
  { option: '15', style: black },
  { option: '16', style: red },
  { option: '17', style: black},
]

const Roulette = ({ updateWin }) => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const outerBorderColor = 'gold';
  const fontSize = 30;
  const radiusLineColor = 'white';
  const radiusLineWidth	= 1;
  const innerRadius = 20;
  const innerBorderColor = 'gold';
  const innerBorderWidth = 5;

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length)
    setPrizeNumber(newPrizeNumber)
    setMustSpin(true)
  }

  return (
    <div id="wheel">
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        outerBorderColor={outerBorderColor}
        fontSize={fontSize}
        radiusLineColor={radiusLineColor}
        radiusLineWidth	={radiusLineWidth}
        innerRadius={innerRadius}
        innerBorderColor={innerBorderColor}
        innerBorderWidth={innerBorderWidth}
        data={data}
        onStopSpinning={() => {
          setMustSpin(false)
          updateWin(prizeNumber)
        }}
      />
      <button id="spinButton" onClick={handleSpinClick} className="btn btn-outline-success" type="submit">
        ☕ Spin to WIN! ☕
    </button>
    </div>
  )
}

export default Roulette;