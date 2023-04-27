import React, { useState } from "react";
import DisplayAPIData from "./DisplayAPIData";

export default function ApiFetch() {
  const [apiData, setAPIData] = useState(null);

  // const key = "pub_21179665c58737a9bf04d6e37b0eab722ef31";
  // const url = `https://newsdata.io/api/1/news?apikey=${key}&q=pizza`

  const getAPI = async () => {
    let resp = await fetch(url);
    let data = await resp.json();
    setAPIData(data);
    console.log(data);
    
  };

  const checkAPI = () => {
    if (apiData === null) {
      getAPI();
    }
  };

  return (
    <div>
      {apiData
        ? apiData.results.map((ele, key) => {
            return <DisplayAPIData key={key} ele={ele} />;
          })
        : checkAPI()}
    </div>
  );
}



//   .env 
//    APIKEY = 'gdsjgdja'

// compoennet 
//   Quicknotes:
// - npm dotenv (to install library)
// - .env file must be within ROOT folder to work (same level as package.json

//  process.APIKEY