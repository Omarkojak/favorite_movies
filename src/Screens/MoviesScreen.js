import React, {useState} from 'react';
import {View} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import useResults from '../hooks/useResults';
import MovieList from '../components/MovieList';

const MoviesScreen = ({navigation}) => {
  const [results] = useResults();
  const [movies, setMovies] = useState(results);
  console.log(results);
  console.log(movies);

  const favoriteMovie = id => {
    setMovies(
      movies.map(movie => {
        return movie.id === id ? {...movie, favorite: !movie.favorite} : movie;
      }),
    );
  };
  return (
    <SafeAreaView>
      <View>
        <MovieList
          movies={movies}
          favoriteMovie={id => favoriteMovie(id)}
          navigation={navigation}
        />
      </View>
    </SafeAreaView>
  );
};

export default MoviesScreen;
