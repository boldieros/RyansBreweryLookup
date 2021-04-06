import Feeder from "./Feeder"


function Results({key, name}) {
      return (
        <div className="collection">
        {/* <a href="#!" className="collection-item" key = {key}>{`${id}`}</a> */}
        <a href="#!" className="collection-item "key = {key}>{`${name}`}</a>
        {/* <a href="#!" className="collection-item" key = {key}>{`${street}`}</a> */}
        {/* <a href="#!" className="collection-item">Alvin</a> */}
      </div>
    );
  }

  export default Results