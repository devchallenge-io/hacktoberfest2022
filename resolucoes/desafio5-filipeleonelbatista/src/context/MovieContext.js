import { createContext, useEffect, useState } from "react";
import api from "../services/api";

export const MovieContext = createContext({});

export const API_KEY = "0dc99986f9c91a4bda6128a63df0bf28"
export const IMAGE_URL = "https://image.tmdb.org/t/p/original"

export function MovieContextProvider(props) {
  const url = `?api_key=${API_KEY}&language=pt-BR&region=BR&append_to_response=release_dates,videos`;

  const [isLoaded, setIsLoaded] = useState(false)

  const [selectedMovie, setSelectedMovie] = useState()
  const [carrocelList, setCarrocelList] = useState([])
  const [categoriesList, setCategoriesList] = useState([])
  const [selectedCategory, setSelectedCategory] = useState()
  const [selectedCategoryMovieList, setSelectedCategoryMovieList] = useState([])
  const [popularList, setPopularList] = useState([])
  const [searchList, setSearchList] = useState([])

  const handleSearch = async (searchText) => {
    const resSelectedCategoryMovies = await api.get(`/search/movie${url}&query=${encodeURI(searchText)}`)

    if (resSelectedCategoryMovies.data.results) {
      const resultArray = [];
      for (const movie of resSelectedCategoryMovies.data.results) {
        resultArray.push({
          id: movie.id,
          title: movie.title,
          image: movie.poster_path,
          backdrop: movie.backdrop_path,
          description: movie.overview,
          dtLancamento: movie.release_date,
          genre_ids: movie.genre_ids
        });
      }
      setSearchList(resultArray);
    }
  }

  const handleSelectCategory = async (cat) => {
    setSelectedCategory(cat)

    const resSelectedCategoryMovies = await api.get(`/discover/movie${url}&with_genres=${cat.id}`)

    if (resSelectedCategoryMovies.data.results) {
      const resultArray = [];
      for (const movie of resSelectedCategoryMovies.data.results) {
        resultArray.push({
          id: movie.id,
          title: movie.title,
          image: movie.poster_path,
          backdrop: movie.backdrop_path,
          description: movie.overview,
          dtLancamento: movie.release_date,
          genre_ids: movie.genre_ids
        });
      }
      setSelectedCategoryMovieList(resultArray);
      setSelectedMovie(resultArray[0])
    }

  }

  useEffect(() => {
    const executeAsync = async () => {
      const resPopular = await api.get(`/movie/popular${url}`)

      if (resPopular.data.results) {
        const resultArray = [];
        for (const movie of resPopular.data.results) {
          resultArray.push({
            id: movie.id,
            title: movie.title,
            image: movie.poster_path,
            backdrop: movie.backdrop_path,
            description: movie.overview,
            dtLancamento: movie.release_date,
            genre_ids: movie.genre_ids
          });
        }
        setPopularList(resultArray);
      }

      const resCarrocel = await api.get(`/movie/now_playing${url}`)

      if (resCarrocel.data.results) {
        const resultArray = [];
        for (const movie of resCarrocel.data.results) {
          resultArray.push({
            id: movie.id,
            title: movie.title,
            image: movie.poster_path,
            backdrop: movie.backdrop_path,
            description: movie.overview,
            dtLancamento: movie.release_date,
            genre_ids: movie.genre_ids
          });
        }
        setCarrocelList(resultArray);
      }

      const resCategories = await api.get(`/genre/list${url}`)
      setCategoriesList(resCategories.data.genres)
      setSelectedCategory(resCategories.data.genres[0])

      const resSelectedCategoryMovies = await api.get(`/discover/movie${url}&with_genres=${resCategories.data.genres[0].id}`)

      if (resSelectedCategoryMovies.data.results) {
        const resultArray = [];
        for (const movie of resSelectedCategoryMovies.data.results) {
          resultArray.push({
            id: movie.id,
            title: movie.title,
            image: movie.poster_path,
            backdrop: movie.backdrop_path,
            description: movie.overview,
            dtLancamento: movie.release_date,
            genre_ids: movie.genre_ids
          });
        }
        setSelectedCategoryMovieList(resultArray);
        setSelectedMovie(resultArray[0])
      }


      setIsLoaded(true)
    }
    executeAsync();

  }, [])

  return (
    <MovieContext.Provider
      value={{
        isLoaded,
        selectedMovie,
        carrocelList,
        categoriesList,
        selectedCategory,
        selectedCategoryMovieList,
        popularList,
        handleSelectCategory,
        setSelectedMovie,
        searchList,
        handleSearch,
      }}
    >
      {props.children}
    </MovieContext.Provider>
  )
}