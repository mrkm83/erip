import React,{ useRef, useState, } from 'react';
import { ScrollView, View, Image, Text, TouchableOpacity } from "react-native";
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';
import DropDownPicker from "react-native-dropdown-picker";
import imagePath from '../../utils/imagePath';
import Header from '../../Compoent/DrawerHeader';
import SyncStorage from 'sync-storage';

const ApplicationRecevid = ({ navigation }) => {

    const[stardata,setstardata] = useState({
        select_star:'0',
        //star_1:'imagePath.satar',
    });

    const slectstart = (star) =>{
        const nextFormState = {
            ...stardata,
            select_star: star,
           
          
          };
          setstardata(nextFormState);
// alert(star);
    }

    let token = SyncStorage.get('token');
   
    let order_e_id = SyncStorage.get('order_e_id');
    let  bearer = 'Bearer ' + token;

    const starrating = () =>{

        fetch('http://43.204.87.153/api/v1/partners/lead_rate_user', {

            method: 'POST',
            body: JSON.stringify({
                order: order_e_id,
                rating:stardata.select_star
               }), //post body
            headers: {
                'Authorization': bearer,
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },

        }).then((response_new) => response_new.json())
        .then((responseJson) => {;

            navigation.navigate('Home', { });
         

        }).catch((error) => {
            //Error 
            console.error(error);
        });

        // alert(stardata.select_star);
    }
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
                    {/* <Text>{stardata.select_star}</Text> */}
                </View>
                <View style={{ height: moderateScale(80), marginTop: scale(12), justifyContent: "center", alignItems: "center", width: '100%', marginLeft: moderateScale(10), flexDirection: "row" }}>
                
                   
                    <TouchableOpacity onPress={()=>slectstart(1)} style={{ height: moderateScale(45), width: '20%', justifyContent: "center", flexDirection: "row" }}>
                        <Image
                            source={stardata.select_star >='1' ?  imagePath.starfill : imagePath.satar }
                            style={{ height: moderateScale(39), width: '80%', resizeMode: 'contain' }}
                        />
                        </TouchableOpacity>
                   
                    
                        <TouchableOpacity onPress={()=>slectstart(2)} style={{ height: moderateScale(45), width: '20%', justifyContent: "center", flexDirection: "row" }}>

                        <Image
                            source={stardata.select_star>='2' ?  imagePath.starfill : imagePath.satar }
                            style={{ height: moderateScale(39), width: '80%', resizeMode: 'contain' }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>slectstart(3)} style={{ height: moderateScale(45), width: '20%', justifyContent: "center", flexDirection: "row" }}>

                        <Image
                            source={stardata.select_star>='3' ?  imagePath.starfill : imagePath.satar }
                            style={{ height: moderateScale(39), width: '80%', resizeMode: 'contain' }}
                        />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>slectstart(4)} style={{ height: moderateScale(45), width: '20%', justifyContent: "center", flexDirection: "row" }}>

                        <Image
                            source={stardata.select_star>='4' ?  imagePath.starfill : imagePath.satar }
                            style={{ height: moderateScale(39), width: '80%', resizeMode: 'contain' }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>slectstart(5)} style={{ height: moderateScale(45), width: '20%', justifyContent: "center", flexDirection: "row" }}>

                        <Image
                            source={stardata.select_star>='5' ?  imagePath.starfill : imagePath.satar }
                            style={{ height: moderateScale(39), width: '80%', resizeMode: 'contain' }}
                        />
                        </TouchableOpacity>
                    
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
                      //  onPress={() => navigation.navigate('Home')}
                      onPress={() => starrating()}
 
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