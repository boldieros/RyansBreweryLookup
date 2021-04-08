

// function Search(){
 
//     const input = props => {
//       let textInput = React.createRef();

//       function handleClick(){
//         console.log(textInput.current.value)
      

//       }
//     }

//     return (


//           <div className="row">
//             <div className="input-field col s6">
//               <input id="input_text" type="text" data-length={20} />
//               <label htmlFor="input_text">Search City</label>
//             </div>
//             <button className="btn waves-effect waves-light" type="submit" name="action" style={{ marginTop: `10px` }}>Search 

//              </button>
     
//           </div> 
          
        
//     );
// }
    


//   export default Search




    // const [city, setCity] = useState("")
    // function getValue(val){

    //     const setCity = (val.target.value)

    //     console.log(setCity)


  import React, { useState } from "react";
  function Search(props) {

    const [city, setCity] = useState("Seattle");
    const handleSubmit = (e) => {
    e.preventDefault();
    console.log(city)
   
   
    
   
   
    }


  
      return (
        <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value = {city} onChange ={e =>setCity(e.target.value)}/>
        </label>
        <input type="submit" defaultValue="Submit" onChange ={e =>setCity(e.target.value)}/>
    
        </form>
    );
    
  }

  
    export default Search