import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { SafeAreaView, View, Image, Text, TouchableOpacity, StyleSheet, FlatList, Dimensions, Modal, Button, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { moderateScale, moderateVerticalScale, s, scale } from 'react-native-size-matters';
import colors from '../../constants/colors';
import imagePath from '../../utils/imagePath';
import navigationStrings from '../../utils/navigationStrings';
import Bottomcom from '../../Compoent/Bottomcom';
const Wallet = () => {
    const navigation = useNavigation()
    const [category, setCategory] = useState(0)
    const [showModal, setShowModal] = useState(false);
    const [catergoryIndex, setCategoryIndex] = React.useState(0);
    const categories = ['All Leads',];
    const dataList = [{
        orderId: "Order Id :#0653",
        date: "Date: 24/03/2022",
        title: "Display Screen Repair - Xiami Mi,Upto 46 inches ",
        timeSlot: "Time Slot 05 pm - 07 pm",
        image: imagePath.Location,
        address: "274, 10th Cross Rd, Wilson Garden, Bengaluru, Karnataka 560027, India",
        price: "INR 249",

    },


    ]
    return (
        <View style={style.categoryContainer}>

            <Bottomcom  Menu1={imagePath.Menu} Notification1={imagePath.Notification}/>
            <ScrollView    >
                <View style={{ height: moderateScale(180), borderRadius: scale(8), width: "95%", top: scale(10), backgroundColor: "white", flexDirection: "column", marginLeft: scale(6) }}>


                    <View style={{ height: moderateScale(100), width: "100%", flexDirection: "row", justifyContent: "center" }}>

                        <View style={{ height: moderateScale(90), borderRadius: scale(20), top: scale(20), width: "28%", marginLeft: scale(13) }}>
                            <View style={{ height: moderateScale(80), backgroundColor: "#F9F9F9", width: 90, justifyContent: "center" }}>

                                <Image
                                    style={{ height: moderateScale(68), width: 80, resizeMode: "contain" }}
                                    source={imagePath.creditcard}
                                />
                            </View>

                        </View>
                        <View style={{ height: moderateScale(100), flexDirection: "column", width: "58%", flexDirection: "column", justifyContent: "center" }}>

                            <Text style={{ fontSize: scale(18), fontWeight: "500", textAlign: "center" ,color:"black"}}>
                                Your Avalibale  Credits
                            </Text>
                            <Text style={{ fontSize: scale(22), fontWeight: "500", color: "#0085FF", marginLeft: scale(15) }}>
                                9,893
                            </Text>


                        </View>


                    </View>

                    <View style={{ height: moderateScale(80), width: '96%', flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', justifyContent: 'space-between', }}>
                        <TouchableOpacity style={{ height: moderateScale(43), width: '45%', alignItems: 'center', justifyContent: 'center', backgroundColor: '#0085FF', borderRadius: moderateScale(10), marginLeft: scale(8) }}
                        
                        onPress={() => navigation.navigate("AddCreditscreen") }

                        >
                            <Text style={{ fontSize: scale(16), textAlign: 'center', color: 'white' }}
                            
                            
                            >
                                Add Credit
                                
                            </Text>
                        </TouchableOpacity
                        >

                        <TouchableOpacity onPress={() => navigation.navigate("WithdrawCreditscreen") } style={{ height: moderateScale(43), width: '45%', marginStart: scale(20), borderWidth: 0.8, borderColor: "#0085FF", alignItems: 'center', justifyContent: 'center', borderRadius: moderateScale(10), }}

                        >
                            <Text style={{ fontSize: scale(16), textAlign: 'center', color: '#0085FF' }}>
                                Withdraw Credit
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>




                <View style={{ height: moderateScale(85), margin: scale(22), alignItems: "center", backgroundColor: "white", width: "94%", flexDirection: "row", justifyContent: "center", marginLeft: scale(6) }}>

                    <View style={{ height: moderateScale(80), borderRadius: scale(20), width: "28%", marginLeft: scale(13), justifyContent: "center" }}>
                    <TouchableOpacity onPress={() => navigation.navigate("MyCoinsScreen") }>
                        <View style={{ height: moderateScale(73), backgroundColor: "#F9F9F9", width: 90, justifyContent: "center" }}>

                            <Image
                                style={{ height: moderateScale(68), width: 80, resizeMode: "contain" }}
                                source={imagePath.coine}
                            />
                        </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ height: moderateScale(80), width: "70%", flexDirection: "column", justifyContent: "center" }}>

                        <Text style={{ fontSize: scale(14), fontWeight: "600",color:"#000000" }}>Earn 5000 Free Bonus
                        </Text>
                        <Text style={{ fontSize: scale(15), color: "#7E7E7E", marginTop: scale(3) }}>
                            Points will be awarded when you complete 10 servicing jobs    </Text>


                    </View>


                </View>

                <View style={{ height: moderateScale(35), width: '96%', flexDirection: 'row', justifyContent: 'space-between', }}>
                    <TouchableOpacity style={{ height: moderateScale(35), width: '55%', alignItems: 'center', justifyContent: 'center', }}>
                        <Text style={{ fontSize: scale(16), textAlign: 'center', color: 'black' }}>
                            Transaction Summary
                        </Text>
                    </TouchableOpacity
                    >

                    <TouchableOpacity style={{ height: moderateScale(35), width: '70%', justifyContent: "center" }}
                    onPress={() => navigation.navigate("WalletScreen") }

                    >
                        <Text style={{ fontSize: scale(16), textAlign: 'center', color: '#0085FF' }}>
                            View all
                        </Text>
                    </TouchableOpacity>
                </View>



                <View style={{ height: moderateScale(260), width: "92%", marginTop: scale(8), borderRadius: scale(6), backgroundColor: "white", marginLeft: scale(10) }}>

                    <View style={{ height: moderateScale(44), width: '100%', }}>
                        <View style={{ height: moderateScale(33), width: '100%', justifyContent: "center", flexDirection: 'row', }}>
                            <View style={{ height: moderateScale(33), width: '70%', alignItems: "center", flexDirection: 'row', justifyContent: 'center' }}>
                                <Text style={{ fontSize: scale(14), textAlign: 'center', color: 'black' }}>
                                    Lead Charge                                 </Text>
                            </View>
                            <View style={{ height: moderateScale(30), alignItems: "center", width: '30%', flexDirection: 'row', alignItems: "center", justifyContent: 'center' }}>
                                <Text style={{ fontSize: scale(14), textAlign: 'center', color: '#F9623B' }}>
                                    (98,000)
                                </Text>
                            </View>
                        </View>
                        <View style={{ height: moderateScale(33), width: '63%', flexDirection: 'row', justifyContent: 'center' }}>
                            <Text style={{ fontSize: scale(14), textAlign: 'center', color: 'grey' }}>
                                January 12                                </Text>
                        </View>
                    </View>


                    <View style={{ height: moderateScale(48), width: '100%', top: scale(5) }}>
                        <View style={{ height: moderateScale(33), width: '100%', justifyContent: "center", flexDirection: 'row', }}>
                            <View style={{ height: moderateScale(33), width: '70%', alignItems: "center", flexDirection: 'row', justifyContent: 'center' }}>
                                <Text style={{ fontSize: scale(14), textAlign: 'center', color: 'black' }}>
                                    Commission                                 </Text>
                            </View>
                            <View style={{ height: moderateScale(30), alignItems: "center", width: '30%', flexDirection: 'row', alignItems: "center", justifyContent: 'center' }}>
                                <Text style={{ fontSize: scale(14), textAlign: 'center', color: '#00B67F' }}>
                                    45,000
                                </Text>
                            </View>
                        </View>
                        <View style={{ height: moderateScale(33), width: '63%', flexDirection: 'row', justifyContent: 'center' }}>
                            <Text style={{ fontSize: scale(14), textAlign: 'center', color: 'grey' }}>
                                January 16                               </Text>
                        </View>
                    </View>



                    <View style={{ height: moderateScale(48), width: '100%',top:(8) }}>
                        <View style={{ height: moderateScale(33), width: '100%', justifyContent: "center", flexDirection: 'row', }}>
                            <View style={{ height: moderateScale(33), width: '70%', alignItems: "center", flexDirection: 'row', justifyContent: 'center' }}>
                                <Text style={{ fontSize: scale(14), textAlign: 'center', color: 'black',top:scale(4) }}>
                                    Lead Charge                                 </Text>
                            </View>
                            <View style={{ height: moderateScale(30), alignItems: "center", width: '30%', flexDirection: 'row', alignItems: "center", justifyContent: 'center' }}>
                                <Text style={{ fontSize: scale(14), textAlign: 'center', color: '#F9623B' }}>
                                    (98,000)
                                </Text>
                            </View>
                        </View>
                        <View style={{ height: moderateScale(33), width: '63%', flexDirection: 'row', justifyContent: 'center' }}>
                            <Text style={{ fontSize: scale(14), textAlign: 'center', color: 'grey' }}>
                                January 12                                </Text>
                        </View>
                    </View>


                    <View style={{ height: moderateScale(48), width: '100%', top: scale(5) }}>
                        <View style={{ height: moderateScale(30), width: '100%', justifyContent: "center", flexDirection: 'row', }}>
                            <View style={{ height: moderateScale(33), width: '70%', alignItems: "center", flexDirection: 'row', justifyContent: 'center' }}>
                                <Text style={{ fontSize: scale(14),top:scale(4), textAlign: 'center', color: 'black',marginStart:scale(-20) }}>
                                Rework                                 </Text>
                            </View>
                            <View style={{ height: moderateScale(30), alignItems: "center", width: '30%', flexDirection: 'row', alignItems: "center", justifyContent: 'center' }}>
                                <Text style={{ fontSize: scale(14), textAlign: 'center', color: '#00B67F' }}>
                                    45,000
                                </Text>
                            </View>
                        </View>
                        <View style={{ height: moderateScale(30), width: '63%', flexDirection: 'row', justifyContent: 'center' }}>
                            <Text style={{ fontSize: scale(14), textAlign: 'center', color: 'grey' }}>
                                January 16                               </Text>
                        </View>
                    </View>







                    <View style={{ height: moderateScale(48), width: '100%', top: scale(5) }}>
                        <View style={{ height: moderateScale(33), width: '100%', justifyContent: "center", flexDirection: 'row', }}>
                            <View style={{ height: moderateScale(33), width: '70%', alignItems: "center", flexDirection: 'row', justifyContent: 'center' }}>
                                <Text style={{ fontSize: scale(14), textAlign: 'center', color: 'black',top:scale(4) }}>
                                    Commission                                 </Text>
                            </View>
                            <View style={{ height: moderateScale(30), alignItems: "center", width: '30%', flexDirection: 'row', alignItems: "center", justifyContent: 'center' }}>
                                <Text style={{ fontSize: scale(14), textAlign: 'center', color: '#00B67F' }}>
                                    45,000
                                </Text>
                            </View>
                        </View>
                        <View style={{ height: moderateScale(33), width: '63%', flexDirection: 'row', justifyContent: 'center' }}>
                            <Text style={{ fontSize: scale(14), textAlign: 'center', color: 'grey' }}>
                                January 16                               </Text>
                        </View>
                    </View>







                </View>

            </ScrollView>
        </View>
    );


}
const style = StyleSheet.create({
    categoryContainer: {
        flex: 1
    },
    categoryText: {
        fontSize: 16,
        color: colors.black,
        fontWeight: 'bold',
        marginHorizontal: moderateScale(10),
        borderRadius: scale(10),
        padding: scale(8),
        paddingHorizontal: moderateScale(10),
        backgroundColor: colors.white
    },
    categoryTextSelected: {
        color: 'white',
        backgroundColor: colors.blue,

        width: 120
    },
    card: {
        height: 225,
        backgroundColor: colors.blue,
        marginHorizontal: 2,
        borderRadius: 10,
        marginBottom: 20,
        padding: 15,
    },
    header: {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    searchContainer: {
        height: 50,
        backgroundColor: colors.blue,
        borderRadius: 10,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },

    input: {
        fontSize: 18,
        fontWeight: 'bold',
        flex: 1,
        color: colors.blue,
    },

    modal: {
        flex: 1,
        alignItems: 'center',
        padding: 100,
        backgroundColor: 'red',
        justifyContent: 'center'
    },
    text: {
        color: '#3f2949',
        marginTop: 10,
    },
    linearGradient: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        height: 200,
        width: 350,
    },
});
export default Wallet;