import React, { useRef, useState, } from 'react';
import { SafeAreaView, View, Image, Text, TouchableOpacity, StyleSheet, FlatList, Dimensions, Modal, Button, ScrollView ,TextInput,Linking} from "react-native";
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';
import DropDownPicker from 'react-native-dropdown-picker';
 import RBSheet from "react-native-raw-bottom-sheet";
import Header from '../../Compoent/DrawerHeader'
import imagePath from '../../utils/imagePath';
import image from '../../aasets/index';
import colors from '../../constants/colors';
import SyncStorage from 'sync-storage';
import moment from 'moment';
import Otp  from './Otpsheetscompoent'

import DateTimePicker from '@react-native-community/datetimepicker';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import RNDateTimePicker from '@react-native-community/datetimepicker';

// import { useNavigation , DrawerActions } from '@react-navigation/native';
import { Table, Row, Rows } from 'react-native-table-component';


const OrderDetailsJob = ({navigation}) => {
    // const navigation = useNavigation();
    const [cashPayment, setCashPayment] = useState('Cash Payment')
    const [upiPayment, setUpiPayment] = useState('Online Payment')
    const [onlinePayment, setOnlinePayment] = useState('UPI Payment')

    const [number, onChangeNumber] = React.useState(null);
    const refRBSheet = useRef();
    const JobDone = useRef();
    const refRBSheet3 = useRef();

    const add_remarkpop = useRef();
    const refRBSheet1 = useRef();
    const refRBSheet2 = useRef();
    const refRBresded = useRef();
    const refRBcalender =useRef();

    const refRarrivinglate = useRef();

    const [open3, setOpen3] = useState(false);
    const [value3, setValue3] = useState(null);
    const [items3, setItems3] = useState([
        { label: 'Cash Payment', value: 'Cash Payment' },
        { label: 'Online Payment', value: 'Online Payment' },
        { label: 'UPI Payment', value: 'UPI Payment' },
    ])
    

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
        user_mobile:'',
    });

    const [tablednew,settablednew] = useState([]);
    // const newtdata = [];
    const [table,settable] = useState({
        tableHead: ['sl_no', 'remark', 'created_at'],
        // widthArr: [50, 180, 100],
     tableData:[],
    });
    const [bjobstats,setbjobstat] = useState('')

    let ndate_new= new Date();
        let today_new = moment(ndate_new).format('D');
        let today_ndays = moment(ndate_new).format('dd');

        
        // alert(today_ndays)

        const [table_cal,settable_cal] = useState({
            tableHead: ['mo', 'tu', 'we','th','fr','sa','su'],
            // widthArr: [50, 180, 100],
         tableData:[
             [today_new*1+0,today_new*1+1,today_new*1+2,today_new*1+3,today_new*1+4,today_new*1+5,today_new*1+6],
             [today_new*1+7,today_new*1+8,today_new*1+9,today_new*1+10,today_new*1+11,today_new*1+12,today_new*1+13],
             [today_new*1+14,today_new*1+15,today_new*1+16,today_new*1+17,today_new*1+18,today_new*1+19,today_new*1+20],
         ],
        });

    
    const [issuelist, setissuelist] = useState([]);

    let token = SyncStorage.get('token');
   
    let order_e_id = SyncStorage.get('order_e_id');

    const [newremark, setremarknew] = useState("");

    const [timesloat, settimesloat] = useState([]);
     let datenew = moment().toDate();
    // const [datePicker, setDatePicker] = useState(false);
    // const [date, setDate] = useState(datenew);
    // const [mode, setMode] = useState('date');

    const [date, setDate] = useState(datenew);
    const [mode, setMode] = useState('date');
     const [show, setShow] = useState(false);
    
      

    const fetch_remark = async () =>{
        let  bearer = 'Bearer ' + token;
        fetch('http://43.204.87.153/api/v1/partners/lead_remarks?order='+order_e_id, {

            method: 'GET',
            headers: {
                'Authorization': bearer,
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },

        }).then((response_new) => response_new.json())
        .then((responseJson) => {;

        // console.warn(responseJson.data);
            if(responseJson.success==false){
                

            }else{
                // tableData:responseJson.data;
                // const nextFormState = {
                //     // ...tablednew,
                //     tablednew:responseJson.data,
                //   };
                settablednew(responseJson.data);

                const newtdata = responseJson.data.map(
                    ({ sl_no,remark,created_at }) => ([sl_no,remark,created_at])
                  );

                  add_tabledata(newtdata);
              
                
            }
    //  setleaddata(newtdata);
         

        }).catch((error) => {
            //Error 
            console.error(error);
        });

    }

    const newtdata = tablednew.map(
        ({ sl_no,remark,created_at }) => ([sl_no,remark,created_at])
      );



    const fetchopenlead = async () => {

        // alert(order_e_id);

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
            //  console.warn(responseJson.data);
            const nextFormState = {
                ...leaddata,
                order_id: responseJson.data[0].order_id,
                order_date:moment(responseJson.data[0].order_date, 'DD-MM-YYYY', true).format('Do MMMM ,YYYY'),
                brand:responseJson.data[0].brand,
                model_segment:responseJson.data[0].model_segment,
                issue_name:responseJson.data[0].order_issues[0].issue_name,
                user_fullname:responseJson.data[0].user_data.user_fullname,
                address_no:responseJson.data[0].order_address[0].address_no,
                address_line_1:responseJson.data[0].order_address[0].address_line_1,
                address_line_2:responseJson.data[0].order_address[0].address_line_2,
                pincode_number:responseJson.data[0].order_address[0].pincode_number,
                order_issues_total_price:responseJson.data[0].order_issues_total_price,
                user_mobile:responseJson.data[0].user_data.user_mobile,
              
              };
              setleaddata(nextFormState);

              setissuelist(responseJson.data[0].order_issues);
            //   leaddata.order_issues_total_price
            // alert(leaddata.order_id);
            //  console.warn(issuelist);
 

            //  setleaddata(responseJson.data);

        }).catch((error) => {
            //Error 
            console.error(error);
        });
       

    }

    const add_tabledata = (newtdata) =>{
        // table.tableData=  newtdata;
        const nextFormState = {
            ...table,
            tableData:newtdata,
          };
          settable(nextFormState);
    //    console.warn(table);
    }

    const [form_error, setForm] = React.useState({
        remark_error :'',
       

   });

   const [datetime, setdatetime] = React.useState({
    resdate :'',
    restime:'',
    today:'',
    tomorrow:'',
    seldateid:'',
    resheduremsg:''
   });
  
   const [showStatusbar, setShowStatusbar] = useState(false)
   

    const onSubmitForm_remark = e =>{

        e.preventDefault();
        // alert(newremark);
        if(newremark==''){
            const nextFormState = {
                ...form_error,
                remark_error: 'please enter remark',
                
              };
              setForm(nextFormState);

        }else{

            let  bearer = 'Bearer ' + token;
            fetch('http://43.204.87.153/api/v1/partners/lead_remarks', {

                  method: 'POST',
                  body: JSON.stringify({
                    order: order_e_id,
                    remark:newremark
                    
                    
                    
                      }), //post body
                  headers: {
                    'Authorization': bearer,
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                  },


                }).then((response) => response.json())
                .then((responseJson) => {
                  // alert(responseJson.success);
                  // alert(responseJson.message);
                  console.warn(responseJson);
                  if(responseJson.success==true){
                    fetch_remark();
                    setremarknew('');
                    // add_tabledata();

                  }

                }).catch((error) => {
                  //Error 
                  console.error(error);
              });




            const nextFormState = {
                ...form_error,
                remark_error: '',
                
              };
              setForm(nextFormState);

        }


    }

    const send_otp_jobstart = function(){
       

        let  bearer = 'Bearer ' + token;

        fetch('http://43.204.87.153/api/v1/partners/lead_start_job?order='+order_e_id, {

            method: 'POST',
            body: JSON.stringify({
             }), //post body
            headers: {
              'Authorization': bearer,
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },


          }).then((response) => response.json())
          .then((responseJson) => {
            // alert(responseJson.success);
            // alert(responseJson.message);
            console.warn(responseJson);
            if(responseJson.success==true){
            //   fetch_remark();
            //   add_tabledata();

            }

          }).catch((error) => {
            //Error 
            console.error(error);
        });

        
    }

    const feth_timesloat = async () =>{

        fetch('http://43.204.87.153/api/v1/timeslots', {

            method: 'GET',
           
            headers: {
              
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },


          }).then((response) => response.json())
          .then((responseJson) => {
            // alert(responseJson.success);
            // alert(responseJson.message);
            console.warn(responseJson);
            if(responseJson.success==true){
            //   fetch_remark();
            //   add_tabledata();
            settimesloat(responseJson.data);
            

            }

          }).catch((error) => {
            //Error 
            console.error(error);
        });

    }

    React.useEffect(() => {
        fetchopenlead();
        fetch_remark();
        //  add_tabledata();
         feth_timesloat();
         fetch_date();
    //   console.warn(timesloat);
       
      }, []);

      const fetch_date = () =>{

        let ndate= new Date();
        let today = moment(ndate).format('DD-MM-YYYY');
        let tomorrow = moment(ndate).add(1, 'day').format('DD-MM-YYYY');
        const nextFormState = {
            ...datetime,
            today: moment(today, 'DD-MM-YYYY', true).format('Do MMMM ,YYYY'),
            tomorrow:moment(tomorrow, 'DD-MM-YYYY', true).format('Do MMMM ,YYYY'),
            
          };
          setdatetime(nextFormState);
        //   moment(responseJson.data[0].order_date, 'DD-MM-YYYY', true).format('Do MMMM ,YYYY'),

        // today:'',
        // tomorrow:'',
        

      }

      const selecttimesloat = (id) =>{
        //   alert(id);
        // datetime, setdatetime
        const nextFormState = {
            ...datetime,
            restime: id,
            
          };
          setdatetime(nextFormState);
         
      }

      const selectdate = (date,dateid) =>{
        //   alert(dateid);
        if(dateid==1){
            alert(moment().format('h:mm a'));

        }

        const nextFormState = {
            ...datetime,
            resdate: moment(date, 'Do MMMM ,YYYY', true).format('DD-MM-YYYY'),
            seldateid:dateid
            
          };
          setdatetime(nextFormState);
        //   refRBcalender.current.close();

        //  backgroundColor:datetime.seldateid==1? '#0085FF' : '#E8E8E8'

        


      }

      const onChange_customdate_reshedule = (event, selectedDate) =>{
        //   alert(moment(selectedDate).format('DD-MM-YYYY'));
        const nextFormState = {
            ...datetime,
            resdate: moment(selectedDate).format('DD-MM-YYYY'),
            seldateid:3
            
          };
          setdatetime(nextFormState);
          setShow(false);
          refRBcalender.current.close();


      }

      const submit_reshedure = () =>{
        //   alert(datetime.resdate);
        //   alert(datetime.restime);
        setShowStatusbar(true);

        let  bearer = 'Bearer ' + token;

        fetch('http://43.204.87.153/api/v1/partners/lead_rescedule', {

            method: 'POST',
            body: JSON.stringify({
                order:order_e_id,
                dateOrder:datetime.resdate,
                timeslot:datetime.restime
             }), //post body
            headers: {
              'Authorization': bearer,
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },


          }).then((response) => response.json())
          .then((responseJson) => {
            // alert(responseJson.success);
            // alert(responseJson.message);
            // console.warn(responseJson);
            if(responseJson.success==true){

                const nextFormState = {
                    ...datetime,
                    resheduremsg: responseJson.message,
                    
                    
                  };
                  setdatetime(nextFormState);
                  refRBresded.current.close();
                  refRBSheet3.current.close();
                  

                  setTimeout(() => 
    {
      setShowStatusbar(false)
    }, 6000)

        

                // resheduremsg
            //   fetch_remark();
            //   add_tabledata();

            }

          }).catch((error) => {
            //Error 
            console.error(error);
        });


      }

      const gotnextstep = () =>{
        //   alert(bjobstats);
        if(bjobstats==1){

        }else if(bjobstats==2){
            refRBresded.current.open();

        }else if(bjobstats==3){
            refRarrivinglate.current.open();
            
        }
      }

      const rander_item_timesloat = ({item}) =>{
        // backgroundColor: this.state[item.id +'-colorarrived'] ? '#D6D6D6' : '#E5C454'
        // backgroundColor: "#E8E8E8"
        return <View style={{ height: moderateScale(55), width: "29%", margin: scale(5), borderRadius: 10, alignItems: "center", justifyContent: "center", backgroundColor:item.id==datetime.restime? '#0085FF' : '#E8E8E8' }}>
             <TouchableOpacity onPress={()=>selecttimesloat(item.id)}>
            <Text style={{ color: "black", fontSize: scale(14), fontWeight: "500", marginBottom: scale(3) }}>{item.title} 
           
            </Text>
            </TouchableOpacity>


        </View>
       

      }


      const renderItem = ({ item }) =>{
        return <View style={{ height: moderateScale(75), width: '100%', flexDirection: 'column', justifyContent: 'flex-start', }}>
        <View style={{ height: moderateScale(30), width: '100%', flexDirection: 'row', alignItems: 'flex-start' }}>

            <View style={{ height: moderateScale(30), width: '70%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: scale(14), textAlign: 'center', color: 'black' }}>
                {leaddata.brand},{leaddata.model_segment}
                </Text>
            </View>
            <View style={{ height: moderateScale(30), width: '30%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: scale(14), textAlign: 'center', color: 'black' }}>
                ₹ {item.issue_discounted_price}
                </Text>
            </View>
        </View>
        <View style={{ height: moderateScale(30), width: '70%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: scale(14), textAlign: 'center', color: 'grey' }}>
               {item.issue_name}
            </Text>
        </View>

    </View>
      }




 
     

    return (
        <View style={{ flex: 1, flexDirection: 'column', backgroundColor: "#F5F5F5" }}>
            {/* <Header name={'Order Details'}image1={true}  /> */}
            <View style={{ width: '100%', height: moderateScale(50), justifyContent: 'space-between', flexDirection: 'row', marginHorizontal: moderateScale(10), alignItems: 'center' }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={imagePath.BackIcon} style={{ width: moderateScale(20), height: moderateScale(20) }} resizeMode={'contain'} />
           </TouchableOpacity>
            <Text style={{ fontSize: scale(20), fontWeight: 'bold', color: colors.black, }}>Open Leads</Text>
            <TouchableOpacity onPress={()=>navigation.openDrawer()}>
                 <Image source={imagePath.Menu} style={{ width: moderateScale(20), height: moderateScale(20), marginHorizontal: moderateScale(20) }} resizeMode={'contain'} />
                 </TouchableOpacity>
        </View>
            <ScrollView>
                <View style={{ alignItems: 'center', flexDirection: 'column' }}>
               { showStatusbar 
          ?
                    <View style={{ height: moderateScale(70), width: '100%', alignItems: 'center', flexDirection: 'column', justifyContent: "center" }}>


                        <View style={{ height: moderateScale(37), width: '90%', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', backgroundColor: '#BEE4D8', borderRadius: moderateScale(8) }}>

                            <Text style={{ fontSize: scale(16), color: '#008C77' }}>{datetime.resheduremsg}</Text>
                        </View>

                    </View>
                     : null
                    }

                    <View style={{ height: moderateScale(60), width: '100%', alignItems: 'center', flexDirection: 'row', }}>

                        <View style={{ height: moderateScale(40), width: '50%', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', }}>

                            <Text style={{ fontSize: scale(14), color:"grey"}}>Order ID # {leaddata.order_id}</Text>
                        </View>
                        <View style={{ height: moderateScale(40), width: '50%', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', }}>

                            <Text style={{ fontSize: scale(14), color: 'black' }}>{leaddata.order_date}</Text>
                        </View>

                    </View>
                    <View style={{ height: moderateScale(160), width: '100%', flexDirection: 'column', alignItems: 'center', }}>


                        <View style={{ height: moderateScale(50), width: '90%', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', }}>
                            <Text style={{ fontSize: scale(16), color: 'black', textAlign: 'center' }}>
                                {leaddata.issue_name} - {leaddata.brand},{leaddata.model_segment}
                            </Text>

                        </View>
                        <View style={{ height: moderateScale(40), width: '90%', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', }}>
                            <Text style={{ fontSize: scale(14), textAlign: 'center',color:"grey" }}>
                                Client: {leaddata.user_fullname}
                            </Text>

                        </View>
                        <View style={{ height: moderateScale(70), width: '90%', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', }}>
                            <View style={{ height: moderateScale(50), width: '10%', alignItems: 'center', justifyContent: 'center' }}>
                                <Image
                                    source={image.map}
                                    style={{
                                        height: moderateScale(28), width: 30, resizeMode: 'contain',
                                    }}
                                />
                            </View>
                            <View style={{
                                height: moderateScale(90), width: '80%', alignItems: 'center', justifyContent: 'center',
                            }}>
                                <Text style={{ fontSize: scale(14), textAlign: 'center' ,color: 'grey'}}>
                                    {leaddata.address_no}, {leaddata.address_line_1}, {leaddata.address_line_2},
                                    Bengaluru, Karnataka {leaddata.pincode_number}, India
                                </Text>
                            </View>


                        </View>
                    </View>
                    <View style={{ height: moderateScale(90), width: '90%', flexDirection: 'column', backgroundColor: 'white', borderRadius: 10, flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => Linking.openURL('google.navigation:q={leaddata.pincode_number}')} style={{ height: moderateScale(80), width: '33%', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                source={imagePath.location2}
                                style={{
                                    height: moderateScale(33), width: '80%', resizeMode: 'contain', marginBottom: moderateScale(7)
                                }}
                            />
                            <Text style={{ fontSize: scale(14), textAlign: 'center', color: 'black' }}>
                                Get Direction
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity  onPress={() => {Linking.openURL('tel:{leaddata.user_mobile}');} } style={{ height: moderateScale(80), width: '33%', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                       
                            <Image
                                source={image.phone}
                                style={{
                                    height: moderateScale(33), width: '80%', resizeMode: 'contain', marginBottom: moderateScale(7)
                                }}
                            />
                            <Text style={{ fontSize: scale(14), textAlign: 'center', color: 'black' }}>
                                Call 
                            </Text>
                            
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {Linking.openURL('whatsapp://send?text=hello&phone=9741509576')} }  style={{ height: moderateScale(80), width: '34%', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                source={imagePath.Chat
                                }
                                style={{
                                    height: moderateScale(33), width: '80%', resizeMode: 'contain', marginBottom: moderateScale(7)
                                }}
                            />
                            <Text style={{ fontSize: scale(14), textAlign: 'center', color: 'black' }}>
                                WhatsApp
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ height: moderateScale(60), width: '100%', alignItems: 'center', flexDirection: 'row' }}>

                        <View style={{ height: moderateScale(40), width: '50%', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', }}>

                            <Text style={{ fontSize: scale(16), color: 'black',fontWeight:'bold' }}>Job Summary</Text>
                        </View>
                        <View style={{ height: moderateScale(40), width: '50%', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', }}>
                        <TouchableOpacity onPress={() => add_remarkpop.current.open()} >
                        <Text style={{ fontSize: scale(16), color: '#0085FF' }}>Add Remarks</Text>
                        </TouchableOpacity>
                           
                        </View>

                    </View>
                    <View style={{ width: '90%', flexDirection: 'column', backgroundColor: 'white', borderRadius: 10, flexDirection: 'column', alignItems: 'center', marginBottom: 25 }}>
                        
                    <FlatList showsVerticalScrollIndicator={false}
                            style={{ flexGrow: 1 }}
                            data={issuelist}
                            renderItem={renderItem}
                        />

                        
                        {/* <View style={{ height: moderateScale(75), width: '100%', flexDirection: 'column', justifyContent: 'flex-start', }}>
                            <View style={{ height: moderateScale(30), width: '100%', flexDirection: 'row', alignItems: 'flex-start' }}>

                                <View style={{ height: moderateScale(30), width: '70%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ fontSize: scale(14), textAlign: 'center', color: 'black' }}>
                                        Xiaomi Mi, Upto 46 Inches
                                    </Text>
                                </View>
                                <View style={{ height: moderateScale(30), width: '30%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ fontSize: scale(14), textAlign: 'center', color: 'black' }}>
                                        $345
                                    </Text>
                                </View>
                            </View>
                            <View style={{ height: moderateScale(30), width: '70%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ fontSize: scale(14), textAlign: 'center', color: 'grey' }}>
                                    Display Screen Repair
                                </Text>
                            </View>

                        </View> */}


                        {/* <View style={{ height: moderateScale(75), width: '100%', flexDirection: 'column', justifyContent: 'flex-start', }}>
                            <View style={{ height: moderateScale(30), width: '100%', flexDirection: 'row', alignItems: 'flex-start' }}>

                                <View style={{ height: moderateScale(30), width: '70%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ fontSize: scale(14), textAlign: 'center', color: 'black' }}>
                                        Xiaomi Mi, Upto 46 Inches
                                    </Text>
                                </View>
                                <View style={{ height: moderateScale(30), width: '30%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ fontSize: scale(14), textAlign: 'center', color: 'black' }}>
                                        $345
                                    </Text>
                                </View>
                            </View>
                            <View style={{ height: moderateScale(30), width: '70%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ fontSize: scale(14), textAlign: 'center', color: 'grey' }}>
                                    Display Screen Repair
                                </Text>
                            </View>

                        </View> */}
                        {/* <View style={{ height: moderateScale(75), width: '100%', flexDirection: 'column', justifyContent: 'flex-start', }}>
                            <View style={{ height: moderateScale(30), width: '100%', flexDirection: 'row', alignItems: 'flex-start' }}>

                                <View style={{ height: moderateScale(30), width: '70%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ fontSize: scale(14), textAlign: 'center', color: 'black' }}>
                                        Xiaomi Mi, Upto 46 Inches
                                    </Text>
                                </View>
                                <View style={{ height: moderateScale(30), width: '30%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ fontSize: scale(14), textAlign: 'center', color: 'black' }}>
                                        $345
                                    </Text>
                                </View>
                            </View>
                            <View style={{ height: moderateScale(30), width: '70%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ fontSize: scale(14), textAlign: 'center', color: 'grey' }}>
                                    Display Screen Repair
                                </Text>
                            </View>

                        </View> */}


                        <View style={{ height: moderateScale(60), width: '100%', flexDirection: 'row', alignItems: 'center', }}>

                            <View style={{ height: moderateScale(30), width: '50%', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', paddingLeft: moderateScale(35), }}>
                                <Text style={{ fontSize: scale(14), textAlign: 'center', color: 'black' }}>
                                    Total
                                </Text>
                            </View>
                            <View style={{ height: moderateScale(30), width: '50%', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'center', paddingRight: moderateScale(35), }}>
                                <Text style={{ fontSize: scale(14), textAlign: 'center', color: 'black' }}>
                                ₹ {leaddata.order_issues_total_price}
                                </Text>
                            </View>

                        </View>
                    </View>

                    <RBSheet
                        ref={JobDone}
                        closeOnDragDown={true}
                        closeOnPressMask={false}
                        customStyles={{
                            wrapper: {
                                backgroundColor: "#F5F5F5"
                            },
                            container: {
                                // justifyContent: "center",
                                alignItems: "center",
                                height: moderateScale(240),
                                borderTopLeftRadius: moderateScale(20),
                                borderTopRightRadius: moderateScale(20),
                                borderWidth: 1,
                                borderColor: moderateScale(2),
                                borderColor: '#7E7E7E'

                            },
                            draggableIcon: {
                                backgroundColor: "#F5F5F5"
                            }
                        }}
                    >
                        <View style={{ height: moderateScale(240), width: '100%', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'column', }}>
                            <View style={{
                                zIndex: 1, height: moderateScale(80), width: '100%', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                            }}>
                                <DropDownPicker
                                    open={open3}
                                    dropDownDirection="BOTTOM"
                                    value={value3}
                                    items={items3}
                                    onChangeValue={() => {
                                        // console.log('helllooo', value3);
                                        if (value3 === 'Cash Payment') {
                                            setValue3
                                             navigation.navigate('CashPayment')
                                        } else if (value3 === 'Online Payment') {
                                            console.log('onlinePayment',value3)
                                            setValue3
                                         } else {
                                            console.log('upiPayment',value3)
                                            setValue3
                                         }
                                    }}
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
                                        borderColor: '#7E7E7E',
                                        borderWidth: moderateScale(2),
                                    }}
                                    style={{
                                        backgroundColor: 'white',
                                        borderColor: '#7E7E7E',
                                        borderWidth: moderateScale(2),
                                    }}
                                    setOpen={setOpen3}
                                    setValue={setValue3}
                                    setItems={setItems3}
                                />

                            </View>
                            <View style={{ height: moderateScale(80), width: '100%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
                                <TouchableOpacity style={{ height: moderateScale(50), width: '90%', borderRadius: moderateScale(10), backgroundColor: '#0C7EFA', alignItems: 'center', justifyContent: 'center' }}
                                onPress={() => navigation.navigate('Home')}
                                
                                >
                                    <Text style={{ fontSize: scale(16), color: 'white' }}>Pay amount $5678.00</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </RBSheet>


                    <RBSheet
                        ref={add_remarkpop}
                        closeOnDragDown={true}
                        closeOnPressMask={false}
                        customStyles={{
                            wrapper: {
                                backgroundColor: "#F5F5F5"
                            },
                            container: {
                                // justifyContent: "center",
                                alignItems: "center",
                                height: moderateScale(600),
                                borderTopLeftRadius: moderateScale(20),
                                borderTopRightRadius: moderateScale(20),
                                borderWidth: 1,
                                borderColor: moderateScale(2),
                                borderColor: '#7E7E7E'

                            },
                            draggableIcon: {
                                backgroundColor: "#F5F5F5"
                            }
                        }}
                    >

                  
                  <View style={{ width: '100%', alignItems: 'center' }}>

<Text style={{ fontSize: scale(16), color: 'black',textAlign:'left' }}>OLD REMARKS</Text>
</View>


<View style={{ width:'100%', padding: 16, paddingTop: 30, backgroundColor: '#fff',height: moderateScale(240)}}>
<ScrollView>
<Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Row  data={table.tableHead} style={styles.head} textStyle={styles.text} />
          <Rows   data={table.tableData} textStyle={styles.text}/>
          {/* {table.tableData.map((rowData, index) => (
                  <Row
                    key={index}
                    data={rowData}
                    // widthArr={state.widthArr}
                    style={[
                      styles.row,
                      index % 2 && {backgroundColor: '#F7F6E7'},
                    ]}
                    textStyle={styles.text}
                  />
                ))} */}
        </Table>
        </ScrollView>

       
        </View>

        <View style={{ height: moderateScale(160), width: '100%', alignItems: 'center', justifyContent: "center" }}>
                        
        <Text style={{height: moderateScale(40), fontSize: scale(16), color: 'black',textAlign:'left' }}>Add Remark</Text>

                            <TextInput
                                style={{

                                    height: moderateScale(100),
                                    width: '90%',
                                    borderRadius: 10,
                                    fontSize: scale(16),
                                    borderWidth: 1,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    paddingLeft: 30,
                                    borderColor: '#0C7EFA'

                                }}
                                // onChangeText={onChangeName}
                                value={newremark}
                                // placeholder="Enter Your Name"
                                // keyboardType="default"
                                // placeholderTextColor={"grey"}
                                 onChangeText={(text) => setremarknew(text)}
                            />
                            <Text>{form_error.remark_error}</Text>
                            
                        </View>


                        <TouchableOpacity style={{ height: moderateScale(50), width: '90%', flexDirection: 'column', alignItems: 'center', backgroundColor: '#0C7EFA', justifyContent: 'center', borderRadius: 10, }}
                        
                                // onPress={() => navigation.navigate('Verfication')}
                                 onPress={onSubmitForm_remark}
                                // onPress={showDatepicker}

                        >
                            <Text style={{ fontSize: scale(16), color: 'white' }}>
                                NEXT
                            </Text>
                        </TouchableOpacity>
                  

                  

                    </RBSheet>

                    


                    <RBSheet
                        ref={refRBSheet3}
                        closeOnDragDown={true}
                        closeOnPressMask={false}
                        customStyles={{
                            wrapper: {
                                backgroundColor: "#F5F5F5"
                            },
                            container: {
                                // justifyContent: "center",
                                alignItems: "center",
                                height: moderateScale(350),
                                borderTopLeftRadius: moderateScale(20),
                                borderTopRightRadius: moderateScale(20),
                            },
                            draggableIcon: {
                                backgroundColor: "#F5F5F5"
                            }
                        }}
                    >
                        <View style={{ height: moderateScale(230), width: '100%', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'column' }}>
                            <View style={{
                                height: moderateScale(200), width: '93%', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'column', borderRadius: moderateScale(20), borderColor: '#C4C4C4', borderWidth: 1, shadowOffset: 1, shadowOpacity: 0.2,
                                shadowRadius: 3,
                            }}>
                                <View style={{ height: moderateScale(40), width: '100%', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                                    <View style={{ height: moderateScale(25), width: '90%', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row' }}>
                                        <Text style={{ fontSize: scale(16), textAlign: 'center', color: '#7E7E7E' }}>
                                            Select Status
                                        </Text>
                                    </View>
                                </View>
                                {/* <View style={{ height: moderateScale(50), width: '100%', alignItems: 'center', justifyContent: 'center', flexDirection: 'column',backgroundColor:bjobstats==1? '#0085FF' : '#FFFF', }}>
                                    <TouchableOpacity onPress={()=>setbjobstat(1)} style={{ height: moderateScale(30), width: '85%', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row' }}>
                                        <Text style={{ fontSize: scale(16), textAlign: 'center', color: '#000000' }}>
                                        Customer Not Responding
                                        </Text>
                                    </TouchableOpacity>
                                </View> */}
                                <View style={{ height: moderateScale(50), width: '100%', alignItems: 'center', justifyContent: 'center', flexDirection: 'column',backgroundColor:bjobstats==2? '#0085FF' : '#FFFF' }}>
                                    <View style={{ height: moderateScale(30), width: '85%', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row'  }}>
                                    <TouchableOpacity onPress={()=>setbjobstat(2)}  style={{ height: moderateScale(30), width: '85%', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row' }}>
                                        <Text style={{ fontSize: scale(16), textAlign: 'center', color: '#000000' }}>
                                        Customer Rescedule
                                        </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                {/* <View style={{ height: moderateScale(50), width: '100%', alignItems: 'center', justifyContent: 'center', flexDirection: 'column',backgroundColor:bjobstats==3? '#0085FF' : '#FFFF' }}>
                                    <View style={{ height: moderateScale(30), width: '85%', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row' }}>
                                    <TouchableOpacity onPress={()=>setbjobstat(3)}  style={{ height: moderateScale(30), width: '85%', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row' }}>
                                        <Text style={{ fontSize: scale(16), textAlign: 'center', color: '#000000' }}>
                                        Arriving Late
                                        </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View> */}


                            </View>
                            <View style={{ height: moderateScale(75), width: '100%', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center' }}>

                                <TouchableOpacity onPress={()=>gotnextstep()}   style={{ height: moderateScale(50), width: '90%', borderRadius: moderateScale(10), backgroundColor: '#0C7EFA', alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ fontSize: scale(16), color: 'white' }}>Update Status</Text>
                                </TouchableOpacity>

                            </View>
                        </View>

                    </RBSheet>


                    <RBSheet
                        ref={refRBcalender}
                        closeOnDragDown={true}
                        closeOnPressMask={false}
                        customStyles={{
                            wrapper: {
                                backgroundColor: "#F5F5F5"
                            },
                            container: {
                                // justifyContent: "center",
                                alignItems: "center",
                                height: moderateScale(540),
                                borderTopLeftRadius: moderateScale(20),
                                borderTopRightRadius: moderateScale(20),
                            },
                            draggableIcon: {
                                backgroundColor: "#F5F5F5"
                            }
                        }}
                    >
<View style={{ width:'100%', padding: 16, paddingTop: 30, backgroundColor: '#fff',height: moderateScale(240)}}>
<ScrollView>
{/* <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Row  data={table_cal.tableHead} style={styles.head} textStyle={styles.text} />
          <Rows   data={table_cal.tableData} textStyle={styles.text}/>
         
        </Table> */}
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
         onChange={onChange_customdate_reshedule}
        />
        )}
    </View>
        </ScrollView>
</View>

                        </RBSheet>

                   
                    <RBSheet
                        ref={refRBresded}
                        closeOnDragDown={true}
                        closeOnPressMask={false}
                        customStyles={{
                            wrapper: {
                                backgroundColor: "#F5F5F5"
                            },
                            container: {
                                // justifyContent: "center",
                                alignItems: "center",
                                height: moderateScale(540),
                                borderTopLeftRadius: moderateScale(20),
                                borderTopRightRadius: moderateScale(20),
                            },
                            draggableIcon: {
                                backgroundColor: "#F5F5F5"
                            }
                        }}
                    >

<ScrollView style={{ height: scale(540) }}>
                        <View style={{
                            height: moderateScale(540),
                            width: "100%", backgroundColor: "white",
                        }}>

                            <View style={{ height: scale(50), width: "100%", justifyContent: "center", }}>


                                <Text style={{ color: "#000000", fontSize: scale(16), marginLeft: scale(8), fontWeight: "700" }}>


                                    Select Date

                                </Text>
                            </View>

                            <View style={{ height: moderateScale(70), width: "100%", justifyContent: "center" }}>


                                <View style={{ height: moderateScale(65), width: "100%", alignItems: "center", flexDirection: "row", marginLeft: scale(8), }}>
                                   
                                    <View style={{ height: moderateScale(65), width: "29%", margin: scale(5), borderRadius: 10, alignItems: "center", justifyContent: "center",  backgroundColor:datetime.seldateid==1? '#0085FF' : '#E8E8E8', }}>
                                    <TouchableOpacity onPress={()=>selectdate(datetime.today,1)}>
                                        <Text style={{ color: "black", fontSize: scale(14), fontWeight: "500", marginBottom: scale(5) }}>Today
                                        </Text>
                                        <Text style={{ color: "black", fontSize: scale(12), }}>{datetime.today}
                                        </Text>
                                        </TouchableOpacity>

                                    </View>
                                    
                                    <View style={{ height: moderateScale(65), width: "29%", margin: scale(5), borderRadius: 10, alignItems: "center", justifyContent: "center",  backgroundColor:datetime.seldateid==2? '#0085FF' : '#E8E8E8', }}>
                                    <TouchableOpacity onPress={()=>selectdate(datetime.tomorrow,2)}>
                                        <Text style={{ color: "black", fontSize: scale(14), fontWeight: "500", marginBottom: scale(5) }}>Tomorrow

                                        </Text>
                                        <Text style={{ color: "black", fontSize: scale(12), }}>{datetime.tomorrow}

                                        </Text>
                                        </TouchableOpacity>

                                    </View>
                                    <View style={{ height: moderateScale(65), width: "29%", margin: scale(5), borderRadius: 10, alignItems: "center", justifyContent: "center", backgroundColor: datetime.seldateid==3? '#0085FF' : '#E8E8E8', }}>
                                    <TouchableOpacity onPress={() => { setShow(true);refRBcalender.current.open()}}>
                                        <Text style={{ color: "black", fontSize: scale(14), fontWeight: "500", marginBottom: scale(5) }}>Custom

                                        </Text>
                                        <Text style={{ color: "black", fontSize: scale(12), }}>{datetime.resdate} 23rd April, 2022 

                                        </Text>
                                        </TouchableOpacity>

                                    </View>
                                </View>
                            </View>
                            <View style={{ height: scale(50), width: "100%", justifyContent: "center" }}>


                                <Text style={{ color: "#000000", fontSize: scale(16), marginLeft: scale(6), marginBottom: scale(10), fontWeight: "700" }}>


                                    Select Time Slot

                                </Text>
                            </View>

                            <View style={{ height: moderateScale(200), width: "100%", justifyContent: "center", marginBottom: scale(6) }}>


                                <View style={{ height: moderateScale(155), width: "100%", alignItems: "center", flexDirection: "row", marginLeft: scale(8), }}>

                                

                                    {/* <View style={{ height: moderateScale(55), width: "29%", margin: scale(5), borderRadius: 10, alignItems: "center", justifyContent: "center", backgroundColor: "#E8E8E8", }}>
                                        <Text style={{ color: "black", fontSize: scale(14), fontWeight: "500", marginBottom: scale(3) }}>9am - 11am

                                        </Text>


                                    </View> */}


                                    <FlatList showsVerticalScrollIndicator={false} 
                            style={{ flexGrow: 3}}
                            numColumns={3}
                            data={timesloat}
                            renderItem={rander_item_timesloat}
                        />


                                    {/* <View style={{ height: moderateScale(55), width: "29%", margin: scale(5), borderRadius: 10, alignItems: "center", justifyContent: "center", backgroundColor: "#E8E8E8", }}>
                                        <Text style={{ color: "black", fontSize: scale(14), fontWeight: "500", marginBottom: scale(3) }}>9am - 11am

                                        </Text>


                                    </View> */}
                                    {/* <View style={{ height: moderateScale(55), width: "29%", margin: scale(5), borderRadius: 10, alignItems: "center", justifyContent: "center", backgroundColor: "#E8E8E8", }}>
                                        <Text style={{ color: "black", fontSize: scale(14), fontWeight: "500", marginBottom: scale(3) }}>9am - 11am

                                        </Text>


                                    </View> */}

                                </View>


                            </View>

                            
                          
                            <View style={{
                                height: moderateScale(120),
                                width: '100%',
                                flexDirection: "column",
                                justifyContent: "center",
                                borderRadius: 10,

                            }}>

                                <TouchableOpacity
                                    style={{
                                        height: moderateScale(50),
                                        width: '90%',
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        borderWidth: 1,
                                        borderColor: "#0085FF",
                                        borderRadius: 12, backgroundColor: "#0085FF",
                                        marginLeft: moderateScale(20)


                                    }}
                                onPress={()=>submit_reshedure()} 

                                >
                                    <Text style={{ textAlign: "center", fontSize: scale(16), marginLeft: moderateScale(15), color: "#FFFFFF" }}>

                                        Update Status
                                    </Text>
                                </TouchableOpacity>


                            </View>
                        </View>

                    </ScrollView>



                        </RBSheet>


                        {/* */}

                        <RBSheet
                        ref={refRarrivinglate}
                        closeOnDragDown={true}
                        closeOnPressMask={false}
                        customStyles={{
                            wrapper: {
                                backgroundColor: "#F5F5F5"
                            },
                            container: {
                                // justifyContent: "center",
                                alignItems: "center",
                                height: moderateScale(250),
                                borderTopLeftRadius: moderateScale(20),
                                borderTopRightRadius: moderateScale(20),
                            },
                            draggableIcon: {
                                backgroundColor: "#F5F5F5"
                            }
                        }}
                    >

<View style={{ height: moderateScale(210), width: "100%", backgroundColor: "white", borderBottomStartRadius: 40 }}>
                        <View style={{ height: moderateScale(40), width: "30%", justifyContent: "center", alignItems: "center" }}>
                            <Text style={{ color: "#000000", textAlign: "center", fontSize: scale(14), fontWeight: "500" }}>
                                Arriving Late
                            </Text>
                        </View>
                        <View style={{ height: moderateScale(80), width: "100%", alignItems: "center", flexDirection: "row", }}>

                            <View style={{ height: moderateScale(50), width: "28%", borderRadius: 10, alignItems: "center", justifyContent: "center", backgroundColor: "#E8E8E8", marginLeft: scale(15) }}>
                                <Text style={{ color: "black", fontSize: scale(14), fontWeight: "500" }}>10 minutes
                                </Text>

                            </View>
                            <View style={{ height: moderateScale(50), width: "28%", borderRadius: 10, alignItems: "center", justifyContent: "center", marginLeft: scale(15), backgroundColor: "#0085FF" }}>
                                <Text style={{ color: "white", fontSize: scale(14), fontWeight: "500" }}>30 minutes
                                </Text>

                            </View>
                            <View style={{ height: moderateScale(50), width: "28%", borderRadius: 10, alignItems: "center", justifyContent: "center", backgroundColor: "#E8E8E8", marginLeft: scale(15) }}>
                                <Text style={{ color: "black", fontSize: scale(14), fontWeight: "500" }}>1 Hour
                                </Text>
                            </View>
                        </View>
                        <View style={{
                            height: moderateScale(60),
                            width: '100%',
                            flexDirection: "column",
                            marginTop: moderateScale(8),
                            justifyContent: "center",
                            borderRadius: 10,

                        }}>
                            <TouchableOpacity
                                style={{
                                    height: moderateScale(50),
                                    width: '90%',
                                    flexDirection: "column",
                                    marginTop: moderateScale(10),
                                    justifyContent: "center",
                                    borderWidth: 1,
                                    borderColor: "#0085FF",
                                    borderRadius: 12, backgroundColor: "#0085FF",
                                    marginLeft: moderateScale(20)
                                }}
                              //  onPress={() => refRBSheet2.current.open()}
                            >
                                <Text style={{ textAlign: "center", fontSize: scale(16), marginLeft: moderateScale(15), color: "#FFFFFF" }}>

                                    Update Status
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>



                        </RBSheet>






                </View>
            </ScrollView>
            <View style={{ height: moderateScale(70), width: '100%', flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', justifyContent: 'center', marginBottom: moderateScale(20), }}>

                <TouchableOpacity onPress={() => refRBSheet3.current.open()} style={{ height: moderateScale(50), width: '45%', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#0085FF', borderRadius: moderateScale(10), marginRight: moderateScale(5), }}>
                    <Text style={{ fontSize: scale(16), textAlign: 'center', color: 'white' }}>
                        Update Status
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => refRBSheet1.current.open()} style={{ height: moderateScale(50), width: '45%', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#00B67F', borderRadius: moderateScale(10), marginLeft: moderateScale(5), }}>
                    <Text style={{ fontSize: scale(16), textAlign: 'center', color: 'white' }}>
                    Start Job
                    </Text>
                </TouchableOpacity>

                <RBSheet
            ref={refRBSheet1}
            closeOnPressBack={false}
            closeOnDragDown={true}
            closeOnPressMask={true}
            customStyles={{
              wrapper: {
                // backgroundColor: "transparent"
              },
              container: {
                // justifyContent: "center",
                alignItems: "center",
                height: moderateScale(150),
                borderTopLeftRadius: moderateScale(20),
                borderTopRightRadius: moderateScale(20),
              },
              draggableIcon: {
                backgroundColor: "#F5F5F5"
              }
            }}
          >
            <View style={{ height: moderateScale(130), width: '100%', alignItems: 'center', flexDirection: 'column' }}>
              <View style={{ height: moderateScale(50), width: '88%', alignItems: 'flex-start', justifyContent: 'center' }}>
                <Text style={{ fontSize: scale(15), textAlign: 'center', color: 'black' }}>
                  Have you arrived at customer location?
                </Text>
              </View>
              <View style={{ height: moderateScale(70), width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 35 }}>
                <TouchableOpacity onPress={() => refRBSheet1.current.close()} style={{ height: moderateScale(40), width: '45%', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#C4C4C4', borderRadius: moderateScale(10), marginRight: moderateScale(5), }}>
                  <Text style={{ fontSize: scale(16), textAlign: 'center', color: 'black' }}>
                    No
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={() => {refRBSheet2.current.open();
                send_otp_jobstart()}} 
                style={{ height: moderateScale(40), width: '45%', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#00B67F', borderRadius: moderateScale(10), marginLeft: moderateScale(5), }}>
                  <Text style={{ fontSize: scale(16), textAlign: 'center', color: 'white' }}>
                    Yes
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </RBSheet>

          <RBSheet
            ref={refRBSheet2}
            closeOnPressBack={false}
            closeOnDragDown={true}
            closeOnPressMask={true}
            customStyles={{
              wrapper: {
                // backgroundColor: "transparent"
              },
              container: {
                // justifyContent: "center",
                alignItems: "center",
                height: moderateScale(350),
                borderTopLeftRadius: moderateScale(20),
                borderTopRightRadius: moderateScale(20),
              },
              draggableIcon: {
                backgroundColor: "#F5F5F5"
              }
            }}
          >
           <Otp/>

          </RBSheet>




            </View>
        </View>

        

    )
}


const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: { margin: 6 }
  });

export default OrderDetailsJob;

