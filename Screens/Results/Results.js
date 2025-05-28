import { View, Text, StyleSheet, Image, Pressable, Button } from 'react-native'
import React, {useEffect, useState} from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import WaveSvg from '../../components/Wave'
import { useData } from '../../context/DataContext'
import getMessage from '../../functions/getMessage'
import { useNavigation } from '@react-navigation/native'

export default function Results() {
    const {data} = useData()
    const [percentage, setPercentage] = useState(0)
    console.log(data)
    useEffect(()=>{
    if(percentage <data.score){
      const timeId = setTimeout(() => setPercentage(percentage + 1), 50);
      return () => clearTimeout(timeId)
    }
    },[percentage])
    const navigation = useNavigation()
    const showDetails = () => navigation.navigate('Quizzes details')
    const handleRetake = () => navigation.navigate('Questions')
  return (
    <SafeAreaProvider>
        <SafeAreaView style={styles.safeArea}>
            <WaveSvg/>
            <Text style={styles.title}>Javascript Quizz</Text>
            <Text style={styles.scoreTitle}>Your score</Text>
            <View style={styles.scoreContainer}>
                <View style={styles.scoreC}>
                    <Text style={styles.score}>{percentage}</Text>
                </View>
            </View>
            <View style={styles.homeWork}>
                <View style={styles.ImageContainer}>
                    <Image width={200} height={200} resizeMode='contain' source={{uri:'https://tsa-challenges.s3.ap-south-1.amazonaws.com/undraw_workspace.jpg'}}/>
                    <Text style={styles.message}>{getMessage(data.score)}</Text>
                    <View style={styles.pressableContainer}>
                        <Pressable onPress={showDetails} style={styles.pressable}><Text style={styles.pressableText}>Show details</Text></Pressable>
                        <Pressable onPress={handleRetake} style={styles.pressable}><Text style={styles.pressableText}>Retake</Text></Pressable>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    </SafeAreaProvider>
  )
}
const styles = StyleSheet.create({

    title:{
    textAlign:'center',
    fontSize:25,
    color:'rgba(181, 23, 158, 1)',
    fontWeight:'bold'
    },
    scoreTitle:{
    textAlign:'center',
    fontSize:21,
    color:'rgba(123, 44, 191, 1)',
    fontWeight:'bold',
    marginTop:12
    },
    scoreContainer:{
        justifyContent:'center',
        flexDirection:'row',
        marginTop:31
    },
    scoreC:{
        width:60,
        height:35,
        backgroundColor:'rgba(123, 44, 191, 1)',
        borderRadius:11,
        justifyContent:'center',
        alignItems:'center'
    },
    score:{
        color:'white',
        fontWeight:'bold',
        fontSize:20
    },
    homeWork:{
        justifyContent:'center',
        flexDirection:'row',
        marginTop:22
    },
    safeArea:{
        backgroundColor:'white',
        flex:1
    },
    ImageContainer:{
        flexDirection:'column',
        alignContent:'center'
    },
    message:{
        color:'rgba(123, 44, 191, 1)',
        textAlign:'center'
    },
    pressableContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:20
    },
    pressable:{
        color:'white',
        backgroundColor:'rgba(157, 78, 221, 1)',
        width:95,
        justifyContent:'center',
        borderRadius:6
    },
    pressableText:{
        color:'white',
        textAlign:'center',
        paddingVertical:3
    }
})