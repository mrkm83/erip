import  React, { useState } from 'react';
import { View, Text,Image, TextInput, TouchableOpacity,ScrollView} from 'react-native';
import image from '../../aasets/index'
  import { scale, verticalScale, moderateScale } from 'react-native-size-matters-ch';

import HeaderResitison from '../../Compoent/HeaderResitison';
import SyncStorage from 'sync-storage';
const  Registration=({navigation})=> {

  const [Hide ,sethide]=useState('');
    const [Visible ,setvisible]=useState('');
    const [acountholder ,setacountholder]=useState('');
      // const [Hotalname ,setHotalname]=useState();
        const [IFSC ,setIFSC]=useState();
          const [Bankname ,setBankname]=useState('');
            const [Branch ,setBranch]=useState('');

            const [form_error, setForm] = React.useState({
              name_error :'',
              
    
         });


            const onSubmitForm = e =>{

              let partner_id = SyncStorage.get('partnel_id');
              // alert(partner_id);
              

               if(Hide == ''){

                const nextFormState = {
                  ...form_error,
                  name_error: 'please enter Account Number',
                
                };
                setForm(nextFormState);


               }else if(Visible==''){
                const nextFormState = {
                  ...form_error,
                  name_error: 'please enter confirm Account Number',
                
                };
                setForm(nextFormState);


               }else if(Hide!=Visible){
                const nextFormState = {
                  ...form_error,
                  name_error: 'Account number mismatch',
                
                };
                setForm(nextFormState);

               }else if(acountholder==''){
                const nextFormState = {
                  ...form_error,
                  name_error: 'please enter Account Holder name',
                
                };
                setForm(nextFormState);

               }else if(IFSC==''){
                const nextFormState = {
                  ...form_error,
                  name_error: 'please enter IFSC code',
                
                };
                setForm(nextFormState);

               }else if(Bankname==''){
                const nextFormState = {
                  ...form_error,
                  name_error: 'please enter Bank name',
                
                };
                setForm(nextFormState);

               }else if(Branch==''){
                const nextFormState = {
                  ...form_error,
                  name_error: 'please enter Branch name',
                
                };
                setForm(nextFormState);

               }else{

                const nextFormState = {
                  ...form_error,
                  name_error: '',
                
                };
                setForm(nextFormState);

                fetch('http://43.204.87.153/api/v1/partners/register_bank', {

                  method: 'POST',
                  body: JSON.stringify({
                    partner_id: partner_id,
                    account_number:Hide,
                    account_name:acountholder,
                    bank_name:Bankname,
                    bank_branch:Branch,
                    ifsc:IFSC
                    
                    
                      }), //post body
                  headers: {
                      Accept: 'application/json',
                      'Content-Type': 'application/json',
                  },


                }).then((response) => response.json())
                .then((responseJson) => {
                  // alert(responseJson.success);
                  // alert(responseJson.message);
                  if(responseJson.success==true){
                    navigation.navigate('Registrationstep2', { });

                  }

                }).catch((error) => {
                  //Error 
                  console.error(error);
              });


               }

            }




  return (
   <View  style={{flex:1,flexDirection:"column" }}>
     
<HeaderResitison   name="Step 2/3"/>
<ScrollView   style={{flex:1,backgroundColor:"white"}}>

 <View style={{height: moderateScale(50),
 width:'100%',
   flexDirection:"row",
    justifyContent:"center",
    padding:moderateScale(16)
    ,
 
  
   }}>
      <Text style={{color:"#000000",fontSize:scale(15),textAlign:"center",fontWeight:"600"}}>Enter your Bank Account Details</Text>

   </View>
 

 <View style={{height: moderateScale(73),
 width:'100%',
   flexDirection:"row",
    justifyContent:"center",
  
   }}>


 <View style={{height: moderateScale(50),
 width:'87%',
   flexDirection:"column",
    marginTop:moderateScale(15),
   justifyContent:"center",
   borderWidth:1,
   borderColor:"#0C7EFA",
   borderRadius:10

 
   }}>

<TextInput


style={{marginLeft:moderateScale(20),

fontSize:scale(12),
color:"black"
}}

placeholder=' Bank Account Number (hidden star)


'
value={Hide}
onChange={sethide}
placeholderTextColor={'#7E7E7E'}
secureTextEntry={true}
onChangeText={(text) => sethide(text)}
  
 />


</View>

</View>







 <View style={{height: moderateScale(73),
 width:'100%',
   flexDirection:"row",
    justifyContent:"center",
  
   }}>


 <View style={{height: moderateScale(50),
 width:'87%',
   flexDirection:"column",
    marginTop:moderateScale(8),
   justifyContent:"center",
   borderWidth:1,
   borderColor:"#0C7EFA",
   borderRadius:10

 
   }}>

<TextInput


style={{marginLeft:moderateScale(20),

fontSize:scale(12),
color:"black"
}}

placeholder='Conform Account Number

'
placeholderTextColor={'#7E7E7E'}
value={Visible}
onChangeText={(text) => setvisible(text)}
// onChange={setBankname} 
/>


</View>

</View>
 <View style={{height: moderateScale(73),
 width:'100%',
   flexDirection:"row",
    justifyContent:"center",
  
   }}>


 <View style={{height: moderateScale(50),
 width:'87%',
   flexDirection:"column",
    marginTop:moderateScale(8),
   justifyContent:"center",
   borderWidth:1,
   borderColor:"#0C7EFA",
   borderRadius:10

 
   }}>

<TextInput


style={{marginLeft:moderateScale(20),


fontSize:scale(12),
color:"black"
}}

placeholder=' Bank Account Holders Name


'
placeholderTextColor={'#7E7E7E'}
value={acountholder}
onChangeText={(text) => setacountholder(text)}
 
 />


</View>

</View>
 <View style={{height: moderateScale(73),
 width:'100%',
   flexDirection:"row",
    justifyContent:"center",
  
   }}>


 <View style={{height: moderateScale(50),
 width:'87%',
   flexDirection:"column",
    marginTop:moderateScale(8),
   justifyContent:"center",
   borderWidth:1,
   borderColor:"#0C7EFA",
   borderRadius:10

 
   }}>

<TextInput


style={{marginLeft:moderateScale(20),

fontSize:scale(12),
color:"black"
}}

placeholder=' IFSC Code


'
placeholderTextColor={'#7E7E7E'}
keyboardAppearanc='red'
value={IFSC}
onChangeText={(text) => setIFSC(text)}


 />


</View>

</View>
 <View style={{height: moderateScale(73),
 width:'100%',
   flexDirection:"row",
    justifyContent:"center",
  
   }}>


 <View style={{height: moderateScale(50),
 width:'87%',
   flexDirection:"column",
    marginTop:moderateScale(8),
   justifyContent:"center",
   borderWidth:1,
   borderColor:"#0C7EFA",
   borderRadius:10

 
   }}>

<TextInput


style={{marginLeft:moderateScale(20),

fontSize:scale(12),
color:"black"
}}

placeholder=' Bank Name


'
placeholderTextColor={'#7E7E7E'}
value={Bankname}
onChangeText={(text) => setBankname(text)}



 />


</View>

</View>
 <View style={{height: moderateScale(73),
 width:'100%',
   flexDirection:"row",
    justifyContent:"center",
  
   }}>


 <View style={{height: moderateScale(50),
 width:'87%',
   flexDirection:"column",
    marginTop:moderateScale(8),
   justifyContent:"center",
   borderWidth:1,
   borderColor:"#0C7EFA",
   borderRadius:10

 
   }}>

<TextInput


style={{marginLeft:moderateScale(20),

fontSize:scale(12),color:"black"
}}

placeholder=' Branch Name


'
placeholderTextColor={'#7E7E7E'}
keyboardAppearanc='red'
value={Branch}

onChangeText={(text) => setBranch(text)}



 />


</View>

</View>


<Text>{form_error.name_error}</Text>
<View style={{height: moderateScale(100),
 width:'100%',
   flexDirection:"row",
    justifyContent:"center",
  
   }}>


 <View style={{height: moderateScale(70),
 width:'100%',
   flexDirection:"column",
    marginTop:moderateScale(38),
   justifyContent:"center",
    borderRadius:10,
  
   }}>

 <TouchableOpacity      


 
style={{height: moderateScale(50),
 width:'90%',
   flexDirection:"column",
   justifyContent:"center",
   borderWidth:1,
   borderColor:"#C4C4C4",
   borderRadius:10,backgroundColor:"#C4C4C4",
   marginLeft:moderateScale(20),
   backgroundColor: '#0C7EFA'

 
   



}} 

           // onPress={() => navigation.push('TaxDetail')}
           onPress={onSubmitForm}


    >
 <Text style={{textAlign:"center",fontSize:scale(16),marginLeft:moderateScale(15),color:"#FFFFFF"}}>
 
 
NEXT </Text>
 </TouchableOpacity>


</View>

</View>


</ScrollView>
 </View>


 
 
   
 

   );
}

export default Registration;
