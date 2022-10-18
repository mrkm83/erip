import React,{ useRef, useState, } from 'react';
import { ScrollView, View, Image, Text, TouchableOpacity } from "react-native";
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';
import DropDownPicker from "react-native-dropdown-picker";
import imagePath from '../../utils/imagePath';
import Header from '../../Compoent/DrawerHeader';
import StepIndicator from 'react-native-step-indicator';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import SyncStorage from 'sync-storage';

const ApplicationRecevid = ({ navigation }) => {

    let token = SyncStorage.get('token');
   
    let order_e_id = SyncStorage.get('order_e_id');
    let  bearer = 'Bearer ' + token;

    const [msageste, setmsg] = useState({

        paymnetstatus :'',

    });


    const gotopaymnetsucess = () =>{

        fetch('http://43.204.87.153/api/v1/partners/lead_payment_status', {

            method: 'POST',
            body: JSON.stringify({
                order: order_e_id,
               }), //post body
            headers: {
                'Authorization': bearer,
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },

        }).then((response_new) => response_new.json())
        .then((responseJson) => {;

            // console.warn(responseJson);

            const nextFormState = {
                ...msageste,
                paymnetstatus: responseJson.message,
               
              
              };
              setmsg(nextFormState);

       console.warn(responseJson);
            if(responseJson.success==false){
                navigation.navigate('Onlinesfailed', { });
                
                
            }else{
                // tableData:responseJson.data;
                // const nextFormState = {
                //     // ...tablednew,
                //     tablednew:responseJson.data,
                //   };
                
              
                
            }
    //  setleaddata(newtdata);
         

        }).catch((error) => {
            //Error 
            console.error(error);
        });
       
        // navigation.navigate('Onlinesuccessful', { });

    }

    const renderStepIndicator = ()=>{

        return(

            <View style={{height:moderateScale(40), justifyContent:"center"}}>

                <Image
                style={{height:moderateScale(20),width:30,bottom:scale(1)}}
                source={imagePath.right1}
                />
            </View>
        )
     }
     const test1 = ()=>{

        return(

            <View style={{height:moderateScale(40), justifyContent:"center"}}>

                <Text
             style={{color:"grey",marginHorizontal:scale(30),fontSize:16}}   >
                    Confirm/add work done
                </Text>
            </View>
        )
     }
 
    const labels = ["Confirm/add work done", "Create invoice & collect payment"];
    const customStyles = {
         
        stepIndicatorSize: 38,
        currentStepIndicatorSize:3,
        separatorStrokeWidth: 1.3,
        currentStepStrokeWidth: 1,
          stepStrokeWidth: 0.6,
          stepIndicatorLabelFontSize: 8,
        currentStepIndicatorLabelFontSize: 8,
         labelSize: 15,

           
         
       
      }
      

    return (
        <ScrollView style={{ backgroundColor: "white" }} >
            <Header backgroundColor1={'white'} />
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <View style={{ height: moderateScale(60), width: "48%", justifyContent: "center", flexDirection: "row", }}>
                    <Text style={{ color: "black", textAlign: "center", fontWeight: "500", fontSize: scale(18) }}>
                        customer Name
                    </Text>
                </View>
                <View style={{ height: moderateScale(50), width: "100%",   flexDirection: "row", }}>
                <View style={{ height: moderateScale(50), width: "38%", justifyContent: "center", flexDirection: "row", }}>

                    <Text style={{ color: "black", textAlign: "center", fontWeight: "500", fontSize: scale(17) }}>

                    Job Summary
                    </Text>
                    </View>


                    <View style={{ height: moderateScale(50), width: "60%",  justifyContent: "center", flexDirection: "row", }}>

                    <Image
                style={{height:moderateScale(10),width:15,marginLeft:scale(120) }}
                source={imagePath.doun}
                />
</View>
                </View>
                <View style={{ height: moderateScale(30), width: "28%", justifyContent: "center", flexDirection: "row", }}>
                    <Text style={{ color: "black", textAlign: "center", fontWeight: "500", fontSize: scale(15) }}>

                        Tasks
                    </Text>
                </View>

 

<View style={{ height:moderateScale(140), marginLeft:scale(29) ,justifyContent:"center" }}>
<StepIndicator
 direction="vertical"
customStyles={customStyles}
stepCount={2}
 labels={labels}
   renderStepIndicator={renderStepIndicator}
  renderLabel={test1}
/>


</View>
<View style={{height:50}}></View>
                <View style={{ height: moderateScale(140), width: '80%', marginLeft: moderateScale(33), alignItems: 'center', justifyContent: 'center' }}>
                    <Image
                        source={imagePath.customer}
                        style={{ height: moderateScale(220), width: '100%', resizeMode: 'cover' }}
                    />
                </View>



                <View style={{
                    height: moderateScale(280),
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
                        onPress={()=>gotopaymnetsucess()}

                    >
                        <Text style={{ textAlign: "center", fontSize: scale(16), marginLeft: moderateScale(15), color: "#FFFFFF" }}>

                        Check Payment Status
                        </Text>
                    </TouchableOpacity>


                </View>
            </View>
        </ScrollView>
    )
}
export default ApplicationRecevid