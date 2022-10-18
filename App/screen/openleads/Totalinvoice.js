// import React, { useRef, useState } from "react";
// import { ScrollView, View, Image, Text, TextInput, TouchableOpacity, Dimensions, } from "react-native";
// import RBSheet from "react-native-raw-bottom-sheet";

// import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';
// import DropDownPicker from "react-native-dropdown-picker";
// import imagePath from '../utils/imagePath';
// import Header from '.././components/DrawerHeader';
// const Totalinvoice = ({ navigation }) => {
//     const [myArray, setMyArray] = React.useState([]);
//     const [openCountry, setopenCountry] = React.useState(false);
//     const [openState, setopenState] = React.useState(false);
//     const [openCity, setOpenCity] = React.useState(false);
//     const [checked, setChecked] = React.useState(false);
//     const [value, setValue] = React.useState('Select Payment');
//     const [valueTwo, setValueTwo] = React.useState(null);

//     const [itemsState, setItemsState] = React.useState([
//         { label: 'Cash Payment ', value: 'Cash Payment' },
//         { label: 'Online Payment', value: 'Online Payment ' },
//     ]);


//     const [progress, setposred] = useState(55)
//     const refRBSheet1 = useRef();
//     const refRBSheet3 = useRef();
//     const refRBSheet2 = useRef();
//     return (
//         <View style={{ flex: 1, flexDirection: 'column', }}>
//             <Header />
//             {/* <ScrollView style={{ backgroundColor: "#F5F5F5", flex: 1 }}> */}

//             <View style={{ height: moderateScale(380), padding: scale(2), }}>


//                 <View style={{ height: moderateScale(40), margin: scale(5), width: '96%', flexDirection: 'row', justifyContent: 'space-between', }}>
//                     <TouchableOpacity style={{ height: moderateScale(35), width: '40%', alignItems: 'center', justifyContent: 'center', }}>
//                         <Text style={{ fontSize: scale(19), textAlign: 'center', color: 'black', fontWeight: "600" }}>
//                             Total invoice
//                         </Text>
//                     </TouchableOpacity>

//                     <TouchableOpacity style={{ height: moderateScale(35), width: '100%', justifyContent: "center" }}>
//                         <Text style={{ fontSize: scale(18), fontWeight: "500", textAlign: 'center', color: 'black' }}>
//                             ₹543
//                         </Text>
//                     </TouchableOpacity>
//                 </View>

//                 <View style={{ height: moderateScale(35), width: '96%', flexDirection: 'row', justifyContent: 'space-between', }}>
//                     <TouchableOpacity style={{ height: moderateScale(35), width: '60%', alignItems: 'center', justifyContent: 'center', }}>
//                         <Text style={{ fontSize: scale(16), textAlign: 'center', color: 'black', fontWeight: "600" }}>
//                             Customer paid online
//                         </Text>
//                     </TouchableOpacity>

//                     <TouchableOpacity style={{ height: moderateScale(35), width: '20%', justifyContent: "center" }}

//                     >
//                         <Text style={{ fontSize: scale(16), textAlign: 'center', color: 'black' }}>
//                             -₹543
//                         </Text>
//                     </TouchableOpacity>
//                 </View>
//                 <View style={{ height: moderateScale(35), width: '96%', flexDirection: 'row', justifyContent: 'space-between', }}>
//                     <TouchableOpacity style={{ height: moderateScale(35), width: '60%', alignItems: 'center', justifyContent: 'center', }}>
//                         <Text style={{ fontSize: scale(16), textAlign: 'center', color: 'black', fontWeight: "600" }}>
//                             Paymment to collect
//                         </Text>
//                     </TouchableOpacity>

//                     <TouchableOpacity style={{ height: moderateScale(35), width: '20%', justifyContent: "center" }}

//                     >
//                         <Text style={{ fontSize: scale(16), textAlign: 'center', color: 'grey' }}>
//                             ₹0
//                         </Text>
//                     </TouchableOpacity>
//                 </View>

