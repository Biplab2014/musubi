import React from 'react'
import { connect } from 'react-redux'
import AppNavigator from './AppNavigator'
import { View, Text, StyleSheet } from 'react-native'
import { addNavigationHelpers } from 'react-navigation'
import { createReduxBoundAddListener } from 'react-navigation-redux-helpers'

const AppWithNavigationState = connect(state => ({
  navState: state.navState
}))((
  { dispatch, navState }, 
) => (
  <View style={{ flex: 1 }}>
    <AppNavigator
        navigation={addNavigationHelpers({
          dispatch,
          state: navState,
          addListener: createReduxBoundAddListener('root')
        })}
    />
  </View>
));

export default AppWithNavigationState;
