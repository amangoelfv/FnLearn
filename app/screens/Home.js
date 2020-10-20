import React, { useRef } from 'react';
import { Dimensions, StyleSheet, Text, View, Animated, StatusBar, SafeAreaView, Image, Pressable } from 'react-native';
import { Icon } from 'react-native-elements';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import BackHeader from '../components/BackHeader';
import LoadingScreen from '../components/LoadingScreen';

const { width, height } = Dimensions.get('window');
const cardSize = width * 0.8
// const spacer = (width - cardSize) / 2 - 5
const spacing = 5
const discover = [
    {
        id: 1,
        title: 'Community',
        iconName: 'people-circle',
        type: 'ionicon'
    },
    {
        id: 2,
        title: 'My Classes',
        iconName: 'bookshelf',
        type: 'material-community'
    },
    {
        id: 3,
        title: 'Search',
        iconName: 'magnifying-glass',
        type: 'foundation',
        destination: 'Search'
    },
    {
        id: 4,
        title: 'Blogs',
        iconName: 'comment-discussion',
        type: 'octicon'
    },
    {
        id: 5,
        title: 'Announcements',
        iconName: 'bullhorn',
        type: 'material-community'
    },
]

const courses = [
    {
        id: 1,
        title: 'Cooking',
        image: require('../src/images/cooking.png')
    },
    {
        id: 2,
        title: 'Yoga & Gymnastics',
        image: require('../src/images/yoga.png')
    },
    {
        id: 3,
        title: 'Music',
        image: require('../src/images/singing.jpg')
    },
    {
        id: 4,
        title: 'Art & Craft',
        image: require('../src/images/painting.jpg')
    },
]

export default function HomePage({ navigation }) {


    return (
        <ScrollView style={styles.container}>
            <View >
                <StatusBar hidden ></StatusBar>

                <BackHeader />
                <View style={{ position: 'absolute', flexDirection: 'row', paddingHorizontal: 20, height: width / 3, alignItems: 'center', width: '95%', alignSelf: 'center', justifyContent: 'center' }}>
                    <Icon name='menuunfold' type='ant-design' color='white' onPress={() => navigation.openDrawer()} containerStyle={{ position: 'absolute', left: '5%' }} />

                    <View style={{ alignSelf: 'center' }}>
                        <Text style={{ color: 'white', fontFamily: 'ProximaNova-Bold', fontSize: 43, textAlign: 'right' }}>FnLearn</Text>
                       {// <Text style={{ color: 'white', fontFamily: 'ProximaNova-Bold', fontSize: 13, textAlign: 'right', bottom: 10, right: 5 }}>live</Text> 
                    }
                    </View>
                    <Image source={require('../src/images/aman.jpg')} style={{ height: 50, width: 50, borderRadius: 25, position: 'absolute', right: '5%' }} />

                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={require('../src/images/intro.png')} style={{ width: width / 2, height: width / 3, margin: 10 }} />
                    <View>
                        <Text style={{ fontSize: 20, fontFamily: 'ProximaNova-Bold' }}>Hi, Aman</Text>
                        <Text style={{ fontSize: 13, fontFamily: 'ProximaNova-Regular' }}>What are we learning today ?</Text>
                        <Pressable
                            onPress={() => navigation.navigate('Results')}
                            style={{ backgroundColor: '#DEDDFF', marginTop: '10%', alignItems: 'center', justifyContent: 'center', padding: '5%', borderRadius: 10, elevation: 10 }}>
                            <Text style={{ fontSize: 13, fontFamily: 'ProximaNova-Bold' }}>EXPLORE →</Text>
                        </Pressable>
                    </View>

                </View>
                <Text style={{ fontSize: 23, fontFamily: 'ProximaNova-Bold', margin: 10 }}>Discover</Text>

                <FlatList
                    data={discover}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => {
                        return (
                            <Pressable
                                onPress={() => { navigation.navigate(item.destination) }}
                                style={{ backgroundColor: '#ad56f2', width: width / 4, height: width / 4, margin: width / 24, borderRadius: 20, elevation: 5, justifyContent: 'center', alignItems: 'center', }}>
                                <Icon name={item.iconName} type={item.type} color='#F8F3FF' />
                                <Text numberOfLines={1} adjustsFontSizeToFit style={{ fontFamily: 'ProximaNova-Bold', color: '#F8F3FF', marginTop: '5%' }}>{item.title}</Text>
                            </Pressable>
                        )
                    }}
                />
                <Text style={{ fontSize: 23, fontFamily: 'ProximaNova-Bold', margin: 10 }}>Popular Near You</Text>
                {
                    courses.map((item) => {
                        return (
                            <View key={item.id} style={{ backgroundColor: 'white', width: '90%', alignSelf: 'center', borderRadius: 20, marginVertical: 10, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 5, elevation: 5, overflow: 'hidden' }}>

                                {item.id % 2 == 1 && <Text numberOfLines={2} ellipsizeMode='tail' style={{ width: '50%', fontSize: 25, fontFamily: 'PlayfairDisplay', textAlign: 'center', }}>{item.title}</Text>}
                                <Image source={item.image} style={{ width: '50%', height: width / 3, resizeMode: 'center' }} />
                                {item.id % 2 == 0 && <Text numberOfLines={2} ellipsizeMode='tail' style={{ width: '50%', fontSize: 25, fontFamily: 'PlayfairDisplay', textAlign: 'center' }}>{item.title}</Text>}
                            </View>
                        )
                    })
                }

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F3FF',
    },
    heading: {
        fontSize: 23,
        color: 'white',
        fontWeight: 'bold',
        marginLeft: '5%'
    },
    popular: {


        width: '100%',
        height: height / 4,
        borderRadius: 34

    },
    lg: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
        borderRadius: 34


    },
    item: {
        width: cardSize,
        marginVertical: 5,
        alignSelf: 'center',
        marginHorizontal: spacing,
        borderRadius: 34,
        overflow: 'hidden'

    },
    label: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold'


    }

});


