import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function FetchAPI() {
  const [apiData, setData] = useState("");

  // const key = "pub_21179665c58737a9bf04d6e37b0eab722ef31";
  // const url = `https://newsdata.io/api/1/news?apikey=${key}&q=pizza`

  const getAPI = async () => {
    await axios.get(categories ? urlWithCat : url).then((response) => {
      let resultData = response.data.articles;
      console.log(resultData);
      setData(resultData);
    });
  };
  useEffect(() => {
    getAPI();
  }, [categories]);

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
          ? apiData.map((item, index) => (
              <>
                <div
                  className="container my-3 p-3"
                  style={{ width: "700px", boxShadow: "2px 2px 10px black" }}
                >
                  <h5 className="my-2">{item.title}</h5>
                  <div className="d-flex justify-content-center align-items-center">
                    <img
                      alt="Data not available.."
                      src={item.urlToImage}
                      className="img-fluid"
                      style={{
                        width: "100%",
                        height: "300px",
                        objectFit: "cover",
                      }}
                    />
                  </div>

                  <p className="my-1">{item.content}</p>
                  <Link to={item.url} target="blank">
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
