import React from 'react';
import { ScrollView, View, Image, Text, TextInput, TouchableOpacity ,FlatList} from "react-native";
import { scale, verticalScale, moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import Header from '../../Compoent/DrawerHeader'
import imagePath from "./../../utils/imagePath";
import SyncStorage from 'sync-storage';
import Drawerbottommsg from '../../Compoent/Drawerbotommsg';

// import { Root, SPSheet } from 'react-native-popup-confirm-toast'
import { Root, Popup, Toast } from 'react-native-popup-confirm-toast'

const Profile2 = () => {


    let token = SyncStorage.get('token');
    // alert(token);
    const [partnel, setpromForm] = React.useState({
        partnel_fullname :'',
        partner_uid:'',
        partner_mobile:'',
        partner_email:'',
        partner_dob:'',
        partner_blood_group:'',
        partnel_rating:''

   });


   const [bankdetails, setbankForm] = React.useState({
    bank_name :'',
    branch_name:'',
    ifsc:'',
    account_name:'',
    account_number:''
});

const [part_emargency, setemrgForm] = React.useState({
    relationship_type :'',
    emrg_name:'',
    mobile_number:''
    
});

const [part_doc, setdocForm] = React.useState({
    aadhaar_front :'',
    aadhaar_back:'',
    pan:'',
    selfi:''
    
});

const [textdetails, settextForm] = React.useState({
    pan_num :'',
    
    
});

const [dataserviced, setserbvisesData] = React.useState([]);

const servicelis = ({ item }) => (
    <View style={{ width: '33%', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', }}>
        <Text>{item.category_title},</Text>
        
       </View>
                          

    
  );

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
               
              };
              setpromForm(nextFormState);


              const nextbankState = {
                ...bankdetails,
                bank_name:responseJson.data[0].partner_bank[0].bank_name,
                account_name:responseJson.data[0].partner_bank[0].account_name,
                account_number:responseJson.data[0].partner_bank[0].account_number,
                branch_name:responseJson.data[0].partner_bank[0].branch_name,
                ifsc:responseJson.data[0].partner_bank[0].ifsc,
               
               
              };
              setbankForm(nextbankState);


              const nextemrgkState = {
                ...part_emargency,
                relationship_type:responseJson.data[0].partner_emergency_details[0].relationship_type,
                emrg_name:responseJson.data[0].partner_emergency_details[0].name,
                mobile_number:responseJson.data[0].partner_emergency_details[0].mobile_number,
            
               
              };
              setemrgForm(nextemrgkState);

              setserbvisesData(responseJson.data[0].partner_service);

            //   if(responseJson.data[0].partner_documents[0].doc_type=='aadhaar card front'){
            //       // let adhar_fstatus = responseJson.data[0].partner_documents[0].doc_verified;
                     
            //       const nextdocState = {
            //         ...part_doc,
            //         aadhaar_front:responseJson.data[0].partner_documents[0].doc_url,
                    
                
                   
            //       };
            //       setdocForm(nextdocState);
                  
            //       alert(part_doc.aadhaar_front);
            //   }
              
            const nextdocState = {
                        ...part_doc,
                        selfi:responseJson.data[0].partner_documents[2].doc_url
                        

                    
                       
                      };
                      setdocForm(nextdocState);



                      const nexttextState = {
                        ...textdetails,
                        pan_num:responseJson.data[0].partner_tax_details[0].pan
                       
                       
                      };
                      settextForm(nexttextState);
                      
                    //   alert(part_doc.aadhaar_front);

            //   const nextdocState = {
            //     ...part_doc,
                
            
               
            //   };
            //   setdocForm(nextdocState);


        }).catch((error) => {
            //Error 
            console.error(error);
        });

      }

      React.useEffect(() => {
        fetchpartneldetails();
        
       
      }, []);

      const TAB_BAR_HEIGHT = 49;


    return (
        <Root>
        <View style={{ flex: 1, flexDirection: 'column', backgroundColor: "#F5F5F5", }}>
            <Header name={'ID Card'} image1={false} image2={true}/>

           
            <ScrollView>
           
                <View style={{  alignItems: 'center', width: "100%", flexDirection: 'column', justifyContent: 'center', marginBottom: moderateScale(35), backgroundColor: "#F5F5F5", }}>

                    <View style={{ height: moderateScale(230), width: '100%', alignItems: 'center', justifyContent: 'center',  }}>
                        {/* <Image
                            source={imagePath.profile3}
                            style={{ height: moderateScale(175), width: '80%', resizeMode: 'contain' }}
                        /> */}

<Image
    style={{ height: moderateScale(175), width: '80%', resizeMode: 'contain' }}
   source={{
    uri: part_doc.selfi,
  }}
   />

<View style={{ height: moderateScale(34), width: '10%', alignItems: 'center', justifyContent: 'center',backgroundColor:'white',marginLeft:scale(135),borderRadius:18,marginTop:moderateScale(-22) }}>
                       

                        <Image
                            source={imagePath.camera}
                            style={{ height: moderateScale(30), width: '80%', resizeMode: 'contain',  }}
                        />
                        
                    </View>
                    </View>
                    <View style={{ height: moderateScale(100), width: '100%', alignItems: 'center', paddingTop: moderateScale(10) }}>
                        <Text style={{ fontSize: scale(19), color: 'black', fontWeight: "500" }}> {partnel.partnel_fullname}</Text>
                        <View style={{ height: moderateScale(55), width: '100%', alignItems: 'center', paddingTop: moderateScale(10) }}>
                            <Text style={{ fontSize: scale(14), color: 'black', fontWeight: "400" }}>HVAC Technician | {partnel.partnel_rating} 🌟</Text>
                        </View>
                    </View>
                    <View style={{ height: moderateScale(290), width: '90%', flexDirection: 'column', backgroundColor: "white" }}>



                        <View style={{ height: moderateScale(40), width: '100%', flexDirection: 'row', }}>
                            <View style={{ height: moderateScale(40), width: '65%', flexDirection: 'row', }}>




                                <Text style={{ fontSize: scale(14), color: 'black', marginLeft: 3 ,fontWeight:"500"}}>Basic Details
                                </Text>
                            </View>
                            <View style={{ height: moderateScale(30), width: '30%', justifyContent: "center", alignItems: "center", flexDirection: 'row',marginLeft:scale(33) }}>
                               
                            <TouchableOpacity
            onPress={() =>
              Popup.show({
                type: 'warning',
                title: 'Alert!',
                textBody: 'kindly contect ERIP support for update profile ',
                buttonText: 'Ok',
                okButtonStyle:{backgroundColor: '#0085FF'},
                callback: () => Popup.hide()
              })
            }
        >

             
<Image


style={{ height: 25, width: 25 ,marginTop:scale(8)}}

source={imagePath.pencil} />
            
        </TouchableOpacity>
                              
                            </View>

                        </View>




                        <View style={{ height: moderateScale(27), width: '95%', flexDirection: 'row', }}>




                            <Text style={{ fontSize: scale(14), color: 'black', marginLeft: 3 }}>Partner Type : Company</Text>


                        </View>
                        <View style={{ height: moderateScale(27), width: '90%', flexDirection: 'row' }}>
                            <Text style={{ fontSize: scale(14), color: 'black' }}>Partner ID: </Text>
                            <Text style={{ fontSize: scale(14), }}>{partnel.partner_uid}</Text>
                        </View>

                        <View style={{ height: moderateScale(27), width: '90%', alignItems: 'center', flexDirection: 'row' }}>
                            <Text style={{ fontSize: scale(14), color: 'black' }}>Mobile Number: </Text>
                            <Text style={{ fontSize: scale(14), }}>{partnel.partner_mobile}</Text>
                        </View>
                        <View style={{ height: moderateScale(27), width: '90%', alignItems: 'center', flexDirection: 'row' }}>
                            <Text style={{ fontSize: scale(14), color: 'black' }}>Email: </Text>
                            <Text style={{ fontSize: scale(14), }}>{partnel.partner_email}</Text>
                        </View>
                        <View style={{ height: moderateScale(27), width: '100%', alignItems: 'center', flexDirection: 'row' }}>
                            <Text style={{ fontSize: scale(14), color: 'black' }}>Services:</Text>
                            <FlatList
            data={dataserviced}
            renderItem={servicelis}
            //numColumns={3}
            keyExtractor={(item) => item.category_id}
          />
                            
                        </View>


                        {/* <View style={{ height: moderateScale(27), width: '90%', alignItems: 'center', flexDirection: 'row' }}>
                            <Text style={{ fontSize: scale(14), color: "black" }}>adipiscing elit: Mauris nisi nec.
                            </Text>
                        </View> */}
                        <View style={{ height: moderateScale(27), width: '90%', alignItems: 'center', flexDirection: 'row' }}>
                            <Text style={{ fontSize: scale(14), color: 'black' }}>Date of Birth: </Text>
                            <Text style={{ fontSize: scale(14), }}>{partnel.partner_dob}</Text>
                        </View>

                        <View style={{ height: moderateScale(27), width: '90%', alignItems: 'center', flexDirection: 'row' }}>
                            <Text style={{ fontSize: scale(14), color: 'black' }}>Blood Group: </Text>
                            <Text style={{ fontSize: scale(14), }}>{partnel.partner_blood_group}
                            </Text>
                        </View>
                        <View style={{ height: moderateScale(27), width: '90%', alignItems: 'center', flexDirection: 'row' }}>
                        <Text style={{ fontSize: scale(14), color: 'black' }}>Zone: </Text>
                        <Text style={{ fontSize: scale(14), }}> IND/KAR/BLR/Z1
                            </Text>    
                           
                        </View>
                    </View>

                    <View style={{ height: moderateScale(120),margin:scale(15), width: '90%', flexDirection: 'column', backgroundColor: "white" }}>



                        <View style={{ height: moderateScale(40), width: '100%', flexDirection: 'row', }}>
                            <View style={{ height: moderateScale(40), width: '65%', flexDirection: 'row', }}>




                                <Text style={{ fontSize: scale(14), color: 'black', marginLeft: 3,fontWeight:"500" }}>Emergency Details
                                </Text>
                            </View>
                            <View style={{ height: moderateScale(30), width: '30%', justifyContent: "center", alignItems: "center", flexDirection: 'row',marginLeft:scale(33) }}>
                            <TouchableOpacity
            onPress={() =>
              Popup.show({
                type: 'warning',
                title: 'Alert!',
                textBody: 'kindly contect ERIP support for update profile ',
                buttonText: 'Ok',
                okButtonStyle:{backgroundColor: '#0085FF'},
                callback: () => Popup.hide()
              })
            }
        >

                                <Image


                                    style={{ height: 25, width: 25 ,marginTop:scale(8)}}

                                    source={imagePath.pencil} />
                                    </TouchableOpacity>
                            </View>

                        </View>




                        <View style={{ height: moderateScale(27), width: '95%', flexDirection: 'row', }}>




                            <Text style={{ fontSize: scale(14), color: 'black', marginLeft: 3 }}>Emergency Person : </Text>

                            <Text style={{ fontSize: scale(14), color: 'grey',   }}>{part_emargency.emrg_name}</Text>

                        </View>
                        <View style={{ height: moderateScale(27), width: '90%', flexDirection: 'row' }}>
                            <Text style={{ fontSize: scale(14), color: 'black' }}>Relationshipe: </Text>
                            <Text style={{ fontSize: scale(14), }}>{part_emargency.relationship_type}</Text>
                        </View>

                        <View style={{ height: moderateScale(27), width: '90%', alignItems: 'center', flexDirection: 'row' }}>
                            <Text style={{ fontSize: scale(14), color: 'black' }}>EmergencyContact: </Text>
                            <Text style={{ fontSize: scale(14), }}>{part_emargency.mobile_number}</Text>
                        </View>
                        


                        

                        
                     </View>




                     <View style={{ height: moderateScale(120),margin:scale(15), width: '90%', flexDirection: 'column', backgroundColor: "white" }}>



<View style={{ height: moderateScale(40), width: '100%', flexDirection: 'row', }}>
    <View style={{ height: moderateScale(40), width: '65%', flexDirection: 'row', }}>




        <Text style={{ fontSize: scale(14), color: 'black', marginLeft: 3,fontWeight:"500" }}>Document Details
        </Text>
    </View>
    <View style={{ height: moderateScale(30), width: '30%', justifyContent: "center", alignItems: "center", flexDirection: 'row',marginLeft:scale(33) }}>
    <TouchableOpacity
            onPress={() =>
              Popup.show({
                type: 'warning',
                title: 'Alert!',
                textBody: 'kindly contect ERIP support for update profile ',
                buttonText: 'Ok',
                okButtonStyle:{backgroundColor: '#0085FF'},
                callback: () => Popup.hide()
              })
            }
        >
        <Image


            style={{ height: 25, width: 25 ,marginTop:scale(8)}}

            source={imagePath.pencil} />
            </TouchableOpacity>
    </View>

</View>




<View style={{ height: moderateScale(27), width: '95%', flexDirection: 'row', }}>




    <Text style={{ fontSize: scale(14), color: 'black', marginLeft: 3,  }}>Adhaar card Front: </Text>

    <Text style={{ fontSize: scale(14), color: '#F9933B',   }}> Pending</Text>

</View>
<View style={{ height: moderateScale(27), width: '90%', flexDirection: 'row' }}>
    <Text style={{ fontSize: scale(14), color: 'black', marginLeft: 3,borderBottomWidth:0.4}}>Adhaar card Back : </Text>
    <Text style={{ fontSize: scale(14), color: '#F9933B',   }}> Pending</Text>
</View>

<View style={{ height: moderateScale(27), width: '90%', alignItems: 'center', flexDirection: 'row' }}>
    <Text style={{ fontSize: scale(14), color: 'black', marginLeft: 3,borderBottomWidth:0.4}}>Driving License  </Text>
    <Text style={{ fontSize: scale(14), color: '#F9933B',   }}> Pending</Text>
</View>






</View>












<View style={{ height: moderateScale(120),margin:scale(15), width: '90%', flexDirection: 'column', backgroundColor: "white" }}>



<View style={{ height: moderateScale(40), width: '100%', flexDirection: 'row', }}>
    <View style={{ height: moderateScale(40), width: '65%', flexDirection: 'row', }}>




        <Text style={{ fontSize: scale(14), color: 'black', marginLeft: 3,fontWeight:"500" }}>Tax Details

        </Text>
    </View>
    <View style={{ height: moderateScale(30), width: '30%', justifyContent: "center", alignItems: "center", flexDirection: 'row',marginLeft:scale(33) }}>
       
    <TouchableOpacity
            onPress={() =>
              Popup.show({
                type: 'warning',
                title: 'Alert!',
                textBody: 'kindly contect ERIP support for update profile ',
                buttonText: 'Ok',
                okButtonStyle:{backgroundColor: '#0085FF'},
                callback: () => Popup.hide()
              })
            }
        >
        <Image


            style={{ height: 25, width: 25 ,marginTop:scale(8)}}

            source={imagePath.pencil} />
            </TouchableOpacity>
    </View>

</View>




<View style={{ height: moderateScale(27), width: '95%', flexDirection: 'row', }}>




    <Text style={{ fontSize: scale(14), color: 'black', marginLeft: 3, }}>GST Number: </Text>

    <Text style={{ fontSize: scale(14),     }}> </Text>

</View>
<View style={{ height: moderateScale(27), width: '90%', flexDirection: 'row' }}>
    <Text style={{ fontSize: scale(14), color: 'black',  }}>PAN Number:  </Text>
    <Text style={{ fontSize: scale(14), color:"grey"}}>{textdetails.pan_num}</Text>
</View>

 





</View>

<View style={{ height: moderateScale(196),margin:scale(15), width: '90%', flexDirection: 'column', backgroundColor: "white" }}>



<View style={{ height: moderateScale(40), width: '100%', flexDirection: 'row', }}>
    <View style={{ height: moderateScale(40), width: '65%', flexDirection: 'row', }}>




        <Text style={{ fontSize: scale(14), color: 'black', marginLeft: 3,fontWeight:"500" }}>Bank Account Details

        </Text>
    </View>
    <View style={{ height: moderateScale(30), width: '30%', justifyContent: "center", alignItems: "center", flexDirection: 'row',marginLeft:scale(27) }}>
    <TouchableOpacity
            onPress={() =>
              Popup.show({
                type: 'warning',
                title: 'Alert!',
                textBody: 'kindly contect ERIP support for update profile ',
                buttonText: 'Ok',
                okButtonStyle:{backgroundColor: '#0085FF'},
                callback: () => Popup.hide()
              })
            }
        >
        <Image


            style={{ height: 25, width: 25 ,marginTop:scale(8)}}

            source={imagePath.pencil} />
            </TouchableOpacity>
    </View>

</View>




<View style={{ height: moderateScale(27), width: '95%', flexDirection: 'row', }}>




    <Text style={{ fontSize: scale(14), color: 'black', marginLeft: 3,  }}>Bank Name:  </Text>

    <Text style={{ fontSize: scale(14), color: 'grey',   }}> {bankdetails.bank_name} </Text>

</View>
<View style={{ height: moderateScale(27), width: '90%', flexDirection: 'row' }}>
    <Text style={{ fontSize: scale(14), color: 'black', marginLeft: 3, }}>Account Number:   </Text>
    <Text style={{ fontSize: scale(14), color:"grey"}}>{bankdetails.account_number}</Text>
</View>

<View style={{ height: moderateScale(27), width: '90%', alignItems: 'center', flexDirection: 'row' }}>
    <Text style={{ fontSize: scale(14), color: 'black', marginLeft: 3, }}>Account Holder’s Name:  </Text>
    <Text style={{ fontSize: scale(14), color:"grey"}}>{bankdetails.account_name}</Text>
</View>
<View style={{ height: moderateScale(27), width: '90%', alignItems: 'center', flexDirection: 'row' }}>
    <Text style={{ fontSize: scale(14), color: 'black', marginLeft: 3, }}> Branch:  </Text>
    <Text style={{ fontSize: scale(14), color:"grey"}}>{bankdetails.branch_name}</Text>

</View>

<View style={{ height: moderateScale(27), width: '90%', alignItems: 'center', flexDirection: 'row' }}>
    <Text style={{ fontSize: scale(14), color: 'black', marginLeft: 3,}}> IFSC Code:  
 </Text>
    <Text style={{ fontSize: scale(14), color:"grey"}}>{bankdetails.ifsc}</Text>

</View> 



</View>


                </View>
            </ScrollView>
        </View>
        </Root>
    )
}
export default Profile2