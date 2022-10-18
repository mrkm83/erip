import React, { useState } from 'react';
import { View, Text ,Image,Dimensions, TouchableOpacity,TextInput} from 'react-native';
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';

import imagePath from '../../utils/imagePath';
const  Otpsheetscompoent=(props)=> {


    const [number,setchange]=useState()
    const navigation = useNavigation();

    const {name}= props;

  return (
<View style={{ height: moderateScale(280), width: '100%', alignItems: 'center', flexDirection: 'column', }}>
            <View style={{ height: moderateScale(40), width: '90%', alignItems: 'flex-start', justifyContent: 'center', }}>
                <Text style={{ fontSize: scale(15), textAlign: 'center', color: 'black',fontWeight:"500" }}>
                    Enter OTP Received From Client To Stat Job
                </Text>
            </View>
            <View style={{ height: moderateScale(280), width: '100%', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', }}>
                <View style={{ height: moderateScale(75), width: '100%', justifyContent: 'center', alignItems: "center" }}>
                    <TextInput
                        style={{
                            height: moderateScale(50),
                            borderRadius: 10,
                            fontSize: scale(16),
                            borderWidth: 2,
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center',
                            borderColor: '#0C7EFA',
                            width: '90%',
                        }}
                         value={number}
                        placeholder="* * * * * * * * * * * *  "
                        keyboardType="numeric"
                        placeholderTextColor={"grey"}

                        autoFocus={true}
                    />
                </View>
                <View style={{ height: moderateScale(180), width: '100%', flexDirection: 'column', alignItems: 'center', }}>
                    <TouchableOpacity
                     onPress={() => navigation.navigate('OrderDetailscreen2')}
                    
                    
                    style={{ height: moderateScale(50), width: '90%', borderRadius: moderateScale(12), backgroundColor: '#0085FF', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: scale(16), color: 'white' }}>Submit OTP</Text>
                    </TouchableOpacity>
                    <View style={{ height: moderateScale(50), width: '100%', alignItems: 'center', justifyContent: 'center', marginTop: moderateScale(5), flexDirection: 'row' }}>
                        <Text style={{ fontSize: scale(16), color: 'black' }}>
                            Dont not get OTP?
                        </Text>
                        <TouchableOpacity>
                            <Text style={{ fontSize: scale(16), color: '#0C7EFA' }}>
                                Resend OTP
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>

  );
}

export default Otpsheetscompoent;