//                 <View style={{ height: moderateScale(40), width: '74%', flexDirection: 'row', justifyContent: 'flex-start', }}>
//                     <TouchableOpacity style={{ height: moderateScale(35), width: '40%', alignItems: 'center', justifyContent: 'center', }}>
//                         <Text style={{ fontSize: scale(16), textAlign: 'center', color: 'black', fontWeight: "600" }}>
//                             Details
//                         </Text>
//                     </TouchableOpacity>
//                 </View>
//                 <View style={{ height: moderateScale(50), width: '100%', flexDirection: 'row', justifyContent: 'flex-start', }}>
//                     <TouchableOpacity style={{ height: moderateScale(35), width: '67%', alignItems: 'center', justifyContent: 'center', }}>
//                         <Text style={{ fontSize: scale(16), textAlign: 'center', color: 'black', fontWeight: "600" }}>
//                             Job summary . 1 services
//                         </Text>
//                     </TouchableOpacity>
//                 </View>
//                 <View style={{ height: moderateScale(70), width: '100%', flexDirection: 'column', justifyContent: 'flex-start', }}>
//                     <View style={{ height: moderateScale(30), width: '100%', flexDirection: 'row', alignItems: 'flex-start' }}>

//                         <View style={{ height: moderateScale(30), width: '60%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
//                             <Text style={{ fontSize: scale(14), textAlign: 'center', color: 'black' }}>
//                                 Xiaomi Mi, Upto 46 Inches
//                             </Text>
//                         </View>
//                         <View style={{ height: moderateScale(30), width: '45%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
//                             <Text style={{ fontSize: scale(14), textAlign: 'center', color: 'black' }}>
//                                 $345
//                             </Text>
//                         </View>
//                     </View>
//                     <View style={{ height: moderateScale(30), width: '50%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
//                         <Text style={{ fontSize: scale(14), textAlign: 'center', color: 'grey' }}>
//                             Display Screen Repair
//                         </Text>
//                     </View>

//                 </View>

//             </View>


//             <RBSheet
//                 ref={refRBSheet3}
//                 animationType={"slide"}
//                 openDuration={300}
//                 customStyles={{
//                     wrapper: {
//                         backgroundColor: "transparent"
//                     },
//                     // container: {
//                     justifyContent: "center",
//                     //     alignItems: "center",
//                     height: moderateScale(500),
//                     borderTopLeftRadius: moderateScale(20),
//                     borderTopRightRadius: moderateScale(20),
//                     borderWidth: 1,
//                     borderColor: moderateScale(2),
//                     borderColor: '#7E7E7E'
//                 }}
//             >
//                 <View style={{
//                     zIndex: scale(4), height: moderateScale(80), width: '100%', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
//                 }}>
//                     <DropDownPicker
//                         dropDownDirection="BOTTOM"
//                         open={openState}
//                         value={valueTwo}
//                         items={itemsState}
//                         setOpen={setopenState}
//                         setValue={setValueTwo}
//                         placeholder="Select Payment"
//                         itemTextStyle={{ backgroundColor: 'white', color: '#000000' }}
//                         containerStyle={{
//                             width: '90%',
//                         }}
//                         textStyle={{
//                             fontSize: scale(15),
//                             paddingLeft: 20,
//                         }}
//                         dropDownContainerStyle={{
//                             backgroundColor: 'white',
//                             borderColor: '#7E7E7E',
//                             borderWidth: moderateScale(2),
//                         }}
//                         style={{
//                             backgroundColor: 'white',
//                             borderColor: '#7E7E7E',
//                             borderWidth: moderateScale(2),
//                         }}
//                     />

