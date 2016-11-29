import Exponent from 'exponent'
import React from 'react'
import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import {
  createRouter,
  NavigationProvider,
  StackNavigation,
} from '@exponent/ex-navigation'
import Graph from './Graph'

export const Router = createRouter(() => ({
  graph: () => Graph
}))


class App extends React.Component {
  render() {
    return (
      <NavigationProvider router={Router}>
        <StackNavigation initialRoute={Router.getRoute('graph')} />
      </NavigationProvider>
    );
  }
}

Exponent.registerRootComponent(App);
