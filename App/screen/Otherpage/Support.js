import React, { useState } from 'react';
import { SafeAreaView, View, Image, Text, TouchableOpacity, StyleSheet, FlatList, Dimensions, Modal, Button, ScrollView ,Linking} from 'react-native'
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';
// import { ToggleSwitch } from 'rn-toggle-switch'
import DropDownPicker from "react-native-dropdown-picker";
import imagePath from '../../utils/imagePath';
import colors from '../../constants/colors';
import Bottomcom from '../../Compoent/DrawerHeader';

import {
    PieChart, LineChart, BarChart
} from "react-native-chart-kit";
import Pie from 'react-native-pie';
import { useNavigation } from '@react-navigation/native';
const Support = ({ Menu1, Notification1 }) => {
    const navigation = useNavigation();
    const [catergoryIndex, setCategoryIndex] = React.useState(0);


    const [itemsState, setItemsState] = React.useState([
        { label: 'Madhya Pradesh', value: 'Madhya Pradesh' },
        { label: 'Andra Pradesh', value: 'Andhra Pradesh' },
    ]);

    const [isOn11, setIsOn] = useState(false)
    const [openCountry, setopenCountry] = React.useState(false);
    const [imagee, setimage] = React.useState(true);
    const [openCountry1, setopenCountry1] = React.useState(false);
    const [imagee1, setimage1] = React.useState(true);

    const categories = ['All Leads', 'Today', 'Tommorrow', 'Weekly'];

    const [items, setItems] = React.useState([
        { label: 'Sun', value: 'Sun' },
        { label: 'Mon', value: 'Mon' },
        { label: 'Tue', value: 'Tue' },
        { label: 'Wed', value: 'Wed' },
        { label: 'Thu', value: 'Thu' },
        { label: 'Fri', value: 'Fri' },
        { label: 'Sat', value: 'Sat' },

    ]);
    const { width, height } = Dimensions.get('window')
    const Done = (value) => {
        if (value == openCountry) {
            setopenCountry(true)
            setimage(false);

            (

                <Allll />
            );
        }

        else if (value == imagee) {
            setimage(true)
            setopenCountry(!openCountry)
        }
        else (
            setopenCountry(false),
            setimage()
        )
    }

    const Done1 = (value1) => {
        if (value1 == openCountry1) {
            setopenCountry1(true)
            setimage1(false);

            (

                <A1 />
            );
        }

        else if (value1 == imagee1) {
            setimage1(true)
            setopenCountry1(!openCountry1)
        }
        else (
            setopenCountry1(false),
            setimage1()
        )
    }







    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{ marginBottom: moderateScale(20) }}>
            <SafeAreaView>
                <Bottomcom image1={true} name={"Summary"} />




                <View style={{ width: "93%", borderRadius: moderateScale(3), borderRadius: scale(8), marginTop: moderateScale(20), height: moderateScale(335), flexDirection: 'column', marginLeft: scale(11), backgroundColor: 'white' }}>


                    <View style={{ width: "93%", justifyContent: "center", alignItems: "center", marginTop: moderateScale(2), height: moderateScale(260), flexDirection: 'column', }}>


                        <Image
                            style={{ height: moderateScale(235), width: moderateScale(254) }}
                            source={imagePath.woman}
                            resizeMode={"contain"}
                        />
                    </View>


                    <View style={{ width: "90%", justifyContent: "space-between", marginLeft: scale(10), marginTop: moderateScale(13), height: moderateScale(55), flexDirection: 'row', }}>
                        <View style={{ width: "40%", borderColor: "#0085FF", marginLeft: scale(10), borderWidth: 1.4, borderRadius: scale(8), height: moderateScale(40), flexDirection: 'row', }}>

                            <View style={{ width: "39%", justifyContent: "center", alignItems: "center", height: moderateScale(40), flexDirection: 'row', }}>

                                <Image
                                    style={{ height: moderateScale(25), marginLeft: scale(20), width: moderateScale(25) }}
                                    source={imagePath.chat1}
                                    resizeMode={"contain"}
                                />

                            </View>
                            <View style={{ width: "40%", justifyContent: "center", alignItems: "center", height: moderateScale(40), flexDirection: 'row', }}>

                                <Text style={{ fontSize: 19, color: "#0085FF", textAlign: "center", marginLeft: scale(4), }}>
                                    Chat
                                </Text>


                            </View>



                        </View>
                        <View style={{ width: "40%", borderColor: "#0085FF", marginLeft: scale(10), borderWidth: 1.4, borderRadius: scale(8), height: moderateScale(40), flexDirection: 'row', }}>
                       
                            <View style={{ width: "39%", justifyContent: "center", alignItems: "center", height: moderateScale(40), flexDirection: 'row', }}>
                            <TouchableOpacity onPress={() => {Linking.openURL('tel:9741509576');} }>
                                <Image
                                    style={{ height: moderateScale(25), marginLeft: scale(20), width: moderateScale(25) }}
                                    source={imagePath.call}
                                    resizeMode={"contain"}
                                />
