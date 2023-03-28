import React from "react";
import c from "./BookProfile.module.css";
import Preloader from "../../assets/Preloader/Preloader";

const BookProfile = (props) => {
  return (
    <div className={c.bookProfile}>
      <h3 className={c.pageTitle}>More about the selected book:</h3>
      <div className={c.bookProfileContainer}>
        <div className={c.image}>
          {props.isFetching ? (
            <div className={c.preloader}>
              <Preloader />
            </div>
          ) : (
            <img
              className={c.bookImage}
              src={`https://books.google.com/books/content?id=${props.params.id}&printsec=frontcover&img=1&zoom=3&source=gbs_api`}
              alt={"book Photo"}
            />
          )}
        </div>
        <div className={c.bookInfo}>
          <div className={c.title}>{props.bookProfile.title}</div>
          <div className={c.authors}>{props.bookProfile.authors}</div>

          <div className={c.description}>
            {props.bookProfile.description === undefined
              ? null
              : props.bookProfile.description.replace(/<[^>]+>/g, "")}
          </div>

          <div className={c.categories}>{props.bookProfile.categories}</div>
        </div>
      </div>
    </div>
  );
};

export default BookProfile;
