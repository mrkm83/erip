import React from 'react';
import { ScrollView, View, Image, Text, TouchableOpacity } from "react-native";
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';
import DropDownPicker from "react-native-dropdown-picker";
import imagePath from '../../utils/imagePath';
import Header from '../../Compoent/DrawerHeader';
const Onlinesuccessful = ({ navigation }) => {
    return (
        <ScrollView style={{ backgroundColor: "white" }} >
            <Header backgroundColor1={'white'} />
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <View style={{ height: moderateScale(60), width: "48%", justifyContent: "center", flexDirection: "row", }}>
                    <Text style={{ color: "black", textAlign: "center", fontWeight: "500", fontSize: scale(18) }}>
                        customer Name
                    </Text>
                </View>
                <View style={{ height: moderateScale(50), width: "48%", justifyContent: "center", flexDirection: "row", }}>

                    <Text style={{ color: "black", textAlign: "center", fontWeight: "500", fontSize: scale(18) }}>

                        customer Name
                    </Text>
                </View>
                <View style={{ height: moderateScale(150),   width: "48%", justifyContent: "center", flexDirection: "row", }}>
                    <Text style={{ color: "black", textAlign: "center", fontWeight: "500", fontSize: scale(18) }}>

                        Tasks
                    </Text>
                </View>
                <View style={{     height: moderateScale(150), width: '100%', marginLeft: moderateScale(33),  justifyContent: 'center' }}>
                    <Image
                        source={imagePath.paymentsuccsfuly}
                        style={{  height:moderateScale(180), width: "80%", resizeMode: "contain" }}
                    />
                </View>



                <View style={{
                    height: moderateScale(280),
                    width: '100%',
                    flexDirection: "column",
                    
                    justifyContent:"center", 
 
                }}>
                     <View style={{
                    height: moderateScale(100),
                    width: '100%',
                    flexDirection: "column",
                     
                    justifyContent:"center", 
                     top:scale(38)

                }}>

                    <TouchableOpacity
                        style={{
                            height: moderateScale(50),
                            width: '90%',
                            flexDirection: "column",
                            justifyContent: "center",
                            borderWidth: 1,
                            borderColor: "#0085FF",
                            borderRadius: 12, backgroundColor: "#0085FF",
                            marginLeft: moderateScale(20),
                            position: "relative"
                        }}

                    >
                        <View style={{
                            height: moderateScale(40),
                            width: '14%',
                             top:scale(11),
                            marginLeft:scale(12),justifyContent:"center",
                            borderRadius:7,
                            borderWidth:1,borderColor:"white"

                        }}>
                            <Image
                                source={imagePath.BackIcon}
                                style={{ height: moderateScale(10), width: "80%", resizeMode: "contain" }}
                            />
                        </View>
                        <Text style={{ textAlign: "center", fontSize: scale(16), bottom:scale(17), marginLeft: moderateScale(15), color: "#FFFFFF" }}>
                            Slide to End job

                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            </View>
        </ScrollView>
    )
}
export default Onlinesuccessful