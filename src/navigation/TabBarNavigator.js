import { Image } from 'react-native'
import { connect } from 'react-redux'
import ChatTab from '../tabs/ChatTab'
import HomeTab from '../tabs/HomeTab'
import SearchTab from '../tabs/SearchTab'
import ProfileTab from '../tabs/ProfileTab'
import TimeLineTab from '../tabs/TimeLineTab'
import React, { PureComponent  } from 'react'
const HomeIcon = require('../../images/home.png')
const ChatIcon = require('../../images/chat.png')
const SearchIcon = require('../../images/search.png')
const ProfileIcon = require('../../images/profile.png')
const TimeLineIcon = require('../../images/timeline.png')
import { TabNavigator, TabBarBottom } from 'react-navigation'

const TabBar = TabNavigator(
  {
    Home: {
      screen: HomeTab,
      navigationOptions: {
        title: "Home",
        tabBarIcon: ({ tintColor }) => (
          <Image source={HomeIcon} style={[{ tintColor,height:25,width:25 }]} />
        ),
      },
    },
    Search: {
      screen: SearchTab,
      navigationOptions: {
        title: "Search",
        tabBarIcon: ({ tintColor }) => (
          <Image source={SearchIcon} style={[{ tintColor,height:25,width:25 }]} />
        ),
      },
    },
    TimeLine: {
      screen: TimeLineTab,
      navigationOptions: {
        title: "TimeLine",
        tabBarIcon: ({ tintColor }) => (
          <Image source={TimeLineIcon} style={[{ tintColor ,height:30,width:30}]} />
        ),
      },
    },
    Chat: {
      screen: ChatTab,
      navigationOptions: {
        title: "Chat",
        tabBarIcon: ({ tintColor }) => (
          <Image source={ChatIcon} style={[{ tintColor,height:30,width:30 }]} />
        ),
      },
    },
    Profile: {
      screen: ProfileTab,
      navigationOptions: {
        title: "Profile",
        tabBarIcon: ({ tintColor }) => (
          <Image source={ProfileIcon} style={[{ tintColor,height:60,width:60 }]} />
        ),
      },
    },
  },
  {
    lazy: true,
    tabBarComponent: (props) => {
      const backgroundColor = props.position.interpolate({
        inputRange: [0, 1, 2, 3, 4],
        outputRange: ['rgb(33, 33, 45)', 'white', 'white', 'white', 'white'],
      });
      return <TabBarBottom {...props} style={{ elevation:2}} />;
    },
    swipeEnabled: true,
    animationEnabled: true,
    tabBarPosition: 'bottom',
    initialRouteName: 'Home',
    tabBarOptions: {
      activeTintColor: 'rgb(64, 224, 208)',
      inactiveTintColor: 'grey',
    },
  },
);

class TabBarNavigator extends PureComponent {
  render() {
    return (
      <TabBar/>
    );
  }
}

export default connect(null,null)(TabBarNavigator)
