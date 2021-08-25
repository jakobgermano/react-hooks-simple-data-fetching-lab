import React, { useEffect, useState } from 'react';


function App() {
  const [ data, setData ] = useState([])
  const [ isLoaded, setIsLoaded ] = useState(false)

  useEffect (() => {
      fetch("https://dog.ceo/api/breeds/image/random")
      .then(resp => resp.json())
      .then(json => {
          setData(json)
          setIsLoaded(true)
      })
  }, [])
  console.log(data) 

  if (!isLoaded) return <p>Loading...</p>

  const renderData = <img src={data.message} alt="A Random Dog"></img>
  return(
      <div>
          {renderData}
      </div>

  )
}

    export default App;
 
    
