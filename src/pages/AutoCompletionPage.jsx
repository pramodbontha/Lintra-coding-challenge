import React, { useState } from "react";
import { AutoComplete, Header, SearchInput } from "../components";
import { FETCH_MOVIES } from "../services/movies.service";

// Stateful Component
// Manages all the states and implementations for the presentational components.
const AutoCompletionPage = () => {
  const [searchInput, setSearchInput] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [showAutoCompleteList, setShowAutoCompleteList] = useState(false);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(-1);
  const [highLightText, setHighLightText] = useState("");

  /**
   * Fetches movies based on the search input and highlights the text in the moives list.
   * @param {string} searchInput
   */
  const onSearchInputChange = (searchInput) => {
    setSearchInput(searchInput);
    searchMovies(searchInput);
    setHighLightText(searchInput);
  };

  /**
   * Fetches movies list based on the search input
   * @param {string} searchInput
   */
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

  /**
   * Adds the key controls to the list for Arrow up and down to navigate through the list.
   */
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
          highLightText={highLightText}
          activeSuggestionIndex={activeSuggestionIndex}
        />
      )}
    </>
  );
};

export default AutoCompletionPage;
