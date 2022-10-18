 import React, { useState,useEffect,Component } from 'react';
import { ScrollView, View, Image, Text, TextInput, TouchableOpacity,ProgressBarAndroid,FlatList ,Button} from "react-native";

  import { scale, verticalScale, moderateScale } from 'react-native-size-matters-ch';
  import  {CheckBox}  from 'react-native-paper';
  import image from '../../aasets/index'
  
   import SyncStorage from 'sync-storage';
import DropDownPicker from 'react-native-dropdown-picker';

import DateTimePicker from '@react-native-community/datetimepicker';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import DateObject from "react-date-object";







import HeaderResitison from '../../Compoent/HeaderResitison'
  const RegisterationOneww = ({navigation}) => {
    // const [date, setDate] = React.useState();
    let datenew = moment().toDate();
    // const [datePicker, setDatePicker] = useState(false);
    // const [date, setDate] = useState(datenew);
    // const [mode, setMode] = useState('date');

    const [date, setDate] = useState(datenew);
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);


    
    
    const [Name, onChangeName] = React.useState(null);
    const [Email, onChangeEmail] = useState("");
    const [Numder, onChangeNumber] = React.useState("");
    const [Date, onChangeDate] = React.useState(null);
    const [Male, setMale] = React.useState(false);
    const [Female, setFemale] = React.useState(false);
    const [Others, setOthers] = React.useState(false);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [bgroup, setBgroup] = useState([]);
    const [dobval, setdobval] = useState(0);
    // const [items, setItems] = useState([
    //     { label: 'O (+) Positive', value: 'O (+) Positive' },
    //     { label: 'O (-) Negative', value: 'O (-) Negative' },
    //     { label: 'A (+) Positive', value: 'A (+) Positive' },
    //     { label: 'A (-) Negative', value: 'A (-) Negative' },
    // ]);
    const [open2, setOpen2] = useState(false);
    const [value2, setValue2] = useState(null);
    const [items2, setItems2] = useState([
        { label: 'Mobile', value: 'Mobile' },
        { label: 'Tablet', value: 'Tablet' },
        { label: 'Laptop', value: 'Laptop' },
        { label: 'Smart Watch', value: 'Smart Watch' },
    ]);
    const [open3, setOpen3] = useState(false);
    const [value3, setValue3] = useState(null);
    const [items3, setItems3] = useState([
        { label: '0 - 1 Year', value: '0 - 1 Year' },
        { label: '1 - 2 Years', value: '1 - 2 Years' },
        { label: '2 - 3 Years', value: '2 - 3 Years' },
        { label: '3 - 4 Years', value: '3 - 4 Years' },
    ]);

    const [datagendar, setgendarData] = useState([]);
    const [datacata, setcatarData] = useState([]);

   

    

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(false);
        setDate(currentDate);
        setdobval(1);
      
      };
    
      const showMode = (currentMode) => {
        
         setShow(true);
        setMode(currentMode);
        // alert(currentMode);
      };
    
      const showDatepicker = () => {
        showMode('date');
      };
    
      





   

    const fetchData = async () => {
        const resp = await fetch("http://43.204.87.153/api/v1/blood_groups");
        const data = await resp.json();
        //  console.warn(data.data)
        setBgroup(data.data);
        // setLoading(false);
      };

      const bgnewgroup = bgroup.map(
        ({ blood_group_id,blood_group_title }) => ({
            label: blood_group_title,
            value: blood_group_id,
         })
      );



      const fetchgender = async () => {

        const resp = await fetch("http://43.204.87.153/api/v1/genders");
        const data = await resp.json();
        //   console.warn(data.data)
          setgendarData(data.data);

      }


      const fetchcata = async () => {

        const resp = await fetch("http://43.204.87.153/api/v1/categories_by_cities?city=1");
        const data = await resp.json();
        //  console.warn(data.data)
        setcatarData(data.data);

      }


      const newcataarray = datacata.map(
        ({ category_id,category_title }) => ({
            label: category_title,
            value: category_id,
         })
      );



    //   console.warn(bgnewgroup);
      React.useEffect(() => {
        fetchData();
        fetchgender();
        fetchcata();
       
      }, []);

    //  console.warn(datagendar);

    const [newstatus, setnewstatus] = useState(1);

    const Itemgender = ({ item }) => (
        <View style={{ width: '33%', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', }}>
            
            <TouchableOpacity style={{ width:20,height:20,borderColor:'black',borderWidth: 1,marginRight:3}} onPress={()=>setnewstatus(item.gender_id)}>

          
<View style={{'display': item.gender_id === newstatus ?  'flex' : 'none'}}>
            <Image 
   style={{height:15,width:15}}
   source={image.tick}
   
   />
   </View>

   {/* {{'display': item.gender_id === newstatus ?  'inline' : 'none'}} */}
          
            </TouchableOpacity>

           

       
                                       <Text style={{ fontSize: scale(13), color: 'black' ,flexDirection: 'row'}}>{item.gender_title}</Text>
                                       
                                       </View>
                              

        
      );
      const [name, setName] = useState("");
     
      
    //    const today = '2016-01-04 10:34:23';
       

      const [form_error, setForm] = React.useState({
          name_error :'',
          email_error : '',
          mobile_error:'',

     });

//      const select_gender = (id) => {
//         setnewstatus('');
//         // alert(id);
// // let newstatus = id;
//  setnewstatus(id);
//  setTimeout(function(){
//     // alert(newstatus);
//  }, 1000)

 
//      }

    


      const onSubmitForm = e => {
        //   alert(newstatus);
        // var date = "2016-01-04 10:34:23";
                // alert(value3);
        e.preventDefault();
        if(name==''){
            const nextFormState = {
                ...form_error,
                name_error: 'please enter Your name',
                email_error: '',
                mobile_error:'',
              };
              setForm(nextFormState);

        }else if((Email=='')){
            const nextFormState = {
                ...form_error,
                name_error:'',
                email_error: 'please enter Your Email',
                mobile_error:'',
              };
              setForm(nextFormState);

        }else if(Numder==''){
            const nextFormState = {
                ...form_error,
                name_error:'',
                email_error: '',
                mobile_error:'please enter Your Mobile number',
              };
              setForm(nextFormState);

        }else{


            const nextFormState = {
                ...form_error,
                name_error:'',
                email_error: '',
                mobile_error: ''
              };
              setForm(nextFormState);
           
           
             SyncStorage.set('full_name', name);
             SyncStorage.set('email', Email);
             SyncStorage.set('mobile', Numder);
             SyncStorage.set('dob', date);
             SyncStorage.set('blod_group',value);
             SyncStorage.set('category',value2);
             SyncStorage.set('category_experiance',value3);
             SyncStorage.set('gender',newstatus);



             fetch('http://43.204.87.153/api/v1/partners/check_registration_status', {
                method: 'POST',
                body: JSON.stringify({
                    mobile: Numder,
                    }), //post body
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                //Request Type 
            }).then((response) => response.json())
            .then((responseJson) => {
                //  alert(responseJson.success);
                    if(responseJson.success==false){


                        fetch('http://43.204.87.153/api/v1/partners/send_registration_otp', {
                method: 'POST',
                body: JSON.stringify({
                    mobile: Numder,
                    }), //post body
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                //Request Type 
            }).then((response) => response.json())
            .then((responseJson) => {

               

                  if(responseJson.success==true){
                    navigation.navigate('RegistrationVerfiction', { });
                  }else{
                    navigation.navigate('RegistrationVerfiction', { });
                    // navigation.navigate('RegistrationVerfiction', { });
                  }




                        // 
                    }).catch((error) => {
                        //Error 
                        console.error(error);
                    });    

                    }else{

                    //    alert(responseJson.registration_steps);
                        SyncStorage.set('partnel_id', responseJson.partner_id);
                        if(responseJson.registration_steps==1){

                           
                            //  alert(responseJson.partner_id)
                             navigation.navigate('Address', { });

                        }else if(responseJson.registration_steps==2){
                            navigation.navigate('Documents', { });

                        }else if(responseJson.registration_steps==3){
                            navigation.navigate('Registration', { });
                        }else if(responseJson.registration_steps==4){
                            navigation.navigate('Registrationstep2', { });
                        }else if(responseJson.registration_steps==5){
                            navigation.navigate('ApplictionScreen', { });
                        }
                       


                    }
                      

            }).catch((error) => {
                //Error 
                console.error(error);
            });


        }


      }


    
      
     
      
     

    return (
        <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'white', }}>
 <HeaderResitison   name="Step 1/3"/>
            <ScrollView>
                <View style={{ alignItems: 'center', flexDirection: 'column' }}>

                    <View style={{ height: moderateScale(50), width: '100%', alignItems: 'center', justifyContent: 'center', marginBottom: moderateScale(10) }}>
                        <Text style={{ fontSize: scale(18), color: 'black' }}>Enter your personal details</Text>
                    </View>
                    <View style={{ height: moderateScale(460), width: '100%', alignItems: 'center', }}>
                        <View style={{ height: moderateScale(60), width: '100%', alignItems: 'center', justifyContent: "center" }}>
                        
                        

                            <TextInput
                                style={{

                                    height: moderateScale(50),
                                    width: '90%',
                                    borderRadius: 10,
                                    fontSize: scale(16),
                                    borderWidth: 1,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    paddingLeft: 30,
                                    borderColor: '#0C7EFA'

                                }}
                                onChangeText={onChangeName}
                                value={name}
                                placeholder="Enter Your Name"
                                keyboardType="default"
                                placeholderTextColor={"grey"}
                                onChangeText={(text) => setName(text)}
                            />
                            <Text>{form_error.name_error}</Text>
                        </View>
                        <View style={{ height: moderateScale(60),marginTop:scale(15),  width: '100%', alignItems: 'center', justifyContent: "center" }}>

                            <TextInput
                                style={{

                                    height: moderateScale(50),
                                    width: '90%',
                                    borderRadius: 10,
                                    fontSize: scale(16),
                                    borderWidth: 1,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    paddingLeft: 30,
                                    borderColor: '#0C7EFA'

                                }}
                                
                                value={Email}
                                placeholder="Email Address"
                                keyboardType="default"
                                placeholderTextColor={"grey"}
                                onChangeText={(text) =>onChangeEmail(text)}
                            />
                        </View>
                        <Text> {form_error.email_error}</Text>
                        <View style={{ height: moderateScale(60),marginTop:scale(15),  width: '100%', alignItems: 'center', justifyContent: "center" }} >

                            <TextInput
                                style={{

                                    height: moderateScale(50),
                                    width: '90%',
                                    borderRadius: 10,
                                    fontSize: scale(16),
                                    borderWidth: 1,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    paddingLeft: 20,
                                    borderColor: '#0C7EFA',
 
                                }}
                                onChangeText={(text) => onChangeNumber(text)}
                                value={Numder}
                                placeholder="Phone Number"
                                keyboardType="numeric"

                                placeholderTextColor={"#7E7E7E"}
                                //  
                            />
                        </View>
                        <Text>{form_error.mobile_error}</Text>
                        <TouchableOpacity onPress={()=>showDatepicker()} style={{ height: moderateScale(50),marginTop:scale(7),paddingLeft:scale(17), width: '90%', justifyContent: "center",textAlign: 'right',borderWidth: 1,borderRadius: 10,borderColor: '#0C7EFA', }}>
                        <View  onPress={showDatepicker}>
                        
                          
                             <Text>{ dobval==0 ? 'DOB' : date.toLocaleString()}</Text>
                            
                             
                            {/* <TextInput
                                style={{

                                    height: moderateScale(50),
                                    width: '90%',
                                    borderRadius: 10,
                                    fontSize: scale(16),
                                    borderWidth: 1,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    paddingLeft: 30,
                                    borderColor: '#0C7EFA'

                                }}
                                onChangeText={showDatepicker}
                                value={date.toLocaleString()}
                                placeholder="Date of Birth"
                                keyboardType="default"
                                placeholderTextColor={'grey'}
                                onPress={showDatepicker}
                            /> */}
                            
                        </View>
                        </TouchableOpacity>
                        <View style={{ zIndex:8, marginTop:scale(15), width: '100%', alignItems: 'center', justifyContent: 'center' }}>

                            <DropDownPicker
                                open={open}
                                value={value}
                                items={bgnewgroup}
                                //  zIndex={1000}
                                 dropDownDirection="BOTTOM"
                                placeholder="Select Blood Group"
                                disableBorderRadius={false}

                                containerStyle={{

                                    height: moderateScale(50),
                                    width: '90%',
                                    borderRadius: 10,
                                     zIndex:2,

                                    // borderWidth: 2,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderColor: '#0C7EFA'
                                }}
                                textStyle={{
                                    fontSize: scale(15),
                                    paddingLeft: 20,
                                    color: 'grey'
                                }}


                                setOpen={setOpen}
                                setValue={setValue}
                                setItems={setBgroup}

                            />
                        </View>


                       
                        


                        <View style={{ height: moderateScale(50), width: '100%', alignItems: 'center', flexDirection: 'row', }}>
                        <View style={{  width: '100%', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', }}>  
                        <FlatList
            data={datagendar}
            renderItem={Itemgender}
            numColumns={3}
            keyExtractor={(item) => item.gender_id}
          />
                            
                         </View>   
                        
                            
                            


                        </View>
                        <View style={{ zIndex:6,marginTop:scale(15), width: '100%', alignItems: 'center', justifyContent: 'center' }}>

                            <DropDownPicker
                                open={open2}
                                value={value2}
                                items={newcataarray}
                                zIndex={1000}
                                dropDownDirection="BOTTOM"
                                placeholder="Select Categary"
                                disableBorderRadius={false}

                                containerStyle={{

                                    height: moderateScale(50),
                                    width: '90%',
                                    borderRadius: 10,
                                    zIndex:3,

                                    // borderWidth: 1,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderColor: '#0C7EFA'
                                }}
                                textStyle={{
                                    fontSize: scale(15),
                                    paddingLeft: 20,
                                    color: 'grey'
                                }}


                                setOpen={setOpen2}
                                setValue={setValue2}
                                setItems={setcatarData}
                            />
                        </View>
                        <View style={{ zIndex:3,marginTop:scale(18), width: '100%', alignItems: 'center', justifyContent: 'center' }}>

                            <DropDownPicker
                                open={open3}
                                value={value3}
                                items={items3}
                                zIndex={1000}
                                dropDownDirection="BOTTOM"
                                placeholder="Work Experience"
                                disableBorderRadius={false}

                                containerStyle={{

                                    height: moderateScale(50),
                                    width: '90%',
                                    borderRadius: 10,

                                    // borderWidth: 2,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderColor: '#0C7EFA'
                                }}
                                textStyle={{
                                    fontSize: scale(15),
                                    paddingLeft: 20,
                                    color: 'grey'
                                }}


                                setOpen={setOpen3}
                                setValue={setValue3}
                                setItems={setItems3}
                            />
                        </View>



                    </View>
                    <View style={{ marginRight: moderateScale(9),marginTop:scale(40), height: moderateScale(300), width: '100%', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity style={{ height: moderateScale(50), width: '90%', flexDirection: 'column', alignItems: 'center', backgroundColor: '#0C7EFA', justifyContent: 'center', borderRadius: 10, }}
                        
                                // onPress={() => navigation.navigate('Verfication')}
                                onPress={onSubmitForm}
                                // onPress={showDatepicker}

                        >
                            <Text style={{ fontSize: scale(16), color: 'white' }}>
                                NEXT
                            </Text>
                        </TouchableOpacity>
                        <View style={{ height: moderateScale(50), width: '100%', alignItems: 'center', justifyContent: 'center', marginTop: moderateScale(25), flexDirection: 'row', }}>
                            <Text style={{ fontSize: scale(16), color: 'black' }}>
                                Already have an account?
                            </Text>
                            <TouchableOpacity  
                            
                             onPress={() => navigation.navigate('Login')}
                            
                            >
                                <Text style={{ fontSize: scale(16), color: '#0C7EFA' }}>
                                    log In
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>


                </View>
            </ScrollView>


            <View>
      {/* <Button onPress={showDatepicker} title="Show date picker!" />
      <Button onPress={showTimepicker} title="Show time picker!" />
      <Text>selected: {date.toLocaleString()}</Text> */}
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          onChange={onChange}
    //       minimumDate={new Date(2020, 0, 1)}
    //   maximumDate={date}
    maxDate={date}
        />
      )}
    </View>


        </View>

    )
}
export default RegisterationOneww;