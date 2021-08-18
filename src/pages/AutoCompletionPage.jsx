import React, { useState, useEffect } from "react";
import { Header } from "../components/Header";
import { FETCH_MOVIES } from "../services/movies.service";

const AutoCompletionPage = () => {
  const [searchInput, setSearchInput] = useState("");
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    const fetchMovieList = async () => {
      const response = await FETCH_MOVIES(searchInput);
      const movieList = response.results;
      setMovieList(movieList);
    };
    fetchMovieList();
    return () => {};
  }, [searchInput]);

  return (
    <>
      <Header />
    </>
  );
};

export default AutoCompletionPage;
