import React, { useState } from 'react';
import { SafeAreaView, View, Image, Text, TouchableOpacity, StyleSheet, FlatList, Dimensions, Modal, Button, ScrollView } from 'react-native'
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';
// import { ToggleSwitch } from 'rn-toggle-switch'
import colors from '../../constants/colors';
import imagePath from '../../utils/imagePath';
import Bottomcom from '../../Compoent/DrawerHeader';
import DropDownPicker from "react-native-dropdown-picker";

import {
    PieChart, LineChart, BarChart
} from "react-native-chart-kit";
import Pie from 'react-native-pie';
import { useNavigation } from '@react-navigation/native';
const WalletScreen = ({ Menu1, Notification1 }) => {
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

    const A1 = () => {
        return (
            <View style={{ height: moderateScale(150), }}>

                <View style={{ height: moderateScale(30), flexDirection: 'row', marginHorizontal: moderateScale(10), backgroundColor: 'white' }}>

                    <View style={{ justifyContent: "center", alignItems: "center", height: moderateScale(30), width: scale(200), flexDirection: 'row', }}>

                        <Text style={{ textAlign: "center", color: "#0C7EFA", borderBottomWidth: 1, borderColor: "#0C7EFA" }}>
                            Order #87568 (01/02/2022)
                        </Text>
                    </View>

                    <View style={{ height: moderateScale(30), alignItems: "center", justifyContent: "center", width: scale(115), flexDirection: 'row', }}>

                        <Text style={{ textAlign: "center", color: "grey", fontSize: scale(14), }}>
                            6500

                        </Text>
                    </View>
                </View>
                <View style={{ height: moderateScale(30), flexDirection: 'row', marginHorizontal: moderateScale(10), backgroundColor: 'white' }}>

                    <View style={{ justifyContent: "center", alignItems: "center", height: moderateScale(30), width: scale(200), flexDirection: 'row', }}>

                        <Text style={{ textAlign: "center", color: "#0C7EFA", borderBottomWidth: 1, borderColor: "#0C7EFA" }}>
                            Order #87568 (01/02/2022)
                        </Text>
                    </View>

                    <View style={{ height: moderateScale(30), alignItems: "center", justifyContent: "center", width: scale(115), flexDirection: 'row', }}>

                        <Text style={{ textAlign: "center", color: "grey", fontSize: scale(14), }}>
                            6500

                        </Text>
                    </View>
                </View>
                <View style={{ height: moderateScale(30), flexDirection: 'row', marginHorizontal: moderateScale(10), backgroundColor: 'white' }}>

                    <View style={{ justifyContent: "center", alignItems: "center", height: moderateScale(30), width: scale(200), flexDirection: 'row', }}>

                        <Text style={{ textAlign: "center", color: "#0C7EFA", borderBottomWidth: 1, borderColor: "#0C7EFA" }}>
                            Order #87568 (01/02/2022)
                        </Text>
                    </View>

                    <View style={{ height: moderateScale(30), alignItems: "center", justifyContent: "center", width: scale(115), flexDirection: 'row', }}>

                        <Text style={{ textAlign: "center", color: "grey", fontSize: scale(14), }}>
                            6500

                        </Text>
                    </View>
                </View>
                <View style={{ height: moderateScale(40), flexDirection: 'row', marginHorizontal: moderateScale(10), backgroundColor: 'white' }}>

                    <View style={{ justifyContent: "center", alignItems: "center", height: moderateScale(30), width: scale(200), flexDirection: 'row', }}>

                        <Text style={{ textAlign: "center", color: "#0C7EFA", borderBottomWidth: 1, borderColor: "#0C7EFA" }}>
                            Order #87568 (01/02/2022)
                        </Text>
                    </View>

                    <View style={{ height: moderateScale(30), alignItems: "center", justifyContent: "center", width: scale(115), flexDirection: 'row', }}>

                        <Text style={{ textAlign: "center", color: "grey", fontSize: scale(14), }}>
                            6500

                        </Text>
                    </View>
                </View>
            </View>
        )
    }


    const Allll = () => {
        return (
            <View style={{ height: moderateScale(150), }}>
                {/* <DropDownPicker
                            dropDownDirection="BOTTOM"
                            // open={openState}
                            // value={valueTwo}
                            // items={itemsState}
                            // setOpen={setopenState}
                            // setValue={setValueTwo}
                            // setItems={setItems}
                            zIndex={3000}
                            zIndexInverse={1000}
                            itemTextStyle={{ backgroundColor: colors.white, }}
                            containerStyle={{ borderColor: colors.blue, position: 'relative', paddingTop: 10, height: 300 }}
                            childrenContainerStyle={{
                                borderColor: colors.blue,
                            }}
                            labelStyle={{ color: colors.grey }}
                            style={{
                                backgroundColor: colors.white,
                                borderColor: colors.blue,
                                zIndex: 10,
                                width: '100%',
                                position: 'relative',
                            }}
                            itemStyle={{ justifyContent: 'flex-start' }}
                            dropDownStyle={{ backgroundColor: '#FAFAFA', }}
                            dropDownContainerStyle={{
                                backgroundColor: 'white',
                                borderColor: colors.blue,
                                zIndex: 1000,
                                elevation: 5000,
                            }}
                        />

                <Text style={{ color: "red" }}>jijiij</Text> */}
                <View style={{ height: moderateScale(30), flexDirection: 'row', marginHorizontal: moderateScale(10), backgroundColor: 'white' }}>

                    <View style={{ justifyContent: "center", alignItems: "center", height: moderateScale(30), width: scale(200), flexDirection: 'row', }}>

                        <Text style={{ textAlign: "center", color: "#0C7EFA", borderBottomWidth: 1, borderColor: "#0C7EFA" }}>
                            Order #87568 (01/02/2022)
                        </Text>
                    </View>

                    <View style={{ height: moderateScale(30), alignItems: "center", justifyContent: "center", width: scale(115), flexDirection: 'row', }}>

                        <Text style={{ textAlign: "center", color: "grey", fontSize: scale(14), }}>
                            6500

                        </Text>
                    </View>
                </View>
                <View style={{ height: moderateScale(30), flexDirection: 'row', marginHorizontal: moderateScale(10), backgroundColor: 'white' }}>

                    <View style={{ justifyContent: "center", alignItems: "center", height: moderateScale(30), width: scale(200), flexDirection: 'row', }}>

                        <Text style={{ textAlign: "center", color: "#0C7EFA", borderBottomWidth: 1, borderColor: "#0C7EFA" }}>
                            Order #87568 (01/02/2022)
                        </Text>
                    </View>

                    <View style={{ height: moderateScale(30), alignItems: "center", justifyContent: "center", width: scale(115), flexDirection: 'row', }}>

                        <Text style={{ textAlign: "center", color: "grey", fontSize: scale(14), }}>
                            6500

                        </Text>
                    </View>
                </View>
                <View style={{ height: moderateScale(30), flexDirection: 'row', marginHorizontal: moderateScale(10), backgroundColor: 'white' }}>

                    <View style={{ justifyContent: "center", alignItems: "center", height: moderateScale(30), width: scale(200), flexDirection: 'row', }}>

                        <Text style={{ textAlign: "center", color: "#0C7EFA", borderBottomWidth: 1, borderColor: "#0C7EFA" }}>
                            Order #87568 (01/02/2022)
                        </Text>
                    </View>

                    <View style={{ height: moderateScale(30), alignItems: "center", justifyContent: "center", width: scale(115), flexDirection: 'row', }}>

                        <Text style={{ textAlign: "center", color: "grey", fontSize: scale(14), }}>
                            6500

                        </Text>
                    </View>
                </View>
                <View style={{ height: moderateScale(40), flexDirection: 'row', marginHorizontal: moderateScale(10), backgroundColor: 'white' }}>

                    <View style={{ justifyContent: "center", alignItems: "center", height: moderateScale(30), width: scale(200), flexDirection: 'row', }}>

                        <Text style={{ textAlign: "center", color: "#0C7EFA", borderBottomWidth: 1, borderColor: "#0C7EFA" }}>
                            Order #87568 (01/02/2022)
                        </Text>
                    </View>

                    <View style={{ height: moderateScale(30), alignItems: "center", justifyContent: "center", width: scale(115), flexDirection: 'row', }}>

                        <Text style={{ textAlign: "center", color: "grey", fontSize: scale(14), }}>
                            6500

                        </Text>
                    </View>
                </View>
            </View>
        )
    }

    const CategoryList = () => {
        return (
            <View style={styles.categoryContainer}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {categories.map((item, index) =>

                    (


                        <TouchableOpacity

                            key={index}
                            activeOpacity={0.8}
                            onPress={() => setCategoryIndex(index)}>
                            <Text
                                style={[
                                    styles.categoryText,
                                    catergoryIndex === index && styles.categoryTextSelected,
                                ]}>
                                {item}
                            </Text>

                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
        );
    };
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{ marginBottom: moderateScale(20) }}>
            <SafeAreaView>
                <Bottomcom image1={true} name={"Summary"} />
                <View>

                    <CategoryList />

                    <View style={{height:moderateScale(30),justifyContent:"center"}}>

                        <Text style={{fontSize:20,color:"black",marginLeft:scale(12),fontWeight:"500"}}>
                        01 January, 2022 - 07 January, 2022

                        </Text>
                    </View>

                    <View style={{ borderRadius: moderateScale(10), marginTop: moderateScale(20), height: moderateScale(220), flexDirection: 'row', marginHorizontal: moderateScale(10), backgroundColor: colors.white }}>
                        <View style={styles.sectionWrapper}>
                            <View style={styles.container}>
                                <View style={{ marginTop: moderateScale(40), marginHorizontal: moderateVerticalScale(100) }}>
                                    <View style={{ flexDirection: 'row', justifyContent: "center" }}>

                                        <Pie
                                            radius={80}
                                            innerRadius={60}

                                            sections={[
                                                {
                                                    percentage: 10,
                                                    color: '#F9623B',

                                                },
                                                {
                                                    percentage: 20,
                                                    color: '#00B67F',
                                                },
                                                {
                                                    percentage: 30,
                                                    color: '#F9933B',
                                                },
                                                {
                                                    percentage: 40,
                                                    color: '#0085FF',
                                                },

                                            ]}
                                            dividerSize={4}
                                            strokeCap={'round'}

                                        />
                                        <View>


                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{ borderRadius: moderateScale(8), marginTop: moderateScale(20), height: moderateScale(55), flexDirection: 'row', marginHorizontal: moderateScale(10), backgroundColor: 'white' }}>

                        <View style={{ justifyContent: "center", alignItems: "center", height: moderateScale(50), width: scale(150), flexDirection: 'row', }}>

                            <Text style={{ textAlign: "center" }}>


                                Total Leads Change
                            </Text>
                        </View>

                        <View style={{ height: moderateScale(50), alignItems: "center", justifyContent: "center", width: scale(135), flexDirection: 'row', }}>

                            <Text style={{ textAlign: "center", color: "#0085FF", fontSize: scale(15), marginLeft: scale(80) }}>
                                6500

                            </Text>
                        </View>


                        {
                            imagee ? (
                                <TouchableOpacity onPress={() => Done(!imagee)}
                                    style={{ height: moderateScale(50), alignItems: "center", width: scale(45), justifyContent: "center", flexDirection: 'row', }}>

                                    <Image
                                        style={{ height: moderateScale(10), width: 15, }}
                                        source={imagePath.doun}
                                    />
                                </TouchableOpacity>
                            ) : (
                                <TouchableOpacity

                                    onPress={() => Done(!openCountry)}
                                    style={{ height: moderateScale(50), alignItems: "center", width: scale(45), justifyContent: "center", flexDirection: 'row', }}>
                                    <Image
                                        style={{ height: moderateScale(10), width: 15, }}
                                        source={imagePath.uparrow}
                                    />
                                </TouchableOpacity>
                            )}
                    </View>
                    <View style={{ borderRadius: moderateScale(8), marginTop: moderateScale(10), height: moderateScale(55), flexDirection: 'row', marginHorizontal: moderateScale(10), backgroundColor: 'white' }}>

                        <View style={{ justifyContent: "center", alignItems: "center", height: moderateScale(50), width: scale(150), flexDirection: 'row', }}>

                            <Text style={{ textAlign: "center" }}>


                                Total Commission
                            </Text>
                        </View>

                        <View style={{ height: moderateScale(50), alignItems: "center", justifyContent: "center", width: scale(135), flexDirection: 'row', }}>

                            <Text style={{ textAlign: "center", color: "#00B67F", fontSize: scale(15), marginLeft: scale(80) }}>
                                230

                            </Text>
                        </View>


                        {
                            imagee1 === true ? (
                                <TouchableOpacity
                                    onPress={() => Done1(!imagee1)}
                                    style={{ height: moderateScale(50), alignItems: "center", width: scale(45), justifyContent: "center", flexDirection: 'row', }}>

                                    <Image
                                        style={{ height: moderateScale(10), width: 15, }}
                                        source={imagePath.doun}
                                    />
                                </TouchableOpacity>
                            ) :
                                imagee === true ?

                                    (
                                        <TouchableOpacity

                                            onPress={() => Done1(!openCountry1)}


                                            style={{ height: moderateScale(50), alignItems: "center", width: scale(45), justifyContent: "center", flexDirection: 'row', }}>

                                            <Image
                                                style={{ height: moderateScale(10), width: 15, }}
                                                source={imagePath.uparrow}
                                            />
                                        </TouchableOpacity>
                                    ) : null}


                    </View>

                    {/* {openCountry ? (<Allll />) : null}
                    {openCountry1 ? (<A1 />) : null} */}
                    {openCountry === true ? (<Allll />) : openCountry1 === true ? (<Allll />) : null

                    }



                    {/* a === true ? a : b === true ? b : c */}


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
export default WalletScreen