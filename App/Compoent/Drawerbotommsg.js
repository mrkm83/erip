import React, { useRef, useState } from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity, DrawerLayoutAndroid } from 'react-native';
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';

import imagePath from "../utils/imagePath";


const Drawerbottommsg = () => {

    const drawer = useRef(null);
    const [drawerPosition, setDrawerPosition] = useState("left");
     
    const navigation = useNavigation();
  
    // const { msg } = props;

    return (

        <View style={{
            height: moderateScale(48),
            padding: moderateScale(5),
            width: '100%',
            flexDirection: "row",
            backgroundColor: "#F5F5F5"
          }}>
              <Text>test</Text>



</View>

    );


}

export default Drawerbottommsg;