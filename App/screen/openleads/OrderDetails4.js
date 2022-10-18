import React, { useRef, useState } from "react";
import { ScrollView, View, Image, Text, TextInput, TouchableOpacity, Dimensions, } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";

import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';

import imagePath from '../../utils/imagePath';
import Header from '../../Compoent/DrawerHeader';
const Orederdetailes4 = ({ navigation }) => {



    const [progress, setposred] = useState(55)


    const refRBSheet1 = useRef();
    const refRBSheet3 = useRef();

    const refRBSheet2 = useRef();
    return (
        <View style={{ flex: 1, flexDirection: 'column', }}>
            <Header name={'Order Details'} />
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
                            <View style={{ height: moderateScale(50), width: '10%', alignItems: 'center', justifyContent: 'center' }}>
                                <Image
                                    source={imagePath.Location}
                                    style={{
                                        height: moderateScale(28), width: 30, resizeMode: 'contain',
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
                    <View style={{ height: moderateScale(90), width: '90%', flexDirection: 'column', backgroundColor: 'white', borderRadius: 10, flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ height: moderateScale(80), width: '33%', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                source={imagePath.Location}
                                style={{
                                    height: moderateScale(33), width: '80%', resizeMode: 'contain', marginBottom: moderateScale(7)
                                }}
                            />
                            <Text style={{ fontSize: scale(14), textAlign: 'center', color: 'black' }}>
                                Get Direction
                            </Text>
                        </View>
                        <View style={{ height: moderateScale(80), width: '33%', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                source={imagePath.phone1}
                                style={{
                                    height: moderateScale(33), width: '80%', resizeMode: 'contain', marginBottom: moderateScale(7)
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
                                    height: moderateScale(33), width: '80%', resizeMode: 'contain', marginBottom: moderateScale(7)
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
                    closeOnDragDown={true}
                    closeOnPressMask={true}
                    // animationType={true}
                    customStyles={{
                        container: {
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 20,
                            height: moderateScale(350),
                            borderTopLeftRadius: moderateScale(20),
                            borderTopRightRadius: moderateScale(20),





                            // backgroundColor: "transparent",
                            backgroundColor: "white"

                        },



                    }}


                >

                    <View style={{ height: moderateScale(350), width: '100%', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'column' }}>
                        <View style={{ height: moderateScale(230), marginTop: scale(8), borderWidth: 0.8, borderColor: "#C4C4C4", borderRadius: moderateScale(12), width: '93%', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'column', }}>
                            <View style={{ height: moderateScale(40), width: '100%', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', }}>
                                <View style={{ height: moderateScale(30), width: '90%', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row' }}>
                                    <Text style={{ fontSize: scale(16), textAlign: 'center', color: '#7E7E7E' }}>
                                        Select Status
                                    </Text>
                                </View>
                            </View>
                            <View style={{ height: moderateScale(60), width: '100%', alignItems: 'center', borderBottomWidth: .8, borderColor: "#E2E2E2", justifyContent: 'center', flexDirection: 'column', }}>
                                <View style={{ height: moderateScale(30), width: '85%', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row' }}>
                                    <Text style={{ fontSize: scale(16), textAlign: 'center', color: 'black', fontWeight: "400" }}>
                                        Customer Not Responding
                                    </Text>
                                </View>
                            </View>
                            <View style={{ height: moderateScale(60), width: '100%', alignItems: 'center', borderBottomWidth: .8, borderColor: "#E2E2E2", justifyContent: 'center', flexDirection: 'column', }}>
                                <View style={{ height: moderateScale(30), width: '85%', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row' }}>
                                    <Text style={{ fontSize: scale(16), textAlign: 'center', color: 'black', fontWeight: "400" }}>
                                        Customer Rescedule
                                    </Text>
                                </View>
                            </View>


                            <View style={{ height: moderateScale(55), width: '100%', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', }}>
                                <TouchableOpacity style={{ height: moderateScale(30), width: '85%', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row' }}
                                >



                                    <Text style={{ fontSize: scale(16), textAlign: 'center', color: '#000000', fontWeight: "400" }}>
                                        Arriving Late
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{
                            height: moderateScale(100),
                            width: '100%',
                            flexDirection: "row",
                            justifyContent: "center",
                            borderRadius: 10,
                            alignItems: "center"

                        }}>

                            <TouchableOpacity



                                style={{
                                    height: moderateScale(50),
                                    width: '90%',
                                    justifyContent: "center",
                                    borderWidth: 1,
                                    borderColor: "#0085FF",
                                    borderRadius: 12, backgroundColor: "#0085FF",






                                }}
                                onPress={() => refRBSheet2.current.open()}

                            >
                                <Text style={{ textAlign: "center", fontSize: scale(16), marginLeft: moderateScale(15), color: "#FFFFFF" }}>

                                    Update Status
                                </Text>
                            </TouchableOpacity>


                        </View>
                    </View>


                </RBSheet>




                <RBSheet
                    ref={refRBSheet2}
                    closeOnDragDown={true}
                    closeOnPressMask={true}
                    customStyles={{
                        container: {
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 20,
                            height: moderateScale(540),
                            borderTopLeftRadius: moderateScale(20),
                            borderTopRightRadius: moderateScale(20),
                            // backgroundColor: "transparent",
                            backgroundColor: "white"

                        },
                    }}


                >
                    <ScrollView style={{ height: scale(540) }}>
                        <View style={{
                            height: moderateScale(540),
                            width: "100%", backgroundColor: "white",
                        }}>

                            <View style={{ height: scale(50), width: "100%", justifyContent: "center", }}>


                                <Text style={{ color: "#000000", fontSize: scale(16), marginLeft: scale(8), fontWeight: "700" }}>


                                    Select Date

                                </Text>
                            </View>

                            <View style={{ height: moderateScale(70), width: "100%", justifyContent: "center" }}>


                                <View style={{ height: moderateScale(65), width: "100%", alignItems: "center", flexDirection: "row", marginLeft: scale(8), }}>

                                    <View style={{ height: moderateScale(65), width: "29%", margin: scale(5), borderRadius: 10, alignItems: "center", justifyContent: "center", backgroundColor: "#E8E8E8", }}>
                                        <Text style={{ color: "black", fontSize: scale(14), fontWeight: "500", marginBottom: scale(5) }}>Today
                                        </Text>
                                        <Text style={{ color: "#818181", fontSize: scale(12), }}>19th April, 2022
                                        </Text>

                                    </View>
                                    <View style={{ height: moderateScale(65), width: "29%", margin: scale(5), borderRadius: 10, alignItems: "center", justifyContent: "center", backgroundColor: "#E8E8E8", }}>
                                        <Text style={{ color: "black", fontSize: scale(14), fontWeight: "500", marginBottom: scale(5) }}>Tomorrow

                                        </Text>
                                        <Text style={{ color: "#818181", fontSize: scale(12), }}>20th April, 2022

                                        </Text>

                                    </View>
                                    <View style={{ height: moderateScale(65), width: "29%", margin: scale(5), borderRadius: 10, alignItems: "center", justifyContent: "center", backgroundColor: "#0085FF", }}>
                                        <Text style={{ color: "white", fontSize: scale(14), fontWeight: "500", marginBottom: scale(5) }}>Custom

                                        </Text>
                                        <Text style={{ color: "white", fontSize: scale(12), }}>23rd April, 2022

                                        </Text>

                                    </View>
                                </View>
                            </View>
                            <View style={{ height: scale(50), width: "100%", justifyContent: "center" }}>


                                <Text style={{ color: "#000000", fontSize: scale(16), marginLeft: scale(6), marginBottom: scale(10), fontWeight: "700" }}>


                                    Select Time Slot

                                </Text>
                            </View>

                            <View style={{ height: moderateScale(60), width: "100%", justifyContent: "center", marginBottom: scale(6) }}>


                                <View style={{ height: moderateScale(55), width: "100%", alignItems: "center", flexDirection: "row", marginLeft: scale(8), }}>

                                    <View style={{ height: moderateScale(55), width: "29%", margin: scale(5), borderRadius: 10, alignItems: "center", justifyContent: "center", backgroundColor: "#E8E8E8", }}>
                                        <Text style={{ color: "black", fontSize: scale(14), fontWeight: "500", marginBottom: scale(3) }}>9am - 11am

                                        </Text>


                                    </View>
                                    <View style={{ height: moderateScale(55), width: "29%", margin: scale(5), borderRadius: 10, alignItems: "center", justifyContent: "center", backgroundColor: "#E8E8E8", }}>
                                        <Text style={{ color: "black", fontSize: scale(14), fontWeight: "500", marginBottom: scale(3) }}>9am - 11am

                                        </Text>


                                    </View>
                                    <View style={{ height: moderateScale(55), width: "29%", margin: scale(5), borderRadius: 10, alignItems: "center", justifyContent: "center", backgroundColor: "#E8E8E8", }}>
                                        <Text style={{ color: "black", fontSize: scale(14), fontWeight: "500", marginBottom: scale(3) }}>9am - 11am

                                        </Text>


                                    </View>

                                </View>


                            </View>

                            <View style={{ height: moderateScale(60), width: "100%", justifyContent: "center", marginBottom: scale(6) }}>


                                <View style={{ height: moderateScale(55), width: "100%", alignItems: "center", flexDirection: "row", marginLeft: scale(8), }}>

                                    <View style={{ height: moderateScale(55), width: "29%", margin: scale(5), borderRadius: 10, alignItems: "center", justifyContent: "center", backgroundColor: "#E8E8E8", }}>
                                        <Text style={{ color: "black", fontSize: scale(14), fontWeight: "500", marginBottom: scale(3) }}>9am - 11am

                                        </Text>
                                    </View>
                                    <View style={{ height: moderateScale(55), width: "29%", margin: scale(5), borderRadius: 10, alignItems: "center", justifyContent: "center", backgroundColor: "#0085FF", }}>
                                        <Text style={{ color: "black", fontSize: scale(14), fontWeight: "500", marginBottom: scale(3) }}>9am - 11am
                                        </Text>
                                    </View>
                                    <View style={{ height: moderateScale(55), width: "29%", margin: scale(5), borderRadius: 10, alignItems: "center", justifyContent: "center", backgroundColor: "#E8E8E8", }}>
                                        <Text style={{ color: "black", fontSize: scale(14), fontWeight: "500", marginBottom: scale(3) }}>9am - 11am

                                        </Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{ height: moderateScale(60), width: "100%", justifyContent: "center", marginBottom: scale(7) }}>
                                <View style={{ height: moderateScale(55), width: "100%", alignItems: "center", flexDirection: "row", marginLeft: scale(8), }}>

                                    <View style={{ height: moderateScale(55), width: "29%", margin: scale(5), borderRadius: 10, alignItems: "center", justifyContent: "center", backgroundColor: "#E8E8E8", }}>
                                        <Text style={{ color: "black", fontSize: scale(14), fontWeight: "500", marginBottom: scale(3) }}>9am - 11am

                                        </Text>
                                    </View>
                                    <View style={{ height: moderateScale(55), width: "29%", margin: scale(5), borderRadius: 10, alignItems: "center", justifyContent: "center", backgroundColor: "#E8E8E8", }}>
                                        <Text style={{ color: "black", fontSize: scale(14), fontWeight: "500", marginBottom: scale(3) }}>9am - 11am
                                        </Text>
                                    </View>
                                    <View style={{ height: moderateScale(55), width: "29%", margin: scale(5), borderRadius: 10, alignItems: "center", justifyContent: "center", backgroundColor: "#E8E8E8", }}>
                                        <Text style={{ color: "black", fontSize: scale(14), fontWeight: "500", marginBottom: scale(3) }}>9am - 11am
                                        </Text>
                                    </View>
                                </View>

                            </View>
                            <View style={{
                                height: moderateScale(120),
                                width: '100%',
                                flexDirection: "column",
                                justifyContent: "center",
                                borderRadius: 10,

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
                                        marginLeft: moderateScale(20)


                                    }}
                                //  onPress={() => refRBSheet3.current.open()} 

                                >
                                    <Text style={{ textAlign: "center", fontSize: scale(16), marginLeft: moderateScale(15), color: "#FFFFFF" }}>

                                        Update Status
                                    </Text>
                                </TouchableOpacity>


                            </View>
                        </View>

                    </ScrollView>
                </RBSheet>
            </ScrollView>
        </View>
    )
}
export default Orederdetailes4