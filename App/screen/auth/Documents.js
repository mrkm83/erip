import  React, { useState } from 'react';
import { View, Text,Image, TextInput, TouchableOpacity,ScrollView } from 'react-native';
import image from '../../aasets/index'
  import { scale, verticalScale, moderateScale } from 'react-native-size-matters-ch';

  import ImagePicker from 'react-native-image-crop-picker';

import HeaderResitison from '../../Compoent/HeaderResitison';
import SyncStorage from 'sync-storage';
import Address from './Address';
const  Documents=({navigation})=> {

  const createFormData = (photo) => {
  
    let partner_id = SyncStorage.get('partnel_id');
  var form = new FormData();
form.append("partner_id", partner_id);
//form.append("doc_attachment", photo.path, "image.jpg");
form.append('doc_attachment', {
      name: 'image.jpg',
      type: 'image/jpeg',
      uri: Platform.OS === 'ios' ? photo.path.replace('file://', '') : photo.path,
    });
// console.warn(form);

     return form;
  };

  


  const [Adhar,setAdhar]= useState('');
    const [pan,setpan]= useState('');
    const [selfi_img,setselfi]=useState({
      doc_name : '',
      doc_url:'',
      doc_og_name:''
    });
    const [adhar_front,setadhar_front]=useState({
      doc_name : '',
      doc_url:'',
      doc_og_name:''
    });
    const [adhar_back,setadhar_back]=useState({
      doc_name : '',
      doc_url:'',
      doc_og_name:''
    });
    const [pencard,setpencard]=useState({
      doc_name : '',
      doc_url:'',
      doc_og_name:''
    });
   
    
    
    const upload_image_new = (id) =>{
      // alert(id);
      ImagePicker.openCamera({
        width: 300,
        height: 400,
        cropping: true,
      }).then(image => {

        fetch('http://43.204.87.153/api/v1/partners/register_documents_upload', {
          method: 'POST',
          body: createFormData(image),
          headers: {
            Accept: 'application/json',
            'Content-Type': "multipart/form-data",
          }
        })
          .then((response) => response.json())
          .then((responseJson) => {
            console.warn(responseJson);
            if(id==1){

              const nextFormState = {
                ...selfi_img,
                doc_name : responseJson.data.doc_name,
                doc_url:responseJson.data.doc_url,
                doc_og_name:responseJson.data.doc_og_name
               
              };
              setselfi(nextFormState);

              // setselfi(responseJson.data.doc_url);

            }else if(id==2){
             // setadhar_front(responseJson.data.doc_url);
             const nextFormState = {
              ...adhar_front,
              doc_name : responseJson.data.doc_name,
              doc_url:responseJson.data.doc_url,
              doc_og_name:responseJson.data.doc_og_name
             
            };
            setadhar_front(nextFormState);

            }else if(id==3){
             // setadhar_back(responseJson.data.doc_url);
             const nextFormState = {
              ...adhar_back,
              doc_name : responseJson.data.doc_name,
              doc_url:responseJson.data.doc_url,
              doc_og_name:responseJson.data.doc_og_name
             
            };
            setadhar_back(nextFormState);

            }else if(id==4){
             // setpencard(responseJson.data.doc_url);
             const nextFormState = {
              ...pencard,
              doc_name : responseJson.data.doc_name,
              doc_url:responseJson.data.doc_url,
              doc_og_name:responseJson.data.doc_og_name
             
            };
            setpencard(nextFormState);

            }
           

            //  alert(responseJson.data.doc_url);
          })
          .catch((error) => {
            console.log('error', error);
          });
     

  

        // createFormData(image);
      });
    }

    const [form_error, setForm] = React.useState({
      name_error :'',
      

 });


const onSubmitForm = e =>{
  // alert(Adhar);
  // alert(pan);
  let partner_id = SyncStorage.get('partnel_id');
  // alert(partner_id);

  e.preventDefault();
  if(Adhar==''){
    const nextFormState = {
      ...form_error,
      name_error: 'please enter Adhar Number',
     
    };
    setForm(nextFormState);

  }else if(pan==''){

    const nextFormState = {
      ...form_error,
      name_error: 'please enter Pan card',
     
    };
    setForm(nextFormState);

  }
  // else if(selfi_img.doc_url==''){

  //   const nextFormState = {
  //     ...form_error,
  //     name_error: 'please Upload selfi',
     
  //   };
  //   setForm(nextFormState);


  // }
  else if(adhar_front.doc_url==''){
    const nextFormState = {
      ...form_error,
      name_error: 'please Upload Adhar front',
     
    };
    setForm(nextFormState);

  }else if(adhar_back.doc_url==''){
    const nextFormState = {
      ...form_error,
      name_error: 'please Upload Adhar Back',
     
    };
    setForm(nextFormState);

  }else if(pencard.doc_url==''){
    const nextFormState = {
      ...form_error,
      name_error: 'please Upload Pancard',
     
    };
    setForm(nextFormState);

  }else{

    const nextFormState = {
      ...form_error,
      name_error: '',
     
    };
    setForm(nextFormState);


    update_documnt_db(partner_id,selfi_img,0,7);
    update_documnt_db(partner_id,adhar_front,Adhar,1);
    update_documnt_db(partner_id,adhar_back,Adhar,8);
    update_documnt_db(partner_id,pencard,pan,2);
 

  //  navigation.navigate('Registration', { });

  setTimeout(function() {

  navigation.navigate('Registration', { });
}, 2500);

  }

}


const update_documnt_db = (partnel_id,array,doc_no,doc_type) =>{

  fetch('http://43.204.87.153/api/v1/partners/register_documents', {

    method: 'POST',
    body: JSON.stringify({
      partner_id: partnel_id,
      doc_type_id:doc_type,
      doc_number:doc_no,
      doc_og_name:array.doc_og_name,
      doc_name:array.doc_name,
      doc_url:array.doc_url
      
        }), //post body
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },


  }).then((response) => response.json())
  .then((responseJson) => {
    // alert(responseJson.success);
    // alert(responseJson.message);
   

  }).catch((error) => {
    //Error 
    console.error(error);
});


}


  return (
   <View  style={{flex:1,flexDirection:"column" }}>
     
<HeaderResitison  name="Step 3/3"/>
<ScrollView   style={{flex:1,backgroundColor:"white"}}>

 <View style={{height: moderateScale(50),
 width:'100%',
   flexDirection:"row",
    justifyContent:"center",
    padding:moderateScale(16)
    ,
    alignItems:"center"
 
  
   }}>
      <Text style={{color:"#000000",fontSize:scale(15), marginStart:scale(-50) ,fontWeight:"600"}}>Submit your Documents for Verification</Text>

   </View>
 

 <View style={{height: moderateScale(130),
 width:'100%',
    marginTop:scale(5),
      
   }}>
<TouchableOpacity  onPress={() => upload_image_new(1)}>

 <View style={{height: moderateScale(120),
 width:'27%',
     borderWidth:1,
   borderColor:"#E8E8E8",
   borderRadius:8,
       backgroundColor:"#E8E8E8",
       marginLeft:scale(24)


 
   }}>
<View style={{height: moderateScale(48),
 width:109,
   flexDirection:"row",
    
   
        justifyContent:"center",
              alignItems:"center", 
              alignContent:"center",
              top:scale(9),



 
 
   }}  >
 
{/* <Text style={{color:"black",fontSize:scale(27),textAlign:"center",}} >+</Text> */}
<TouchableOpacity style={{color:"black",fontSize:scale(27),textAlign:"center",'display': selfi_img.doc_url === '' ?  'flex' : 'none'}} onPress={() => upload_image_new(1)}>
<Text>+</Text>  
</TouchableOpacity>
<TouchableOpacity  onPress={() => upload_image_new(1)}>
<Image
   style={{height: moderateScale(100),width:100,marginTop:30,marginLeft:-3,'display': selfi_img.doc_url === '' ?  'none' : 'flex'}}
   source={{
    uri: selfi_img.doc_url,
  }}
   />
   </TouchableOpacity>
 
 

</View>
<View style={{height: moderateScale(20),
 width:127,
   
    borderColor:"#E8E8E8",
      marginLeft:scale(-5.8),
      'display': selfi_img.doc_url === '' ?  'flex' : 'none'
    
   
 
   }}>
 
<Text style={{color:"#000000",fontSize:scale(12),textAlign:"center",top:scale(8),fontWeight:"600", }}>Add </Text>
 

</View>
<View style={{height: moderateScale(20),
 width:127,
   
    borderColor:"#E8E8E8",
         justifyContent:"center",
      marginLeft:scale(-5.8),
      'display': selfi_img.doc_url === '' ?  'flex' : 'none'

   
 
   }}>
 
 <Text style={{color:"#000000",fontSize:scale(12),textAlign:"center",top:scale(10),fontWeight:"600",}}>Selfie</Text>


</View>


<View 
>
  

</View>

</View>
</TouchableOpacity>

</View>
<View style={{
   height:moderateScale(240),
   width:"100%", 
   justifyContent:"center",
  }}>
<View style={{
   height:moderateScale(230),
   width:"90%", 
    marginLeft:scale(20),
   borderWidth:1,
   borderColor:"#C8C8C8",
   borderRadius:scale(12)

 }}>
 <View style={{height: moderateScale(80),
 width:'100%',
   flexDirection:"row",
    justifyContent:"center",
        marginTop:scale(15),
        
 
  
   }}>


 <View style={{height: moderateScale(50),
 width:'80%',
     borderWidth:1,
   borderColor:"#0C7EFA",
   borderRadius:10,

 
   }}>

<TextInput


style={{ marginLeft:moderateScale(50),
  height: moderateScale(50),
fontSize:scale(12),
color:"black"
}}

placeholder='Adhar Crad Number


'
placeholderTextColor={'#7E7E7E'}
value={Adhar}
maxLength={12}
//onChange={setAdhar}
onChangeText={(text) => setAdhar(text)}
keyboardType="decimal-pad"
/>


</View>

</View>
 <View style={{height: moderateScale(120),
 width:'100%',
   flexDirection:"row",
 
     
   }}>

<TouchableOpacity onPress={() => upload_image_new(2)} style={{height: moderateScale(120),
 width:'28%',
     borderWidth:1,
   borderColor:"#E8E8E8",
   borderRadius:8,
       backgroundColor:"#E8E8E8",
       marginLeft:scale(24)


 
   }}>
 <View>
<View style={{height: moderateScale(48),
 width:20,
   flexDirection:"row",
    
   
        justifyContent:"center",
              alignItems:"center",marginLeft:moderateScale(40),
   }}>

   

<TouchableOpacity style={{color:"black",fontSize:scale(27),textAlign:"center",}} onPress={() => upload_image_new(2)}>
<Image
   style={{height:25,width:28,'display': adhar_front.doc_url === '' ?  'flex' : 'none'}}
   source={image.camera}
   />
</TouchableOpacity>
<TouchableOpacity onPress={() => upload_image_new(2)}>
<Image
   style={{height: moderateScale(100),width:100,marginTop:30,marginLeft:-3,'display': adhar_front.doc_url === '' ?  'none' : 'flex'}}
   source={{
    uri: adhar_front.doc_url,
  }}
   />
   </TouchableOpacity>
 
 </View>
<View style={{height: moderateScale(20),
 width:60,
   
    borderWidth:1,
   borderColor:"#E8E8E8",
   borderRadius:3,
        justifyContent:"center",
       alignItems:"center",marginLeft:moderateScale(20),
 
top:scale(5),

'display': adhar_front.doc_url === '' ?  'flex' : 'none'
 
   }}>
 
<Text style={{color:"#000000",fontSize:scale(12),textAlign:"center",top:scale(8),fontWeight:"600",width:80}}>Adhar Card</Text>
<Text style={{color:"#000000",fontSize:scale(12),textAlign:"center",top:scale(10),fontWeight:"600",marginLeft:3}}>Front </Text>


</View>
 
 

</View>
</TouchableOpacity>
<TouchableOpacity style={{height: moderateScale(120),
 width:'27%',
     borderWidth:1,
   borderColor:"#E8E8E8",
   borderRadius:8,
       backgroundColor:"#E8E8E8",
       marginLeft:scale(24)


 
   }} onPress={() => upload_image_new(3)}>
 <View >
<View style={{height: moderateScale(48),
 width:20,
   flexDirection:"row",
    
   
        justifyContent:"center",
              alignItems:"center",marginLeft:moderateScale(40),



 
 
   }}>
<TouchableOpacity style={{color:"black",fontSize:scale(27),textAlign:"center",}} onPress={() => upload_image_new(3)}>
   <Image
   style={{height:25,width:28,'display': adhar_back.doc_url === '' ?  'flex' : 'none'}}
   source={image.camera}
   />

<Image
   style={{height: moderateScale(100),width:100,marginTop:30,marginLeft:-3,'display': adhar_back.doc_url === '' ?  'none' : 'flex'}}
   source={{
    uri: adhar_back.doc_url,
  }}
   />
  </TouchableOpacity>
 
 </View>
<View style={{height: moderateScale(20),
 width:60,
   
    borderColor:"#E8E8E8",
         justifyContent:"center",
       alignItems:"center",marginLeft:moderateScale(14),
 
top:scale(5),
'display': adhar_back.doc_url === '' ?  'flex' : 'none'
  
 
   }}>
 
<Text style={{color:"#000000",fontSize:scale(12),textAlign:"center",top:scale(8),fontWeight:"600",width:70,marginLeft:8}}>Adhar card</Text>
<Text style={{color:"#000000",fontSize:scale(12),textAlign:"center",top:scale(10),fontWeight:"600", }}>Back </Text>


</View>
 

</View>
</TouchableOpacity>

</View>

</View>


</View>


<View style={{
   height:moderateScale(240),
   width:"100%", 
   justifyContent:"center",
  }}>
<View style={{
   height:moderateScale(230),
   width:"90%", 
    marginLeft:scale(20),
   borderWidth:1,
   borderColor:"#C8C8C8",
      borderRadius:scale(12)


 }}>
 <View style={{height: moderateScale(80),
 width:'100%',
   flexDirection:"row",
    justifyContent:"center",
        marginTop:scale(15),
        
 
  
   }}>


 <View style={{height: moderateScale(50),
 width:'80%',
     borderWidth:1,
   borderColor:"#0C7EFA",
   borderRadius:10,

 
   }}>

<TextInput


style={{ marginLeft:moderateScale(30),
  height: moderateScale(50),
fontSize:scale(12),
color:"black"
}}

placeholder='PAN Card Number



'
value={pan}
onChangeText={(text) => setpan(text)}
maxLength={10}

placeholderTextColor={'#7E7E7E'}

// keyboardType="decimal-pad"
/>


</View>

</View>
<TouchableOpacity onPress={() => upload_image_new(4)}>
 <View style={{height: moderateScale(120),
 width:'100%',
   flexDirection:"row",
 
     
   }}>


 <View style={{height: moderateScale(120),
 width:'27%',
     borderWidth:1,
   borderColor:"#E8E8E8",
   borderRadius:8,
       backgroundColor:"#E8E8E8",
       marginLeft:scale(24)


 
   }}>
<View style={{height: moderateScale(48),
 width:24,
   flexDirection:"row",
    
   
        justifyContent:"center",
              alignItems:"center",marginLeft:moderateScale(40),



 
 
   }}>
<TouchableOpacity style={{color:"black",fontSize:scale(27),textAlign:"center",}} onPress={() => upload_image_new(4)}>
   <Image
   style={{height:25,width:28,'display': pencard.doc_url === '' ?  'flex' : 'none'}}
   source={image.camera}
   />

<Image
   style={{height: moderateScale(100),width:100,marginTop:30,marginLeft:-3,'display': pencard.doc_url === '' ?  'none' : 'flex'}}
   source={{
    uri: pencard.doc_url,
  }}
   />
</TouchableOpacity>
 
 </View>
 
<View style={{height: moderateScale(20),
 width:60,
   
    borderWidth:1,
   borderColor:"#E8E8E8",
   borderRadius:3,
        justifyContent:"center",
       alignItems:"center",marginLeft:moderateScale(27),
 
top:scale(5),
'display': pencard.doc_url === '' ?  'flex' : 'none'
  
 
   }}>
 
<Text style={{color:"#000000",fontSize:scale(12),textAlign:"center",top:scale(8),fontWeight:"600"}}>Pan Card</Text>
<Text style={{color:"#000000",fontSize:scale(12),textAlign:"center",top:scale(10),fontWeight:"600",marginLeft:3}}>Front </Text>


</View>
 

</View>
 
</View>
</TouchableOpacity>
</View>


</View>



 
   
<Text>{form_error.name_error}</Text>

 <View style={{height: moderateScale(60),
 width:'100%',
   flexDirection:"row",
    justifyContent:"center",
    marginTop:15
 
   }}>


 
<TouchableOpacity      


 
style={{height: moderateScale(50),
 width:'80%',
   flexDirection:"column",
    marginTop:moderateScale(5),
   justifyContent:"center",
  //  borderWidth:1,
  //  borderColor:"#0C7EFA",
   borderRadius:10,backgroundColor:"#0C7EFA"

 
   



}} 

        // onPress={() => navigation.navigate('Registration')}

        onPress={onSubmitForm}

    >
 <Text style={{textAlign:"center",fontSize:scale(16),marginLeft:moderateScale(15),color:"white"}}>
 
 
Register
 </Text>
 </TouchableOpacity>

 
</View>

 


</ScrollView>
 </View>


 
 
   
 

   );
}

export default Documents;
