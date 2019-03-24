import TabNaviagtor from './TabNaviagtor'
import { StackNavigator } from 'react-navigation'
import SplashScreen from '../screen/SplashScreen'


const AppNavigator = StackNavigator(
  {
    SplashScreen: { screen:SplashScreen },
    MusubiApp: { screen: TabNaviagtor },
  },
  {
    headerMode: 'none',
  },
);

export default AppNavigator;