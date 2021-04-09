import Feeder from "./Feeder"
import React, {useState, useEffect} from "react"
import axios from "axios"
import bootstrap from'bootstrap/dist/css/bootstrap.min.css';


function Results({key, name, street, website, city, state, fullAddress}) {

  // const [maps, setMaps] = useState([]);
  // //check tuseState "" for errors
  // useEffect(() =>{
  //   axios.get(`https://www.google.com/maps/embed/v1/place?key=AIzaSyCfcAaKlRbP10QUCCdw2mhmV0ts9vAgp-M
  //   &q=` + name )
  // }, [])
  //   .then(results => setMaps(results.data)) 
  //   console.log(maps)
  




  
 return (
        <div className="collection">
        {/* <a href="#!" className="collection-item" key = {key}>{`${id}`}</a> */}
        <a href="" onClick = {() => window.open(`${website}`,"_blank")} className="collection-item "key = {key}>{`${name}`} </a>
        {/* <a href="#!" className="collection-item" key = {key}>{`${street}`}</a> */}
        <a href="" onClick = {<iframe width={400} height={300} style={{border: 0, marginRight:0}} loading="lazy" allowFullScreen src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCfcAaKlRbP10QUCCdw2mhmV0ts9vAgp-M
        &q= +"{`${name}`}> </iframe>} className="collection-item">Maps</a>
        
        
        
        <iframe width={400} height={300} style={{border: 0, marginRight:0}} loading="lazy" allowFullScreen src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCfcAaKlRbP10QUCCdw2mhmV0ts9vAgp-M
        &q=Sound and SUmmit"> </iframe>

</div>
 )}
  export default Results