import React from 'react'
import TabBarNavigator from './TabBarNavigator'
import { StackNavigator } from 'react-navigation'

const TabNaviagtor = StackNavigator(
  {
    TabBar: { screen: TabBarNavigator }
  },
  {
    headerMode: 'none',
  },
);

export default TabNaviagtor;
