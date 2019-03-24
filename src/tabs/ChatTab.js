import React from 'react'
import { connect } from 'react-redux'
import { NavActions } from '../actions'
import { AsyncStorage,View,Text} from 'react-native'

class ChatTab extends React.PureComponent {
  componentDidMount() {

  }

  componentWillReceiveProps(nextProps) {
    
  }

  render() {
    return (
      <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <Text> Chat</Text>
      </View>
    );
  }
}


export default connect(null, { ...NavActions })(ChatTab);
