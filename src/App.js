import React from 'react'
import configureStore from './store'
import { Provider,connect } from 'react-redux'
import { StatusBar,Text,View } from 'react-native'
import AppWithNavigaionState from './navigation/AppWithNavigationState'

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      store: configureStore(),
    };
  }

  componentWillMount() {}

  componentDidMount() {
    // let appState = {};
    // this.setState(configureStore(appState))
  }

  componentWillUnmount() { }

  render() {
    return (
      <View style={{ flexGrow: 1 }}>
        <StatusBar backgroundColor="transparent" translucent />
        {this.state.store ? (
          <Provider store={this.state.store}>
            <AppWithNavigaionState/>
          </Provider>
        ) : (
          <View style={{flex:1}}>
            <Text> SetUp Is not correct</Text>
          </View>  
        )}
      </View>
    );
  }
}

export default App