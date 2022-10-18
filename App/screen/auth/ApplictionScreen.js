import React from 'react';
import { ScrollView, View, Image, Text,TouchableOpacity,Linking } from "react-native";
import { scale, verticalScale, moderateScale, moderateVerticalScale,StyleSheet } from 'react-native-size-matters-ch';
import image from '../../aasets/index';
import SyncStorage from 'sync-storage';
const ApplicationRecevid = ({navigation}) => {
 
    const open_map = () =>{
        // alert("working");
        console.log('open directions')
   let f = Platform.select({
        ios: () => {
            Linking.openURL('http://maps.apple.com/maps?daddr=38.7875851,-9.3906089');
        },
        android: () => {
            console.log('ANDROID')
            Linking.openURL('http://maps.google.com/maps?daddr=ERIP, 1709, 1st Main Rd, Austin Town, Neelasandra, Bengaluru, Karnataka 560047').catch(err => console.error('An error occurred', err));;
        }
    });

    f();
    }

    const mobile_call = () =>{
        if (Platform.OS === 'android') {
            phoneNumber = `tel:${97415095769}`;
        } else {
            phoneNumber = `telprompt:${97415095769}`;
        }
    
        Linking.openURL(phoneNumber);
    }

    const cleardata = () =>{

        SyncStorage.remove('full_name');
        SyncStorage.remove('email');
        SyncStorage.remove('mobile');
        SyncStorage.remove('dob');
        SyncStorage.remove('blod_group');
        SyncStorage.remove('category');
        SyncStorage.remove('category_experiance');
        SyncStorage.remove('gender');


        SyncStorage.remove('partnel_id');
        
    }

    React.useEffect(() => {
        cleardata();
        
       
      }, []);

    return (
        <ScrollView style={{backgroundColor:"white"}} >
            <View style={{  flex: 1, alignItems: 'center', flexDirection: 'column' }}>
                <View style={{  height: moderateScale(250), width: '80%', marginLeft: moderateScale(10), alignItems: 'center', justifyContent: 'center' }}>
                    <Image
                        source={image.successfull}
                        style={{ height: moderateScale(200), width: '80%', resizeMode: 'contain' }}
                    />
                </View>
                <View style={{   height: moderateScale(100), width: '90%', marginLeft: moderateScale(10), marginBottom: moderateScale(20) }}>
                    <Text style={{ fontSize: scale(15), color: 'black' }}>We have received your application and it is under review. Your next step is to kindly visit us at our office for personal verification. This is a mandatory step to complete your application process.   </Text>
                </View>
                <View style={{  height: moderateScale(140), width: '90%', marginLeft: moderateScale(10), flexDirection: 'column' }}>
                    <View style={{ height: moderateScale(40), width: '60%',  flexDirection: 'row', alignItems: 'center' }}>
                        <Image
                            source={image.Office}
                            style={{ height: moderateScale(30), width: '30%', resizeMode: 'contain', marginRight: moderateScale(1) }}
                        />
                        <Text style={{ fontSize: scale(13), color: '#000000',fontWeight:"700" }}>Head Office</Text>
                    </View>
                    <Text style={{ fontSize: scale(13), color: 'black' }}>ERIP, 1709, 1st Main Rd,Austin Town, Neelasandra,
                    </Text>
                    <Text style={{ fontSize: scale(13), color: 'black', marginBottom: moderateScale(7) }}>Bengaluru, Karnataka 560047</Text>
                    <Text style={{ fontSize: scale(13), color: 'black' }}>Tel - 080-47184455</Text>
                </View>
                     
                    <TouchableOpacity      
                    style={{ height: moderateScale(50), width: '80%',  borderRadius: moderateScale(12), borderWidth: 1, borderColor: '#0085FF', alignItems: 'center', justifyContent: 'center' }}
        // onPress={() => navigation.navigate('Orederdetailes2')}
        onPress= {open_map}
        >
                    <Image
                        source={image.direaction}
                        style={{ height: moderateScale(30), width: '45%', resizeMode: 'contain', marginRight: moderateScale(1) }}
                    />
                    </TouchableOpacity>


                    <TouchableOpacity      
                    style={{ flex: 2,flexDirection: "row",height: moderateScale(50), width: '80%',  borderRadius: moderateScale(12), borderWidth: 1, borderColor: '#0085FF', alignItems: 'center', justifyContent: 'center',marginTop:20 }}
        // onPress={() => navigation.navigate('Orederdetailes2')}
         onPress= {mobile_call}
        >
                    <Image
                        source={image.call}
                        style={{ height: moderateScale(30), width: '45%', resizeMode: 'contain', marginRight: moderateScale(1),padding:0,marginLeft:-40 }}
                    /> 
                    <Text style={{fontSize:20,textAlign:'center',padding:0,marginLeft:-40,fontWeight:'500'}}>Call Us</Text>
                    
                    </TouchableOpacity>
                </View>

                <View style={{height: 70, }}>
             <TouchableOpacity
               style={{flex: 2,
                height: 47,
                borderRadius: 10,
                backgroundColor: 'blue',
                 justifyContent: 'center',
                alignItems: 'center',
            marginTop:20,
        width:320,
    textAlign:'center',
marginLeft:30,
}}
               onPress={() => navigation.navigate('Login')}>
               <Text style={{fontWeight: 'bold', fontSize: 15,color:'white'}}>
                 Login
               </Text>
             </TouchableOpacity>
           </View>
         </ScrollView>
    )
}; 
export default ApplicationRecevid
