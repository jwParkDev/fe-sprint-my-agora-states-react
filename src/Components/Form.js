import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <form action="" method="get" className="form">
      <div className="form__input--wrapper">
        <div className="form__input--name">
          <label className="form__element__title" htmlFor="name">
            닉네임
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="닉네임을 입력하세요."
            required
          />
        </div>
        <div className="form__input--title">
          <label className="form__element__title" htmlFor="name">
            글제목
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="제목을 작성하세요."
            required
          />
        </div>
        <div className="form__textbox">
          <label className="form__element__title" htmlFor="story">
            질문사항
          </label>
          <textarea
            id="story"
            name="story"
            placeholder="질문을 작성하세요."
            required
          ></textarea>
        </div>
      </div>
      <div className="form__submit">
        <input type="submit" value="작성하기" />
      </div>
    </form>
  );
};

export default Form;
