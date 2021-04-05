import React, {useState} from "react";

function Search(){
 

    const [city, setCity] = useState("")
    function getValue(val){

        const setCity = (val.target.value)

        console.log(setCity)
    }


    return (


          <div className="row">
            <div className="input-field col s6">
              <input id="input_text" type="text" onChange = {getValue} data-length={10} />
              <label htmlFor="input_text">Search City</label>
            </div>
            <button className="btn waves-effect waves-light" type="submit" name="action" style={{ marginTop: `10px` }}
             onClick={()=>setCity()}>Search 
                {/* <i className="material-icons right">send</i> */}
             </button>
                <h1>{city}</h1>
          </div> 
          
        
    );
}


  export default Search
