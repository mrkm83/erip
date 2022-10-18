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
import ImagePicker from 'react-native-image-crop-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import RNDateTimePicker from '@react-native-community/datetimepicker';
// import { useNavigation , DrawerActions } from '@react-navigation/native';
import { Table, Row, Rows } from 'react-native-table-component';
import { useIsFocused } from '@react-navigation/native';


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
    const refRBcalender =useRef();

    const qcquestion = useRef();
    const pickuploadimg = useRef();

    const [open3, setOpen3] = useState(false);
    const [value3, setValue3] = useState(null);
    const isFocused = useIsFocused();

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
        order_flow_group:'',
        user_mobile:'',
        order_timeline_status:'',
    });

    const [tablednew,settablednew] = useState([]);
    // const newtdata = [];
    const [table,settable] = useState({
        tableHead: ['sl_no', 'remark', 'created_at'],
        // widthArr: [50, 180, 100],
     tableData:[],
    });
    const [issuelist, setissuelist] = useState([]);

    let token = SyncStorage.get('token');
   
    let order_e_id = SyncStorage.get('order_e_id');

    const [newremark, setremarknew] = useState("");
    const [qcans, setqcans] = useState([]);
    const [afjobstatus, setafjobstatus] = useState("");
    
     

    const fetch_remark = async () =>{
 
    // settablednew([]);
    // newtdata = '';
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

    //    console.warn(responseJson.data);
            if(responseJson.success==false){
                

            }else{
                // tableData:responseJson.data;
                // const nextFormState = {
                //     ...table,
                //     tableData:responseJson.data,
                //   };
                //   settable(nextFormState);

                settablednew(responseJson.data);

                const newtdata = responseJson.data.map(
                    ({ sl_no,remark,created_at }) => ([sl_no,remark,created_at])
                  );

                  add_tabledata(newtdata);
                //   setTimeout(() => 
                // {
                //     add_tabledata(newtdata);
                // }, 6000)

                
                
                //  setnewdata(responseJson.data);
                
            }
    //  setleaddata(newtdata);
         

        }).catch((error) => {
            //Error 
            console.error(error);
        });

    }

    

    //   console.warn(newtdata);



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
                order_flow_group:responseJson.data[0].order_flow_group,
                user_mobile:responseJson.data[0].user_data.user_mobile,
                order_timeline_status:responseJson.data[0].order_timeline.sub_status_title,
              
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
    const go_toestimation = () =>{
        console.warn(order_e_id);
        // alert(leaddata.order_flow_group);
        SyncStorage.remove('cart_show');
        SyncStorage.remove('cart_issue');
        SyncStorage.set('order_flow_id', leaddata.order_flow_group);
        //  navigation.navigate('newpart')
       navigation.navigate('CreateEstimate');
    }

    const add_tabledata = (newtdata) =>{
    //    console.warn(newtdata)
        // table.tableData=  newtdata;
        // console.warn(table);
        const nextFormState = {
                ...table,
                tableData:newtdata,
              };
              settable(nextFormState);
    }

    const [form_error, setForm] = React.useState({
        remark_error :'',
       

   });
   

    const onSubmitForm_remark = e =>{

        // e.preventDefault();
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
                    // add_tabledata();
                    setremarknew('');

                  }else{
                    const nextFormState = {
                        ...form_error,
                        remark_error:responseJson.message.remark,
                        
                      };
                      setForm(nextFormState);
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

    React.useEffect(() => {
        if(isFocused) {
        fetchopenlead();
        fetch_remark();
        //  add_tabledata();
         fetch_date();
    //   console.warn(table.tableData);
        }
       
      }, [isFocused]);


      const load_qcquestion = () =>{
        //   alert("wewe");
        let  bearer = 'Bearer ' + token;

        fetch('http://43.204.87.153/api/v1/partners/lead_qc_qna', {

            method: 'POST',
            body: JSON.stringify({
                order:order_e_id
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
            //   fetch_remark();
            //   add_tabledata();
            setqcans(responseJson.data);

            }

          }).catch((error) => {
            //Error 
            console.error(error);
        });

      }

         const [seleqns,selctand] = React.useState({
           selqnnnss : '',
           selandss:'',
           error_msg:'',
        });

        const [qnsseletedd, setqnsseletedd] = useState([]);
        const [qnsseletedd_new,setqnsseletedd_new] = useState([])
        const [qnsseletedd_new_1,setqnsseletedd_new_1] = useState([{"answers": "1", "questions": 1},{"answers": "2", "questions": 0}])

      const select_qna = (question,ans) =>{

        const nextFormState = {
            ...seleqns,
            selqnnnss: question,
            selandss:ans
            
          };
          selctand(nextFormState);
          
          if(qnsseletedd.length==0){
            setqnsseletedd(qnsseletedd => [{"questions": question,"answers":ans},...qnsseletedd] );
            setqnsseletedd_new(qnsseletedd_new =>[question])
            
          }else{
            var index = qnsseletedd.findIndex(obj => obj.questions === question);

            if(index==-1){
                setqnsseletedd(qnsseletedd => [{"questions": question,"answers":ans},...qnsseletedd] );
                setqnsseletedd_new(qnsseletedd_new =>[question,...qnsseletedd_new])

            }else{
                qnsseletedd[index].answers = ans;


            }


          }

   console.warn(qnsseletedd);

      }
      const [remark, setremark] = useState("");

      const submit_qnsremark = () =>{
        // console.warn(qnsseletedd);
        // alert(remark);
        if(qnsseletedd.length==0){
            const nextFormState = {
                ...seleqns,
                error_msg: 'please select QC answer',
          
                
              };
              selctand(nextFormState);

        }else if(remark==''){
            const nextFormState = {
                ...seleqns,
                error_msg: 'please enter remark',
          
                
              };
              selctand(nextFormState);

        }else{

            let  bearer = 'Bearer ' + token;

            fetch('http://43.204.87.153/api/v1/partners/lead_qc_qna_submit', {
    
                method: 'POST',
                body: JSON.stringify({
                    order:order_e_id,
                    qnas:qnsseletedd
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
            console.warn(qnsseletedd);
            
                if(responseJson.success==true){
                //   fetch_remark();
                //   add_tabledata();
                // setqcans(responseJson.data);
    
                }
    
              }).catch((error) => {
                //Error 
                console.error(error);
            });
            


            fetch('http://43.204.87.153/api/v1/partners/lead_qc_remark', {
    
                method: 'POST',
                body: JSON.stringify({
                    order:order_e_id,
                    qc_remark:remark
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
            //  console.warn(qnsseletedd);
                if(responseJson.success==true){
                //   fetch_remark();
                //   add_tabledata();
                // setqcans(responseJson.data);
    
                }
    
              }).catch((error) => {
                //Error 
                console.error(error);
            });

   
            pickuploadimg.current.open();



            const nextFormState = {
                ...seleqns,
                error_msg: '',
          
                
              };
              selctand(nextFormState);

        }
      }

      const [model_img,setselfi]=useState({
        
        doc_url:'',
        doc_url_part:''
       
      });

      const createFormData = (photo) => {

        var form = new FormData();
form.append("order", order_e_id);
//form.append("doc_attachment", photo.path, "image.jpg");
form.append('doc_attachment', {
      name: 'image.jpg',
      type: 'image/jpeg',
      uri: Platform.OS === 'ios' ? photo.path.replace('file://', '') : photo.path,
    });
//  console.warn(form);

     return form;


      }

      const upload_image_new = (id) =>{

        let  bearer = 'Bearer ' + token;
        // alert(order_e_id);

        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
          }).then(image => {
            fetch('http://43.204.87.153/api/v1/partners/lead_jobcard_photos', {
                method: 'POST',
                 body: createFormData(image),
                // body: JSON.stringify({
                //     order:order_e_id,
                //     doc_attachment:createFormData(image)
                //  }),
                headers: {
                    'Authorization': bearer,
                  Accept: 'application/json',
                  'Content-Type': "multipart/form-data",
                //   'Content-Type': 'application/json',
                }
              })
                .then((response) => response.json())
                .then((responseJson) => {

                    // console.warn(responseJson);
                    if(id==1){

                        const nextFormState = {
                            ...model_img,
                           
                            doc_url:responseJson.data.doc_url,
                        
                           
                          };
                          setselfi(nextFormState);

                    }else{
                        const nextFormState = {
                            ...model_img,
                           
                            doc_url_part:responseJson.data.doc_url,
                        
                           
                          };
                          setselfi(nextFormState);

                    }
                })
                .catch((error) => {
                  console.log('error', error);
                });



          });


      }

      const [datetime, setdatetime] = React.useState({
        resdate :'',
        restime:'',
        today:'',
        tomorrow:'',
        seldateid:'',
        resheduremsg:''
       });

       let datenew = moment().toDate();
    // const [datePicker, setDatePicker] = useState(false);
    // const [date, setDate] = useState(datenew);
    // const [mode, setMode] = useState('date');

    const [date, setDate] = useState(datenew);
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);


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

      const selectdate = (date,dateid) =>{

        const nextFormState = {
            ...datetime,
            resdate: moment(date, 'Do MMMM ,YYYY', true).format('DD-MM-YYYY'),
            seldateid:dateid
            
          };
          setdatetime(nextFormState);
        //   refRBcalender.current.close();

        //  backgroundColor:datetime.seldateid==1? '#0085FF' : '#E8E8E8'

        


      }

      const onChange_customdate_pickup = (event, selectedDate) =>{
        const nextFormState = {
            ...datetime,
            resdate: moment(selectedDate).format('DD-MM-YYYY'),
            seldateid:3
            
          };
          setdatetime(nextFormState);
          refRBcalender.current.close();

      }

      const update_pickupstatus = () =>{
        //   alert("wewe");
        // alert(model_img.doc_url_part);
        if(model_img.doc_url==''){
            alert("Please add Model image");
        }else if(model_img.doc_url_part==''){
            alert("Please add part image");
        }else{

        
        let  bearer = 'Bearer ' + token;

        fetch('http://43.204.87.153/api/v1/partners/lead_jobcard_details', {
    
                method: 'POST',
                body: JSON.stringify({
                    order:order_e_id,
                    imei_sl_no:'00000',
                    delivery_date:datetime.resdate
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
        //    console.warn(responseJson);
            //  console.warn(qnsseletedd);
                if(responseJson.success==true){
                //   fetch_remark();
                //   add_tabledata();
                // setqcans(responseJson.data);

                // const nextFormState = {
                //     ...datetime,
                //     resheduremsg: responseJson.message,
                    
                    
                //   };
                //   setdatetime(nextFormState);

                
                // setShowStatusbar(true);
                // setTimeout(() => 
                // {
                //   setShowStatusbar(false)
                // }, 6000)



            
     
                }
    
              }).catch((error) => {
                //Error 
                console.error(error);
            });



            fetch('http://43.204.87.153/api/v1/partners/lead_picked_up', {
    
                method: 'POST',
                body: JSON.stringify({
                    order:order_e_id,
                  
                 }), //post body
                headers: {
                  'Authorization': bearer,
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                },
    
    
              }).then((response) => response.json())
              .then((responseJson) => {

                console.warn(responseJson);

                if(responseJson.success==true){

                    fetchopenlead();

                     const nextFormState = {
                    ...datetime,
                    resheduremsg: responseJson.message,
                    
                    
                  };
                  setdatetime(nextFormState);

                
                setShowStatusbar(true);
                setTimeout(() => 
                {
                  setShowStatusbar(false)
                }, 6000)


                }else{

                    const nextFormState = {
                        ...datetime,
                        resheduremsg: "something went wrong please try againg",
                        
                        
                      };
                      setdatetime(nextFormState);
    
                    
                    setShowStatusbar(true);
                    setTimeout(() => 
                    {
                      setShowStatusbar(false)
                    }, 6000)

                }



            }).catch((error) => {
                //Error 
                console.error(error);
            });
            pickuploadimg.current.close();
            qcquestion.current.close();
            refRBSheet3.current.close();

        }

      }

      const [showStatusbar, setShowStatusbar] = useState(false)

      const load_drop_qc = (id) =>{
        let  bearer = 'Bearer ' + token;
        //   alert(id);
        if(id==1){

            fetch('http://43.204.87.153/api/v1/partners/lead_trc_start', {
    
                method: 'POST',
                body: JSON.stringify({
                    order:order_e_id,
                  
                 }), //post body
                headers: {
                  'Authorization': bearer,
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                },
    
    
              }).then((response) => response.json())
              .then((responseJson) => {
              console.warn(responseJson);
                if(responseJson.success==true){

                    const nextFormState = {
                   ...datetime,
                   resheduremsg: responseJson.message,
                   
                   
                 };
                 setdatetime(nextFormState);

                 fetchopenlead();
               setShowStatusbar(true);
               setTimeout(() => 
               {
                 setShowStatusbar(false)
               }, 6000)


               }


            }).catch((error) => {
                //Error 
                console.error(error);
            });



        }else if(id==2){

            fetch('http://43.204.87.153/api/v1/partners/lead_trc_end', {
    
                method: 'POST',
                body: JSON.stringify({
                    order:order_e_id,
                  
                 }), //post body
                headers: {
                  'Authorization': bearer,
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                },
    
    
              }).then((response) => response.json())
              .then((responseJson) => {
              console.warn(responseJson);
                if(responseJson.success==true){
                    fetchopenlead();

                    const nextFormState = {
                   ...datetime,
                   resheduremsg: responseJson.message,
                   
                   
                 };
                 setdatetime(nextFormState);

               
               setShowStatusbar(true);
               setTimeout(() => 
               {
                 setShowStatusbar(false)
               }, 6000)


               }


            }).catch((error) => {
                //Error 
                console.error(error);
            });


        }else if(id==3){

            fetch('http://43.204.87.153/api/v1/partners/lead_dropped', {
    
                method: 'POST',
                body: JSON.stringify({
                    order:order_e_id,
                  
                 }), //post body
                headers: {
                  'Authorization': bearer,
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                },
    
    
              }).then((response) => response.json())
              .then((responseJson) => {
              console.warn(responseJson);
                if(responseJson.success==true){
                    fetchopenlead();

                    const nextFormState = {
                   ...datetime,
                   resheduremsg: responseJson.message,
                   
                   
                 };
                 setdatetime(nextFormState);

               
               setShowStatusbar(true);
               setTimeout(() => 
               {
                 setShowStatusbar(false)
               }, 6000)


               }


            }).catch((error) => {
                //Error 
                console.error(error);
            });

        }

      }

      const gotostatus = () =>{
        //   alert(afjobstatus);
        if(afjobstatus==1){
            refRBSheet3.current.close();
            navigation.navigate('paymnetinvoice');
        }else if(afjobstatus==2){
            qcquestion.current.open();
            load_qcquestion();
        }else if(afjobstatus==3){
            refRBSheet3.current.close();
            load_drop_qc(1)

        }else if(afjobstatus==4){
            refRBSheet3.current.close();
            load_drop_qc(2)

        }else if(afjobstatus==5){
            refRBSheet3.current.close();
            load_drop_qc(3)
        }
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

      


      const renderItem_qns = ({ item ,index}) =>{
             return <View>
             <View style={{ height: scale(50), width: "100%", justifyContent: "center" }}>


             <Text style={{ color: "#000000", fontSize: scale(16), marginLeft: scale(8), fontWeight: "700" }}>


                 {index + 1}. {item.question}

             </Text>
             
         </View>

         <View style={{ height: moderateScale(58), width: "100%", justifyContent: "center" }}>


<View style={{ height: moderateScale(58), width: "100%", alignItems: "center", flexDirection: "row", }}>
<TouchableOpacity onPress={()=>select_qna(item.question_id,'1')} style={{ height: moderateScale(58), width: "40%", borderRadius: 10, alignItems: "center", justifyContent: "center", backgroundColor: qnsseletedd.findIndex(obj => obj.questions === item.question_id && obj.answers==='1') >=0 ? '#0085FF' : '#E8E8E8', marginLeft: scale(15) }}>
    <View>
   
        <Text style={{ color: "black", fontSize: scale(14), fontWeight: "500" }}>YES 
         {/* ({qnsseletedd_new_1.indexOf({"questions": 1,"answers": "1"})})  - ({qnsseletedd.findIndex(obj => obj.questions === item.question_id && obj.answers==='1')}) */}

        </Text>
       
    </View>
     </TouchableOpacity>
     <TouchableOpacity onPress={()=>select_qna(item.question_id,'0')} style={{ height: moderateScale(58), width: "40%", borderRadius: 10, alignItems: "center", justifyContent: "center", marginLeft: scale(30), backgroundColor: qnsseletedd.findIndex(obj => obj.questions === item.question_id && obj.answers==='0') >=0 ? '#0085FF' : '#E8E8E8' }}>
    <View>
    
        <Text style={{ color: "black", fontSize: scale(14), fontWeight: "500" }}>NO

        </Text>
       

    </View>
    </TouchableOpacity>


</View>
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

                            <Text style={{ fontSize: scale(16), color: 'black' }}>Job Summary</Text>
                        </View>
                        <View style={{ height: moderateScale(40), width: '50%', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', }}>
                        <TouchableOpacity onPress={() => {add_remarkpop.current.open();fetch_remark()}} >
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

    <View style={{ height: moderateScale(180)}}>
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
                                 onPress={()=>onSubmitForm_remark()}
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
                                height: moderateScale(280),
                                borderTopLeftRadius: moderateScale(20),
                                borderTopRightRadius: moderateScale(20),
                            },
                            draggableIcon: {
                                backgroundColor: "#F5F5F5"
                            }
                        }}
                    >
                        <View style={{ height: moderateScale(170), width: '100%', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'column' }}>
                            <View style={{
                                height: moderateScale(150), width: '93%', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'column', borderRadius: moderateScale(20), borderColor: '#C4C4C4', borderWidth: 1, shadowOffset: 1, shadowOpacity: 0.2,
                                shadowRadius: 3,
                            }}>
                                <View style={{ height: moderateScale(40), width: '100%', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                                    <View style={{ height: moderateScale(25), width: '90%', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row' }}>
                                        <Text style={{ fontSize: scale(16), textAlign: 'center', color: '#7E7E7E' }}>
                                            Select Status
                                        </Text>
                                    </View>
                                </View>
                                { leaddata.order_timeline_status != 'picked-up' && (
                                <View style={{ height: moderateScale(50), width: '100%', alignItems: 'center', justifyContent: 'center', flexDirection: 'column',backgroundColor:afjobstatus==1? '#0085FF' : '#FFFF', }}>
                                    <TouchableOpacity onPress={()=>setafjobstatus(1)} style={{ height: moderateScale(30), width: '85%', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row' }}>
                                        <Text style={{ fontSize: scale(16), textAlign: 'center', color: '#000000' }}>
                                            Job Done
                                        </Text>
                                    </TouchableOpacity>


                                    
                                </View>
                                )}
                                { leaddata.order_timeline_status == 'job started' && (
                                <View style={{ height: moderateScale(50), width: '100%', alignItems: 'center', justifyContent: 'center', flexDirection: 'column',backgroundColor:afjobstatus==2? '#0085FF' : '#FFFF' }}>
                                    <View style={{ height: moderateScale(30), width: '85%', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row' }}>
                                    <TouchableOpacity onPress={()=>setafjobstatus(2)}>
                                        <Text style={{ fontSize: scale(16), textAlign: 'center', color: '#000000' }}>
                                            Pick up 
                                        </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>

)}


{ leaddata.order_timeline_status == 'picked-up' && (
                                <View style={{ height: moderateScale(50), width: '100%', alignItems: 'center', justifyContent: 'center', flexDirection: 'column',backgroundColor:afjobstatus==3? '#0085FF' : '#FFFF' }}>
                                    <View style={{ height: moderateScale(30), width: '85%', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row' }}>
                                    <TouchableOpacity onPress={()=>setafjobstatus(3)}>
                                        <Text style={{ fontSize: scale(16), textAlign: 'center', color: '#000000' }}>
                                        Drop at Lab 
                                        </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>

)}

{ leaddata.order_timeline_status == 'trc (start)' && (
                                <View style={{ height: moderateScale(50), width: '100%', alignItems: 'center', justifyContent: 'center', flexDirection: 'column',backgroundColor:afjobstatus==4? '#0085FF' : '#FFFF' }}>
                                    <View style={{ height: moderateScale(30), width: '85%', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row' }}>
                                    <TouchableOpacity onPress={()=>setafjobstatus(4)}>
                                        <Text style={{ fontSize: scale(16), textAlign: 'center', color: '#000000' }}>
                                        Ready to be Delivered
                                        </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>

)}

{ leaddata.order_timeline_status == 'trc (end)' && (
                                <View style={{ height: moderateScale(50), width: '100%', alignItems: 'center', justifyContent: 'center', flexDirection: 'column',backgroundColor:afjobstatus==5? '#0085FF' : '#FFFF' }}>
                                    <View style={{ height: moderateScale(30), width: '85%', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row' }}>
                                    <TouchableOpacity onPress={()=>setafjobstatus(5)}>
                                        <Text style={{ fontSize: scale(16), textAlign: 'center', color: '#000000' }}>
                                        Drop
                                        </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>

)}



                            </View>
                            <View style={{ height: moderateScale(75), width: '100%', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center' }}>

                                {/* <TouchableOpacity onPress={() => JobDone.current.open()}  style={{ height: moderateScale(50), width: '90%', borderRadius: moderateScale(10), backgroundColor: '#0C7EFA', alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ fontSize: scale(16), color: 'white' }}>Update Status</Text>
                                </TouchableOpacity> */}
                                <TouchableOpacity onPress={()=>gotostatus()}  style={{ height: moderateScale(50), width: '90%', borderRadius: moderateScale(10), backgroundColor: '#0C7EFA', alignItems: 'center', justifyContent: 'center' }}>
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
     
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
         onChange={onChange_customdate_pickup}
        />
     
    </View>
        </ScrollView>
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
                {/* onPress={() =>navigation.navigate('newpart')} */}
                <TouchableOpacity onPress={() =>go_toestimation()} style={{ height: moderateScale(50), width: '45%', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#00B67F', borderRadius: moderateScale(10), marginLeft: moderateScale(5), }}>
                    <Text style={{ fontSize: scale(16), textAlign: 'center', color: 'white' }}>
                    Create Estimate
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
                height: moderateScale(280),
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

          <RBSheet
                        ref={qcquestion}
                        closeOnDragDown={true}
                        closeOnPressMask={false}
                        customStyles={{
                            wrapper: {
                                backgroundColor: "#F5F5F5"
                            },
                            container: {
                                // justifyContent: "center",
                                alignItems: "center",
                                height:  moderateScale(800),
                                borderTopLeftRadius: moderateScale(20),
                                borderTopRightRadius: moderateScale(20),
                            },
                            draggableIcon: {
                                backgroundColor: "#F5F5F5"
                            }
                        }}
                    >

<View style={{
                            height: moderateScale(800),
                            width: "100%", backgroundColor: "white",
                        }}>

                            <View style={{ height: scale(30), width: "100%", }}>


                                <Text style={{ color: "#000000", fontSize: scale(16), marginLeft: scale(8), fontWeight: "700" }}>


                                    Please ansers these questions

                                </Text>
                            </View>

                            <View style={{
                                height: moderateScale(30),
                                width: "100%", backgroundColor: "white", justifyContent: "center", alignItems: "center", flexDirection: "row"
                            }}>

                                <View style={{
                                    height: moderateScale(30),
                                    width: "89%", backgroundColor: "white", justifyContent: "center", alignItems: "center", marginLeft: scale(8)
                                }}>

                                    {/* <ProgressBarAnimated
                                        {...progressCustomStyles}

                                        width={barWidth}
                                        backgroundColorOnComplete="#6CC644"
                                        value={progress}


                                    /> */}
                                </View>
                                <View style={{
                                    height: moderateScale(30),
                                    width: "8%", backgroundColor: "white", justifyContent: "center", alignItems: "center"
                                }}>
                                    <Text style={{ color: "grey" }}>

                                        4/11

                                    </Text>
                                </View>

                            </View>
                            <View style={{ height: scale(350), width: "100%", justifyContent: "center" }}>
                            <ScrollView>

                            <FlatList showsVerticalScrollIndicator={false}
                            style={{ flexGrow: 1 }}
                            data={qcans}
                            renderItem={renderItem_qns}
                        />
                        </ScrollView>


</View>

                            
                            
                           

                            

                            <View style={{
                                height: moderateScale(140),
                                width: "100%",
                                justifyContent: "center",
                            }}>
                                <View style={{
                                    height: moderateScale(90),
                                    width: "90%",
                                    marginLeft: scale(20),
                                    borderWidth: 1,
                                    borderColor: "#C8C8C8",
                                    borderRadius: scale(10)

                                }}>

                                    <TextInput style={{ color: "#999999", fontSize: scale(15), marginLeft: scale(8), top: scale(12) }}
                                        placeholder={"Insert Text"}
                                        onChangeText={(text) => setremark(text)}
                                        
                                    />
                                </View>
                            </View>
                            <View style={{ height: moderateScale(25), width: "100%", alignItems: "center", justifyContent: "center" }}>
                                <Text style={{ color: "#F9623B", marginTop: scale(5) }}>
                                {seleqns.error_msg}
                                </Text>
                            </View>
                            <View style={{
                                height: moderateScale(110),
                                width: '100%',
                                flexDirection: "column",
                                 borderRadius: 10,

                            }}>
                                {/* <Text>{seleqns.error_msg}</Text> */}

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
                                   //onPress={() => pickuploadimg.current.open()}
                                   

                                   onPress = {()=>submit_qnsremark()}

                                >
                                    <Text style={{ textAlign: "center", fontSize: scale(16), marginLeft: moderateScale(15), color: "#FFFFFF" }}>

                                        Add Remarks
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </RBSheet>


                    {/* pickuploadimg */}

                    <RBSheet
                    ref={pickuploadimg}
                    closeOnDragDown={true}
                    closeOnPressMask={true}
                    customStyles={{
                        container: {
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 20,
                            height: moderateScale(430),
                            borderTopLeftRadius: moderateScale(20),
                            borderTopRightRadius: moderateScale(20),
                            // backgroundColor: "transparent",
                            backgroundColor: "white"
                        },
                    }}
                >
                    <View style={{ height: moderateScale(420), width: "100%", }}>
                        <View style={{ height: moderateScale(30), width: "43%", justifyContent: "center", alignItems: "center" }}>

                            <Text style={{ fontSize: scale(16), color: "black", fontWeight: "600" }}>Pickup and Drop
                            </Text>
                        </View>
                        <View style={{ height: moderateScale(140), alignItems: "center", width: "100%", flexDirection: "row", marginTop: scale(9) }}>
                        <TouchableOpacity  onPress={() => upload_image_new(1)} style={{
                                justifyContent: "center", marginLeft: scale(13), borderRadius: scale(12), alignItems: 'center', height: moderateScale(120), width: "28%", backgroundColor: "#E8E8E8",
                            }}>
                            <View>
                                <View style={{
                                    height: moderateScale(48),
                                    width: 60,
                                    flexDirection: "row",
                                    justifyContent: "center",
                                    alignItems: "center",

                                }}>
                                    <Image
                                        style={{ height: 25, width: 28,'display': model_img.doc_url === '' ?  'flex' : 'none' }}
                                        source={imagePath.camera}
                                    />

<Image
   style={{height: moderateScale(100),width:100,marginTop:30,marginLeft:-3,'display': model_img.doc_url === '' ?  'none' : 'flex'}}
   source={{
    uri: model_img.doc_url,
  }}
   />

                                </View>
                                <View style={{
                                    height: moderateScale(40),
                                    width: 80,
                                    justifyContent: "center",
                                    alignItems: "center", marginLeft: moderateScale(27),
                                }}>
                                    <TouchableOpacity  onPress={() => upload_image_new(1)}>
                                    <Text style={{ color: "#000000", fontSize: scale(12), textAlign: "center", top: scale(3), fontWeight: "600", marginLeft: scale(-14) }}>Add Model
                                    </Text>
                                    <Text style={{ color: "#000000", fontSize: scale(12), textAlign: "center", top: scale(3), fontWeight: "600", marginLeft: scale(-14) }}>Image </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            </TouchableOpacity>
                            <TouchableOpacity  onPress={() => upload_image_new(2)} style={{
                                justifyContent: "center", marginLeft: scale(13), borderRadius: scale(12), alignItems: 'center', height: moderateScale(120), width: "28%", backgroundColor: "#E8E8E8",
                            }}>
                            <View >
                                <View style={{
                                    height: moderateScale(48),
                                    width: 60,
                                    flexDirection: "row",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}>

                                    <Image
                                        style={{ height: 25, width: 28,'display': model_img.doc_url_part === '' ?  'flex' : 'none'  }}
                                        source={imagePath.camera}
                                    />
                                    <Image
   style={{height: moderateScale(100),width:100,marginTop:30,marginLeft:-3,'display': model_img.doc_url_part === '' ?  'none' : 'flex'}}
   source={{
    uri: model_img.doc_url_part,
  }}
   />

                                </View>
                                <View style={{
                                    height: moderateScale(40),
                                    width: 80,
                                    justifyContent: "center",
                                    alignItems: "center", marginLeft: moderateScale(27),
                                }}>
                                    <TouchableOpacity  onPress={() => upload_image_new(2)}>
                                    <Text style={{ color: "#000000", fontSize: scale(12), textAlign: "center", top: scale(3), fontWeight: "600", marginLeft: scale(-14) }}>Add Part
                                    </Text>
                                    </TouchableOpacity>
                                    <Text style={{ color: "#000000", fontSize: scale(12), textAlign: "center", top: scale(3), fontWeight: "600", marginLeft: scale(-14) }}>Image </Text>
                                </View>
 
                            </View>
                            </TouchableOpacity>

                            <View style={{
                                justifyContent: "center", marginLeft: scale(13), borderRadius: scale(12), alignItems: 'center', height: moderateScale(120), width: "28%", backgroundColor: "#E8E8E8",
                            }}>
                                <View style={{
                                    height: moderateScale(48),
                                    width: 60,
                                    flexDirection: "row",
                                    justifyContent: "center",
                                    alignItems: "center",                                }}>

                                    <Text style={{ color: "grey", fontSize: scale(38), textAlign: "center", marginLeft: scale(10) }}>+</Text>

                                </View>
                                <View style={{
                                    height: moderateScale(40),
                                    width: 80,

                                    justifyContent: "center",
                                    alignItems: "center", marginLeft: moderateScale(27),
                                }}>

                                    <Text style={{ color: "#000000", fontSize: scale(12), textAlign: "center", top: scale(3), fontWeight: "600", marginLeft: scale(-22) }}>Add
                                    </Text>
                                    <Text style={{ color: "#000000", fontSize: scale(12), textAlign: "center", top: scale(3), fontWeight: "600", marginLeft: scale(-22) }}>More
                                    </Text>
                                </View>
                            </View>

                        </View>
                        <View style={{ height: scale(50), width: "100%", justifyContent: "center", }}>
                            <Text style={{ color: "#000000", fontSize: scale(16), marginLeft: scale(12), fontWeight: "700" }}>
                                Estimated Delivery Date
                            </Text>
                        </View>
                        <View style={{ height: moderateScale(70), width: "100%", justifyContent: "center" }}>
                            <View style={{ height: moderateScale(65), width: "100%", alignItems: "center", flexDirection: "row", marginLeft: scale(8), }}>
                                <View style={{ height: moderateScale(65), width: "29%", margin: scale(5), borderRadius: 10, alignItems: "center", justifyContent: "center", backgroundColor:datetime.seldateid==1? '#0085FF' : '#E8E8E8', }}>
                                <TouchableOpacity onPress={()=>selectdate(datetime.today,1)}>
                                    <Text style={{ color: "black", fontSize: scale(14), fontWeight: "500", marginBottom: scale(5) }}>Today
                                    </Text>
                                    <Text style={{ color: "black", fontSize: scale(12), }}>{datetime.today}
                                    </Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ height: moderateScale(65), width: "29%", margin: scale(5), borderRadius: 10, alignItems: "center", justifyContent: "center", backgroundColor:datetime.seldateid==2? '#0085FF' : '#E8E8E8', }}>
                                <TouchableOpacity onPress={()=>selectdate(datetime.tomorrow,2)}>
                                    <Text style={{ color: "black", fontSize: scale(14), fontWeight: "500", marginBottom: scale(5) }}>Tomorrow

                                    </Text>
                                    <Text style={{ color: "black", fontSize: scale(12), }}>{datetime.tomorrow}

                                    </Text>
                                    </TouchableOpacity>

                                </View>
                                <View style={{ height: moderateScale(65), width: "29%", margin: scale(5), borderRadius: 10, alignItems: "center", justifyContent: "center", backgroundColor:datetime.seldateid==3? '#0085FF' : '#E8E8E8', }}>
                                <TouchableOpacity onPress={() => refRBcalender.current.open()}>
                                    <Text style={{ color: "black", fontSize: scale(14), fontWeight: "500", marginBottom: scale(5) }}>Custom

                                    </Text>
                                    <Text style={{ color: "black", fontSize: scale(12), }}>{datetime.resdate}

                                    </Text>
                                    </TouchableOpacity>
                                </View>
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
                                onPress={() => {update_pickupstatus()}}
                             >
                                <Text style={{ textAlign: "center", fontSize: scale(16), marginLeft: moderateScale(15), color: "#FFFFFF" }}>

                                    Update Status
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
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

