import React from 'react';
import { ScrollView, View, Image, Text, TextInput, TouchableOpacity } from "react-native";
import { scale, verticalScale, moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import image from '../../aasets/index';
import Header from '../../Compoent/HeaderCompent';
import SyncStorage from 'sync-storage';
const IdCard = () => {
    let token = SyncStorage.get('token');
    let my_services = SyncStorage.get('my_services');

    const [partnel, setpromForm] = React.useState({
        partnel_fullname :'',
        partner_uid:'',
        partner_mobile:'',
        partner_email:'',
        partner_dob:'',
        partner_blood_group:'',
        partnel_rating:'',
        selfi:''

   });

   const [part_address, setaddress] = React.useState({
    number :'',
    address_line_1:'',
    address_line_2:'',
    landmark:'',
    city:'',
    pincode:''
    
});


   const fetchpartneldetails = async () => {
    let  bearer = 'Bearer ' + token;

    fetch('http://43.204.87.153/api/v1/partners/my_profile', {
        method: 'GET',
        headers: {
            'Authorization': bearer,
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },

    }).then((response) => response.json())
    .then((responseJson) => {;
        // console.warn(responseJson);
        // alert(responseJson.)
        // console.warn(responseJson.data[0].partner_fullname);
        // let partnel_name = responseJson.data[0].partner_fullname;

        const nextFormState = {
            ...partnel,
            partnel_fullname:responseJson.data[0].partner_fullname,
            partner_uid:responseJson.data[0].partner_uid,
            partner_mobile:responseJson.data[0].partner_mobile,
            partner_email:responseJson.data[0].partner_email,
            partner_dob:responseJson.data[0].partner_dob,
            partner_blood_group:responseJson.data[0].partner_blood_group,
            partnel_rating:responseJson.data[0].partner_ratings,
            selfi:responseJson.data[0].partner_documents[2].doc_url,
           
          };
          setpromForm(nextFormState);


          const nextFormState_address = {
            ...part_address,
            number:responseJson.data[0].partner_addresses[0].number,
            address_line_1:responseJson.data[0].partner_addresses[0].address_line_1,
            address_line_2:responseJson.data[0].partner_addresses[0].address_line_2,
            landmark:responseJson.data[0].partner_addresses[0].landmark,
            city:responseJson.data[0].partner_addresses[0].city,
            pincode:responseJson.data[0].partner_addresses[0].pincode,
            
           
          };
          setaddress(nextFormState_address);

          
          


         

        


    }).catch((error) => {
        //Error 
        console.error(error);
    });

  }



   React.useEffect(() => {
    fetchpartneldetails();
    
   
  }, []);




    return (
        <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'white', }}>
            <Header name={'ID Card'} />
            <ScrollView>
                <View style={{ alignItems: 'center', flexDirection: 'column', justifyContent: 'center', marginBottom: moderateScale(30), }}>

                    <View style={{ height: moderateScale(210), width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                        <Image
                            source={{
                                uri: partnel.selfi,
                              }}
                            style={{ height: moderateScale(175), width: '80%', resizeMode: 'contain' }}
                        />
                    </View>
                    <View style={{ height: moderateScale(100), width: '100%', alignItems: 'center', paddingTop: moderateScale(10) }}>
                        <Text style={{ fontSize: scale(18), color: 'black' }}> {partnel.partnel_fullname}</Text>
                        <View style={{ height: moderateScale(55), width: '100%', alignItems: 'center', paddingTop: moderateScale(10) }}>
                            <Text style={{ fontSize: scale(14), color: 'black' }}>{my_services} | 4.5 🌟</Text>
                        </View>
                    </View>

                    <View style={{ height: moderateScale(40), width: '90%', alignItems: 'center', paddingTop: moderateScale(10), flexDirection: 'row' }}>
                        <Text style={{ fontSize: scale(14), color: 'black' }}>Partner Type: </Text>
                        <Text style={{ fontSize: scale(14), }}>Company</Text>
                    </View>
                    <View style={{ height: moderateScale(40), width: '90%', alignItems: 'center', paddingTop: moderateScale(10), flexDirection: 'row' }}>
                        <Text style={{ fontSize: scale(14), color: 'black' }}>Partner ID: </Text>
                        <Text style={{ fontSize: scale(14), }}>{partnel.partner_uid}</Text>
                    </View>
                    <View style={{ height: moderateScale(40), width: '90%', alignItems: 'center', paddingTop: moderateScale(10), flexDirection: 'row' }}>
                        <Text style={{ fontSize: scale(14), color: 'black' }}>Mobile Number: </Text>
                        <Text style={{ fontSize: scale(14), }}>{partnel.partner_mobile}</Text>
                    </View>
                    <View style={{ height: moderateScale(40), width: '90%', alignItems: 'center', paddingTop: moderateScale(10), flexDirection: 'row' }}>
                        <Text style={{ fontSize: scale(14), color: 'black' }}>Email: </Text>
                        <Text style={{ fontSize: scale(14), }}>{partnel.partner_email}</Text>
                    </View>
                    <View style={{ height: moderateScale(50), width: '90%', alignItems: 'center', paddingTop: moderateScale(10), flexDirection: 'row' }}>
                        <Text style={{ fontSize: scale(14), color: 'black' }}>Address: </Text>
                        <Text style={{ fontSize: scale(14), width: '80%', }}>{part_address.number} {part_address.address_line_1},{part_address.address_line_2},{part_address.landmark},{part_address.city}-{part_address.pincode}</Text>
                    </View>
                    <View style={{ height: moderateScale(40), width: '90%', alignItems: 'center', paddingTop: moderateScale(10), flexDirection: 'row' }}>
                        <Text style={{ fontSize: scale(14), color: 'black' }}>Date of Birth: </Text>
                        <Text style={{ fontSize: scale(14), }}>{partnel.partner_dob}</Text>
                    </View>
                    <View style={{ height: moderateScale(40), width: '90%', alignItems: 'center', paddingTop: moderateScale(10), flexDirection: 'row' }}>
                        <Text style={{ fontSize: scale(14), color: 'black' }}>Blood Group: </Text>
                        <Text style={{ fontSize: scale(14), }}>{partnel.partner_blood_group}</Text>
                    </View>





                </View>
            </ScrollView>
        </View>

    )
}
export default IdCard