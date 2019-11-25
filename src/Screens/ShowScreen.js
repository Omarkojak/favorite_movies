import React from 'react';
import {View, Text, Button} from 'react-native';

const ShowScreen = ({navigation}) => {
  const {id, title, releaseYear, favorite} = navigation.getParam('movie');
  const favoriteMovie = navigation.getParam('fav');

  return (
    <View>
      <View style={{flexDirection: 'column'}}>
        <Text>{id}</Text>
        <Text>{title}</Text>
        <Text>{releaseYear}</Text>
      </View>
      {!favorite ? (
        <Button title="Add to favorites" onPress={() => favoriteMovie(id)} />
      ) : (
        <Button
          title="Remove from favorites"
          onPress={() => favoriteMovie(id)}
        />
      )}
    </View>
  );
};

export default ShowScreen;
