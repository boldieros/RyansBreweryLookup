
// import React,{useEffect,useState}from "react"
// import Results from ".Results"
// import API from "../utils/API"

// function Body(){


 
//   let [breweries, setBreweries] = useState({brewers:[],})
 
 
//    useEffect(async () => {
//     //  API.searchBreweries("Seattle").then(results => {

//       const response = await fetch("https://api.openbrewerydb.org/breweries/search?query=Seattle");
//       const data = await respone.json;
//       const [ item ] = data.results;

//        setBreweries(item);
//        }, []);

//        return(
// <div>
// <h2>{breweries}</h2>

// </div>


//        )}


import React,{useEffect,useState}from "react"
// import Results from ".Results"
import API from "../utils/API"
import axios from "axios"

function Feeder(){
  let [data, setData] = useState([])

  useEffect(() =>{
    axios.get('https://api.openbrewerydb.org/breweries/search?query=Seattle')
    .then(results => setData(results.data)) 
  }, [])

  


return(

<div>
   <ul>
    {data.map(brews => (
      <li>
        {brews.name}
      </li>
    ))}

   </ul>

</div>
)
}


export default Feeder 