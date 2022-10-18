import { useNavigation } from '@react-navigation/native';
import React, { useRef, useState, } from 'react';
import { SafeAreaView, View, Image, Text, TextInput, TouchableOpacity, StyleSheet, FlatList, Dimensions, Modal, Button, ScrollView } from 'react-native'
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';
import RBSheet from "react-native-raw-bottom-sheet";
import colors from '../../constants/colors';
import DrawerHeader from '../../Compoent/DrawerHeader';
import SyncStorage from 'sync-storage';


const AddNewPart = () => {
    const navigation = useNavigation()
    const [catergoryIndex, setCategoryIndex] = React.useState(0);
    const [qty , setqty]  = useState(0);
    const [price , setprice]  = useState(0);
    const [productname , setproductname]  = useState(0);

    let token = SyncStorage.get('token');
   
    let order_e_id = SyncStorage.get('order_e_id');


    const change_qty = (qty_new) =>{
        setqty(qty_new);

    }
    const submitfrom = e =>{
        // alert("wewe");
        let  bearer = 'Bearer ' + token;

        fetch('http://43.204.87.153/api/v1/partners/lead_add_other_part', {

            method: 'POST',
            body: JSON.stringify({
              order: order_e_id,
              part_name:productname,
              part_rate:price,
              part_quantity:qty
             
               }), //post body
            headers: {
              'Authorization': bearer,
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },


          }).then((response) => response.json())
          .then((responseJson) => {
              console.warn(responseJson);
           

          }).catch((error) => {
            //Error 
            console.error(error);
        });

       
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#F5F5F5" }}>
            <DrawerHeader name={"Add New Part"} />
            <ScrollView  >
                <View style={{ height: moderateScale(360), top: scale(30), backgroundColor: "white", flexDirection: "column", width: "93%", marginLeft: scale(9), borderRadius: scale(10) }}>

                    <View style={{ height: moderateScale(30), justifyContent: "center", width: "90%" }}>

                        <Text style={
                            {


                                color: "black",
                                fontSize: scale(18),
                                fontWeight: "600",
                                marginLeft: scale(13)


                            }
                        }>
                            Add Other Part


                        </Text>
                    </View>


                    <View style={{
                        height: moderateScale(89),
                        width: '100%',
                        flexDirection: "row",
                        justifyContent: "center",

                    }}>

                        <View style={{
                            height: moderateScale(50),
                            width: '87%',
                            flexDirection: "column",
                            marginTop: moderateScale(15),
                            justifyContent: "center",
                            borderWidth: 1,
                            borderColor: "#C4C4C4",
                            borderRadius: 10,


                        }}>

                            <TextInput


                                style={{
                                    marginLeft: moderateScale(20),

                                    fontSize: scale(15),
                                    color: "black"
                                }}

                                placeholder='Enter Part Name' 
                                value={productname}
                               placeholderTextColor={'#C4C4C4'}
                               onChangeText ={(text)=>setproductname(text)}

                            />
                        </View>

                    </View>

                    <View style={{
                        height: moderateScale(80),
                        width: '90%',
                        flexDirection: "row",
                        marginLeft: moderateScale(20),
                        justifyContent: "space-between"


                    }}>


                        <View style={{
                            height: moderateScale(60),
                            width: '40%',
                            flexDirection: "column",
                            marginTop: moderateScale(15),
                            justifyContent: "center",
                            borderWidth: 1,
                            borderColor: "#C4C4C4",
                            borderRadius: 10,


                        }}>

                            <TextInput


                                style={{

                                    fontSize: scale(15),
                                    color: "black"
                                }}

                                placeholder='Price per Unit'
                                placeholderTextColor={'#C4C4C4'}
                                value={price}
                                onChangeText = {(text)=>setprice(text)}

                            />
                        </View>
                        <View style={{
                            height: moderateScale(70),
                            width: '50%',
                            flexDirection: "row",
                            marginTop: moderateScale(15),
                            borderWidth: 1,
                            borderColor: "#C4C4C4",
                            borderRadius: 10,


                        }}>

                            <View style={{
                                height: moderateScale(38),


                                backgroundColor: "#EFEFEF",
                                justifyContent: "center",
                                borderRadius: 8,
                                top: scale(13),
                                marginLeft: scale(18), width: scale(33),


                            }}>
                                <TouchableOpacity onPress={()=>change_qty(qty + 1)}>
                                <Text style={{ textAlign: "center", fontSize: 28, color: "#0085FF", marginLeft: scale(-5) }}> +</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{
                                height: moderateScale(38),
                                justifyContent: "center",
                                borderRadius: 8,
                                top: scale(13),
                                marginLeft: scale(18), width: scale(20),


                            }}>
                                 
                                <Text style={{ textAlign: "center", fontSize: 20, color: "grey", }}>{qty}</Text>
                                
                            </View>

                            <View style={{
                                height: moderateScale(38),
                                backgroundColor: "#EFEFEF",
                                justifyContent: "center",
                                borderRadius: 8,
                                top: scale(13),
                                marginLeft: scale(8), width: scale(33)
                            }}>
                                  <TouchableOpacity onPress={()=>change_qty(qty - 1)}>

                                <Text style={{ textAlign: "center", fontSize: 28, color: "#0085FF", marginLeft: scale(-5) }}>-</Text>

                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={{
                        height: moderateScale(80),
                        width: '90%',
                        flexDirection: "row",
                        marginLeft: moderateScale(20),
                        justifyContent: "space-between"

                    }}>
                        <View style={{
                            height: moderateScale(60),
                            width: '40%',
                            flexDirection: "column",
                            marginTop: moderateScale(15),
                            justifyContent: "center",
                        }}>

                            <Text style={{ color: "black", fontSize: scale(16), fontWeight: "500" }}>

                                Total
                            </Text>

                        </View>

                        <View style={{
                            height: moderateScale(70),
                            width: '50%',
                            flexDirection: "row",
                            marginTop: moderateScale(15),
                            justifyContent: "center",
                            alignItems: "center"


                        }}>

                            <Text style={{ color: "black", fontSize: scale(16), fontWeight: "500" }}>

                            ₹ {price * qty }
                            </Text>

                        </View>


                    </View>

                </View>


            </ScrollView>
            <View style={{ height: moderateScale(70), width: '100%', flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', justifyContent: 'center', marginBottom: moderateScale(20), marginTop: moderateScale(10), position: "relative" }}>

                <TouchableOpacity style={{ height: moderateScale(47), width: '35%', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#BABABA', borderRadius: moderateScale(10), marginRight: moderateScale(5), }}>
                    <Text style={{ fontSize: scale(16), textAlign: 'center', color: 'white' }}>
                        Cancel

                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => submitfrom()} style={{ height: moderateScale(47), width: '55%', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#0085FF', borderRadius: moderateScale(10), marginLeft: moderateScale(5), }}>
                    <Text style={{ fontSize: scale(16), textAlign: 'center', color: 'white' }}>
                        Add Part
                    </Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>

    )
}
const style = StyleSheet.create({
    categoryContainer: {
        flexDirection: 'row',
        width: "100%"
    },
    categoryText: {
        fontSize: 16,
        color: '#0C7EFA',
        fontWeight: 'bold',
        marginHorizontal: moderateScale(2),
        borderRadius: scale(10),
        padding: scale(13),
        borderColor: "#0085FF",
        borderWidth: 1,
        backgroundColor: colors.white,
        width: moderateScale(79),
        height: moderateScale(50),
        textAlign: "center",
    },
    categoryTextSelected: {
        // color: colors.white,
        // paddingBottom: 30,
        // backgroundColor: colors.blue,
        borderRadius: 8,

        borderColor: "#0C7EFA",
        width: moderateScale(79),
        height: moderateScale(50),
        fontSize: scale(16),
        color: "white",
        fontWeight: 'bold',
        marginHorizontal: moderateScale(8),
        borderRadius: scale(10),
        padding: scale(13),
        borderColor: "#0085FF",
        borderWidth: 2,
        backgroundColor: '#0085FF',
        justifyContent: "space-between",

    },
    card: {
        height: 225,
        backgroundColor: colors.blue,
        marginHorizontal: 2,
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
export default AddNewPart;