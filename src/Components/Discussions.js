import React, { useState, useReducer, useEffect } from "react";
import Discussion from "./Discussion";
import "./Discussions.css";

const Discussions = () => {
  const initData = fetch("http://localhost:4000/discussions").then((res) =>
    res.json()
  );

  const [discussionData, setDiscussionData] = useState([]);
  useEffect(() => {
    initData.then((result) => setDiscussionData(result));
  }, []);

  return (
    <ul className="discussions__container">
      {discussionData.map((obj, index) => (
        <Discussion key={index} obj={obj} />
      ))}
    </ul>
  );
};

export default Discussions;
