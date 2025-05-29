import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context'
import {Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { useNavigation, useTheme } from '@react-navigation/native'
import WaveSvg from '../../components/Wave'
import Entypo from  'react-native-vector-icons/Entypo'
export default function Welcome() {
  const navigation = useNavigation()
  const theme = useTheme()
  console.log(theme)
  return (
    <SafeAreaProvider>
        <SafeAreaView style={styles.safeArea} edges={['top']}>
          <WaveSvg/>
           <View style={styles.container}>
            <Image resizeMode='contain' width={100} height={100} source={{uri:'https://tsa-challenges.s3.ap-south-1.amazonaws.com/ChatGPT_Image_May_17__2025__10_24_45_PM-removebg-preview.png'}}/>
           </View>
           <Text style={styles.welcome}>Welcome to Javascript Quizzes</Text>
           <View style={styles.containerImage}>
            <Image resizeMode='contain' width={300} height={300} source={{uri:'https://tsa-challenges.s3.ap-south-1.amazonaws.com/undraw_questions'}}/>
          </View>
          <View style={styles.pressabeContainer}>
            <Pressable onPress={()=> navigation.navigate('Questions')} style={styles.pressable}><Text>Let's begin</Text></Pressable>
          </View>
        </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  safeArea:{
    flex:1,
    backgroundColor:'white', 
    marginTop:23
  },
  container:{
    justifyContent:'center',
    flexDirection:'row'
  },
  welcome:{
    fontWeight:'bold',
    color:'rgba(123, 44, 191, 1)',
    fontSize:35, textAlign:'center'
  },
  containerImage:{
    justifyContent:'center',
    flexDirection:'row',
    marginVertical:30
  },
  pressabeContainer:{
    justifyContent:'center',
    flexDirection:'row',
    marginVertical:30
  },
  pressable:{
    width:100,
    borderRadius:5,
    backgroundColor:'rgba(199, 125, 255, 1)',
    paddingVertical:3,
    height:30,
    alignItems:'center',
    flexDirection:'column',
    justifyContent:'center'
  }
})