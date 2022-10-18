import React, { useState } from 'react';
import { SafeAreaView, View, Image, Text, TouchableOpacity, StyleSheet, FlatList, Dimensions, Modal, Button, ScrollView } from 'react-native'
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';
// import { ToggleSwitch } from 'rn-toggle-switch'
import DropDownPicker from "react-native-dropdown-picker";
import imagePath from '../../utils/imagePath';
import colors from '../../constants/colors';
import Bottomcom from '../../Compoent/Bottomcom';
import { Rating, AirbnbRating } from 'react-native-ratings';

import {
    PieChart, LineChart, BarChart
} from "react-native-chart-kit";
import Pie from 'react-native-pie';
import { useNavigation } from '@react-navigation/native';
const Ratings = ({ Menu1, Notification1 }) => {
    const navigation = useNavigation();
    const [catergoryIndex, setCategoryIndex] = React.useState(0);
    const [itemsState, setItemsState] = React.useState([
        { label: 'Madhya Pradesh', value: 'Madhya Pradesh' },
        { label: 'Andra Pradesh', value: 'Andhra Pradesh' },
    ]);

    const [isOn11, setIsOn] = useState(false)
    const [openCountry, setopenCountry] = React.useState(false);
    const [imagee, setimage] = React.useState(false);
    const [openCountry1, setopenCountry1] = React.useState(false);
    const [imagee1, setimage1] = React.useState(false);

    const categories = ['All Leads', 'Today', 'Tommorrow', 'Weekly'];

    const sp = (value) => {

        if (value == imagee) {

            setimage(true),
                setimage1(true),
                (
                    <ALLLL />
                );
        } else (
            setimage(false),
            setimage1(false)
        )
    }

    const Add = (value1) => {

        if (value1 == openCountry) {

            setopenCountry(true),
                setopenCountry1(true),
                (
                    <Alladd />
                );
        } else (
            setopenCountry(false),
            setopenCountry1(false)
        )
    }


    const Alladd = () => {
        return (

            <View style={{ height: moderateScale(20), width: "100%", backgroundColor: "white" }}>

                <Text style={{ color: "grey" }}>
                    Excellect job!

                </Text>
            </View>
        )
    }
    const ALLLL = () => {
        return (

            <View style={{ height: moderateScale(20), width: "100%", backgroundColor: "white" }}>

                <Text style={{ color: "grey" }}>
                    Excellect job!

                </Text>
            </View>
        )
    }
    <View >
    </View>
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{ marginBottom: moderateScale(20) }}>
            <SafeAreaView>
                <Bottomcom image1={true} name={"Summary"}
                    Menu1={imagePath.Menu}
                    Notification1={imagePath.Notification}

                />

                <View style={{ width: "93%", borderRadius: moderateScale(3), borderRadius: scale(8), marginTop: moderateScale(20), height: moderateScale(190), flexDirection: 'column', marginLeft: scale(11), backgroundColor: 'white' }}>

                    <View style={{ justifyContent: "center", marginLeft: scale(8), height: moderateScale(40), flexDirection: 'column', }}>


                        <Text style={{ fontSize: scale(15), color: "grey", }}>
                            Your Rating
                        </Text>
                    </View>
                    <View style={{ width: "100%", height: moderateScale(80), flexDirection: 'column', }}>
                        <View style={{ justifyContent: "center", height: moderateScale(80), }}>


                            <Text style={{ fontSize: scale(60), color: "#0085FF", textAlign: "center" }}>

                                4
                            </Text>
                        </View>
                    </View>

                    <View style={{ height: moderateScale(40), justifyContent: "center", alignItems: "center", width: '100%', marginLeft: moderateScale(10), flexDirection: "row" }}>
                        <Rating
                            ratingCount={5}
                            imageSize={35}
                            defaultRating={2}
                            isDisabled={true}
                            size={20}
                            style={{ paddingVertical: 10 }}
                        />
                    </View>

                </View>

                <View style={{ marginTop: moderateScale(20), flex: 3, flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: moderateScale(10) }}>


                    <View style={{ marginHorizontal: moderateScale(5) }}></View>
                    <View style={{ height: moderateScale(86), flex: 1, width: Dimensions.get('window').width / 2, borderRadius: moderateScale(10), backgroundColor: colors.white }}>
                        <Text style={{ padding: moderateScale(10), alignSelf: 'flex-start', fontSize: scale(14), fontWeight: '600', color: colors.grey }}>Your Last Job Rating
                        </Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: scale(26), alignSelf: "flex-start", color: "#0085FF", paddingStart: moderateScale(10), fontWeight: 'bold' }}>4.5</Text>
                            <Image source={imagePath.Star} style={{ marginStart: moderateScale(10), width: moderateScale(20), height: moderateScale(20), alignSelf: 'center' }} />
                        </View>

                    </View>
                    <View style={{ marginHorizontal: moderateScale(5) }}></View>
                    <View style={{ height: moderateScale(86), flex: 1, width: Dimensions.get('window').width / 2, borderRadius: moderateScale(10), backgroundColor: colors.white }}>


                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ padding: moderateScale(10), alignSelf: 'flex-start', fontSize: scale(14), fontWeight: '600', color: colors.grey }}>Last 7 days
                            </Text>
                            {/* {imagee1 ? (<TouchableOpacity
                                onPress={() => sp(!imagee)} */}
                            {openCountry1 ? (<TouchableOpacity
                                onPress={() => Add(!openCountry1)}
                                style={{ marginStart: moderateScale(10), width: moderateScale(12), height: moderateScale(12), marginLeft: scale(40), alignSelf: 'center' }}>
                                <Image source={imagePath.doun} style={{ marginStart: moderateScale(10), width: moderateScale(12), height: moderateScale(12), marginLeft: scale(40), alignSelf: 'center' }} />
                            </TouchableOpacity>) :
                                (<TouchableOpacity
                                    onPress={() => Add(openCountry)}

                                    style={{ marginStart: moderateScale(10), width: moderateScale(12), height: moderateScale(12), marginLeft: scale(40), alignSelf: 'center' }}>
                                    <Image source={imagePath.right1} style={{ marginStart: moderateScale(10), width: moderateScale(12), height: moderateScale(12), marginLeft: scale(40), alignSelf: 'center' }} />
                                </TouchableOpacity>
                                )}

                        </View>


                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: scale(26), alignSelf: "flex-start", color: colors.blue, paddingStart: moderateScale(10), fontWeight: 'bold' }}>4.5</Text>


                            <Image source={imagePath.Star} style={{ marginStart: moderateScale(10), width: moderateScale(20), height: moderateScale(20), alignSelf: 'center' }} />
                        </View>

                    </View>


                </View>

                <View style={{ justifyContent: "center", marginLeft: scale(8), height: moderateScale(75), width: scale(300), flexDirection: 'column', }}>

                    <View style={{ justifyContent: "center", height: moderateScale(70), width: scale(300), flexDirection: 'column', }}>

                        <Text style={{ fontSize: scale(15), color: "black" }}>
                            Your Latest Jobs
                        </Text>

                    </View>
                </View>
                <View style={{ marginTop: moderateScale(1), height: moderateScale(70), flexDirection: 'row', backgroundColor: 'white' }}>

                    <View style={{ justifyContent: "center", marginLeft: scale(8), height: moderateScale(70), width: scale(200), flexDirection: 'column', }}>

                        <Text style={{ fontSize: scale(15), color: "black" }}>
                            Display Screen Repair - MI 4                        </Text>
                        <Text style={{ fontSize: scale(13), color: "grey" }}>
                            Order ID #123, January 12
                            ?
                        </Text>
                        {imagee ? (<ALLLL />) : null}

                    </View>


                    <View style={{ justifyContent: "center", height: moderateScale(70), width: scale(90), flexDirection: 'column', }}>

                        <Rating
                            ratingCount={5}
                            imageSize={18}
                            defaultRating={2}
                            isDisabled={true}
                            style={{ bottom: scale(8) }}

                        />

                    </View>

                    {imagee1 ? (<TouchableOpacity
                        onPress={() => sp(!imagee)}
                        style={{ height: moderateScale(60), alignItems: "center", width: scale(45), justifyContent: "center", flexDirection: 'row', }}>

                        <Image
                            style={{ height: moderateScale(10), width: 15, tintColor: "#0085FF" }}
                            source={imagePath.uparrow}
                        />
                    </TouchableOpacity>
                    ) : (<TouchableOpacity
                        onPress={() => sp(imagee1)}
                        style={{ height: moderateScale(60), alignItems: "center", width: scale(45), justifyContent: "center", flexDirection: 'row', }}>

                        <Image
                            style={{ height: moderateScale(10), width: 15, tintColor: "#0085FF" }}
                            source={imagePath.doun}
                        />
                    </TouchableOpacity>
                    )}




                </View>




                <View style={{ marginTop: moderateScale(1), height: moderateScale(70), flexDirection: 'row', backgroundColor: 'white' }}>

                    <View style={{ justifyContent: "center", marginLeft: scale(8), height: moderateScale(70), width: scale(200), flexDirection: 'column', }}>

                        <Text style={{ fontSize: scale(15), color: "black" }}>
                            Display Screen Repair - MI 4                        </Text>
                        <Text style={{ fontSize: scale(13), color: "grey" }}>
                            Order ID #123, January 12
                            ?
                        </Text>
                    </View>


                    <View style={{ justifyContent: "center", height: moderateScale(70), width: scale(90), flexDirection: 'column', }}>

                        <Rating
                            ratingCount={5}
                            imageSize={18}
                            defaultRating={2}
                            isDisabled={true}
                            style={{ bottom: scale(8) }}

                        />

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
export default Ratings