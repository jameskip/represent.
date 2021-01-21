import React, { useEffect, useState } from 'react' // eslint-disable-line
import HouseList from './HouseList'
import SenateList from './SenateList'

const CardBoard = props => {
  const [senate, setSenate] = useState()
  const [house, sethouse] = useState()
  const options = { headers: { 'X-API-Key': 'JSp1AQhdSIuQQssE07bf5bsDT7HTpPDVQLAda1nx' }, mode: 'cors' }

  useEffect(() => {
    if (!house) {
      fetch('https://api.propublica.org/congress/v1/116/house/members.json', options) // eslint-disable-line
        .then(house => house.json())
        .then(houseJson => sethouse({ house: houseJson.results[0].members }))
        .catch(error => console.error(error))
    }
    if (!senate) {
      fetch('https://api.propublica.org/congress/v1/116/senate/members.json', options) // eslint-disable-line
        .then(senate => senate.json())
        .then(senateJson => setSenate({ senate: senateJson.results[0].members }))
        .catch(error => console.error(error))
    }
  }, [senate, house])

  return (
      <>
        <SenateList filteredSenateList={senate}/>
        <HouseList filteredHouseList={house}/>
      </>
  )
}

export default CardBoard
