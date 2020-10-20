import React from 'react';
import { Dimensions, Image, Pressable, requireNativeComponent, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { AirbnbRating, Icon, Rating } from 'react-native-elements';

const { height, width } = Dimensions.get('screen')
const results = [
    {
        id: 1,
        name: 'Mahima Thakur',
        image: 'https://c8.alamy.com/comp/KW9GT7/portrait-of-pretty-chef-woman-preparing-cooking-KW9GT7.jpg',
        rating: 4,
        location: 'Lucknow',
        skills: ['Cooking'],
        price: 2000,
        online: false,
        offline: true
    },
    {
        id: 2,
        name: 'Ridhima Pandit',
        image: 'https://content3.jdmagicbox.com/comp/thiruvananthapuram/m6/0471px471.x471.190705184918.d9m6/catalogue/nandanam-classic-dance-center-thiruvananthapuram-17zdw3bxov.jpg?clr=603806',
        rating: 5,
        location: 'Mumbai',
        skills: ['Classical Dance', 'Salsa', 'Western Dance'],
        price: 2000,
        online: true,
        offline: true
    },
    {
        id: 3,
        name: 'Sonam Bajwa',
        image: 'https://superstarsbio.com/wp-content/uploads/2019/09/Sonam-Bajwa-bra-size.jpg',
        rating: 3,
        location: 'Chandigarh',
        skills: ['Yoga', 'Gymnastics'],
        price: 8000,
        online: false,
        offline: true
    },
    {
        id: 4,
        name: 'Yashkirat Singh',
        image: 'https://scontent.fdel3-1.fna.fbcdn.net/v/t31.0-8/p960x960/26758628_169349097171301_9287625575508462_o.jpg?_nc_cat=109&_nc_sid=7aed08&_nc_ohc=U6uie6myhUYAX8UXhCd&_nc_ht=scontent.fdel3-1.fna&tp=6&oh=dce88029b818e98781f360ebf630db57&oe=5FB3C8EC',
        rating: 3,
        location: 'Delhi',
        skills: ['Astronomy', 'Data Science', 'Machine Learning'],
        price: 1800,
        online: true,
        offline: true
    },
    
    {
        id: 5,
        name: 'Kartiken Barnwal',
        image: 'https://qph.fs.quoracdn.net/main-thumb-836291408-200-kkkmrxazvtinbcmcbqdrfjzpyafhedov.jpeg',
        rating: 4.5,
        location: 'Ahmedabad',
        skills: ['Driving'],
        price: 8000,
        online: false,
        offline: true
    },
]


const Results = ({ navigation }) => (
    <View style={{ backgroundColor: 'white' }}>
        <FlatList
            data={results}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => {
                return (
                    <View style={{ width: '90%', height: height / 3.9, backgroundColor: '#f8f3ff', alignSelf: 'center', marginVertical: '5%', borderRadius: 25, borderWidth: 2, borderColor: '#AD56F2', elevation: 5 }}>
                        <View style={{ flexDirection: 'row', }}>
                            <Image source={{ uri: item.image }} style={{ height: width / 5, width: width / 5, borderRadius: width, resizeMode: 'center',left:'15%',top:'2.5%',resizeMode:'cover'}} />
                            <View style={{ width: '80%', marginTop: 15 }}>
                                <Text style={{ textAlign: 'center', fontFamily: 'PlayfairDisplay', fontSize: 23 }}>{item.name}</Text>
                                <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                                    {item.online &&
                                        <>
                                            <Text style={{ color: 'green', fontFamily: 'ProximaNova-Bold' }}>•  </Text>
                                            <Text style={{ fontFamily: 'ProximaNova-Bold' }}>Online Lectures     </Text>
                                        </>
                                    }
                                    {item.offline &&
                                        <>
                                            <Text style={{ color: 'red', fontFamily: 'ProximaNova-Bold' }}>•  </Text>
                                            <Text style={{ fontFamily: 'ProximaNova-Bold' }}>Offine Lectures</Text>
                                        </>
                                    }
                                </View>
                            </View>
                        </View>
                        <View style={{ marginLeft: '5%',marginTop:'5%' }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Icon name='map-pin' type='feather' />
                                <Text style={{ fontFamily: 'ProximaNova-Bold', textAlignVertical: 'center' }}>{item.location}</Text>

                            </View>
                            <Rating
                                ratingImage={require('../src/images/star.png')}
                                ratingCount={item.rating}
                                ratingBackgroundColor='transparent'
                                imageSize={15}
                                ratingColor='transparent'
                                startingValue={0}
                                readonly
                                type='custom'
                                showRating={false}
                                style={{ alignItems: 'flex-start', margin: 5 }}
                            />
                            <View style={{ flexDirection: 'row',marginVertical:5, paddingHorizontal: 15 ,justifyContent:'flex-end',alignItems:'flex-end',height:'35%'}}>
                                <View style={{marginLeft:5,position: 'absolute',left:0}}>
                                    {item.skills.length >= 1 && <Text style={{ fontFamily: 'ProximaNova-Bold' }}>{item.skills[0]}</Text>}
                                    {item.skills.length >= 2 && <Text style={{ fontFamily: 'ProximaNova-Bold' }}>{item.skills[1]}</Text>}
                                    {item.skills.length > 2 && <Text style={{ fontFamily: 'ProximaNova-Regular' }}>& many more</Text>}
                                </View>
                                <View style={{alignItems:'flex-end',marginLeft:'15%',justifyContent: 'flex-end',marginRight:5}}>
                                <Text style={{fontFamily:'ProximaNova-Regular',fontSize:10}}>prices</Text>
                                <Text style={{fontFamily:'ProximaNova-Regular',fontSize:10}}>starting at</Text>
                                </View>
                                <View style={{alignItems:'flex-start',justifyContent: 'flex-end',}}>
                                <Text style={{fontFamily:'ProximaNova-Bold',fontSize:30,top:5}}>₹ {item.price}</Text>
                                </View>

                            </View>
                            <Pressable style={{width:40,height:40,backgroundColor:'#AD56F2',position:'absolute',right:20,borderRadius:100,justifyContent:'center'}}>
                            <Icon name='navigate-next' color='white' />
                            </Pressable>

                        </View>
                    </View>
                )
            }}
        />
    </View>
);

export default Results;