</TouchableOpacity>
                            </View>
                            
                            <View style={{ width: "40%", justifyContent: "center", alignItems: "center", height: moderateScale(40), flexDirection: 'row', }}>

                                <Text style={{ fontSize: 19, color: "#0085FF", textAlign: "center", marginLeft: scale(4), }}>
                                    Call
                                </Text>


                            </View>



                        </View>


                    </View>

                </View>
                
                <View style={{ justifyContent: "center", marginLeft: scale(8), height: moderateScale(70), width: scale(300), flexDirection: 'column', }}>

 
<View style={{ justifyContent: "center", marginLeft: scale(8), height: moderateScale(70), width: scale(300), flexDirection: 'column', }}>

<Text style={{ fontSize: scale(15), color: "black" }}>
    Lorem ipsum dolor sit amet,consectetur
</Text>
 
</View> 
</View>
                <View style={{ marginTop: moderateScale(1), height: moderateScale(70), flexDirection: 'row', backgroundColor: 'white' }}>

                    <View style={{ justifyContent: "center", marginLeft: scale(8), height: moderateScale(70), width: scale(300), flexDirection: 'column', }}>

                        <Text style={{ fontSize: scale(15), color: "black" }}>
                            Lorem ipsum dolor sit amet,consectetur
                        </Text>
                        <Text style={{ fontSize: scale(15), color: "black" }}>
                            adipiscing?
                        </Text>
                    </View>

                    <TouchableOpacity
                        style={{ height: moderateScale(60), alignItems: "center", width: scale(45), justifyContent: "center", flexDirection: 'row', }}>

                        <Image
                            style={{ height: moderateScale(10), width: 15, tintColor: "#0085FF" }}
                            source={imagePath.doun}
                        />
                    </TouchableOpacity>





                </View>
                                <View style={{ marginTop: moderateScale(1), height: moderateScale(70), flexDirection: 'row', backgroundColor: 'white' }}>

                    <View style={{ justifyContent: "center", marginLeft: scale(8), height: moderateScale(70), width: scale(300), flexDirection: 'column', }}>

                        <Text style={{ fontSize: scale(15), color: "black" }}>
                            Lorem ipsum dolor sit amet,consectetur
                        </Text>
                        <Text style={{ fontSize: scale(15), color: "black" }}>
                            adipiscing?
                        </Text>
                    </View>

                    <TouchableOpacity
                        style={{ height: moderateScale(60), alignItems: "center", width: scale(45), justifyContent: "center", flexDirection: 'row', }}>

                        <Image
                            style={{ height: moderateScale(10), width: 15, tintColor: "#0085FF" }}
                            source={imagePath.doun}
                        />
                    </TouchableOpacity>





                </View>
            </SafeAreaView>
        </ScrollView>
    )
}
const styles = StyleSheet.create({

    container: { alignItems: 'center', justifyContent: 'center', },
    gauge: {
        position: 'absolute',
        width: 100,
        height: 160,
        alignItems: 'center',
        justifyContent: 'center',
    },
    categoryContainer: {
        flexDirection: 'row',
        marginTop: 30,
        marginBottom: 20,
        justifyContent: 'space-between',
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
    gaugeText: {
        backgroundColor: 'transparent',
        color: '#000',
        fontSize: 24,
    },
    propsForBackgroundLines: {
        strokeWidth: 0,
    },
    categoryTextSelected: {
        color: colors.white,
        paddingBottom: 5,
        backgroundColor: colors.blue,
    },
})
export default Support