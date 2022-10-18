import React from 'react';
import { ScrollView, View, Image, Text, TextInput, TouchableOpacity } from "react-native";
import { scale, verticalScale, moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import image from '../../aasets/index';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import image from "./../../utils/imagePath";
import SyncStorage from 'sync-storage';
const Drawer = ({navigation}) => {

  const logout_new = async () =>{
 

    // SyncStorage.remove('partnel_id');
    // navigation.navigate('Login', { });
    SyncStorage.remove('token');
    
          
      try {
        await AsyncStorage.removeItem('login_token');
        // alert("nwmenwme 22323");
      } catch (error) {
        // Error saving data\
        // alert("nwmenwme");
        
      }
   
    


    let  bearer = 'Bearer ' + token;
    fetch('http://43.204.87.153/api/v1/partners/logout', {
            method: 'GET',
            headers: {
                'Authorization': bearer,
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },

        }).then((response) => response.json())
        .then((responseJson) => {;
         
          SyncStorage.remove('partnel_id');
     navigation.navigate('Login', { });

          console.warn(responseJson);
        }).catch((error) => {
          
          //Error 
          console.error(error);
      });



  }

  let my_full_name = SyncStorage.get('my_full_name');
  let my_services = SyncStorage.get('my_services');
  let selfi = SyncStorage.get('selfi');
  let token = SyncStorage.get('token');
  
  return (
    <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#F5F5F5',borderRadius:moderateScale(10) }}>

      <ScrollView>
        <View style={{ alignItems: 'center', flexDirection: 'column', justifyContent: 'center', marginBottom: moderateScale(30), }}>
          <View style={{ height: moderateScale(40), width: '100%', alignItems: 'flex-end', flexDirection: 'row', justifyContent: 'flex-end', paddingRight: moderateScale(10) }}>
            <TouchableOpacity onPress={()=>navigation.closeDrawer()}>
              <Text style={{ fontSize: scale(22), color: 'black', }}>X</Text>
            </TouchableOpacity>
          </View>
          <View style={{
            alignItems: 'center',
            width: "100%",
            flexDirection: 'column',
            justifyContent: 'center',

          }}>
            <View style={{
              height: moderateScale(150),
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>

              <Image
                 source={{
                  uri: selfi,
                }}
                style={{
                  height: moderateScale(150),
                  width: '80%',
                  resizeMode: 'contain'
                }}
              />
              {/* <View style={{
                height: moderateScale(40),
                width: '18%',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#FFFFFF',
                marginLeft: scale(135),
                borderRadius: 20,
                padding: scale(0.1),
                marginTop: moderateScale(-28)
              }}>
                <Image
                  source={image.camera}
                  resizeMode='contain'
                  style={{
                    height: moderateScale(23),
                    width: '90%',

                  }}
                />
              </View> */}
            </View>
          </View>
          <View style={{ height: moderateScale(115), width: '100%', alignItems: 'center', paddingTop: moderateScale(10), flexDirection: 'column', justifyContent: 'flex-start' }}>
            <Text style={{ fontSize: scale(18), color: 'black', fontWeight: '500', }}> {my_full_name}</Text>
            <View style={{ height: moderateScale(55), width: '100%', alignItems: 'center', paddingTop: moderateScale(10) }}>
              <Text style={{ fontSize: scale(15), color: 'black', fontWeight: '400', }}>{my_services} | 4.5 🌟</Text>
            </View>
          </View>
          <View style={{ height: moderateScale(249), width: '100%', alignItems: 'center', paddingTop: moderateScale(7), flexDirection: 'column', justifyContent: 'flex-start' }}>
            <View style={{ height: moderateScale(60), width: '100%', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', }}>
              <TouchableOpacity onPress={()=>navigation.navigate('myprofile')}  style={{ height: moderateScale(40), width: '75%', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row', }}>
                <View style={{
                  height: moderateScale(40),
                  width: '20%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: moderateScale(20),
                }}>
                  <Image
                    source={image.person}
                    resizeMode='contain'
                    style={{
                      height: moderateScale(30),
                      width: '80%',
                      resizeMode: 'contain',
                    }}
                  />
                </View>
                <View style={{ height: moderateScale(55), width: '80%', alignItems: 'flex-start', justifyContent: 'center' }}>
                  <Text style={{ fontSize: scale(18), color: '#263238', fontWeight: '500', }}>My Account</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{ height: moderateScale(60), width: '100%', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', }}>
              <TouchableOpacity style={{ height: moderateScale(40), width: '75%', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row', }}>
                <View style={{
                  height: moderateScale(40),
                  width: '20%',
                  alignItems: 'center',
                  justifyContent: 'center',

                  marginRight: moderateScale(20),
                }}>
                  <Image
                    source={image.wallet}
                    resizeMode='contain'
                    style={{
                      height: moderateScale(30),
                      width: '80%',
                      resizeMode: 'contain',
                    }}
                  />
                </View>
                <View style={{ height: moderateScale(55), width: '80%', alignItems: 'flex-start', justifyContent: 'center' }}>
                  <Text style={{ fontSize: scale(18), color: '#263238', fontWeight: '500', }}>My Payments</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{ height: moderateScale(60), width: '100%', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', }}>
              <TouchableOpacity onPress={()=>navigation.navigate('IdCard')} style={{ height: moderateScale(40), width: '75%', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row', }}>
                <View style={{
                  height: moderateScale(40),
                  width: '20%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: moderateScale(20),
                }}>
                  <Image
                    source={image.card}
                    resizeMode='contain'
                    style={{
                      height: moderateScale(30),
                      width: '80%',
                      resizeMode: 'contain',
                    }}
                  />
                </View>
                <View style={{ height: moderateScale(55), width: '80%', alignItems: 'flex-start', justifyContent: 'center' }}>
                  <Text style={{ fontSize: scale(18), color: '#263238', fontWeight: '500', }}>ID Card</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={{ height: moderateScale(60), width: '100%', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', }}>
              <TouchableOpacity onPress={()=>navigation.navigate('completeLeads')} style={{ height: moderateScale(40), width: '75%', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row', }}>
                <View style={{
                  height: moderateScale(40),
                  width: '20%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: moderateScale(20),
                }}>
                  <Image
                    source={image.jobcomplete}
                    resizeMode='contain'
                    style={{
                      height: moderateScale(30),
                      width: '80%',
                      resizeMode: 'contain',
                    }}
                  />
                </View>
                <View style={{ height: moderateScale(55), width: '80%', alignItems: 'flex-start', justifyContent: 'center' }}>
                  <Text style={{ fontSize: scale(18), color: '#263238', fontWeight: '500', }}>Completed Jobs</Text>
                </View>
              </TouchableOpacity>
            </View>
            
            <View style={{ height: moderateScale(60), width: '100%', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', }}>
              <TouchableOpacity onPress={logout_new} style={{ height: moderateScale(40), width: '75%', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row', }}>
                <View style={{
                  height: moderateScale(40),
                  width: '20%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: moderateScale(20),
                }}>
                  <Image
                    source={image.logout}
                    resizeMode='contain'
                    style={{
                      height: moderateScale(30),
                      width: '80%',
                      resizeMode: 'contain',
                    }}
                  />
                </View>
                <View style={{ height: moderateScale(55), width: '80%', alignItems: 'flex-start', justifyContent: 'center' }}>
                <Text style={{ fontSize: scale(18), color: '#7E7E7E', fontWeight: '500', }}>Log Out</Text>
                </View>
              </TouchableOpacity>
            </View>

          </View>
          <View style={{ height: moderateScale(200), width: '100%', alignItems: 'center', flexDirection: 'column', justifyContent: 'flex-end', }}>



            <View style={{ height: moderateScale(40), width: '80%', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', }}>
              <Text style={{ fontSize: scale(13), color: '#263238', }}>All rights resrved ERIP 2022</Text>
            </View>

          </View>

        </View>
      </ScrollView>
    </View>

  )
}
export default Drawer;
