import React from 'react';
import {
  VictoryChart,
  VictoryBar,
} from 'victory-native';

export default class Graph extends React.Component {
  render() {
    return (
      <VictoryChart>
        <VictoryBar />
      </VictoryChart>
    );
  }
}
