import React from "react";
import "./Article.css";
import Card from "../Card/Card";
import { useState, useEffect } from "react";

const Article = () => {
  //datakani te akain
  //bo away gorankari la datakan bkain pewistman ba function a boya usestate bakar ahenin
  const [fetchData, setFetchData] = useState([]);

  const [searchData, SetSearchData] = useState("");

  const handleChange = (data) => {
    SetSearchData(data.target.value);
  };

  const filterSearch = fetchData.filter((country) => {
    return country.name.common.toLowerCase().includes(searchData.toLowerCase());
  });

  //console.log(filterSearch);

  //hamu datakan y tr load abe w amayan ba hewashy abet
  const requestData = async () => {
    try {
      const res = await fetch("https://restcountries.com/v3.1/all");
      const count = await res.json();
      setFetchData(count);
    } catch (err) {
      console.error(err);
    }
  };

  //bangy function y async aka akainawa lera
  useEffect(() => {
    requestData();
  }, []);
  /////

  return (
    <>
      <div className="searchBar">
        <input
          className="search"
          type="text"
          placeholder="Search here"
          value={searchData}
          onChange={handleChange}
        />
      </div>
      <section className="articles">
        {filterSearch.map((article) => {
          return <Card {...article} key={article.name.official} />;
        })}
      </section>
    </>
  );
};

export default Article;
