import Feeder from "./Feeder"
import React, {useState} from "react"
import bootstrap from'bootstrap/dist/css/bootstrap.min.css';


function Results({key, name, street, website}) {

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

//   <div>
//   <button className="btn btn-outline-success btn-block " type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample"key = {key}>
//   {`${name}`}
//   </button>
//   <p />
//   <div className="collapse" id="collapseExample">
//     <div className="card card-body">
//       Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
//     </div>
//   </div>
// </div>
// );

  export default Results