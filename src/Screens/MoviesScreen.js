import React, {useState} from 'react';
import {View} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import useResults from '../hooks/useResults';
import MovieList from '../components/MovieList';

const MoviesScreen = ({navigation}) => {
  const [results, setResults] = useResults();
  const favoriteMovie = id => {
    console.log('here');
    console.log(id);
    setResults(
      results.map(movie => {
        return movie.id === id ? {...movie, favorite: !movie.favorite} : movie;
      }),
    );
    console.log(results);
  };
  return (
    <SafeAreaView>
      <View>
        <MovieList
          movies={results}
          favoriteMovie={id => favoriteMovie(id)}
          navigation={navigation}
        />
      </View>
    </SafeAreaView>
  );
};

export default MoviesScreen;
