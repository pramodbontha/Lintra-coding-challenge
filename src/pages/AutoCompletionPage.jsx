import React, { useState } from "react";
import { AutoComplete, Header, SearchInput } from "../components";
import { FETCH_MOVIES } from "../services/movies.service";

const AutoCompletionPage = () => {
  const [searchInput, setSearchInput] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [showAutoCompleteList, setShowAutoCompleteList] = useState(false);

  const onSearchInputChange = (searchInput) => {
    setSearchInput(searchInput);
    searchMovies(searchInput);
  };

  const searchMovies = async (searchInput) => {
    let movieList = [];
    if (searchInput.trim().length) {
      const response = await FETCH_MOVIES(searchInput);
      movieList = response.results;
      setMovieList(movieList);
    }
    const showAutoCompleteList = !!movieList.length;
    setShowAutoCompleteList(showAutoCompleteList);
  };

  return (
    <>
      <Header />
      <SearchInput
        searchInput={searchInput}
        onSearchInputChange={onSearchInputChange}
      />
      {showAutoCompleteList && <AutoComplete list={movieList} />}
    </>
  );
};

export default AutoCompletionPage;
