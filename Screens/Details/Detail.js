import { View, Text, StyleSheet, SectionList } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { datas } from '../Questions/data'
import { useData } from '../../context/DataContext'
import getColor from '../../functions/getColor'

export default function Detail() {
  const alphabet = ['A)', 'B)', 'C)', 'D)', 'E)', 'F)']
  const {data} = useData()
  const answer = datas.map(elt => elt.answer)
  const userAnswer = data.userAnswer
const renderSectionHeader = ({section:{question, data, idx}}) => { 
  const localAnswer = answer[idx]
  const localUser = userAnswer[idx]
  return( 
  <View>
    <Text style={styles.question}>{question}</Text>
    {data.map((elt, indx) =>(
        <View key={indx}>
          <Text  style={[styles.item , {borderColor:getColor(indx, localAnswer, localUser), color: getColor(indx, localAnswer, localUser)}]}>{alphabet[indx]}   {elt}</Text>
        </View>
    ))}
  </View>)
}
  return (
    <SafeAreaProvider>
        <SafeAreaView edges={['top']} style={styles.areaView}>
          <SectionList
            sections={datas}
            keyExtractor={(item, index) => item + index}
            renderItem={()=>{}}
            renderSectionHeader={renderSectionHeader}
          />
        </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
    areaView:{
        flex:1,
        backgroundColor:'white',
        paddingHorizontal:12,
        paddingTop:12
    },
    question:{
      color:'white',
      backgroundColor:'rgba(157, 78, 221, 1)',
      fontSize:16,
      borderRadius:7,
      padding:5,
      marginVertical:12
    },
    item:{
      color:'rgba(123, 44, 191, 1)',
      fontSize:15,
      marginVertical:12,
      borderWidth:2,
      padding:5,
      borderRadius:6
    }
})