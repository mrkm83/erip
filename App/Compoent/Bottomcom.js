import React, { useState } from "react";
import { Image, Text, View,TouchableOpacity,Button} from "react-native";
 import { moderateScale, moderateVerticalScale, scale } from "react-native-size-matters";
 import { NavigationContainer } from '@react-navigation/native';

 import { useNavigation , DrawerActions } from '@react-navigation/native';
 import moment from 'moment';

 import {DrawerNav} from '../Appnavigtore/DrawerNav'
 import SyncStorage from 'sync-storage';
 import AsyncStorage from '@react-native-async-storage/async-storage';
 import ToggleSwitch from "toggle-switch-react-native";
 import { useIsFocused } from '@react-navigation/native';
 import {Root,  Popup, Toast } from 'react-native-popup-confirm-toast'

//  import { DrawerActions } from 'react-navigation'

import colors from "../constants/colors";
import imagePath from "../utils/imagePath";


const Bottomcom = () => {
    const navigation = useNavigation();

    let my_full_name = SyncStorage.get('my_full_name');

    // let token = SyncStorage.get('token');
const [token , settoken] = useState('');

   
    const [isOn, setIsOn] = useState(true);
    const [partnel, setpromForm] = React.useState({
      partnel_fullname :'',
      today:'',
      
  
  });
  const isFocused = useIsFocused();

  const setttoken = async() =>{

    try {
      // const value = await AsyncStorage.getItem('@MySuperStore:key');
      const token_new = await AsyncStorage.getItem('login_token');
      settoken(token_new);
      SyncStorage.set('token', token_new);
      fetchpartneldetails(token_new);
      fetchpartnel_status();
      // console.warn(token);
    } catch (error) {
      // Error retrieving data
      const token = '';
      SyncStorage.remove('partnel_id');
         navigation.navigate('Login', { });

    }

  }

    // console.warn(isOn);
    const callonlinefun = (id) => {
    //  alert(id);
      let  bearer = 'Bearer ' + token;
    

      fetch('http://43.204.87.153/api/v1/partners/my_active_status', {
              method: 'POST',
              headers: {
                  'Authorization': bearer,
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
              },
  
          }).then((response) => response.json())
          .then((responseJson) => {;
             console.warn(responseJson);
            fetchpartnel_status();
          //  alert(responseJson.active_status_online);
          if(id==true){
          Popup.show({
            type: 'danger',
            title: 'Are you Busy?',
            textBody: 'new otder will not assgin tou you',
              buttonText: 'Ok',
        okButtonStyle:{backgroundColor: '#0085FF'},
            
        callback: () => {
               Popup.hide();
            },
            
            
            
        })
      }else{
        Popup.show({
          type: 'success',
          title: 'Great ',
          textBody: 'new otder will  assgin tou you',
            buttonText: 'Ok',
      okButtonStyle:{backgroundColor: '#0085FF'},
          
      callback: () => {
             Popup.hide();
          },
          
          
          
      })

      }

  
          }).catch((error) => {
            
            //Error 
            console.error(error);
        });
    } 
    

    const fetchpartneldetails = (token_new) =>{
      
//       alert('2'+SyncStorage.get('token'));

  // alert('1'+token);
      let  bearer = 'Bearer ' + token_new;
  //  alert(bearer);
  // console.warn(token_new);
  
      fetch('http://43.204.87.153/api/v1/partners/my_profile', {
              method: 'GET',
              headers: {
                  'Authorization': bearer,
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
              },
  
          }).then((response) => response.json())
          .then((responseJson) => {;
      console.warn(responseJson);
         if(responseJson.success==false){
          //  alert("logout");
          SyncStorage.remove('partnel_id');
         navigation.navigate('Login', { });

         }else{

         

            let ndate= new Date();
        let today = moment(ndate).format('dddd Do ,MMMM');

            const nextFormState = {
              ...partnel,
              partnel_fullname:responseJson.data[0].partner_fullname,
              today:today
              
            };
            setpromForm(nextFormState);
            // SyncStorage.set('my_full_name', responseJson.data[0].partner_fullname);
            // SyncStorage.set('my_services', responseJson.data[0].partner_service[0].category_title);
            //  SyncStorage.set('selfi', responseJson.data[0].partner_documents[2].doc_url);
  
            //  console.warn(responseJson.data[0].partner_documents[2].doc_url);
          }
  
          }).catch((error) => {
            
            //Error 
            console.error(error);
        });
  
  
  
  
    }

    const fetchpartnel_status = async() => {

     

      let  bearer = 'Bearer ' + token_new;


      fetch('http://43.204.87.153/api/v1/partners/my_active_status', {
              method: 'GET',
              headers: {
                  'Authorization': bearer,
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
              },
  
          }).then((response) => response.json())
          .then((responseJson) => {;
            // console.warn(responseJson);
           if(responseJson.success==true){
            setIsOn(responseJson.active_status_online);

            
           }
          //  alert(responseJson.active_status_online);
  
          }).catch((error) => {
            
            //Error 
            console.error(error);
        });

    }


    React.useEffect(() => {
      if(isFocused) {
        setttoken()
        // const loadData = async () => {
        //    await setttoken();
           
        //    await fetchpartneldetails();
        //    await fetchpartnel_status();
         
        // }
        // loadData() 
    //      setttoken();
    //      setTimeout(() => {
    //   fetchpartneldetails();
    //   fetchpartnel_status();
    // }, 2000);

      }
      
     
    }, [isFocused]);
    // fetchpartneldetails();

  return (
    <Root>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: moderateVerticalScale(10) }}>
    <View style={{ width: '100%', height: moderateScale(50), justifyContent: 'space-between', flexDirection: 'row', marginHorizontal: moderateScale(10), alignItems: 'center' }}>
   
   
     <View>
       <Text style={{ fontWeight: 'bold', fontSize: scale(16), color: colors.black }}>{partnel.partnel_fullname}</Text>
       <Text style={{ fontWeight: '400', fontSize: scale(14), color: colors.grey}}>{partnel.today}</Text>

     </View>
     <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
     
       <View style={{ width: moderateScale(40), height: moderateScale(10) }}>
       {/* <Text>Online</Text> */}
         <ToggleSwitch
