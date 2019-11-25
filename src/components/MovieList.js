import React from 'react';
import {View, StyleSheet, Text, FlatList, TouchableOpacity} from 'react-native';

const MovieList = ({navigation, movies, favoriteMovie}) => {
  return (
    <View>
      <FlatList
        data={movies}
        keyExtractor={movie => movie.id}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Show', {movie: item, fav: favoriteMovie})
              }>
              <View style={styles.row}>
                <Text style={{marginRight: 20}}>{item.id}</Text>
                <Text>{item.title}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'gray',
  },
  title: {
    fontSize: 18,
  },
});

export default MovieList;
