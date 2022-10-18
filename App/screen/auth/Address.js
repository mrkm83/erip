import  React,{useState} from 'react';
import { View, Text,Image, TextInput,Button, TouchableOpacity,ScrollView} from 'react-native';
import image from '../../aasets/index';
import DropDownPicker from 'react-native-dropdown-picker';

  import { scale, verticalScale, moderateScale } from 'react-native-size-matters-ch';

  import SyncStorage from 'sync-storage';
 
import HeaderResitison from '../../Compoent/HeaderResitison'
import Geocoder from 'react-native-geocoding';



const  Address=({navigation})=> {


  
  Geocoder.init("AIzaSyCbbtMC73_MlNh1njcV2srrgNiPT6kSQqg",{language : "en"}); 


  const [house,sethous]=useState('');
    const [Addhress,setAdheress]=useState("");
        const [Addhress2,setAdheress2]=useState();

      const [Landmark,setlandamark]=useState("")

      const [pincode,setpincode]=useState('');

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  // const [items, setItems] = useState([
  //   {label: 'United Sates', value: 'father'},
  //       {label: 'Bangladesh', value: 'Sister'},
  //         {label: 'India', value: 'Mother'},
  //       {label: 'Australia', value: 'brother'},
  
  
  // ]);
    const [open1, setOpen1] = useState(false);
  const [value1, setValue1] = useState("");
  const [items1, setItems1] = useState([]);
  //   // {label: 'Uttar Pradesh', value: 'father'},
  //   //     {label: 'Himachal Pradesh', value: 'Sister'},
       
  
  // ]);
  const [open2, setOpen2] = useState(false);
  const [value2, setValue2] = useState(null);
  const [items2, setItems2] = useState([]);
  //   {label: 'Kolkata', value: 'father'},
  //       {label: 'Delhi', value: 'Sister'},
          
  
  // ]);

  // const [datacountry, setcountryData] = useState([]);
  const [items, setItems] = useState([]);


  const fetchcountry = async () => {
    const resp = await fetch("http://43.204.87.153/api/v1/countries");
    const data = await resp.json();
      //  console.warn(data.data)
      setItems(data.data);
    // setLoading(false);
  };
 
  // console.warn(setItems)
  const bgcountry= items.map(
    ({ loc_country_id,loc_country_title }) => ({
        label: loc_country_title,
        value: loc_country_id,
     })
  );


  



  const fetchstate = async (id) => {
    const resp = await fetch("http://43.204.87.153/api/v1/states_by_country?country="+id+"");
    const data = await resp.json();
      //  console.warn(data.data)
      setItems1(data.data);
    // setLoading(false);
  };
// console.warm(items1);
  const bgstate= items1.map(
    ({ loc_state_id,loc_state_title }) => ({
        label: loc_state_title,
        value: loc_state_id,
     })
  );


  
  // onCountryOpen

const select_state = () =>{
  // e.preventDefault();
  
 
  if(value==''){

  }else{
    alert(value);
    //  alert("sdd");
    // alert(value);

    // fetchstate(value);
   
      // setItems(data.data);
    // setLoading(false);




  }

}


const select_city = () =>{
  // alert("sdsd");
  if(value1==''){

  }else{
      //  alert(value1)

  }
}

const fetchcity = async () => {
  const resp = await fetch("http://43.204.87.153/api/v1/cities_by_state?state=1");
  const data = await resp.json();
      // console.warn(data.data)
      setItems2(data.data);
  // setLoading(false);
};


const bgcity= items2.map(
  ({ loc_city_id,loc_city_title }) => ({
      label: loc_city_title,
      value: loc_city_id,
   })
);



  React.useEffect(() => {
    fetchcountry();
    fetchcity();
    fetchstate(1);
   
  }, []);

  const [form_error, setForm] = React.useState({
    house_number :'',
    

});

  const onSubmitForm = e =>{

    Geocoder.from(' 139/2 Sri Manjunath Residency Hanumantham Main road Bescom road, Tatanagar, Kodigehalli, Bengaluru, Karnataka 560092')
  .then(json => {
    var location = json.results[0].geometry.location;
    console.warn(location);
    // alert(location)
    
  })
  .catch(error => console.warn(error));

  

    let partner_id = SyncStorage.get('partnel_id');
    
  //  alert(partner_id);
   
    //  alert("workng");
    e.preventDefault();

    const nextFormState = {
      ...form_error,
      house_number: '',
      
    };
    setForm(nextFormState);


    if(house==''){

      const nextFormState = {
        ...form_error,
        house_number: 'please enter House number',
        
      };
      setForm(nextFormState);

    }else{
      // console.warn(Landmark);

      fetch('http://43.204.87.153/api/v1/partners/register_address', {
        method: 'POST',
        body: JSON.stringify({

          partner_id:partner_id,
          number:house,
          address_line_1:Addhress,
          address_line_2:Addhress2,
          landmark:Landmark,
          country_id:value,
          state_id:value1,
          city_id:value2,
          pincode_id:pincode,
          longitude:'13.232323',
          latitude:'72.232323'



        }), //post body
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },


      }).then((response) => response.json())
      .then((responseJson) => {
        // alert(responseJson.success);
        console.warn(responseJson.message);
        if(responseJson.success==true){
          navigation.navigate('Documents', { });
          // navigation.push('Documents')
        }else{

        }


      }).catch((error) => {
        //Error 
        console.error(error);
    });


      
    }

  }
 
  
  return (
   <View  style={{flex:1,flexDirection:"column",backgroundColor:"white" }}>
     
<HeaderResitison   name="Step 2/3"/>
<ScrollView   style={{flex:1,backgroundColor:"white"}}>

 <View style={{height: moderateScale(68),
 width:'100%',
   flexDirection:"row",
    justifyContent:"center",
    padding:moderateScale(16)
    ,
   
   }}>
      <Text style={{color:"#000000",fontSize:scale(15),textAlign:"center",fontWeight:"600"}}>
      
      
Enter your professional details
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

fontSize:scale(12),
color:"black"
}}