//  text={{on: 'Online', off: 'Offline', activeTextColor: 'white', inactiveTextColor: 'red'}}
// label={isOn ? 'online' :'offline'}
 //textStyle={{fontWeight: 'bold'}}
//color={{ indicator: 'white', active: 'rgba(32, 193, 173, 1)', inactive:  'rgba( 247, 247, 247, 1)', activeBorder: '#41B4A4', inactiveBorder: '#E9E9E9'}}
  active={true}
 disabled={false}
//  width={70}
//  radius={10}
//size = 'large'
 onColor="green"
 offColor="red"
 isOn={isOn}
 //labelStyle = {{fontWeight: 'bold'}}
//  circleColorOff="red"
//         circleColorOn="blue"
//  onValueChange={(val) => {
//  }}
 onToggle={() => {setIsOn(!isOn);callonlinefun(isOn)}}
 
//  switchOn={isOn}
/>




       </View>
       <Image source={imagePath.notice} style={{ width: moderateScale(20), height: moderateScale(20), marginHorizontal: moderateScale(12) }}  resizeMode={'contain'} />
        <TouchableOpacity onPress={() => { navigation.navigate('Notification_home') }} >
       <Image source={imagePath.Notification} style={{ width: moderateScale(20), height: moderateScale(20), marginHorizontal: moderateScale(2) }} resizeMode={'contain'} />
       </TouchableOpacity>
       {/* <Button title="Open drawer" onPress={() => navigation.openDrawer()} /> */}
       <TouchableOpacity onPress={()=>navigation.openDrawer()}>
       <Image source={imagePath.Menu} style={{ width: moderateScale(20), height: moderateScale(20), marginHorizontal: moderateScale(20) }} resizeMode={'contain'} />
       </TouchableOpacity>
     </View>
   </View>

 </View>
 </Root>
  )
}
export default Bottomcom