import React, { useRef, useState } from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity, DrawerLayoutAndroid } from 'react-native';
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';

import { NavigationContainer } from '@react-navigation/native';

 import {  DrawerActions } from '@react-navigation/native';

 import {DrawerNav} from '../Appnavigtore/DrawerNav'

import imagePath from "../utils/imagePath";
const DrawerHeader = (props) => {
  const drawer = useRef(null);
  const [drawerPosition, setDrawerPosition] = useState("left");
   
  const navigation = useNavigation();

  const { name, image1 ,image2} = props;

  return (
    <View style={{
      height: moderateScale(48),
      padding: moderateScale(5),
      width: '100%',
      flexDirection: "row",
      backgroundColor: "#F5F5F5"
    }}>


      <View style={{
        height: moderateScale(48),
        padding: moderateScale(5),
        width: '100%',
        flexDirection: "row",
      }}>
        <TouchableOpacity style={{

          height: moderateScale(44),
          padding: moderateScale(5),

          marginRight: moderateScale(1),
          with: "30%"

        }}

          onPress={() => navigation.goBack()}

        >
          <Image
            style={{
              height: 15, width: 18,
              marginLeft: 5
            }}
            source={imagePath.BackIcon}

          />

        </TouchableOpacity>
        <View style={{



          height: moderateScale(40),
          width: '75%',
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center"



        }}>
          <Text style={{ textAlign: "center", color: "#000000", fontSize: scale(17), marginBottom: scale(8.5) }}>{name}</Text>


        </View>




        <View style={{
          height: moderateScale(44),
          padding: moderateScale(5),
          width: '13%',
          flexDirection: "row",
          justifyContent: "flex-end",
          marginBottom: 10,

        }}>


          {image1 &&
            <TouchableOpacity style={{

              height: moderateScale(40), with: 100,

            }}

            onPress={()=>navigation.openDrawer()} 

            >
              <Image
                style={{
                  height: 20, width: 20,
                  marginLeft: 5
                }}
                source={imagePath.Menu}

              />
            </TouchableOpacity>
          }



{image2 &&
            <TouchableOpacity style={{

              height: moderateScale(40), with: 100,

            }}

            //  onPress={() => navigation.goBack()}  

            >
              <Image
                style={{
                  height: 20, width: 20,
                  marginLeft: 5
                }}
                source={imagePath.pencil}

              />
            </TouchableOpacity>
          }
        </View>
      </View>
    </View>
  );
}

export default DrawerHeader;