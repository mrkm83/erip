import React, { useRef, useState, } from 'react';
import { ScrollView, View, Image, Text, TextInput, TouchableOpacity } from "react-native";
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';
import DropDownPicker from 'react-native-dropdown-picker';
 import RBSheet from "react-native-raw-bottom-sheet";
import Header from '../../Compoent/DrawerHeader'
import imagePath from '../../utils/imagePath';
import image from '../../aasets/index';

const OrderDetailsJob = ({ navigation }) => {
    const [cashPayment, setCashPayment] = useState('Cash Payment')
    const [upiPayment, setUpiPayment] = useState('Online Payment')
    const [onlinePayment, setOnlinePayment] = useState('UPI Payment')

    const [number, onChangeNumber] = React.useState(null);
    const refRBSheet = useRef();
    const JobDone = useRef();
    const refRBSheet3 = useRef();
     const qcquestion = useRef();
    const [open3, setOpen3] = useState(false);
    const [value3, setValue3] = useState(null);
    const [items3, setItems3] = useState([
        { label: 'Cash Payment', value: 'Cash Payment' },
        { label: 'Online Payment', value: 'Online Payment' },
        { label: 'UPI Payment', value: 'UPI Payment' },
    ])
 
     

    return (
        <View style={{ flex: 1, flexDirection: 'column', backgroundColor: "#F5F5F5" }}>
            <Header name={'Order Details'}image1={true}  />
            <ScrollView>
                <View style={{ alignItems: 'center', flexDirection: 'column' }}>
                    <View style={{ height: moderateScale(70), width: '100%', alignItems: 'center', flexDirection: 'column', justifyContent: "center" }}>


                        <View style={{ height: moderateScale(37), width: '90%', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', backgroundColor: '#BEE4D8', borderRadius: moderateScale(8) }}>

                            <Text style={{ fontSize: scale(16), color: '#008C77' }}>Active Job</Text>
                        </View>

                    </View>

                    <View style={{ height: moderateScale(60), width: '100%', alignItems: 'center', flexDirection: 'row', }}>

                        <View style={{ height: moderateScale(40), width: '50%', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', }}>

                            <Text style={{ fontSize: scale(14), color:"grey"}}>Order ID # 0653</Text>
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
                            <Text style={{ fontSize: scale(14), textAlign: 'center',color:"grey" }}>
                                Client: Raiyan Sofwan
                            </Text>

                        </View>
                        <View style={{ height: moderateScale(70), width: '90%', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', }}>
                            <View style={{ height: moderateScale(50), width: '10%', alignItems: 'center', justifyContent: 'center' }}>
                                <Image
                                    source={image.map}
                                    style={{
                                        height: moderateScale(28), width: 30, resizeMode: 'contain',
                                    }}
                                />
                            </View>
                            <View style={{
                                height: moderateScale(50), width: '80%', alignItems: 'center', justifyContent: 'center',
                            }}>
                                <Text style={{ fontSize: scale(14), textAlign: 'center' ,color: 'grey'}}>
                                    274, 10th Cross Rd, Wilson Garden,
                                    Bengaluru, Karnataka 560027, India
                                </Text>
                            </View>


                        </View>
                    </View>
                    <View style={{ height: moderateScale(90), width: '90%', flexDirection: 'column', backgroundColor: 'white', borderRadius: 10, flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ height: moderateScale(80), width: '33%', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                source={imagePath.location2}
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
                                source={image.phone}
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
                                source={imagePath.Chat
                                }
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
                            <View style={{ height: moderateScale(30), width: '70%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ fontSize: scale(14), textAlign: 'center', color: 'grey' }}>
                                    Display Screen Repair
                                </Text>
                            </View>

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

                    <RBSheet
                        ref={JobDone}
                        closeOnDragDown={true}
                        closeOnPressMask={false}
                        customStyles={{
                            wrapper: {
                                backgroundColor: "#F5F5F5"
                            },
                            container: {
                                // justifyContent: "center",
                                alignItems: "center",
                                height: moderateScale(240),
                                borderTopLeftRadius: moderateScale(20),
                                borderTopRightRadius: moderateScale(20),
                                borderWidth: 1,
                                borderColor: moderateScale(2),
                                borderColor: '#7E7E7E'

                            },
                            draggableIcon: {
                                backgroundColor: "#F5F5F5"
                            }
                        }}
                    >
                        <View style={{ height: moderateScale(240), width: '100%', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'column', }}>
                            <View style={{
                                zIndex: 1, height: moderateScale(80), width: '100%', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                            }}>
                                <DropDownPicker
                                    open={open3}
                                    dropDownDirection="BOTTOM"
                                    value={value3}
                                    items={items3}
                                    onChangeValue={() => {
                                        // console.log('helllooo', value3);
                                        if (value3 === 'Cash Payment') {
                                            setValue3
                                             navigation.navigate('CashPayment')
                                        } else if (value3 === 'Online Payment') {
                                            console.log('onlinePayment',value3)
                                            setValue3
                                         } else {
                                            console.log('upiPayment',value3)
                                            setValue3
                                         }
                                    }}
                                    placeholder="Select Payment"
                                    itemTextStyle={{ backgroundColor: 'white', color: '#000000' }}
                                    containerStyle={{
                                        width: '90%',
                                    }}
                                    textStyle={{
                                        fontSize: scale(15),
                                        paddingLeft: 20,
                                    }}
                                    dropDownContainerStyle={{
                                        backgroundColor: 'white',
                                        borderColor: '#7E7E7E',
                                        borderWidth: moderateScale(2),
                                    }}
                                    style={{
                                        backgroundColor: 'white',
                                        borderColor: '#7E7E7E',
                                        borderWidth: moderateScale(2),
                                    }}
                                    setOpen={setOpen3}
                                    setValue={setValue3}
                                    setItems={setItems3}
                                />

                            </View>
                            <View style={{ height: moderateScale(80), width: '100%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
                                <TouchableOpacity style={{ height: moderateScale(50), width: '90%', borderRadius: moderateScale(10), backgroundColor: '#0C7EFA', alignItems: 'center', justifyContent: 'center' }}
                                onPress={() => navigation.navigate('Home')}
                                
                                >
                                    <Text style={{ fontSize: scale(16), color: 'white' }}>Pay amount $5678.00</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </RBSheet>


                    <RBSheet
                        ref={refRBSheet3}
                        closeOnDragDown={true}
                        closeOnPressMask={false}
                        customStyles={{
                            wrapper: {
                                backgroundColor: "#F5F5F5"
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
                        <View style={{ height: moderateScale(170), width: '100%', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'column' }}>
                            <View style={{
                                height: moderateScale(150), width: '93%', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'column', borderRadius: moderateScale(20), borderColor: '#C4C4C4', borderWidth: 1, shadowOffset: 1, shadowOpacity: 0.2,
                                shadowRadius: 3,
                            }}>
                                <View style={{ height: moderateScale(40), width: '100%', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                                    <View style={{ height: moderateScale(25), width: '90%', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row' }}>
                                        <Text style={{ fontSize: scale(16), textAlign: 'center', color: '#7E7E7E' }}>
                                            Select Status
                                        </Text>
                                    </View>
                                </View>
                                <View style={{ height: moderateScale(50), width: '100%', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', }}>
                                    <TouchableOpacity onPress={() => JobDone.current.open()} style={{ height: moderateScale(30), width: '85%', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row' }}>
                                        <Text style={{ fontSize: scale(16), textAlign: 'center', color: '#000000' }}>
                                            Job Done
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ height: moderateScale(50), width: '100%', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', }}>
                                    <View  style={{ height: moderateScale(30), width: '85%', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row' }}>
                                        <TouchableOpacity onPress={() => qcquestion.current.open()}>
                                        <Text style={{ fontSize: scale(16), textAlign: 'center', color: '#000000' }}>
                                            Pick up and Drop 12
                                        </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>


                            </View>
                            <View style={{ height: moderateScale(75), width: '100%', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center' }}>

                                <TouchableOpacity onPress={() => JobDone.current.open()}  style={{ height: moderateScale(50), width: '90%', borderRadius: moderateScale(10), backgroundColor: '#0C7EFA', alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ fontSize: scale(16), color: 'white' }}>Update Status</Text>
                                </TouchableOpacity>

                            </View>
                        </View>

                    </RBSheet>

                    <RBSheet
                        ref={qcquestion}
                        closeOnDragDown={true}
                        closeOnPressMask={false}
                        customStyles={{
                            wrapper: {
                                backgroundColor: "#F5F5F5"
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

                    </RBSheet>


                    


                </View>
            </ScrollView>
            <View style={{ height: moderateScale(70), width: '100%', flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', justifyContent: 'center', marginBottom: moderateScale(20), }}>

                <TouchableOpacity onPress={() => refRBSheet3.current.open()} style={{ height: moderateScale(50), width: '45%', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#0085FF', borderRadius: moderateScale(10), marginRight: moderateScale(5), }}>
                    <Text style={{ fontSize: scale(16), textAlign: 'center', color: 'white' }}>
                        Update Status
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('CreateEstimateScreen')} style={{ height: moderateScale(50), width: '45%', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#00B67F', borderRadius: moderateScale(10), marginLeft: moderateScale(5), }}>
                    <Text style={{ fontSize: scale(16), textAlign: 'center', color: 'white' }}>
                        Create Estimate
                    </Text>
                </TouchableOpacity>

            </View>
        </View>

    )
}
export default OrderDetailsJob;

