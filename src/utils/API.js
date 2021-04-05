import axios from "axios";
const URL = "https://api.openbrewerydb.org/breweries/search?query=Seattle";

const API = {

    searchBreweries: function(city) {
      return axios.get(URL + `Seattle`);
    
    }
  };
  export default API 
  