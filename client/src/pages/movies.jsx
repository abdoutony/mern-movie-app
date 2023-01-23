import React, { useState, useEffect } from "react";
import HomeLayout from "../components/layouts/home";
import SearchBar from "../components/search-bar";
import MovieList from "../components/movie-list";
// import { moviesData } from "../data";
import useFetch from "../hooks/useFetch";
export default function MoviesPage() {
  const [searchText, setSearchText] = useState("");
  const { data, error, loading } = useFetch("/movies", searchText);

  // useEffect(() => {}, [searchText]);
  return (
    <HomeLayout>
      <div className="search-wrapper p-4 mt-5">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <SearchBar setSearchText={setSearchText} />
          </div>
        </div>
      </div>
      <div className="movies-wrapper p-4">
        {!!loading && !!data && <h1 className="text-white">Loading ...</h1>}
        {!!data && data.movies.length > 0 && (
          <MovieList data={data && data.movies} />
        )}
        {!loading && !!data && data.movies.length === 0 && (
          <h1 className="text-white">No data</h1>
        )}
        {!data && !loading && error && <h1 className="text-white">error</h1>}
      </div>
    </HomeLayout>
  );
}
