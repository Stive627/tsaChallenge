import { View, Text, StyleSheet, Button, Pressable } from 'react-native'
import React, { useState } from 'react'

export default function Question({question, handleClick, lastQuestion}) {
  const [currSuggestion, setCurrSuggestion] = useState(undefined)
  console.log(currSuggestion)
  function select(indx){
    if(indx === currSuggestion){
      setCurrSuggestion(undefined)
    }
    else{
      setCurrSuggestion(indx)
    }
  }
  const alphabet = ['A)', 'B)', 'C)', 'D)', 'E)', 'F)']

  return (
    <View style={styles.container}>
        <Text style={styles.question}>{question.question}</Text>
        <View style={styles.suggestion}>
            {question.suggestions.map((elt, indx) => <Pressable key={indx} onPress={()=>select(indx)} style={[styles.pressable, {backgroundColor:indx === currSuggestion ? 'rgba(157, 78, 221, 1)':'transparent'}]}><Text style={{color:indx === currSuggestion? 'white':'rgba(157, 78, 221, 1)'}}>{alphabet[indx]} {elt}</Text></Pressable>)}
        </View>
        <View style={styles.pressableSubmit}>
          <Pressable disabled = {currSuggestion === undefined} onPress={() => handleClick(currSuggestion)}><Text style={styles.submitButton}>{lastQuestion? 'Finish' : 'Next'}</Text></Pressable>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    question:{
        backgroundColor:'rgba(157, 78, 221, 1)',
        color:'white',
        fontSize:16,
        padding:3,
        marginVertical:30,
        borderStyle:'solid',
        borderWidth:1,
        borderRadius:4,
        borderColor:'transparent',
    },
    button:{
        cursor:'pointer', 
        color:'rgba(181, 23, 158, 1)',
        fontSize:17,
    },
    suggestion:{
        flexDirection:'column',
        gap:12, 
        marginVertical:'16px'
    },
    pressable:{
        paddingVertical:4,
        paddingHorizontal:3,
        borderRadius:4,
        borderWidth:1,
        borderColor:'rgba(157, 78, 221, 1)',
        backgroundColor:''
    },
    submitButton:{
        color:'rgba(181, 23, 158, 1)',
        fontSize:17,
    },
    pressableSubmit:{
      flexDirection:'row',
      marginTop:12,
      justifyContent:'flex-end',
      cursor:'pointer'
    }
})