
import React,{useEffect,useState}from "react"
// import Results from ".Results"
import API from "../utils/API"
import axios from "axios"
import Results from "./Results"

function Feeder(props){

  
  let [data, setData] = useState([])

  useEffect(() =>{
    axios.get('https://api.openbrewerydb.org/breweries/search?query=' + city)
    .then(results => setData(results.data)) 
  }, )

  const [city, setCity] = useState("");
  const handleSubmit = (e) => {
  e.preventDefault();
  console.log(city)
  
  }

return(

  <div>
  
  <form onSubmit={handleSubmit}>
  <label>

    <input type="text" placeholder = "City" value = {city} onChange ={e =>setCity(e.target.value)}/>
  </label>
  {/* <input type="submit" defaultValue="Submit" onChange ={e =>setCity(e.target.value)}/> */}

  </form>

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