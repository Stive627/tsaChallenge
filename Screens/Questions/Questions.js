import { StyleSheet, Text, View} from 'react-native'
import React, { useState } from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import Animated, { useSharedValue } from 'react-native-reanimated'
import Question from './Question'
import { data } from './data'
import { useData } from '../../context/DataContext'
import { successRate } from '../../functions/successRate'

export default function Questions() {
  const {handleData} = useData()
  const [userAnswer, setUserAnswer] = useState([])
  const width = useSharedValue(60)
  const questions = [...data]
  const percentage = (1/questions.length)*100
  const [currQuestion, setCurrQuestion] = useState({index:0, percent:percentage})
  const correctAnswers = questions.map(elt => elt.answer)
  const lastQuestion = currQuestion.index === questions.length -1

  function handleClick(value){
    if(lastQuestion){
      const finalUserValue = [...userAnswer, value]
      const score = successRate(finalUserValue, correctAnswers)
      handleData(score, finalUserValue)

    }
    else{
      setCurrQuestion({...currQuestion, index:currQuestion.index + 1, percent:currQuestion.percent + percentage})
      setUserAnswer([...userAnswer, value])
    }
  }
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safearea}>
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.header1}></View>
            <Animated.View style={[styles.header2, {width:`${currQuestion.percent}%`}]}></Animated.View>
          </View>
        </View>
        <Text style={styles.title}>Javascript Quiz</Text>
        <Question key={data.indexOf([currQuestion.index])} question={data[currQuestion.index]} handleClick={handleClick} lastQuestion={lastQuestion}/>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  safearea:{
    paddingHorizontal:7
  },
  container:{
    flexDirection:'row',
    marginTop:12
  },
  header:{
    position:'relative',
    height:40,
    flex:0.8
  },
  header1:{
    backgroundColor:'rgba(217, 217, 217, 1)',
    flex:1,
    height:20,
    borderRadius:18
  },
  header2:{
    backgroundColor:'rgba(123, 44, 191, 1)',
    height:20,
    flex:1,
    position:'relative',
    bottom:20,
     borderRadius:18
  },
  title:{
    textAlign:'center',
    fontSize:25,
    color:'rgba(181, 23, 158, 1)',
    fontWeight:'bold'
  }
})