placeholder='House Number



'
placeholderTextColor={'#7E7E7E'}
value={house}
onChange={sethous}
keyboardType={'decimal-pad'}
onChangeText={(text) => sethous(text)}
 
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

placeholder='Address Line 1



'
placeholderTextColor={'#7E7E7E'}
value={Addhress}
onChange={setAdheress}
onChangeText={(text) => setAdheress(text)}
 
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

placeholder='Address Line 2



'
placeholderTextColor={'#7E7E7E'}
value={Addhress2}
onChangeText={(text) => setAdheress2(text)}
 
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
    marginTop:moderateScale(15),
   justifyContent:"center",
   borderWidth:1,
   borderColor:"#F9623B",
   borderRadius:10

 
   }}>

<TextInput


style={{marginLeft:moderateScale(20),

fontSize:scale(12),
color:"black"
}}
placeholder=' Landmark'
placeholderTextColor={'#7E7E7E'}


value={Landmark}
onChangeText={(text) => setlandamark(text)}
  />
</View>
</View>
    <View style={{
        alignItems: 'center',
      justifyContent: 'center',
       height:moderateScale(50),
       width:"90%",
        marginLeft:moderateScale(20),
        zIndex: 8,
      borderColor:"#0C7EFA",
      borderRadius:10
    }}>
 <DropDownPicker
      open={open}
 
 
//  onChange={value => select_state(value)}
    // onValueChange = {select_state()}
   // onValueChange={(itemValue, itemIndex) => select_state(itemValue)}
   //onChange={(e) => select_state(e,index)}
      value={value}
      items={bgcountry}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      dropDownDirection="bottom"
      closeOnBackPressed={true}
       itemKey="value"
      closeAfterSelecting={true}
       borderWidth={1}
extendableBadgeContainer={false}
placeholder="Country"
 
itemSeparator={true}
// onValueChange={select_state()}
 
// onOpen={onCountryOpen}


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


            <View style={{
        alignItems: 'center',
      justifyContent: 'center',
        width:"90%",
        marginLeft:moderateScale(20),
        zIndex: 2,
      borderColor:"#0C7EFA",
      borderRadius:10,
      marginTop:scale(27),
      zIndex:4,
    
    }}>
 <DropDownPicker
      open={open1}
      // onChangeItem={select_city()}

      value={value1}
      items={bgstate}
      setOpen={setOpen1}
      setValue={setValue1}
      setItems={setItems1}
      dropDownDirection="bottom"
      closeOnBackPressed={true}
       itemKey="value"
      closeAfterSelecting={true}
      borderColor='red'
      borderWidth={1}
extendableBadgeContainer={false}
placeholder="State"
 
itemSeparator={true}
 


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
 <View style={{height: moderateScale(120),
 width:'100%',
   flexDirection:"row",
    justifyContent:"center",
    marginTop:scale(18),
    
   }}>
    <View style={{zIndex:1,
 width:'40%',
      marginTop:scale(17),
      marginLeft:scale(-18)
   
   }}>
    <DropDownPicker
      open={open2}
              // onChangeItem={select_city()}
      value={value2}
      items={bgcity}
      setOpen={setOpen2}
      setValue={setValue2}
      setItems={setItems2}
      dropDownDirection="bottom"
      closeOnBackPressed={true}
       itemKey="value"
      closeAfterSelecting={true}
       borderWidth={1}
extendableBadgeContainer={false}
placeholder="City
"
itemSeparator={true}
 scrollViewProps={{
  decelerationRate: "fast"
}}
      dropDownContainerStyle={{
   maxHeight:400,
  borderColor:"#0C7EFA",
  borderWidth:2,
  }}
  modalTitleStyle={{
  fontWeight: "bold",
  color:"red",
  fontSize:29,
}}

 
    />
   
   </View>

 <View style={{height: moderateScale(50),
 width:'30%',
   flexDirection:"column",
    marginTop:moderateScale(15),
   justifyContent:"center",
   borderWidth:1,
   borderColor:"#0C7EFA",
   borderRadius:10,
    marginLeft:scale(50)

 
   }}>

<TextInput


style={{marginLeft:moderateScale(20),

fontSize:scale(12),
color:"black"
}}
placeholder='Pin code'
placeholderTextColor={'#7E7E7E'}
keyboardAppearanc='red'
value={pincode}
onChangeText={(text) => setpincode(text)}



 />
</View>
 
</View>
 

 


<View style={{height: moderateScale(73),
 width:'100%',
   flexDirection:"row",
    justifyContent:"center",
  
   }}>


 <View style={{height: moderateScale(50),
 width:'100%',
   flexDirection:"column",
    marginTop:moderateScale(8),
   justifyContent:"center",
    borderRadius:10,
  
   }}>

<Text>{form_error.house_number}</Text>
 <TouchableOpacity      


 
style={{height: moderateScale(50),
 width:'90%',
   flexDirection:"column",
    marginTop:moderateScale(5),
   justifyContent:"center",
   borderWidth:1,
   borderColor:"#C4C4C4",
   borderRadius:10,backgroundColor: '#0C7EFA',
   marginLeft:moderateScale(20)

 
   



}} 

            // onPress={() => navigation.push('Documents')}

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

export default Address;
