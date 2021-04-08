import Feeder from "./Feeder"
import React, {useState} from "react"


function Results({key, name, street}) {

  const [streets, setStreets] = useState("");
  const handleSubmit = (e) => {
  e.preventDefault();
  console.log(streets)
  
  }
      return (
        <div className="collection">
        {/* <a href="#!" className="collection-item" key = {key}>{`${id}`}</a> */}
        <a href="#!" onClick = {handleSubmit} className="collection-item "key = {key}>{`${name}`} </a>
        <a href="#!" className="collection-item" key = {key}>{`${street}`}</a>
        {/* <a href="#!" className="collection-item">Alvin</a> */}
      </div>
    );
  }

  export default Results