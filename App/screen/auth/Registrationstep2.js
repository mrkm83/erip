import  React,{useState} from 'react';
import { View, Text,Image, TextInput,Button, TouchableOpacity,ScrollView} from 'react-native';
import image from '../../aasets/index';
import DropDownPicker from 'react-native-dropdown-picker';
  import { scale, verticalScale, moderateScale } from 'react-native-size-matters-ch';
import HeaderResitison from '../../Compoent/HeaderResitison'
import SyncStorage from 'sync-storage';
const  Registrationstep2=({navigation})=> {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Father', value: 'father'},
        {label: 'Sister', value: 'Sister'},
          {label: 'Mother', value: 'Mother'},
        {label: 'Brother', value: 'brother'},
        {label: 'Other', value: 'Other'},
  
  
  ]);

  const [c_name,setc_name]= useState('');
  const [c_num,setc_num]= useState('');


  const [form_error, setForm] = React.useState({
    name_error :'',
    

});
 

  const onSubmitForm = e =>{

    e.preventDefault();
    let partner_id = SyncStorage.get('partnel_id');

    if(c_name==''){
      const nextFormState = {
        ...form_error,
        name_error: 'please enter Emergency Contact Name',
       
      };
      setForm(nextFormState);


    }else if(c_num==''){
      const nextFormState = {
        ...form_error,
        name_error: 'please enter Contact Number',
       
      };
      setForm(nextFormState);

    }else if(value==null){
      const nextFormState = {
        ...form_error,
        name_error: 'please Select relation',
       
      };
      setForm(nextFormState);

    }else{

// alert(value);
      const nextFormState = {
        ...form_error,
        name_error: '',
       
      };
      setForm(nextFormState);

      fetch('http://43.204.87.153/api/v1/partners/register_emergenacy_details', {
        method: 'POST',
                  body: JSON.stringify({
                    partner_id: partner_id,
                    ed_name:c_name,
                    ed_mobile:c_num,
                    ed_relationship:value,
                    
                    
                      }), //post body
                  headers: {
                      Accept: 'application/json',
                      'Content-Type': 'application/json',
                  },

      }).then((response) => response.json())
      .then((responseJson) => {

        // alert(responseJson);
      //  consol.warm(responseJson);
      // console.warn(responseJson.success);
      if(responseJson.success==true){
        navigation.navigate('ApplictionScreen', { });

      }

      }).catch((error) => {
        //Error 
        console.error(error);
    });


      // navigation.navigate('ApplictionScreen', { });

    }

    

   
  }
  
  return (
   <View  style={{flex:1,flexDirection:"column",backgroundColor:"white" }}>
     
<HeaderResitison   name="Step 2/3"/>
<ScrollView   style={{flex:1,}}>

 <View style={{height: moderateScale(54),
 width:'100%',
   flexDirection:"row",
    justifyContent:"center",
    padding:moderateScale(16)
    ,
 
  
   }}>
      <Text style={{color:"#000000",fontSize:scale(15),textAlign:"center",fontWeight:"600"}}>Enter your Emergency Details
</Text>

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

fontSize:scale(12)
}}

placeholder=' Emergency Contact Name'
placeholderTextColor={'#7E7E7E'}
keyboardAppearanc='red'
value={c_name}
onChangeText={(text) => setc_name(text)}

 />


</View>

</View>
 

    <View style={{
        alignItems: 'center',
      justifyContent: 'center',
       height:moderateScale(50),
       width:"90%",
        marginLeft:moderateScale(20),
        zIndex: 1,
      borderColor:"#0C7EFA",
      borderRadius:10
    }}>
 <DropDownPicker
      open={open}
              onChangeItem={(item) => console.log(item.label, item.value)}

      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      dropDownDirection="bottom"
      closeOnBackPressed={true}
       itemKey="value"
      closeAfterSelecting={true}
      borderColor='red'
      borderWidth={1}
extendableBadgeContainer={false}
placeholder="Relationship"
itemSeparator={true}
listMode="SCROLLVIEW"
 scrollViewProps={{
  decelerationRate: "fast"
}}
  
      dropDownContainerStyle={{
   maxHeight:300,
  borderColor:"#0C7EFA",
  borderWidth:2,
   
  }}
  modalTitleStyle={{
  fontWeight: "bold",
  color:"red",
  fontSize:29,
}}

style={{


  height:30,
 }}
    />
        </View>
 <View style={{height: moderateScale(73),
 width:'100%',
   flexDirection:"row",
    justifyContent:"center",
    marginTop:scale(17)
  
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

placeholder='Contact Number'
placeholderTextColor={'#7E7E7E'}
keyboardType={"decimal-pad"}
value={c_num}
onChangeText={(text) => setc_num(text)}
 />


</View>
</View>
<Text>{form_error.name_error}</Text>
  <View style={{height: moderateScale(230),
 width:'100%',
   flexDirection:"row",
    justifyContent:"center",
    marginTop:10,
 
 
   }}>

<TouchableOpacity      


 
style={{height: moderateScale(50),
 width:'80%',
   flexDirection:"column",
    marginTop:moderateScale(5),
   justifyContent:"center",
  //  borderWidth:1,
  //  borderColor:"#0C7EFA",
   borderRadius:10,backgroundColor:"#C4C4C4",
   marginTop:scale(120),
   backgroundColor: '#0C7EFA'

 
   



}} 

        // onPress={() => navigation.navigate('ApplictionScreen')}
        onPress={onSubmitForm}
    >
 <Text style={{textAlign:"center",fontSize:scale(16),marginLeft:moderateScale(15),color:"white"}}>
 
 


NEXT
 </Text>
 </TouchableOpacity>

 
</View>


</ScrollView>
 </View>


 
 
   
 

   );
}

export default Registrationstep2;


