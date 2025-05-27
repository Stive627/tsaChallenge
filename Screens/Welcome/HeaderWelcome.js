import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import WaveSvg from '../../components/Wave'

export default function HeaderWelcome() {
  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['top']}>
        <WaveSvg/>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}