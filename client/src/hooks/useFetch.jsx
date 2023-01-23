import { useState, useEffect } from "react";
const baseUrl = "http://localhost:5000/api";
const useFetch = (url = "", searchText = "") => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(
      searchText === "" ? baseUrl + url : baseUrl + url + `?q=${searchText}`
    )
      .then((res) => res.json())
      .then((jsonData) => {
        setData(jsonData);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [searchText]);
  return { data, loading, error };
};

export default useFetch;
