import React, { useEffect, useState } from "react";
import "./Feed.css";
import { Link } from "react-router-dom";
import { API_KEY, Value_converter } from "../../data";
import moment from "moment";
const Feed = ({ category }) => {
  const [data, setData] = useState([]);

  // const fetchData = async () => {
  //   const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=100&regionCode=IN&videoCategoryId=${category}&key=${API_KEY}`;
  //   await fetch(videoList_url)
  //     .then((response) => response.json())
  //     .then((data) => setData(data.items));
  // };

  useEffect(() => {
    const fetchData = async () => {
      const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=100&regionCode=IN&videoCategoryId=${category}&key=${API_KEY}`;
      await fetch(videoList_url)
        .then((response) => response.json())
        .then((data) => setData(data.items));
    };
    fetchData();
  }, [category]);

  return (
    <div className="feed">
      {data.map((ele, index) => {
        return (
          <Link
            to={`video/${ele.snippet.categoryId}/${ele.id}`}
            className="card"
            key={index}
          >
            <img src={ele.snippet.thumbnails.medium.url} alt="" />
            <h2>{ele.snippet.title}</h2>
            <h3>{ele.snippet.channelTitle}</h3>
            <p>
              {Value_converter(ele.statistics.viewCount)} views &bull;{" "}
              {moment(ele.snippet.publishedAt).fromNow()}
            </p>
          </Link>
        );
      })}
    </div>
  );
};

export default Feed;
