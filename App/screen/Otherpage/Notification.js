import React, { useState } from 'react';
import { ScrollView, View, Image, Text, TextInput, TouchableOpacity, FlatList } from "react-native";
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';
import DropDownPicker from 'react-native-dropdown-picker';
import imagePath from '../../utils/imagePath';
import DrawerHeader from '../../Compoent/DrawerHeader';
const Notification = () => {
    const DATA = [
        {
            addhres: 'BDGY6543, HYIU6744,',
            or: 'Order Number:',
            date: '25-May-2022',
            image: imagePath.notifictionred,
            image1: imagePath.notifictiongreen,

            order2: "3 order are latesr to detaies",

            date1: '29-May-2022',

            order1: "3 order are latesr to detaies"
        },

    ];



    const renderItem = ({ item }) => (
        <View style={{
            height: moderateScale(210), width: '95%', marginLeft: scale(12),
            top: scale(8), flexDirection: "column",
        }}>
            <View style={{ height: moderateScale(170), width: '100%', borderWidth: 1, borderRadius: scale(8), borderColor: "#0C7EFA", justifyContent: "center", flexDirection: "column", backgroundColor: "white" }}>
                <View style={{
                    height: moderateScale(170), width: '95%', marginLeft: scale(8), marginTop: scale(10),
                    alignItems: "center", borderRadius: 10, flexDirection: "row"
                }}>
                    <View style={{
                        height: moderateScale(140), marginBottom: scale(8), marginLeft: scale(8), width: '27%', alignItems: 'center', backgroundColor: '#FFE9E3', borderRadius: 8,


                        marginStart: scale(13)
                    }}>
                        <View style={{ height: moderateScale(130), width: 100, justifyContent: "center", flexDirection: "column" }}>
                            <Image
                                style={{
                                    height: moderateScale(35), width: 35, marginLeft: scale(27)
                                    , alignItems: "center"
                                }}
                                source={item.image}
                            />
                        </View>

                    </View>
                    <View style={{ height: moderateScale(140), marginLeft: scale(5), marginBottom: scale(8), width: '30%', }}>

                        <View style={{ height: moderateScale(40), width: 260, justifyContent: "center", flexDirection: "column", }}>
                            <Text style={{ color: "#F9623B", fontSize: scale(14), marginLeft: scale(5), marginTop: scale(15) }}>{item.order1}
                            </Text>

                        </View>

                        <View style={{ height: moderateScale(30), width: 265, justifyContent: "center", flexDirection: "column", }}>
                            <Text style={{ color: "#7E7E7E", fontSize: scale(14), marginLeft: scale(5) }}> {item.or}
                            </Text>
                        </View>
                        <View style={{ height: moderateScale(30), width: 146, justifyContent: "center", flexDirection: "column" }}>
                            <Text style={{
                                color: "#7E7E7E", borderBottomWidth: 0.9, marginLeft: scale(5),
                                borderBottomColor: "#0C7EFA",
                            }}>{item.addhres}
                            </Text>
                        </View>

                        <View style={{ height: moderateScale(30), width: 265, justifyContent: "center", flexDirection: "column" }}>
                            <Text style={{ color: "#7E7E7E", fontSize: scale(14), marginLeft: scale(5) }}> {item.date}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
    const renderItem1 = ({ item }) => {
        return (

            <View style={{ height: moderateScale(120), width: '100%', flexDirection: "column", }}>
                <View style={{ height: moderateScale(110), width: '100%', justifyContent: "center", flexDirection: "column" }}>
                    <View style={{
                        height: moderateScale(105), width: '95%', marginLeft: scale(8), marginTop: scale(10), backgroundColor: 'white', borderColor: "#0C7EFA",
                        alignItems: "center", borderRadius: 10, flexDirection: "row"
                    }}>
                        <View style={{
                            height: moderateScale(70), marginLeft: scale(8), width: '20%', alignItems: 'center', backgroundColor: '#D2FFF0', borderRadius: 6,


                            marginStart: scale(13)
                        }}>
                            <View style={{ height: moderateScale(70), width: 100, justifyContent: "center", flexDirection: "column" }}>
                                <Image
                                    style={{
                                        height: moderateScale(35), width: 39, marginLeft: scale(27)
                                        , alignItems: "center"
                                    }}
                                    source={item.image1}
                                />
                            </View>

                        </View>
                        <View style={{ height: moderateScale(73), marginLeft: scale(5), marginBottom: scale(8), width: '30%', }}>

                            <View style={{ height: moderateScale(40), width: 260, justifyContent: "center", flexDirection: "column", }}>
                                <Text style={{ color: "#00B67F", fontSize: scale(14), marginLeft: scale(5), marginTop: scale(15) }}>{item.order1}
                                </Text>

                            </View>




                            <View style={{ height: moderateScale(30), width: 265, justifyContent: "center", flexDirection: "column" }}>
                                <Text style={{ color: "#7E7E7E", fontSize: scale(14), marginLeft: scale(5) }}> {item.date}
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>

        )
    }


    const renderItem2 = ({ item }) => {
        return (
            <View style={{ height: moderateScale(120), width: '100%', flexDirection: "column", }}>
                <View style={{ height: moderateScale(110), width: '100%', justifyContent: "center", flexDirection: "column" }}>
                    <View style={{
                        height: moderateScale(105), width: '95%', marginLeft: scale(8), marginTop: scale(10), backgroundColor: 'white', borderColor: "#0C7EFA",
                        alignItems: "center", borderRadius: 10, flexDirection: "row"
                    }}>
                        <View style={{
                            height: moderateScale(70), marginLeft: scale(8), width: '20%', alignItems: 'center', backgroundColor: '#FFE9E3', borderRadius: 6,


                            marginStart: scale(13)
                        }}>
                            <View style={{ height: moderateScale(70), width: 100, justifyContent: "center", flexDirection: "column" }}>
                                <Image
                                    style={{
                                        height: moderateScale(35), width: 37, marginLeft: scale(25)
                                        , alignItems: "center"
                                    }}
                                    source={item.image}
                                />
                            </View>

                        </View>
                        <View style={{ height: moderateScale(73), marginLeft: scale(5), marginBottom: scale(8), width: '30%', }}>

                            <View style={{ height: moderateScale(40), width: 260, justifyContent: "center", flexDirection: "column", }}>
                                <Text style={{ color: "#F9623B", fontSize: scale(14), marginLeft: scale(5), marginTop: scale(15) }}>{item.order1}
                                </Text>

                            </View>




                            <View style={{ height: moderateScale(30), width: 265, justifyContent: "center", flexDirection: "column" }}>
                                <Text style={{ color: "#7E7E7E", fontSize: scale(14), marginLeft: scale(5) }}> {item.date}
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
    return (
        <View style={{ flex: 1, flexDirection: 'column', }}>
            <DrawerHeader name={'Notification'} image1={true} />
            <ScrollView style={{ backgroundColor: "#F5F5F5", flexDirection: "column" }}>
                <View style={{ alignItems: 'center', flexDirection: 'column', marginTop: scale(13) }}>
                    <View style={{ height: moderateScale(50), width: '100%', marginLeft: scale(5), alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ height: moderateScale(40), width: '30%', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', borderRadius: 10, backgroundColor: '#0085FF', marginLeft: moderateScale(6) }}>
                            <Text style={{ fontSize: scale(14), color: 'black' }}>All</Text>
                        </View>
                        <View style={{ height: moderateScale(40), width: '30%', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', borderRadius: 10, backgroundColor: '#FFFFFF' }}>
                            <Text style={{ fontSize: scale(14), color: 'black' }}>Read
                            </Text>
                        </View>
                        <View style={{ height: moderateScale(40), width: '30%', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', borderRadius: 10, backgroundColor: '#FFFFFF', marginRight: moderateScale(6) }}>
                            <Text style={{ fontSize: scale(14), color: 'black' }}>Unread (98)
                            </Text>
                        </View>
                    </View>

                    <View style={{ flex: 1, width: '100%', flexDirection: "column" }}>
                        <FlatList
                            data={DATA}
                            renderItem={renderItem}
                        />
                        <FlatList
                            data={DATA}
                            renderItem={renderItem1}
                        />
                        <FlatList
                            data={DATA}
                            renderItem={renderItem2}
                        />

                    </View>
                </View>
            </ScrollView>
        </View>
    )
}
export default Notification;