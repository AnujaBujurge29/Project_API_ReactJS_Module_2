import React, { useState, useEffect } from "react";
 

import axios from "axios";
import { Link } from "react-router-dom";

export default function FetchAPI({ category }) {
  const [apiData, setData] = useState("");


  const key = "pub_21179665c58737a9bf04d6e37b0eab722ef31";
  //API url without news category sleection
  let url = `https://newsdata.io/api/1/news?apikey=${key}&language=en`;
   //API url with news category sleection
  let urlWithCat = `https://newsdata.io/api/1/news?apikey=${key}&language=en&category=${category}`;

  //fetching API
  const getAPI = async () => {
    await axios.get(category ? urlWithCat : url).then((response) => {
      let Data = response.data
      let resultData = Data.results;
      // console.log(Data);
      console.log(resultData);
      setData(Data);
    
      
    });
  };
  useEffect(() => {
    getAPI();
  }, [category]);

  return (
    <div
      className="container
    my-4"
    >
      <h3>Headlines...</h3>
      <div
        className="container d-flex justify-content-center align-items-center flex-column my-4"
        style={{ minHeight: "100vh" }}
      >
        {apiData
          ? apiData.results.map((item, index) => (
              <>
                <div
                  className="container my-3 p-3"
                  style={{ width: "700px", boxShadow: "2px 2px 10px black" }}
                >
                  <h5 className="my-2">{item.title}</h5>
                  <p className="my-1">Country: {item.country}</p>
                  <div className="d-flex justify-content-center align-items-center">
                    <img
                      alt="Data not available.."
                      src={item.image_url}
                      className="img-fluid"
                      style={{
                        width: "90%",
                        height: "300px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <p className="my-1">Published on: {item.pubDate}</p>
                  <Link to={item.link} target="blank" className="btn btn-dark">
                    View More
                  </Link>
                </div>
               
              </>
            ))
          : "Loading News..."}
      </div>
     
    </div>
  );
}
