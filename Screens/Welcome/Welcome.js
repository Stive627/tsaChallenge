import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context'
import { Button, Image, Pressable, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function Welcome() {
  const navigation = useNavigation()
  return (
    <SafeAreaProvider>
        <SafeAreaView>
           <View style={{justifyContent:'center', flexDirection:'row', marginVertical:30}}>
            <Image width={100} height={100} source={{uri:'https://tsa-challenges.s3.ap-south-1.amazonaws.com/ChatGPT_Image_May_17__2025__10_24_45_PM-removebg-preview.png'}}/>
           </View>
           <Text style={{fontWeight:'bold', color:'rgba(123, 44, 191, 1)', fontSize:35, textAlign:'center'}}>Welcome to Javascript Quizzes</Text>
           <View style={{justifyContent:'center', flexDirection:'row', marginVertical:30}}>
            <Image resizeMode='contain' width={300} height={300} source={{uri:'https://tsa-challenges.s3.ap-south-1.amazonaws.com/undraw_questions'}}/>
          </View>
          <View style={{justifyContent:'center', flexDirection:'row', marginVertical:30}}>
            <Pressable onPress={()=> navigation.navigate('Questions')} style={{width:100, borderRadius:5, backgroundColor:'rgba(199, 125, 255, 1)', paddingVertical:3}}><Text style={{textAlign:'center'}}>Let's begin</Text></Pressable>
          </View>
        </SafeAreaView>
    </SafeAreaProvider>
  )
}