//                 </View>
//                 <View style={{ height: moderateScale(80), width: '100%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
//                     <TouchableOpacity style={{ height: moderateScale(50), width: '90%', borderRadius: moderateScale(10), backgroundColor: '#0C7EFA', alignItems: 'center', justifyContent: 'center' }}
//                     >
//                         <Text style={{ fontSize: scale(16), color: 'white' }}>
//                             Collect amount $5678.00
//                         </Text>
//                     </TouchableOpacity>
//                 </View>

//             </RBSheet>
//             {/* </ScrollView> */}
//             <View style={{ alignItems: 'center', height: moderateScale(400), flexDirection: 'column', position: "relative", justifyContent: "center" }}>
//                 <View style={{ height: moderateScale(70), width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 35, position: "relative" }}>
//                     <TouchableOpacity style={{ height: moderateScale(50), width: '95%', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#0085FF', borderRadius: moderateScale(10), marginRight: moderateScale(5), }}
//                         onPress={() => refRBSheet3.current.open()}
//                     >
//                         <Text style={{ fontSize: scale(16), textAlign: 'center', color: 'white' }}>
//                             Collect amount $5678.00
//                         </Text>
//                     </TouchableOpacity
//                     >
//                 </View>
//             </View>
//         </View>
//     )
// }
// export default Totalinvoice










import React, { useRef, useState } from "react";
import { ScrollView, View, Image, Text, TextInput, TouchableOpacity, Dimensions, } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";

