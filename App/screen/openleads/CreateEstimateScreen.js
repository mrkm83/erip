import React, { useRef, useState, } from 'react';
import { ScrollView, View, Image, Text, TextInput, TouchableOpacity } from "react-native";
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';
import DropDownPicker from 'react-native-dropdown-picker';
import RBSheet from "react-native-raw-bottom-sheet";
import Header from '../../Compoent/DrawerHeader'
import imagePath from "../../utils/imagePath";

// import EnterOtp from './EnterOtpCopment';
// import QuatationRequ from './QuatationRequCompoent';


const CreateEstimate = ({ navigation }) => {
  const refRBSheet2 = useRef();

  return (
    <View style={{ flex: 1, flexDirection: 'column', }}>
      <Header image1={false}

        name={'CreateEstimate'}


        
      />
      <ScrollView style={{ flex: 1, backgroundColor: "#F5F5F5" }}>
        <View style={{ alignItems: 'center', flexDirection: 'column', }}>
        <View style={{ alignItems: 'center', flexDirection: 'column',width:"80%", backgroundColor: "white",borderRadius:20, }}>

          <View style={{ height: moderateScale(60), width: '100%', alignItems: 'center', flexDirection: 'row', backgroundColor: "#F5F5F5" }}>

            <View style={{ height: moderateScale(40), width: '40%', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', }}>

              <Text style={{ fontSize: scale(14), color: '#969696' }}>Device 1</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('NewPartScreen')} style={{ height: moderateScale(40), width: '60%', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', }}>

              <Text style={{ fontSize: scale(14), color: '#0085FF' }}>Add New Part</Text>
            </TouchableOpacity>

          </View>
          <View style={{ height: moderateScale(140), width: '100%', flexDirection: 'column', alignItems: 'center', }}>


            <View style={{ height: moderateScale(80), width: '80%', alignItems: 'center', borderBottomWidth: 0.8, borderColor: "grey", justifyContent: 'center', flexDirection: 'column', }}>
              <Text style={{ fontSize: scale(18), color: 'black', }}>
                Display Screen Repair - Xiaomi Mi,Upto 46 Inches
              </Text>

            </View>

            <View style={{ height: moderateScale(80), width: '90%', alignItems: 'center', justifyContent: 'flex-end', flexDirection: 'column', }}>

              <View style={{
                height: moderateScale(50), width: '80%', alignItems: 'flex-start', justifyContent: 'center',
              }}>
                <Text style={{ fontSize: scale(16), textAlign: 'center', color: '#000000' }}>
                  Part Details

                </Text>
              </View>


            </View>
          </View>

          <View style={{ height: moderateScale(280), width: '90%', flexDirection: 'column', borderRadius: 10, flexDirection: 'column', alignItems: 'center', }}>
            <View style={{ height: moderateScale(75), width: '100%', flexDirection: 'column', justifyContent: 'flex-start', }}>
              <View style={{ height: moderateScale(30), width: '100%', flexDirection: 'row', alignItems: 'flex-start' }}>

                <View style={{ height: moderateScale(30), width: '70%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                  <Text style={{ fontSize: scale(14), textAlign: 'center', color: 'black' }}>
                    Xiaomi Mi, Upto 46 Inches
                  </Text>
                </View>
                <View style={{ height: moderateScale(30), width: '30%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                  <Text style={{ fontSize: scale(14), textAlign: 'center', color: 'black' }}>
                    $345
                  </Text>
                </View>
              </View>
              <View style={{ height: moderateScale(30), width: '60%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: scale(14), textAlign: 'center', color: 'grey' }}>
                  Display Screen Repair
                </Text>
              </View>

            </View>
            <View style={{ height: moderateScale(75), width: '100%', flexDirection: 'column', justifyContent: 'flex-start', }}>
              <View style={{ height: moderateScale(30), width: '100%', flexDirection: 'row', alignItems: 'flex-start' }}>

                <View style={{ height: moderateScale(30), width: '70%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                  <Text style={{ fontSize: scale(14), textAlign: 'center', color: 'black' }}>
                    Xiaomi Mi, Upto 46 Inches
                  </Text>
                </View>
                <View style={{ height: moderateScale(30), width: '30%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                  <Text style={{ fontSize: scale(14), textAlign: 'center', color: 'black' }}>
                    $345
                  </Text>
                </View>
              </View>
              <View style={{ height: moderateScale(30), width: '60%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: scale(14), textAlign: 'center', color: 'grey' }}>
                  Display Screen Repair
                </Text>
              </View>

            </View>
            <View style={{ height: moderateScale(75), borderBottomWidth: 0.8, borderColor: "grey", width: '89%', flexDirection: 'column', justifyContent: 'flex-start', }}>
              <View style={{ height: moderateScale(30), width: '100%', flexDirection: 'row', alignItems: 'flex-start' }}>

                <View style={{ height: moderateScale(30), width: '70%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                  <Text style={{ fontSize: scale(14), textAlign: 'center', color: 'black' }}>
                    Xiaomi Mi, Upto 46 Inches
                  </Text>
                </View>
                <View style={{ height: moderateScale(30), width: '30%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                  <Text style={{ fontSize: scale(14), textAlign: 'center', color: 'black' }}>
                    $345
                  </Text>
                </View>
              </View>
              <View style={{ height: moderateScale(30), width: '60%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: scale(14), textAlign: 'center', color: 'grey' }}>
                  Display Screen Repair
                </Text>
              </View>

            </View>


            <View style={{ height: moderateScale(60), width: '100%', flexDirection: 'row', alignItems: 'center', }}>

              <View style={{ height: moderateScale(30), width: '50%', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', paddingLeft: moderateScale(35), }}>
                <Text style={{ fontSize: scale(18), textAlign: 'center', color: 'black' }}>
                  Total
                </Text>
              </View>
              <View style={{ height: moderateScale(30), width: '50%', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'center', paddingRight: moderateScale(35), }}>
                <Text style={{ fontSize: scale(18), textAlign: 'center', color: 'black' }}>
                  $1234.00
                </Text>
              </View>

            </View>
          </View>
          <View style={{ height: moderateScale(190), width: '100%', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', }}>
            <View style={{ height: moderateScale(50), width: '90%', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', }}>

              <View style={{
                height: moderateScale(40), width: '80%', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row'
              }}>
                <Text style={{ fontSize: scale(16), textAlign: 'center', color: '#0085FF' }}>
                  Parts Waiting Approval

                </Text>
              </View>
            </View>
            <View style={{ height: moderateScale(135), width: '90%', flexDirection: 'column', borderRadius: 10, flexDirection: 'column', alignItems: 'center', }}>
              <View style={{ height: moderateScale(75), width: '100%', flexDirection: 'column', justifyContent: 'flex-start', }}>
                <View style={{ height: moderateScale(30), width: '100%', flexDirection: 'row', alignItems: 'flex-start' }}>

                  <View style={{ height: moderateScale(30), width: '70%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: scale(14), textAlign: 'center', color: 'black' }}>
                      Xiaomi Mi, Upto 46 Inches
                    </Text>
                  </View>
                  <View style={{ height: moderateScale(30), width: '30%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: scale(14), textAlign: 'center', color: 'black' }}>
                      $345
                    </Text>
                  </View>
                </View>
                <View style={{ height: moderateScale(30), width: '60%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
                  <Text style={{ fontSize: scale(14), textAlign: 'center', color: 'grey' }}>
                    Display Screen Repair
                  </Text>
                </View>

              </View>
              <View style={{ height: moderateScale(75), width: '100%', flexDirection: 'column', justifyContent: 'flex-start', }}>
                <View style={{ height: moderateScale(30), width: '100%', flexDirection: 'row', alignItems: 'flex-start' }}>

                  <View style={{ height: moderateScale(30), width: '70%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: scale(14), textAlign: 'center', color: 'black' }}>
                      Xiaomi Mi, Upto 46 Inches
                    </Text>
                  </View>
                  <View style={{ height: moderateScale(30), width: '30%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: scale(14), textAlign: 'center', color: 'black' }}>
                      $345
                    </Text>
                  </View>
                </View>
                <View style={{ height: moderateScale(30), width: '60%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                  <Text style={{ fontSize: scale(14), textAlign: 'center', color: 'grey' }}>
                    Display Screen Repair
                  </Text>
                </View>

              </View>
            </View>
          </View>
          <View style={{ height: moderateScale(80), width: '90%', flexDirection: 'column', borderRadius: 10, alignItems: 'center', justifyContent: 'center', }}>

            <TouchableOpacity onPress={() => navigation.navigate('DeviceDetailsScreen')} style={{ height: moderateScale(50), width: '60%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
              <Image
                source={imagePath.Add}
                style={{ height: moderateScale(30), width: '100%', resizeMode: 'contain', margin: moderateScale(10) }}
              />
            </TouchableOpacity>
          </View>

          <RBSheet
            ref={refRBSheet2}
            closeOnDragDown={true}
            closeOnPressMask={false}
            customStyles={{
              wrapper: {
                backgroundColor: "white"
              },
              container: {
                // justifyContent: "center",
                alignItems: "center",
                height: moderateScale(400),
                borderTopLeftRadius: moderateScale(25),
                borderTopRightRadius: moderateScale(25),

              },
              draggableIcon: {
                backgroundColor: "#F5F5F5"
              }
            }}
          >
            {/* <QuatationRequ /> */}

          </RBSheet>

</View>
        </View>
      </ScrollView>
      <View style={{ height: moderateScale(90), width: '100%', flexDirection: 'column', borderRadius: 10, alignItems: 'center', marginBottom: moderateScale(20), justifyContent: 'center' }}>

        <View style={{ height: moderateScale(75), width: '100%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

          <TouchableOpacity onPress={() => refRBSheet2.current.open()} style={{ height: moderateScale(50), width: '90%', borderRadius: moderateScale(10), backgroundColor: '#0C7EFA', alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: scale(16), color: 'white' }}>Send Quotation</Text>
          </TouchableOpacity>

        </View>
      </View>
    </View>

  )
}
export default CreateEstimate;

