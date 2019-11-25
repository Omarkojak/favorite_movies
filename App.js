import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import FavoritesScreen from './src/Screens/FavoritesScreen';
import MoviesScreen from './src/Screens/MoviesScreen';
import ShowScreen from './src/Screens/ShowScreen';

const switchNavigator = createSwitchNavigator({
  movieFlow: createStackNavigator({
    mainFlow: createBottomTabNavigator({
      Movies: MoviesScreen,
      Favorites: FavoritesScreen,
    }),
    Show: ShowScreen,
  }),
});

export default createAppContainer(switchNavigator);
