import React from 'react';
import { ScrollView, View, Image, Text, TouchableOpacity } from "react-native";
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';
import DropDownPicker from "react-native-dropdown-picker";
import imagePath from '../../utils/imagePath';
import Header from '../../Compoent/DrawerHeader';
const ApplicationRecevid = ({ navigation }) => {
    return (
        <ScrollView style={{ backgroundColor: "white" }} >
            <View style={{ flex: 1, alignItems: 'center', flexDirection: 'column' }}>
                <View style={{ height: moderateScale(370), width: '80%', marginLeft: moderateScale(10), alignItems: 'center', justifyContent: 'center' }}>
                    <Image
                        source={imagePath.congratulation}
                        style={{ height: moderateScale(200), width: '80%', resizeMode: 'contain' }}
                    />
                </View>
                <View style={{ height: moderateScale(40), width: '90%', marginLeft: moderateScale(10), justifyContent: "center" }}>
                    <Text style={{ fontSize: scale(15), color: 'black', textAlign: "center" }}>Please rate the Customer according to</Text>
                    <Text style={{ fontSize: scale(15), color: 'black', textAlign: "center" }}>your experience</Text>

                </View>
                <View style={{ height: moderateScale(80), marginTop: scale(12), justifyContent: "center", alignItems: "center", width: '100%', marginLeft: moderateScale(10), flexDirection: "row" }}>

                    <View style={{ height: moderateScale(45), width: '20%', justifyContent: "center", flexDirection: "row" }}>
                        <Image
                            source={imagePath.satar}
                            style={{ height: moderateScale(39), width: '80%', resizeMode: 'contain' }}
                        />
                    </View>
                    <View style={{ height: moderateScale(45), width: '20%', justifyContent: "center", flexDirection: "row" }}>

                        <Image
                            source={imagePath.satar}
                            style={{ height: moderateScale(39), width: '80%', resizeMode: 'contain' }}
                        />
                    </View>
                    <View style={{ height: moderateScale(39), width: '20%', justifyContent: "center", flexDirection: "row" }}>

                        <Image
                            source={imagePath.satar}
                            style={{ height: moderateScale(39), width: '80%', resizeMode: 'contain' }}
                        />
                    </View>
                    <View style={{ height: moderateScale(45), width: '20%', justifyContent: "center", flexDirection: "row" }}>

                        <Image
                            source={imagePath.satar}
                            style={{ height: moderateScale(39), width: '80%', resizeMode: 'contain' }}
                        />
                    </View>
                    <View style={{ height: moderateScale(39), width: '20%', justifyContent: "center", flexDirection: "row" }}>

                        <Image
                            source={imagePath.satar}
                            style={{ height: moderateScale(39), width: '80%', resizeMode: 'contain' }}
                        />
                    </View>
                </View>

                <View style={{
                    height: moderateScale(240),
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
                        onPress={() => navigation.navigate('Home')}
 
                    >
                        <Text style={{ textAlign: "center", fontSize: scale(16), marginLeft: moderateScale(15), color: "#FFFFFF" }}>

                            Back to Home
                        </Text>
                    </TouchableOpacity>


                </View>
            </View>
        </ScrollView>
    )
}
export default ApplicationRecevid