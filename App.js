import {DrawerActions, NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Welcome from './Screens/Welcome/Welcome';
import { Text, View } from 'react-native';
import WaveSvg from './components/Wave';
import HeaderWelcome from './Screens/Welcome/HeaderWelcome';
import Questions from './Screens/Questions/Questions';
import { DataProvider } from './context/DataContext';
import Results from './Screens/Results/Results';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <DataProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Welcome'  >
          <Stack.Screen options={{header:()=> <HeaderWelcome/>}} name='Welcome' component={Welcome}/>
          <Stack.Screen name='Questions' component={Questions} options={{header:()=><View></View>}}/>
          <Stack.Screen name='results' options={{header:()=> <View></View>}} component={Results}/>
        </Stack.Navigator>
      </NavigationContainer>
    </DataProvider>
  );
}
