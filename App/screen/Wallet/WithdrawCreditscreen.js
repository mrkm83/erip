import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { SafeAreaView, View, Image, Text, TextInput, TouchableOpacity, StyleSheet, FlatList, Dimensions, Modal, Button, ScrollView } from 'react-native'
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';
import colors from '../../constants/colors';
 import DrawerHeader from '../../Compoent/DrawerHeader';
 import RBSheet from "react-native-raw-bottom-sheet";


const WithdrawCreditscreen = () => {
    const navigation = useNavigation()
    const [catergoryIndex, setCategoryIndex] = React.useState(0);
    const categories = [500, 100, 1500, 2000];



    const  changeText=()=>{

        for( var i = 0; i < categories.length; i++ ){
            
            catergoryIndex.item.index = categories[i];
        }
        return;
    }
    
    const CategoryList = () => {
         return (
            <View style={style.categoryContainer}>
                {categories.map((item, index) =>

                (

                    <TouchableOpacity
                        style={{ height: moderateScale(100), justifyContent: "center" }}

                        key={index}
                        activeOpacity={0.8}
                        // onPress={() => setCategoryIndex(index)}
                        onPress={() => changeText(index)}

                        >
                        <Text
                            style={[
                                style.categoryText,
                                catergoryIndex === index && style.categoryTextSelected,

                            ]}>
                            {item}
                        </Text>

                    </TouchableOpacity>
                ))}
            </View>
        );
    };

    return (
        <SafeAreaView style={{ flex: 1 ,backgroundColor:"#F5F5F5"}}>



            <DrawerHeader name={"Withdraw Credit"} image1={true} />
            <ScrollView  >
                <View style={{ height: moderateScale(348),padding:scale(2), backgroundColor: "white", flexDirection: "column", width: "93%", marginLeft: scale(9) ,borderRadius:scale(10)}}>

                    <View style={{ height: moderateScale(100), justifyContent: "center", flexDirection: "row", width: "93%" }}>
                        <CategoryList />

                    </View>



                    <View style={{ height: moderateScale(80), justifyContent: "center", width: "90%" }}>


                        <TextInput

                            style={
                                {
                                    height: moderateScale(48),

                                    textAlign: "center",
                                    borderBottomWidth: 0.4,
                                    width: moderateScale(300),
                                    justifyContent: "center",
                                    marginLeft: scale(20),
                                    color: "#0085FF",
                                    top: scale(6), fontSize: scale(10)


                                }
                            }
                            placeholder='Add Custom Amount
                            '
                            placeholderTextColor={"grey"}
                        />

                    </View>




                    <View style={{ height: moderateScale(100), justifyContent: "center", width: "90%" }}>


                        <Text style={
                            {
                                height: moderateScale(48),

                                textAlign: "center",
                                justifyContent: "center",
                                marginLeft: scale(20),
                                color: "grey",
                                fontSize: scale(13)


                            }
                        }>

                            Your Available Credits: 9,876

                        </Text>
                    </View>




 
                        <View style={{ height: moderateScale(45),  width: '100%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

                            <TouchableOpacity   style={{ height: moderateScale(43), width: '40%', borderRadius: moderateScale(10), backgroundColor: '#0C7EFA', alignItems: 'center', justifyContent: 'center' }}
                            
                            onPress={() => navigation.navigate("MyCoinsScreen") }

                            >
                                <Text style={{ fontSize: scale(16), color: 'white' }}>Withdraw

</Text>
                            </TouchableOpacity>

                     </View>
                </View>


            </ScrollView>
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
        color:'#0C7EFA',
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
        color:"white",
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
export default WithdrawCreditscreen;