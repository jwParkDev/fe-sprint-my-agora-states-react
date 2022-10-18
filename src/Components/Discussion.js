import React from "react";
import "./Discussion.css";

const Discussion = ({ obj }) => {
  return (
    <li className="discussion__container">
      <div className="discussion__avatar--wrapper">
        <img
          className="discussion__avatar--image"
          src={obj.avatarUrl}
          alt={`avatar of ${obj.author}`}
        />
      </div>
      <div className="discussion__content">
        <h2 className="discussion__title">
          <a href={obj.url}>{obj.title}</a>
        </h2>
        <div className="discussion__information">{`${obj.author} / ${new Date(
          obj.createdAt
        ).toLocaleString()}`}</div>
      </div>
      <div className="discussion__answered">
        {obj.answer !== null ? "☑" : "☒"}
      </div>
    </li>
  );
};

export default Discussion;
