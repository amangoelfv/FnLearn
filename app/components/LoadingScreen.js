import React, { useRef } from 'react';
import { Dimensions, StyleSheet, Text, View, Animated } from 'react-native';
import { Icon } from 'react-native-elements';

const { width, height } = Dimensions.get('window');
const circlewidth = width / 4
export default function LoadingScreen() {

    const move = useRef(new Animated.Value(0)).current;
    const textOpacity = useRef(new Animated.Value(0)).current
    Animated.loop(
        Animated.sequence([
            Animated.parallel([
                Animated.timing(textOpacity, {
                    toValue: 1,
                    duration: 40,
                    useNativeDriver: true
                }),
                Animated.timing(move, {
                    toValue: 1,
                    duration: 1000,
                    useNativeDriver: true
                })
            ])
            ,
            Animated.parallel([
                Animated.timing(textOpacity, {
                    toValue: 1,
                    duration: 40,
                    useNativeDriver: true
                }),
                Animated.timing(move, {
                    toValue: 0,
                    duration: 500,
                    useNativeDriver: true
                })
            ])

        ])

    ).start();


    const translate = move.interpolate({
        inputRange: [0, 1],
        outputRange: [0, circlewidth / 5]
    })
    const exhale = textOpacity.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 0]
    })
    return (

        <View style={styles.container}>
            <Animated.View style={[styles.bcont, { opacity: textOpacity }]}>
                <Text style={styles.breathe}>Loading</Text>
            </Animated.View>
            

            {
                [0, 1, 2, 3, 4, 5, 6, 7].map((item) => {
                    const rotation = move.interpolate({
                        inputRange: [0, 1],
                        outputRange: [`${item * 45}deg`, `${item * 45 + 180}deg`]
                    });
                    return (

                        <Animated.View
                            style={{
                                backgroundColor: 'purple',
                                width: circlewidth,
                                height: circlewidth,
                                borderRadius: circlewidth,
                                ...StyleSheet.absoluteFill,
                                opacity: 0.1,
                                transform: [
                                    {
                                        
                                        rotateZ: rotation
                                    },
                                    {
                                        translateX: translate,
                                        translateY: translate
                                    }]
                            }}
                            key={item}
                        >

                        </Animated.View>
                    )
                })
            }

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        top: height/2-circlewidth/2,
        left: width/2-circlewidth/2,
        backgroundColor:'rgba(0,0,0,0.1)'
    },
    bcont: {

        width: circlewidth,
        height: circlewidth,
        ...StyleSheet.absoluteFill,
        justifyContent: 'center',
        alignItems: 'center'

    },
    breathe: {
        fontSize: 10,
        color:'black',
    }
});


