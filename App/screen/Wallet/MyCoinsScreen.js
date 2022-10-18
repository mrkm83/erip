import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { SafeAreaView, View, Image, Text, TouchableOpacity, StyleSheet, FlatList, Dimensions, Modal, Button, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { moderateScale, moderateVerticalScale, s, scale } from 'react-native-size-matters';
import colors from '../../constants/colors';
import imagePath from '../../utils/imagePath';
import Bottomcom from '../../Compoent/DrawerHeader';
const MyCoinsScreen = () => {
    const navigation = useNavigation()
    const [category, setCategory] = useState(0)
     const [catergoryIndex, setCategoryIndex] = React.useState(0);

    const data1 = [{

        name: "BRONZE BUNDLE DEAL",
        name1: "Add 300 Credits to your Account",
        mounths: "January 12, 2022"
    },
    {

        name: "BRONZE BUNDLE DEAL",
        name1: "Add 300 Credits to your Account",
        mounths: "January 12, 2022"
    },
    {

        name: "BRONZE BUNDLE DEAL",
        name1: "Add 300 Credits to your Account",
        mounths: "January 12, 2022"
    }, {

        name: "BRONZE BUNDLE DEAL",
        name1: "Add 300 Credits to your Account",
        mounths: "January 12, 2022"
    }, {

        name: "BRONZE BUNDLE DEAL",
        name1: "Add 300 Credits to your Account",
        mounths: "January 12, 2022"
    },




    ];

    const liest = ({ item }) => {
        return (
            <View style={{ height: moderateScale(150), margin: scale(5), justifyContent: "center", backgroundColor: "white", width: "94%", flexDirection: "column", marginLeft: scale(6), borderRadius: scale(10) }}>


                <View style={{ height: moderateScale(40), width: "50%", justifyContent: "center" }}>

                    <Text style={{ fontSize: scale(13), textAlign: "center", color: "#F9933B" }}>
                        {item.name}
                    </Text>


                </View>
                <View style={{ height: moderateScale(18), width: "65%", justifyContent: "center" }}>

                    <Text style={{ fontSize: scale(13), textAlign: "center", color: "#000000" }}>
                        {item.name1}
                    </Text>


                </View>
                <View style={{ height: moderateScale(80), width: "100%", flexDirection: "row", justifyContent: "space-between" }}>


                    <View style={{ height: moderateScale(75), width: "45%", justifyContent: "center" }}>




                        <Text style={{ fontSize: scale(13), textAlign: "center", color: "#000000", marginLeft: scale(-20) }}>
                            {item.mounths}
                        </Text>
                    </View>


                    <View style={{ height: moderateScale(75), width: "50%", justifyContent: "center" }}>


                        <View style={{ height: moderateScale(35), borderRadius: scale(8), marginLeft: scale(70), backgroundColor: "#0085FF", width: scale(80), justifyContent: "center" }}>


                            <Text style={{ fontSize: scale(13), textAlign: "center", color: "white", }}>
                                300 Coins
                            </Text>


                        </View>


                    </View>
                </View>




            </View>
        )
    }

    return (
        <View style={style.categoryContainer}>

            <Bottomcom image1={true} name={"My Coins"} />
            <ScrollView style={{ flex: 1, }} >





                <View style={{ height: moderateScale(100), borderRadius: scale(6), alignItems: "center", backgroundColor: "white", width: "94%", flexDirection: "row", justifyContent: "center", marginLeft: scale(6) }}>

                    <View style={{ height: moderateScale(80), borderRadius: scale(20), width: "28%", marginLeft: scale(13), justifyContent: "center" }}>

                        <View style={{ height: moderateScale(73), backgroundColor: "#F9F9F9", width: 90, justifyContent: "center" }}>

                            <Image
                                style={{ height: moderateScale(68), width: 80, resizeMode: "contain" }}
                                source={imagePath.coine}
                            />
                        </View>
                    </View>
                    <View style={{ height: moderateScale(80), borderRadius: scale(10), width: "70%", flexDirection: "column", justifyContent: "center" }}>

                        <Text style={{ fontSize: scale(16), fontWeight: "600", color: "#000000" }}>Your Available Coins
                        </Text>
                        <Text style={{ fontSize: scale(20), color: "#0085FF", marginTop: scale(3) }}>

                            876
                        </Text>


                    </View>


                </View>

                <View style={{ height: moderateScale(35), width: '96%', flexDirection: 'row', justifyContent: 'space-between', }}>
                    <TouchableOpacity style={{ height: moderateScale(35), width: '40%', alignItems: 'center', justifyContent: 'center', }}>
                        <Text style={{ fontSize: scale(16), textAlign: 'center', color: 'black' }}>
                            Redeeem Coins
                        </Text>
                    </TouchableOpacity
                    >

                </View>

                <FlatList

                    data={data1}

                    renderItem={liest}
                />
            </ScrollView>
        </View>
    );


}
const style = StyleSheet.create({
    categoryContainer: {
        flex: 1
    },
    categoryText: {
        fontSize: 16,
        color: colors.black,
        fontWeight: 'bold',
        marginHorizontal: moderateScale(10),
        borderRadius: scale(10),
        padding: scale(8),
        paddingHorizontal: moderateScale(10),
        backgroundColor: colors.white
    },
    categoryTextSelected: {
        color: 'white',
        backgroundColor: colors.blue,

        width: 120
    },
    card: {
        height: 225,
        backgroundColor: colors.blue,
        marginHorizontal: 2,
        borderRadius: 10,
        marginBottom: 20,
        padding: 15,
    },
    header: {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    searchContainer: {
        height: 50,
        backgroundColor: colors.blue,
        borderRadius: 10,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },

    input: {
        fontSize: 18,
        fontWeight: 'bold',
        flex: 1,
        color: colors.blue,
    },

    modal: {
        flex: 1,
        alignItems: 'center',
        padding: 100,
        backgroundColor: 'red',
        justifyContent: 'center'
    },
    text: {
        color: '#3f2949',
        marginTop: 10,
    },
    linearGradient: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        height: 200,
        width: 350,
    },
});
export default MyCoinsScreen;