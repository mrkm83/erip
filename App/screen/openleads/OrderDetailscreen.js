import React, { useRef, useState } from "react";
import { ScrollView, View, Image, Text, TextInput, TouchableOpacity, Dimensions, } from "react-native";
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';
import RBSheet from "react-native-raw-bottom-sheet";
// import ProgressBarAnimated from 'react-native-progress-bar-animated';
import Header from '../../Compoent/DrawerHeader'
import imagePath from '../../utils/imagePath';
import image from "../../aasets/index";

import Otp  from './Otpsheetscompoent'
const OrderDetailscreen = ({ navigation }) => {


    const barWidth = Dimensions.get('screen').width - 30;
    const progressCustomStyles = {
        backgroundColor: '#0085FF',
        borderRadius: 10,
        borderColor: '#ECECEC', borderWidth: 1
    };
    const [progress, setposred] = useState(55)


    const refRBSheet1 = useRef();
    const refRBSheet2 = useRef();
 
    // const refRBSheet2 = useRef();
    return (
        <View style={{ flex: 1, flexDirection: 'column', }}>
            <Header name={'Order Details'} image1={true}/>
            <ScrollView style={{ backgroundColor: "#F5F5F5", flex: 1 }}>
                <View style={{ height: moderateScale(50), width: "100%", justifyContent: "center" }}>
                    <View style={{ height: moderateScale(40), borderRadius: 12, width: "83%", backgroundColor: "#BEE4D8", justifyContent: "center", alignItems: "center", marginLeft: scale(28) }}>


                        <Text style={{ color: "#008C77", textAlign: "center", fontSize: scale(14) }}>
                            Active Job
                        </Text>
                    </View>
                </View>
                <View style={{ alignItems: 'center', flexDirection: 'column' }}>
                    <View style={{ height: moderateScale(60), width: '100%', alignItems: 'center', flexDirection: 'row' }}>
                        <View style={{ height: moderateScale(40), width: '50%', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', }}>
                            <Text style={{ fontSize: scale(14), color: "#7E7E7E" }}>Order ID # 0653</Text>
                        </View>
                        <View style={{ height: moderateScale(40), width: '50%', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', }}>
                            <Text style={{ fontSize: scale(14), color: 'black' }}>24th March, 2022</Text>
                        </View>
                    </View>
                    <View style={{ height: moderateScale(160), width: '100%', flexDirection: 'column', alignItems: 'center', }}>
                        <View style={{ height: moderateScale(50), width: '90%', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', }}>
                            <Text style={{ fontSize: scale(16), color: 'black', textAlign: 'center' }}>
                                Display Screen Repair - Xiaomi Mi,Upto 46 Inches
                            </Text>
                        </View>
                        <View style={{ height: moderateScale(40), width: '90%', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', }}>
                            <Text style={{ fontSize: scale(14), textAlign: 'center', color: "#7E7E7E" }}>
                                Client: Raiyan Sofwan
                            </Text>
                        </View>
                        <View style={{ height: moderateScale(70), width: '90%', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', }}>
                            <View style={{ height: moderateScale(45), width: '10%', alignItems: 'center', justifyContent: 'center' }}>
                                <Image
                                  source={image.map}

                                    style={{
                                        height: moderateScale(25), width: 30, resizeMode: 'contain',
                                    }}
                                />
                            </View>
                            <View style={{
                                height: moderateScale(50), width: '80%', alignItems: 'center', justifyContent: 'center',
                            }}>
                                <Text style={{ fontSize: scale(14), textAlign: 'center', color: "#7E7E7E" }}>
                                    274, 10th Cross Rd, Wilson Garden,
                                    Bengaluru, Karnataka 560027, India
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ height: moderateScale(75), width: '90%', flexDirection: 'column', backgroundColor: 'white', borderRadius: 10, flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ height: moderateScale(70), width: '33%', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                  source={imagePath.Location}
                                  style={{
                                    height: moderateScale(28), width: '80%', resizeMode: 'contain', marginBottom: moderateScale(7)
                                }}
                            />
                            <Text style={{ fontSize: scale(14), textAlign: 'center', color: 'black' }}>
                                Get Direction
                            </Text>
                        </View>
                        <View style={{ height: moderateScale(80), width: '33%', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                 source={image.phone}

                                style={{
                                    height: moderateScale(28), width: '80%', resizeMode: 'contain', marginBottom: moderateScale(7)
                                }}
                            />
                            <Text style={{ fontSize: scale(14), textAlign: 'center', color: 'black' }}>
                                Call
                            </Text>
                        </View>
                        <View style={{ height: moderateScale(80), width: '34%', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                 source={imagePath.Chat}

                                 style={{
                                    height: moderateScale(28), width: '80%', resizeMode: 'contain', marginBottom: moderateScale(7)
                                }}
                            />
                            <Text style={{ fontSize: scale(14), textAlign: 'center', color: 'black' }}>
                                WhatsApp
                            </Text>
                        </View>
                    </View>
                    <View style={{ height: moderateScale(60), width: '100%', alignItems: 'center', flexDirection: 'row' }}>
                        <View style={{ height: moderateScale(40), width: '50%', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', }}>
                            <Text style={{ fontSize: scale(16), color: 'black' }}>Job Summary</Text>
                        </View>
                        <View style={{ height: moderateScale(40), width: '50%', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', }}>
                            <Text style={{ fontSize: scale(16), color: '#0085FF' }}>Add Remarks</Text>
                        </View>
                    </View>
                    <View style={{ height: moderateScale(290), width: '90%', flexDirection: 'column', backgroundColor: 'white', borderRadius: 10, flexDirection: 'column', alignItems: 'center', marginBottom: 25 }}>
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
                            <View style={{ height: moderateScale(30), width: '70%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
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
                            <View style={{ height: moderateScale(30), width: '63%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
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
                            <View style={{ height: moderateScale(30), width: '70%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ fontSize: scale(14), textAlign: 'center', color: 'grey' }}>
                                    Display Screen Repair
                                </Text>
                            </View>
                            <View style={{ width: '80%', height: 1, backgroundColor: 'grey', marginLeft: moderateScale(35), marginRight: moderateScale(35), flexDirection: 'row', marginTop: moderateScale(20) }}></View>
                        </View>
                        <View style={{ height: moderateScale(60), width: '100%', flexDirection: 'row', alignItems: 'center', }}>
                            <View style={{ height: moderateScale(30), width: '50%', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', paddingLeft: moderateScale(35), }}>
                                <Text style={{ fontSize: scale(14), textAlign: 'center', color: 'black' }}>
                                    Total
                                </Text>
                            </View>
                            <View style={{ height: moderateScale(30), width: '50%', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'center', paddingRight: moderateScale(35), }}>
                                <Text style={{ fontSize: scale(14), textAlign: 'center', color: 'black' }}>
                                    $1234.00
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ height: moderateScale(70), width: '100%', flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', justifyContent: 'center', marginBottom: 35 }}>
                        <TouchableOpacity style={{ height: moderateScale(50), width: '45%', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#0085FF', borderRadius: moderateScale(10), marginRight: moderateScale(5), }}>
                            <Text style={{ fontSize: scale(16), textAlign: 'center', color: 'white' }}>
                                Update Status
                            </Text>
                        </TouchableOpacity
                        >

                        <TouchableOpacity style={{ height: moderateScale(50), width: '45%', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#00B67F', borderRadius: moderateScale(10), marginLeft: moderateScale(5), }}

                            onPress={() => refRBSheet1.current.open()}

                        >
                            <Text style={{ fontSize: scale(16), textAlign: 'center', color: 'white' }}>
                                Start Job
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>


                <RBSheet
            ref={refRBSheet1}
            closeOnPressBack={false}
            closeOnDragDown={true}
            closeOnPressMask={true}
            customStyles={{
              wrapper: {
                // backgroundColor: "transparent"
              },
              container: {
                // justifyContent: "center",
                alignItems: "center",
                height: moderateScale(150),
                borderTopLeftRadius: moderateScale(20),
                borderTopRightRadius: moderateScale(20),
              },
              draggableIcon: {
                backgroundColor: "#F5F5F5"
              }
            }}
          >
            <View style={{ height: moderateScale(130), width: '100%', alignItems: 'center', flexDirection: 'column' }}>
              <View style={{ height: moderateScale(50), width: '88%', alignItems: 'flex-start', justifyContent: 'center' }}>
                <Text style={{ fontSize: scale(15), textAlign: 'center', color: 'black' }}>
                  Have you arrived at customer location?
                </Text>
              </View>
              <View style={{ height: moderateScale(70), width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 35 }}>
                <TouchableOpacity onPress={() => refRBSheet1.current.close()} style={{ height: moderateScale(40), width: '45%', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#C4C4C4', borderRadius: moderateScale(10), marginRight: moderateScale(5), }}>
                  <Text style={{ fontSize: scale(16), textAlign: 'center', color: 'black' }}>
                    No
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => refRBSheet2.current.open()} style={{ height: moderateScale(40), width: '45%', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#00B67F', borderRadius: moderateScale(10), marginLeft: moderateScale(5), }}>
                  <Text style={{ fontSize: scale(16), textAlign: 'center', color: 'white' }}>
                    Yes
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </RBSheet>






          <RBSheet
            ref={refRBSheet2}
            closeOnPressBack={false}
            closeOnDragDown={true}
            closeOnPressMask={true}
            customStyles={{
              wrapper: {
                // backgroundColor: "transparent"
              },
              container: {
                // justifyContent: "center",
                alignItems: "center",
                height: moderateScale(280),
                borderTopLeftRadius: moderateScale(20),
                borderTopRightRadius: moderateScale(20),
              },
              draggableIcon: {
                backgroundColor: "#F5F5F5"
              }
            }}
          >
           <Otp/>

          </RBSheet>

                <RBSheet
                    // ref={refRBSheet3}
                    closeOnDragDown={true}
                    closeOnPressMask={true}
                    customStyles={{
                        container: {
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 20,
                            height: moderateScale(430),
                            borderTopLeftRadius: moderateScale(20),
                            borderTopRightRadius: moderateScale(20),
                            // backgroundColor: "transparent",
                            backgroundColor: "white"

                        },
                    }}


                >


                    <View style={{ height: moderateScale(420), width: "100%", backgroundColor: "red" }}>




                        <View style={{ height: moderateScale(30), width: "36%", justifyContent: "center", alignItems: "center" }}>

                            <Text style={{ fontSize: scale(16), color: "black", fontWeight: "600" }}>Pickup and Drop
                            </Text>
                        </View>
                        <View style={{ height: moderateScale(140), alignItems: "center", backgroundColor: "pink", width: "100%", flexDirection: "row", marginTop: scale(9) }}>




                            <View style={{
                                justifyContent: "center", marginLeft: scale(13), borderRadius: scale(12), alignItems: 'center', height: moderateScale(120), width: "28%", backgroundColor: "#E8E8E8",
                            }}>
                                <View style={{
                                    height: moderateScale(48),
                                    width: 60,
                                    flexDirection: "row",


                                    justifyContent: "center",
                                    alignItems: "center",





                                }}>

                                    <Image
                                        style={{ height: 25, width: 28 }}
                                 source={imagePath.Chat}
                                    />

                                </View>
                                <View style={{
                                    height: moderateScale(40),
                                    width: 80,

                                    justifyContent: "center",
                                    alignItems: "center", marginLeft: moderateScale(27),



                                }}>

                                    <Text style={{ color: "#000000", fontSize: scale(12), textAlign: "center", top: scale(3), fontWeight: "600", marginLeft: scale(-14) }}>Add Model
                                    </Text>
                                    <Text style={{ color: "#000000", fontSize: scale(12), textAlign: "center", top: scale(3), fontWeight: "600", marginLeft: scale(-14) }}>Image </Text>


                                </View>





                            </View>
                            <View style={{
                                justifyContent: "center", marginLeft: scale(13), borderRadius: scale(12), alignItems: 'center', height: moderateScale(120), width: "28%", backgroundColor: "#E8E8E8",
                            }}>
                                <View style={{
                                    height: moderateScale(48),
                                    width: 60,
                                    flexDirection: "row",


                                    justifyContent: "center",
                                    alignItems: "center",





                                }}>

                                    <Image
                                        style={{ height: 25, width: 28 }}
                                        source={imagePath.Chat}
                                        />

                                </View>
                                <View style={{
                                    height: moderateScale(40),
                                    width: 80,

                                    justifyContent: "center",
                                    alignItems: "center", marginLeft: moderateScale(27),



                                }}>

                                    <Text style={{ color: "#000000", fontSize: scale(12), textAlign: "center", top: scale(3), fontWeight: "600", marginLeft: scale(-14) }}>Add Part
                                    </Text>
                                    <Text style={{ color: "#000000", fontSize: scale(12), textAlign: "center", top: scale(3), fontWeight: "600", marginLeft: scale(-14) }}>Image </Text>


                                </View>





                            </View>

                            <View style={{
                                justifyContent: "center", marginLeft: scale(13), borderRadius: scale(12), alignItems: 'center', height: moderateScale(120), width: "28%", backgroundColor: "#E8E8E8",
                            }}>
                                <View style={{
                                    height: moderateScale(48),
                                    width: 60,
                                    flexDirection: "row",


                                    justifyContent: "center",
                                    alignItems: "center",





                                }}>

                                    <Text style={{ color: "grey", fontSize: scale(38), textAlign: "center", marginLeft: scale(6) }}>+</Text>

                                </View>
                                <View style={{
                                    height: moderateScale(40),
                                    width: 80,

                                    justifyContent: "center",
                                    alignItems: "center", marginLeft: moderateScale(27),



                                }}>

                                    <Text style={{ color: "#000000", fontSize: scale(12), textAlign: "center", top: scale(3), fontWeight: "600", marginLeft: scale(-13) }}>Add
                                    </Text>
                                    <Text style={{ color: "#000000", fontSize: scale(12), textAlign: "center", top: scale(3), fontWeight: "600", marginLeft: scale(-14) }}>More
                                    </Text>


                                </View>





                            </View>

                        </View>
                    </View>
                </RBSheet>
            </ScrollView>
        </View>
    )
}
export default OrderDetailscreen