import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';
import DropDownPicker from "react-native-dropdown-picker";
import imagePath from '../../utils/imagePath';
import Header from '../../Compoent/DrawerHeader';
const Totalinvoice = ({ navigation }) => {
    const [myArray, setMyArray] = React.useState([]);
    const [openCountry, setopenCountry] = React.useState(false);
    const [openState, setopenState] = React.useState(false);
    const [openCity, setOpenCity] = React.useState(false);
    const [checked, setChecked] = React.useState(false);
    const [value, setValue] = React.useState('Select Payment');
    const [valueTwo, setValueTwo] = React.useState(null);

    const [itemsState, setItemsState] = React.useState([
        { label: 'Cash Payment ', value: 'Cash Payment' },
        { label: 'Online Payment', value: 'Online Payment ' },
    ]);


    const [progress, setposred] = useState(55)
    const refRBSheet1 = useRef();
    const refRBSheet3 = useRef();
    const refRBSheet2 = useRef();
    return (
        <View style={{ flex: 1, flexDirection: 'column', }}>
            <Header />
            {/* <ScrollView style={{ backgroundColor: "#F5F5F5", flex: 1 }}> */}

            <View style={{ height: moderateScale(380), padding: scale(2), }}>


                <View style={{ height: moderateScale(40), margin: scale(5), width: '96%', flexDirection: 'row', justifyContent: 'space-between', }}>
                    <TouchableOpacity style={{ height: moderateScale(35), width: '40%', alignItems: 'center', justifyContent: 'center', }}>
                        <Text style={{ fontSize: scale(19), textAlign: 'center', color: 'black', fontWeight: "600" }}>
                            Total invoice
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ height: moderateScale(35), width: '100%', justifyContent: "center" }}>
                        <Text style={{ fontSize: scale(18), fontWeight: "500", textAlign: 'center', color: 'black' }}>
                            ₹543
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={{ height: moderateScale(35), width: '96%', flexDirection: 'row', justifyContent: 'space-between', }}>
                    <TouchableOpacity style={{ height: moderateScale(35), width: '60%', alignItems: 'center', justifyContent: 'center', }}>
                        <Text style={{ fontSize: scale(16), textAlign: 'center', color: 'black', fontWeight: "600" }}>
                            Customer paid online
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ height: moderateScale(35), width: '20%', justifyContent: "center" }}

                    >
                        <Text style={{ fontSize: scale(16), textAlign: 'center', color: 'black' }}>
                            -₹543
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{ height: moderateScale(35), width: '96%', flexDirection: 'row', justifyContent: 'space-between', }}>
                    <TouchableOpacity style={{ height: moderateScale(35), width: '60%', alignItems: 'center', justifyContent: 'center', }}>
                        <Text style={{ fontSize: scale(16), textAlign: 'center', color: 'black', fontWeight: "600" }}>
                            Paymment to collect
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ height: moderateScale(35), width: '20%', justifyContent: "center" }}

                    >
                        <Text style={{ fontSize: scale(16), textAlign: 'center', color: 'grey' }}>
                            ₹0
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={{ height: moderateScale(40), width: '74%', flexDirection: 'row', justifyContent: 'flex-start', }}>
                    <TouchableOpacity style={{ height: moderateScale(35), width: '40%', alignItems: 'center', justifyContent: 'center', }}>
                        <Text style={{ fontSize: scale(16), textAlign: 'center', color: 'black', fontWeight: "600" }}>
                            Details
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{ height: moderateScale(50), width: '100%', flexDirection: 'row', justifyContent: 'flex-start', }}>
                    <TouchableOpacity style={{ height: moderateScale(35), width: '67%', alignItems: 'center', justifyContent: 'center', }}>
                        <Text style={{ fontSize: scale(16), textAlign: 'center', color: 'black', fontWeight: "600" }}>
                            Job summary . 1 services
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{ height: moderateScale(70), width: '100%', flexDirection: 'column', justifyContent: 'flex-start', }}>
                    <View style={{ height: moderateScale(30), width: '100%', flexDirection: 'row', alignItems: 'flex-start' }}>

                        <View style={{ height: moderateScale(30), width: '60%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontSize: scale(14), textAlign: 'center', color: 'black' }}>
                                Xiaomi Mi, Upto 46 Inches
                            </Text>
                        </View>
                        <View style={{ height: moderateScale(30), width: '45%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontSize: scale(14), textAlign: 'center', color: 'black' }}>
                                $345
                            </Text>
                        </View>
                    </View>
                    <View style={{ height: moderateScale(30), width: '50%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: scale(14), textAlign: 'center', color: 'grey' }}>
                            Display Screen Repair
                        </Text>
                    </View>

                </View>

            </View>
            <View
                style={{

                    justifyContent: "center",
                    //     alignItems: "center",
                    height: moderateVerticalScale(400),
                   
                }}
            >

            <View
                style={{

                    justifyContent: "center",
                    //     alignItems: "center",
                    height: moderateVerticalScale(230),
                    borderTopLeftRadius: moderateScale(26),
                    borderTopRightRadius: moderateScale(26),
                    borderColor: moderateScale(2),
                    borderColor: '#7E7E7E',
                    backgroundColor: "white",
                    position: 'relative',
                    shadowOffset:20,
                    alignItems:"center"
,
                 }}
            >
                <View style={{
                    zIndex: 2,  
                    height: moderateScale(10), width: '98%',   flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                }}>
                    <DropDownPicker
                        dropDownDirection="BOTTOM"
                        open={openState}
                        value={valueTwo}
                        items={itemsState}
                        setOpen={setopenState}
                        setValue={setValueTwo}
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
                            borderColor: 'grey',
                            borderWidth: moderateScale(0.8),
                        }}
                        style={{
                            backgroundColor: 'white',
                            borderColor: '#7E7E7E',
                            // borderWidth: moderateScale(0.8),
                        }}
                    />

                </View>
                <View style={{ height: moderateScale(100), width: '100%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',top:scale(25)}}>
                    <TouchableOpacity style={{ height: moderateScale(50), width: '90%', borderRadius: moderateScale(10), backgroundColor: '#0C7EFA', alignItems: 'center', justifyContent: 'center' }}
                    >
                        <Text style={{ fontSize: scale(16), color: 'white' }}>
                            Collect amount $5678.00
                        </Text>
                    </TouchableOpacity>
                </View>
                </View>

            </View>
            {/* </ScrollView> */}

        </View>
    )
}
export default Totalinvoice