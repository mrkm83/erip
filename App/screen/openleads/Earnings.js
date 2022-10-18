import React, { useState } from 'react';
import { SafeAreaView, View, Image, Text, TouchableOpacity, StyleSheet, FlatList, Dimensions, Modal, Button, ScrollView } from 'react-native'
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';
// import { ToggleSwitch } from 'rn-toggle-switch'
import colors from '../../constants/colors';
import imagePath from '../../utils/imagePath';
import Bottomcom from '../../Compoent/Bottomcom';
import {
    PieChart, LineChart, BarChart
} from "react-native-chart-kit";
import Pie from 'react-native-pie';
import DropDownPicker from 'react-native-dropdown-picker';
import { useNavigation } from '@react-navigation/native';
const Home = ({ Menu1, Notification1 }) => {
    const navigation = useNavigation();
    const [value, setValue] = React.useState('This Week');

    const [isOn, setIsOn] = useState(false)
    const [openCountry, setopenCountry] = React.useState(false);

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


    const chartConfig = {
        backgroundGradientFrom: "white",
        backgroundGradientFromOpacity: 'green',
        backgroundGradientTo: 'white',
        color: () => 'green',
        // fillShadowGradient: 'green',
        fillShadowGradientOpacity: 1,
        labelColor: () => `rgba(85, 139, 229)`,
        barPercentage: 0.3,
        barRadius: 5,
        propsForBackgroundLines: {
            strokeWidth: 1,
            strokeDasharray: null,
            stroke: '#F0F0F0',
        },

    };




    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{ marginBottom: moderateScale(20) }}>
            <SafeAreaView>
                <Bottomcom Menu1={imagePath.Menu} />



                <View style={{ borderRadius: moderateScale(10), marginTop: moderateScale(20), height: moderateScale(100), flexDirection: 'row', marginHorizontal: moderateScale(10), backgroundColor: colors.white }}>
 
                        <BarChart
                            data={{
                                labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                                datasets: [
                                    {
                                        data: [
                                            Math.random() * 100,
                                            Math.random() * 100,
                                            Math.random() * 100,
                                            Math.random() * 100,
                                            Math.random() * 100,

                                        ]
                                    }
                                ]
                            }}
                            // width={width}
                            // height={height}
                            width={width - 20}
                            height={height * 0.24}
                            chartConfig={chartConfig}
                            showBarTops={false}
                            yAxisLabel={''}
                            fromZero={true}
                            segments={2}



                        />
                 </View>


                <View>



                    <View style={{ borderRadius: moderateScale(10), marginBottom: moderateScale(20), height: moderateScale(200), flexDirection: 'row', marginHorizontal: moderateScale(10), backgroundColor: colors.white }}>
                        <View style={{ height: moderateVerticalScale(50), marginLeft: scale(8) }}>

                            <View style={{ height: moderateVerticalScale(20) }}>
                                <Text style={{ color: "#0C7EFA", fontSize: 20 }}>
                                    $1234.00

                                </Text>

                            </View>
                            <View style={{ height: moderateVerticalScale(40) }}>

                                <Text style={{ color: "grey", fontSize: 18, marginBottom: moderateVerticalScale(10) }}>
                                    Total Earnings in January

                                </Text>
                                <Text style={{ color: "grey", fontSize: 18, fontWeight: "500", color: "black" }}>
                                    17

                                </Text>
                                <Text style={{ color: "grey", fontSize: 18 }}>
                                    Jobs Completed


                                </Text>

                            </View>
                        </View>
                    </View>


                </View>

                <View>






                </View>

                <View style={{ height: moderateScale(200), padding: scale(2), }}>


                    <View style={{ height: moderateScale(40), margin: scale(5), width: '96%', flexDirection: 'row', justifyContent: 'space-between', }}>
                        <TouchableOpacity style={{ height: moderateScale(35), width: '40%', alignItems: 'center', justifyContent: 'center', }}>
                            <Text style={{ fontSize: scale(19), textAlign: 'center', color: 'black', fontWeight: "600" }}>
                                Total invoice
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ height: moderateScale(35), width: '100%', justifyContent: "center" }}>
                            <Text style={{ fontSize: scale(18), fontWeight: "500", textAlign: 'center', color: 'black' }}>
                                ₹543
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ height: moderateScale(35), width: '96%', flexDirection: 'row', justifyContent: 'space-between', }}>
                        <TouchableOpacity style={{ height: moderateScale(35), width: '60%', alignItems: 'center', justifyContent: 'center', }}>
                            <Text style={{ fontSize: scale(16), textAlign: 'center', color: 'black', fontWeight: "600" }}>
                                Customer paid online
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ height: moderateScale(35), width: '20%', justifyContent: "center" }}

                        >
                            <Text style={{ fontSize: scale(16), textAlign: 'center', color: 'black' }}>
                                -₹543
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ height: moderateScale(35), width: '96%', flexDirection: 'row', justifyContent: 'space-between', }}>
                        <TouchableOpacity style={{ height: moderateScale(35), width: '60%', alignItems: 'center', justifyContent: 'center', }}>
                            <Text style={{ fontSize: scale(16), textAlign: 'center', color: 'black', fontWeight: "600" }}>
                                Paymment to collect
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ height: moderateScale(35), width: '20%', justifyContent: "center" }}

                        >
                            <Text style={{ fontSize: scale(16), textAlign: 'center', color: 'grey' }}>
                                ₹0
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ height: moderateScale(40), width: '74%', flexDirection: 'row', justifyContent: 'flex-start', }}>
                        <TouchableOpacity style={{ height: moderateScale(35), width: '40%', alignItems: 'center', justifyContent: 'center', }}>
                            <Text style={{ fontSize: scale(16), textAlign: 'center', color: 'black', fontWeight: "600" }}>
                                Details
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ height: moderateScale(50), width: '100%', flexDirection: 'row', justifyContent: 'flex-start', }}>
                        <TouchableOpacity style={{ height: moderateScale(35), width: '67%', alignItems: 'center', justifyContent: 'center', }}>
                            <Text style={{ fontSize: scale(16), textAlign: 'center', color: 'black', fontWeight: "600" }}>
                                Job summary . 1 services
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ height: moderateScale(70), width: '100%', flexDirection: 'column', justifyContent: 'flex-start', }}>
                        <View style={{ height: moderateScale(30), width: '100%', flexDirection: 'row', alignItems: 'flex-start' }}>

                            <View style={{ height: moderateScale(30), width: '60%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ fontSize: scale(14), textAlign: 'center', color: 'black' }}>
                                    Xiaomi Mi, Upto 46 Inches
                                </Text>
                            </View>
                            <View style={{ height: moderateScale(30), width: '45%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ fontSize: scale(14), textAlign: 'center', color: 'black' }}>
                                    $345
                                </Text>
                            </View>
                        </View>
                        <View style={{ height: moderateScale(30), width: '50%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontSize: scale(14), textAlign: 'center', color: 'grey' }}>
                                Display Screen Repair
                            </Text>
                        </View>

                    </View>

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
    gaugeText: {
        backgroundColor: 'transparent',
        color: '#000',
        fontSize: 24,
    },
    propsForBackgroundLines: {
        strokeWidth: 0,
    },
})
export default Home