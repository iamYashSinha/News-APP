import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function FetchData() {
  const [data, setData] = useState("");

  const fetchData = async () => {
    try {
      await axios
        .get(
          "https://newsapi.org/v2/top-headlines?country=in&apiKey=9941bcfa77554f8ca17f2aba9abe1bcb"
        )
        .then((res) => setData(res.data.articles));
    } catch (error) {
      if (error) {
        console.log(error.message);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container my-4">
      <h3>
        <u>Top Headlines</u>
      </h3>
      <div className="container d-flex justify-content-center align-items-center flex-column my-3">
        {data
          ? data.map((item, index) => (
              <>
              <div className="container my-3 p-4" style={{width: "600px", boxShadow: "2px 2px 10px silver", borderRadius: "5px"}}>
                <h5 className="my-2">{item.title}</h5>
                <div className="d-flex justify-content-center align-items-center">
                <Link to={item.url} target="blank"> <img className="img-fluid" style={{
                    width: "100%", 
                    height: "300px", 
                    objectFit:"cover"}} src={item.urlToImage} alt="N/A" />
                    </Link> 
                </div>
                <p className="my-1">{item.description}</p>
                <Link to={item.url} target="blank">View More</Link>
              </div>
              </>
            ))
          : "loading..."}
      </div>
    </div>
  );
}
