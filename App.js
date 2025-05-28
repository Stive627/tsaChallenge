import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Welcome from './Screens/Welcome/Welcome';
import {Text, View } from 'react-native';
import Questions from './Screens/Questions/Questions';
import { DataProvider } from './context/DataContext';
import Results from './Screens/Results/Results';
import Detail from './Screens/Details/Detail';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <DataProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Welcome'  >
          <Stack.Screen options={{header:()=> <View></View>}} name='Welcome' component={Welcome}/>
          <Stack.Screen name='Questions' component={Questions} options={{header:()=><View></View>}}/>
          <Stack.Screen name='results' options={{header:()=> <View></View>}} component={Results}/>
          <Stack.Screen name='Quizzes details' options={{headerBackground:() => <View></View>, headerTintColor:'#B5179E', headerTitleAlign:'center', headerTitleStyle:{fontWeight:'bold'}}}  component={Detail}/>
        </Stack.Navigator>
      </NavigationContainer>
    </DataProvider>
  );
}
