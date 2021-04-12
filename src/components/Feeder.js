
import React,{useEffect,useState}from "react"
// import Results from ".Results"
import API from "../utils/API"
import axios from "axios"
import Results from "./Results"
import Map from "./Map"
import Container from "./Container"




function Feeder(props){

  
  let [data, setData] = useState([])

  useEffect(() =>{
    axios.get('https://api.openbrewerydb.org/breweries/search?query=' + city)
    .then(results => setData(results.data)) 
  }, )

  const [city, setCity] = useState("");
  const handleSubmit = (e) => {
  e.preventDefault();
  // console.log(city)
  }

  // const [maps, setMaps] = useState([]);
  // //check tuseState "" for errors
  // useEffect(() =>{
  //   axios.get(`https://www.google.com/maps/embed/v1/place?key=AIzaSyCfcAaKlRbP10QUCCdw2mhmV0ts9vAgp-M
  //   &q=` +brewName)
  // }, )
  //   .then(results => setMaps(results.data)) 
  //   const [brewName, setBrewName] = useState("");
  //   const handleSubmitTwo = (e) => {
  //   e.preventDefault();
  //   console.log(maps)
  // }
  
  
  return(

    <div className = "backgroundHome"  style={{ 
      backgroundImage: `url(/public/image/beers-1283566_1920.jpg)`,   backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat', height: `1960px`, width:`100%`,backgroundPosition: `center center`
    }}>
  <form  onSubmit={handleSubmit} style = {{width:`100%`}}>
  <label>

    <input type="text" placeholder = "City" value = {city} onChange ={e =>setCity(e.target.value)}/>
  </label>
  {/* <input type="submit" defaultValue="Submit" onChange ={e =>setCity(e.target.value)}/> */}

  </form>

   <ul>
    {data.map(brews => (
      <li>

        
        <Results  name= {brews.name} street = {brews.street} website = {brews.website_url} state = {brews.state} city = {brews.city} fullAddress = {brews.street+ brews.city +brews.state}   />

      </li>
      
    ))}
{/* {data.map(mapQuery => (
  

    <li>
        <Map mapName = {mapQuery}/>

    </li> */}
{/* ))} */}


   </ul>

</div>
)


    }



export default Feeder


