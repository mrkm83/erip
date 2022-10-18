import React from 'react';
import { ScrollView, View, Image, Text, TouchableOpacity } from "react-native";
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';
import DropDownPicker from "react-native-dropdown-picker";
import imagePath from '../../utils/imagePath';
import Header from '../../Compoent/DrawerHeader';
import {useNetInfo} from "@react-native-community/netinfo";
const WiFi = ({ navigation }) => {

    const netInfo = useNetInfo();

    const check_internet = () =>{
       alert(netInfo.type);
       alert(netInfo.isConnected.toString());
    }
    return (
        <ScrollView style={{ backgroundColor: "white" }} >
            <View style={{ flex: 1, alignItems: 'center', flexDirection: 'column' }}>
                <View style={{ height: moderateScale(400), width: '80%', marginLeft: moderateScale(10), alignItems: 'center', justifyContent: 'center' }}>
                    <Image
                        source={imagePath.WIFI}
                        style={{ height: moderateScale(200), width: '80%', resizeMode: 'contain' }}
                    />
                </View>
                <View style={{ height: moderateScale(40), width: '90%', marginLeft: moderateScale(10), justifyContent: "center" }}>
                    <Text style={{ fontSize: scale(15), color: 'black', textAlign: "center", fontWeight: "500" }}>Oops, No Internet Connection
                    </Text>


                </View>
                <View style={{ height: moderateScale(60), width: '90%', marginLeft: moderateScale(10), justifyContent: "center" }}>

                    <Text style={{ fontSize: scale(15), color: '#7E7E7E', textAlign: "center" }}>Make sure wifi or cellular data is turned on and then try agaim.</Text>
                </View>
                <View style={{
                    height: moderateScale(150),
                    width: '100%',
                    flexDirection: "column",
                    justifyContent: "center",
                    borderRadius: 10,
                    position: "relative"

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
                        onPress = {()=>check_internet()}

                    >
                        <Text style={{ textAlign: "center", fontSize: scale(16), marginLeft: moderateScale(15), color: "#FFFFFF" }}>

                            Try Again
                        </Text>
                    </TouchableOpacity>


                </View>
            </View>
        </ScrollView>
    )
}
export default WiFi