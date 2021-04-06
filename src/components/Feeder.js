
import React,{useEffect,useState}from "react"
// import Results from ".Results"
import API from "../utils/API"
import axios from "axios"
import Results from "./Results"

function Feeder(){
  let [data, setData] = useState([])

  useEffect(() =>{
    axios.get('https://api.openbrewerydb.org/breweries/search?query=Chicago')
    .then(results => setData(results.data)) 
  }, [])

  


return(
  

<div>
   <ul>
    {data.map(brews => (
      <li>
        <Results  name= {brews.name} />
      </li>
    ))}

   </ul>

</div>
)
}


export default Feeder 