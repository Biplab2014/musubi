import React from 'react'
import { connect } from 'react-redux'
import { NavActions } from '../actions'
import { AsyncStorage,View,Image } from 'react-native'

class SplashScreen extends React.PureComponent {

  componentDidMount() {
    this.timer = setTimeout(() => {
      this.props.replaceRoute('MusubiApp')
    }, 2000)
  }

  componentWillReceiveProps(nextProps) {
    
  }
   

  async componentWillUnmount() {
    if(this.timer){
      clearTimeout(this.timer)
    }
  }



  render() {
    return (
      <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'#ffffff'}}>
       <Image style={{height:200,width:200}} source={require('../../images/musubi.jpg')} />
      </View>
    );
  }
}


export default connect(null, { ...NavActions })(
  SplashScreen,
);
