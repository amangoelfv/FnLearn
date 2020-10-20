import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'


const { width } = Dimensions.get('window')

export default BackHeader = () => {

    return (
        <LinearGradient  style={styles.lineargradient} start={{ x: 0, y: 0 }} end={{ x: 0, y: 0 }}  colors={['#ad56f2', '#48226f', '#56ccf2']}

        >
            <View style={styles.line} />
            <View style={[styles.line, { top: 130, left: -150 }]} />
            <View style={[styles.line, { top: 160, left: 0 }]} />

        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    lineargradient: {
        height: (width ) / 3,
        borderBottomRightRadius: 60,
        borderBottomLeftRadius: 60
    },
    line: {
        width: width,
        position: 'absolute',
        height: 80,
        backgroundColor: '#F8F3FF',
        opacity:0.1,
        transform: [{
            rotate: '-35deg'
        }],
        borderRadius: 60,
        top: 100,
        left: -300,
        
    }
});