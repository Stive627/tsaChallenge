import { View, StyleSheet, Pressable, useColorScheme} from 'react-native'
import React, { useState } from 'react'
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Animated, {useSharedValue, withTiming, useAnimatedStyle} from 'react-native-reanimated';
import { useTheme } from '../context/ThemeContext';

export default function Mode() {
    const [x, setX] = useState(0)
    const translate = useSharedValue(x)
    const {theme, handleTheme} = useTheme()
    console.log(theme)
    const animatedStyle = useAnimatedStyle(()=>({
        transform:[{translateX:translate.value}]
    }))

    function handleTranslate(){
        handleTheme()
        if(x){
            setX(0)
        }
        else{
            setX(30)
        }
    }
    translate.value = withTiming(x)

  return (
    <View style={styles.containerMain}>
        <Pressable onPress={handleTranslate}  style={styles.container}>
            <Entypo name="light-up" color="#000" size={16} />
            <MaterialIcons name="dark-mode" color="#000" size={16} />
            <Animated.View style={[styles.indicatorView, animatedStyle]}></Animated.View>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    containerMain:{
        flex:0.2,
        flexDirection:'row',
        justifyContent:'flex-end'
    },
    container:{
        flex:0.8,
        borderColor:'rgba(217, 217, 217, 0.63)',
        borderWidth:1,
        marginHorizontal:3,
        height:25,
        borderRadius:9,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:4,
        position:'relative'
    },
    indicatorView:{
        position:'absolute',
        width:20,
        height:20,
        borderRadius:'50%',
        backgroundColor:'rgba(123, 44, 191, 0.28)',
        zIndex:-2,
    }
})