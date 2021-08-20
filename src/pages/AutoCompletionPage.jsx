import React, { useState } from "react";
import { AutoComplete, Header, SearchInput } from "../components";
import { FETCH_MOVIES } from "../services/movies.service";

const AutoCompletionPage = () => {
  const [searchInput, setSearchInput] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [showAutoCompleteList, setShowAutoCompleteList] = useState(false);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(-1);

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

  onkeydown = (e) => {
    if (e.key === "ArrowUp") {
      if (activeSuggestionIndex === 0) {
        return;
      }
      const movieTitle = movieList[activeSuggestionIndex + 1].original_title;
      setActiveSuggestionIndex(activeSuggestionIndex - 1);
      setSearchInput(movieTitle);
    } else if (e.key === "ArrowDown") {
      if (activeSuggestionIndex - 1 === movieList.length) {
        return;
      }
      const movieTitle = movieList[activeSuggestionIndex + 1].original_title;
      setActiveSuggestionIndex(activeSuggestionIndex + 1);
      setSearchInput(movieTitle);
    }
  };

  return (
    <>
      <Header />
      <SearchInput
        searchInput={searchInput}
        onSearchInputChange={onSearchInputChange}
      />
      {showAutoCompleteList && (
        <AutoComplete
          list={movieList}
          activeSuggestionIndex={activeSuggestionIndex}
        />
      )}
    </>
  );
};

export default AutoCompletionPage;
