

import React, { useRef, useState } from "react";
import { ScrollView, View, Image, Text, TextInput, TouchableOpacity, Dimensions,FlatList } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";

import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';
import DropDownPicker from "react-native-dropdown-picker";
import imagePath from '../../utils/imagePath';
import Header from '../../Compoent/DrawerHeader';
import SyncStorage from 'sync-storage';
import { Root, Popup, Toast } from 'react-native-popup-confirm-toast'
const Totalinvoice = ({ navigation }) => {
    const [myArray, setMyArray] = React.useState([]);
    const [openCountry, setopenCountry] = React.useState(false);
    const [openState, setopenState] = React.useState(false);
    const [openCity, setOpenCity] = React.useState(false);
    const [checked, setChecked] = React.useState(false);
    const [value, setValue] = React.useState('Select Payment');
    const [valueTwo, setValueTwo] = React.useState(null);

    const [itemsState, setItemsState] = React.useState([
        { label: 'Cash Payment', value: 'Cash Payment' },
        { label: 'Online Payment', value: 'Online Payment ' },
    ]);


    const [progress, setposred] = useState(55)
    const refRBSheet1 = useRef();
    const refRBSheet3 = useRef();
    const refRBSheet2 = useRef();
    let token = SyncStorage.get('token');
   
    let order_e_id = SyncStorage.get('order_e_id');

    const [issuelist, setissuelist] = useState([]);
    const [leaddata, setleaddata] = useState({
        order_id:'',
        order_date:'',
        brand:'',
        model_segment:'',
        issue_name:'',
        user_fullname:'',
        address_no:'',
        address_line_1:'',
        address_line_2:'',
        pincode_number:'',
        order_issues_total_price:'',
        order_flow_group:'',
    });

    const fetchopenlead = async () => {
        let  bearer = 'Bearer ' + token;

        fetch('http://43.204.87.153/api/v1/partners/lead_details?order='+order_e_id+'', {

            method: 'GET',
            headers: {
                'Authorization': bearer,
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },

        }).then((response) => response.json())
        .then((responseJson) => {;
// alert(responseJson.data[0].order_id);moment(ndate).format('DD-MM-YYYY');
            //   console.warn(responseJson.data);
            const nextFormState = {
                ...leaddata,
                order_id: responseJson.data[0].order_id,
              //  order_date:moment(responseJson.data[0].order_date, 'DD-MM-YYYY', true).format('Do MMMM ,YYYY'),
                brand:responseJson.data[0].brand,
                model_segment:responseJson.data[0].model_segment,
                issue_name:responseJson.data[0].order_issues[0].issue_name,
                user_fullname:responseJson.data[0].user_data.user_fullname,
                address_no:responseJson.data[0].order_address[0].address_no,
                address_line_1:responseJson.data[0].order_address[0].address_line_1,
                address_line_2:responseJson.data[0].order_address[0].address_line_2,
                pincode_number:responseJson.data[0].order_address[0].pincode_number,
                order_issues_total_price:responseJson.data[0].order_issues_total_price,
                order_flow_group:responseJson.data[0].order_flow_group,
              
              };
              setleaddata(nextFormState);
            
     

              setissuelist(responseJson.data[0].order_issues);
            //   leaddata.order_issues_total_price
            // alert(leaddata.order_id);
            // console.warn(issuelist);
 

            //  setleaddata(responseJson.data);

        }).catch((error) => {
            //Error 
            console.error(error);
        });


    }
    React.useEffect(() => {
        fetchopenlead();
        
    //   console.warn(table.tableData);
       
      }, []);

      const gotopaymnet = () =>{
        // alert(valueTwo);
        if(valueTwo==null){
            alert('please select paymnet method')
            // alert();
        }else if(valueTwo=='Cash Payment'){

            navigation.navigate('Onlinesuccessful', { });
        }else{
            navigation.navigate('paymnetpage', { });
        }

       
        // navigation.navigate('paymnetpage', { });

      }

      const renderItem = ({ item }) =>{
        return <View style={{ height: moderateScale(70), width: '100%', flexDirection: 'column', justifyContent: 'flex-start', }}>
        <View style={{ height: moderateScale(30), width: '100%', flexDirection: 'row', alignItems: 'flex-start' }}>

            <View style={{ height: moderateScale(30), width: '60%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: scale(14), textAlign: 'center', color: 'black' }}>
                {leaddata.brand},{leaddata.model_segment}
                </Text>
            </View>
            <View style={{ height: moderateScale(30), width: '45%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: scale(14), textAlign: 'center', color: 'black' }}>
                ₹ {item.issue_discounted_price}
                </Text>
            </View>
        </View>
        <View style={{ height: moderateScale(40), width: '50%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: scale(14), textAlign: 'center', color: 'grey' }}>
            {item.issue_name}
            </Text>
        </View>

    </View> 
      }



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
                            ₹ {leaddata.order_issues_total_price}
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
                            ₹0
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
                            ₹ {leaddata.order_issues_total_price}
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
                <View>

                <FlatList showsVerticalScrollIndicator={false}
                            style={{ flexGrow: 1 }}
                            data={issuelist}
                            renderItem={renderItem}
                        />
                        </View>

                {/* <View style={{ height: moderateScale(70), width: '100%', flexDirection: 'column', justifyContent: 'flex-start', }}>
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

                </View> */}

                

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
                    height: moderateVerticalScale(260),
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
                <View style={{ height: moderateScale(80), width: '100%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',top:scale(25)}}>
                    <TouchableOpacity onPress={()=>gotopaymnet()} style={{ height: moderateScale(50), width: '90%', borderRadius: moderateScale(10), backgroundColor: '#0C7EFA', alignItems: 'center', justifyContent: 'center' }}
                    >
                        <Text style={{ fontSize: scale(16), color: 'white' }}>
                            Collect amount  ₹ {leaddata.order_issues_total_price}
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