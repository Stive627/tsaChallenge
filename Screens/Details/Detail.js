import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

export default function Detail() {
  return (
    <SafeAreaProvider>
        <SafeAreaView style={styles.areaView}>
            
        </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
    areaView:{
        flex:1,
        backgroundColor:'white',
    }
})