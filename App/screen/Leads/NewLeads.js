import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { SafeAreaView, View, Image, Text, TouchableOpacity, StyleSheet, FlatList, Dimensions, Modal, Button, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';
import colors from '../../constants/colors';
import SyncStorage from 'sync-storage';
import imagePath from '../../utils/imagePath';
import navigationStrings from '../../utils/navigationStrings';
import moment from 'moment';
import {Root,  Popup, Toast } from 'react-native-popup-confirm-toast'


// import OnBoarding from '../../OnBoarding/OnBoarding';

const NewLeads = ({navigation}) => {
   
//const navigation = useNavigation()
    const[category,setCategory]=useState(0)
    const [showModal, setShowModal] = useState(false);
    const [catergoryIndex, setCategoryIndex] = React.useState(0);
    const categories = ['All Leads', 'Today', 'Tommorrow', 'Weekly'];

    let token = SyncStorage.get('token');

    const [leaddata, setleaddata] = useState([]);

    const [leaddata_missed, setleaddatamissed] = useState([]);

    const [leaddata_decline, setleaddatadecline] = useState([]);

    const fetchneworder = async () => {

        let  bearer = 'Bearer ' + token;

        fetch('http://43.204.87.153/api/v1/partners/new_leads', {

            method: 'GET',
            headers: {
                'Authorization': bearer,
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },

        }).then((response) => response.json())
        .then((responseJson) => {;
            // console.warn(bearer);
            //  console.warn(responseJson.message);
            if(responseJson.success==false){
                setleaddata([]);
                // SyncStorage.remove('partnel_id');
                // navigation.navigate('Login', { });
            }else{
                setleaddata(responseJson.data);
            }
            // setleaddata(responseJson.data);

        }).catch((error) => {
            //Error 
            console.error(error);
        });
       

    }


    const fetchneworder_missed = async () => {

        let  bearer = 'Bearer ' + token;

        fetch('http://43.204.87.153/api/v1/partners/missed_leads', {

            method: 'GET',
            headers: {
                'Authorization': bearer,
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },

        }).then((response) => response.json())
        .then((responseJson) => {;
            if(responseJson.success==false){
                setleaddatamissed([]);
            }else{
                setleaddatamissed(responseJson.data);
            }
            //  console.warn(bearer);
          

        }).catch((error) => {
            //Error 
            console.error(error);
        });
       

    }


    const fetchneworder_declined = async () => {

        let  bearer = 'Bearer ' + token;

        fetch('http://43.204.87.153/api/v1/partners/declined_leads', {

            method: 'GET',
            headers: {
                'Authorization': bearer,
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },

        }).then((response) => response.json())
        .then((responseJson) => {;
            if(responseJson.success==false){
                setleaddatadecline([]);
            }else{

                setleaddatadecline(responseJson.data);
            }
            // console.warn(responseJson.data);
           

        }).catch((error) => {
            //Error 
            console.error(error);
        });
       

    }

    // console.warn(leaddata.order_appointments);

    if(leaddata.order_appointments==undefined){

    }
    
    const dataList = leaddata.map(
        ({ order_id,order_date ,model_segment,brand,order_appointments,order_address,order_id_encrypted,order_issues_total_price}) => ({
                  orderId: "Order Id :#"+order_id,
        date: "Date:"+order_date,
        title: "Display Screen Repair - "+brand+","+model_segment,
        order_id_encrypted:order_id_encrypted,
         
      timeSlot: "Time Slot "+order_appointments.appointment_date+','+order_appointments.timeslot_title,
    //    timeSlot:"",
        image: imagePath.Location,
        address: order_address[0].address_no+", "+order_address[0].address_line_1+","+order_address[0].address_line_2+","+order_address[0].city_title+","+order_address[0].state_title+","+order_address[0].pincode_number+" India",
        price: "INR "+order_issues_total_price,

    })
      );


      const dataList_missed = leaddata_missed.map(
        ({ order_id,order_date ,model_segment,brand,order_address,order_issues_total_price}) => ({
                  orderId: "Order Id :#"+order_id,
        date: "Date:"+order_date,
        title: "Display Screen Repair - "+brand+","+model_segment,
        timeSlot: "Time Slot ",
        image: imagePath.Location,
        address: order_address[0].address_no+", "+order_address[0].address_line_1+","+order_address[0].address_line_2+","+order_address[0].city_title+","+order_address[0].state_title+","+order_address[0].pincode_number+" India",
        price: "INR "+order_issues_total_price,
        type:"Missed",

    })
      );



      const dataList_declined = leaddata_decline.map(
        ({ order_id,order_date ,model_segment,brand,order_address,order_issues_total_price}) => ({
                  orderId: "Order Id :#"+order_id,
        date: "Date:"+order_date,
        title: "Display Screen Repair - "+brand+","+model_segment,
        timeSlot: "Time Slot ",
        image: imagePath.Location,
        address: order_address[0].address_no+", "+order_address[0].address_line_1+","+order_address[0].address_line_2+","+order_address[0].city_title+","+order_address[0].state_title+","+order_address[0].pincode_number+" India",
        price: "INR "+order_issues_total_price,
        type:"Declined",

    })
      );

      
    

    React.useEffect(() => {
        fetchneworder();
        fetchneworder_missed();
        fetchneworder_declined();
        
       
      }, []);

     
      const fetchneworder_bydate = async (todate , formdate) =>{
        let  bearer = 'Bearer ' + token;

        fetch('http://43.204.87.153/api/v1/partners/new_leads?date_from='+todate+'&date_to='+formdate, {

            method: 'GET',
            headers: {
                'Authorization': bearer,
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },

        }).then((response) => response.json())
        .then((responseJson) => {;

            //  console.warn(responseJson.data_count);
            if(responseJson.success==false){
                setleaddata([])

            }else{
                setleaddata(responseJson.data);
            }
           // setleaddata(responseJson.data);

        }).catch((error) => {
            //Error 
            console.error(error);
        });
       

    }

    const fetchneworder_declined_bydate = async (todate , formdate) =>{
        let  bearer = 'Bearer ' + token;

        fetch('http://43.204.87.153/api/v1/partners/declined_leads?date_from='+todate+'&date_to='+formdate, {

            method: 'GET',
            headers: {
                'Authorization': bearer,
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },

        }).then((response) => response.json())
        .then((responseJson) => {;

            //  console.warn(responseJson.data_count);
            if(responseJson.success==false){
                setleaddatadecline([])

            }else{
                setleaddatadecline(responseJson.data);
            }
           // setleaddata(responseJson.data);

        }).catch((error) => {
            //Error 
            console.error(error);
        });
       

    }

    

   
    const onChangeNumber = (i) =>{
        // catergoryIndex, setCategoryIndex

        setCategoryIndex(i);
        // alert(i);

        let ndate= new Date();

        let today = moment(ndate).format('DD-MM-YYYY');
        let tomorrow = moment(ndate).add(1, 'day').format('DD-MM-YYYY');
        let week = moment(ndate).add(7, 'day').format('DD-MM-YYYY');

        if(i==1){
            // alert(today);
            fetchneworder_bydate(today,today);
            fetchneworder_declined_bydate(today,today);
        }else if(i==2){
            fetchneworder_bydate(tomorrow,tomorrow);
            fetchneworder_declined_bydate(tomorrow,tomorrow);
        }else if(i==3){
            fetchneworder_bydate(today,week);
            fetchneworder_declined_bydate(today,week)
        }else{
            fetchneworder();
            fetchneworder_declined();
        }

        // if(i==1){

        // }
       
       
    }
    const acceptlead = (ststue,oeid) =>{
        

        let  bearer = 'Bearer ' + token;

       

        fetch('http://43.204.87.153/api/v1/partners/lead_invitation', {
            method: 'POST',
      body: JSON.stringify({
        order: oeid,
        accept_lead:ststue
          }), 
      headers: {
        'Authorization': bearer,
          Accept: 'application/json',
          'Content-Type': 'application/json',
      },



        }).then((response) => response.json())
        .then((responseJson) => {
            console.warn(responseJson);
            if(responseJson.sucess=='ok'){
                setTimeout(() => {
                    SyncStorage.set('order_e_id', id);
                    navigation.navigate('Orderdetails', { });
                    
                  },3000);

            }
            

        }).catch((error) => {
            //Error 
            console.error(error);
        });   



        // alert(ststue);
        
                if(ststue==0){

                    Popup.show({
                        type: 'danger',
                        title: 'Are you Busy?',
                        textBody: 'The request has been rejected.',
                          buttonText: 'Ok',
                    okButtonStyle:{backgroundColor: '#0085FF'},
                        
                    //    duration:300,
                        //  timing:3000,
                    //   buttonEnabled: false,
                        callback: () => {
                            alert('Okey Callback && hidden');
                            // Popup.hide();
                            fetchneworder();
                            Popup.hide();
                        },
                        
                        
                        
                    })




                }else{
        Popup.show({
                type: 'success',
                title: 'Great News!!',
                textBody: 'The request has been accepted.',
                //  buttonText: 'sdOk',
                // okButtonStyle:{backgroundColor: '#0085FF'},
                
               duration:300,
                 timing:3000,
              buttonEnabled: false,
                callback: () => {
                    alert('Okey Callback && hidden');
                    // Popup.hide();
                },
                
                
                
            })

            setTimeout(() => {
                navigation.navigate('OpenLeads', { });

               },3000);

        }
       

    }
    const CategoryList = () => {
        return (
            <View style={style.categoryContainer}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {categories.map((item, index) => 
                 
                    (

                    //     let cat= setCategory;
                    //     if (cat==0||index) {
                          
                    //    }
                        <TouchableOpacity 
                        
                            key={index}
                            activeOpacity={0.8}
                        //    onPress={() => setCategoryIndex(index)}
                           onPress = {()=>onChangeNumber(index)}
                           >
                            <Text
                                style={[
                                    style.categoryText,
                                    catergoryIndex === index && style.categoryTextSelected,
                                ]}>
                                {item}
                            </Text>
                        
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
        );
    };
    const renderItem = ({ item }) => {

        return <View style={{
            height: moderateScale(300),
            marginTop: moderateVerticalScale(10),
            marginBottom: moderateVerticalScale(10),
            backgroundColor: colors.white, width: Dimensions.get('window').width - 20,
            borderRadius: moderateScale(10), marginLeft: moderateScale(10), paddingHorizontal: moderateScale(10)
        }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: moderateScale(10) }}>
                <Text>{item.orderId} </Text>
                <Text>{item.date}</Text>
            </View>
            <Text style={{ fontSize: scale(18), fontWeight: '800', color: colors.black, paddingVertical: moderateVerticalScale(10) }}>{item.title}</Text>
            <Text style={{ fontSize: scale(14), color: colors.grey, }}>{item.timeSlot}</Text>
            <View style={{ flexDirection: 'row', marginTop: moderateVerticalScale(10), alignItems: 'center' }}>
                <Image source={item.image} />
                <View style={{ marginHorizontal: moderateScale(5) }}></View>
                <Text style={{ fontSize: scale(14), color: colors.grey, }}>{item.address}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: moderateVerticalScale(10) }}>
                <Text style={{ alignSelf: 'flex-end', color: '#7E7E7E', fontSize: scale(15) }}>{item.price}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: moderateVerticalScale(20) }}>
                <TouchableOpacity onPress={() => acceptlead(0,item.order_id_encrypted)} style={{ borderRadius: moderateScale(40), borderWidth: 1, borderColor: colors.red, backgroundColor: 'transparent', flex: 1, padding: moderateScale(8), justifyContent: 'space-between', flexDirection: 'row' }}>
                    <Image source={imagePath.Wrong} />
                    <Text style={{ fontSize: scale(14), color:'black', alignContent: 'center', marginRight: moderateScale(30), alignSelf: 'center' }}>Slide To{'\n'} Reject</Text>
                </TouchableOpacity>
                <View style={{ marginHorizontal: moderateScale(5) }}></View>
                <TouchableOpacity style={{ borderRadius: moderateScale(40), borderWidth: 1, backgroundColor: 'transparent', flex: 1, padding: moderateScale(8), justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' ,borderColor:colors.green}}
                
        //    onPress={() => { navigation.navigate(navigationStrings.ON_BOARDING) }}
                 onPress={() => acceptlead(1,item.order_id_encrypted)}
                >
                    <Image source={imagePath.Rightt} />
                    <Text style={{ fontSize: scale(14), color: colors.black, alignContent: 'center', marginRight: moderateScale(30), alignSelf: 'center' }}>Slide To{'\n'} Accept</Text>
                </TouchableOpacity>
            </View>
        </View>
    }

    const renderItem_missed = ({ item }) => {
        return <View style={{
            height: moderateScale(300),
            marginTop: moderateVerticalScale(10),
            marginBottom: moderateVerticalScale(10),
            backgroundColor: colors.white, width: Dimensions.get('window').width - 20,
            borderRadius: moderateScale(10), marginLeft: moderateScale(10), paddingHorizontal: moderateScale(10)
        }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: moderateScale(10) }}>
                <Text>{item.orderId}</Text>
                <Text>{item.date}</Text>
            </View>
            <Text style={{ fontSize: scale(18), fontWeight: '800', color: colors.black, paddingVertical: moderateVerticalScale(10) }}>{item.title}</Text>
            {/* <Text style={{ fontSize: scale(14), color: colors.grey, }}>{item.timeSlot}</Text> */}
            <View style={{ flexDirection: 'row', marginTop: moderateVerticalScale(10), alignItems: 'center' }}>
                <Image source={item.image} />
                <View style={{ marginHorizontal: moderateScale(5) }}></View>
                <Text style={{ fontSize: scale(14), color: colors.grey, }}>{item.address}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: moderateVerticalScale(10), }}>
                <Text style={{ alignSelf: 'flex-end', color: '#7E7E7E', fontSize: scale(15) }}>{item.price}</Text>

                
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: moderateVerticalScale(20) }}>
           
                            
                           
                    
              
                <View style={{ marginHorizontal: moderateScale(70) }}></View>
                <TouchableOpacity style={{ borderRadius: moderateScale(20), borderWidth: 1, backgroundColor: '#F3F3F3',  padding: moderateScale(8), justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' ,borderColor:'#8F8F8F'}}
                
        //    onPress={() => { navigation.navigate(navigationStrings.ON_BOARDING) }}
                 
                >
                    
                    <Text style={{ fontSize: scale(14), color: colors.black, alignContent: 'center',  alignSelf: 'center' }}>{item.type} lead</Text>
                </TouchableOpacity>

                
                
            </View>
        </View>


    }
    return (
       
        <ScrollView showsVerticalScrollIndicator={false}>
            
            <SafeAreaView style={{ flex: 1 }}>
            <Root>
                <View style={{ width: '100%', height: moderateScale(50), justifyContent: 'space-between', flexDirection: 'row', marginHorizontal: moderateScale(10), alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={imagePath.BackIcon} style={{ width: moderateScale(20), height: moderateScale(20) }} resizeMode={'contain'} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: scale(20), fontWeight: 'bold', color: colors.black, }}>New Leads</Text>
                    <TouchableOpacity onPress={()=>navigation.openDrawer()}>
                    <Image source={imagePath.Menu} style={{ width: moderateScale(20), height: moderateScale(20), marginHorizontal: moderateScale(20) }} resizeMode={'contain'} />
                    </TouchableOpacity>
                </View>
                <CategoryList />
                <View >

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: moderateScale(20), alignItems: 'center' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: scale(18), color: colors.black }}>New Leads</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={{ fontWeight: 'bold', color: colors.grey }}>Filter</Text>
                        </View>

                    </View>
                    <View >
                        <FlatList showsVerticalScrollIndicator={false}
                            style={{ flexGrow: 1 }}
                            data={dataList}
                            renderItem={renderItem}
                        />

<FlatList showsVerticalScrollIndicator={false}
                            style={{ flexGrow: 1 }}
                            data={dataList_missed}
                            renderItem={renderItem_missed}
                        />

<FlatList showsVerticalScrollIndicator={false}
                            style={{ flexGrow: 1 }}
                            data={dataList_declined}
                            renderItem={renderItem_missed}
                        />
                        

                  
                    </View>
                    <View >


                        <Modal
                            animationType={'slide'}
                            style={style.modal}
                            transparent={false}
                            visible={showModal}
                            onRequestClose={() => setShowModal(false)}>
                            {/*All views of Modal*/}
                            {/*Animation can be slide, slide, none*/}

                            <LinearGradient
                                colors={['#9FCCFA', '#F5F5F5', '#0974F1']}
                                start={{ x: 0.8, y: 0 }}
                                end={{ x: 0.5, y: 1 }} style={style.modal}>

                                <View style={{ height: Dimensions.get('window').height / 2, backgroundColor: colors.white, justifyContent: 'space-between', width: Dimensions.get('window').width - 20, borderRadius: moderateScale(10) }}>
                                    <View style={{ marginTop: moderateVerticalScale(20), marginHorizontal: moderateScale(10) }}>
                                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                    <View style={{ marginTop: moderateVerticalScale(20), flexDirection: 'row' }}>
                                            <Text style={{ fontSize: scale(14), fontWeight: '400',color:"grey" }}>Order ID :</Text>
                                            <Text style={{ fontSize: scale(14), fontWeight: '400', marginStart: moderateScale(5),color:"grey" }}># 0653</Text>
                                        </View>
                                        <View style={{ marginTop: moderateVerticalScale(20), flexDirection: 'row' }}>
                                            <Text style={{ fontSize: scale(14), fontWeight: '400' ,color:"grey"}}>Order ID :</Text>
                                            <Text style={{ fontSize: scale(14), fontWeight: '400', marginStart: moderateScale(5) ,color:"grey"}}># 0653</Text>
                                        </View>
                                    </View>
                                        <View style={{marginTop:moderateVerticalScale(20)}}>
                                        <Text style={{ color: colors.blue, fontSize: scale(18), fontWeight: '700' }}>Display Screen Repair - Xiaomi Mi, Upto 46 Inches</Text>
                                        </View>
                                        <View style={{ marginTop: moderateVerticalScale(20), flexDirection: 'row' }}>
                                            <Text style={{ fontSize: scale(14), fontWeight: '400' ,color:"grey"}}>Time Slot :</Text>
                                            <Text style={{ fontSize: scale(14), fontWeight: '400', marginStart: moderateScale(5),color:"grey"}}>05 pm - 07 pm</Text>
                                        </View>
                                        <View style={{ marginTop: moderateVerticalScale(20), flexDirection: 'row', alignItems: 'center' }}>
                                            <Image source={imagePath.Location} style={{ tintColor: colors.blue }} />
                                            <Text style={{ fontSize: scale(14), fontWeight: '400', marginStart: moderateScale(18) ,color:"grey"}}>274, 10th Cross Rd, Wilson Garden,{'\n'}Bengaluru, Karnataka 560027, India</Text>
                                        </View>
                                        <View style={{ marginTop: moderateVerticalScale(20), fontSize: scale(18),color:"grey" }}>
                                            <Text style={{fontWeight:'700',fontSize:scale(18),color:"grey"}}>INR 249</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: moderateVerticalScale(20) }}>
                                            <TouchableOpacity onPress={() =>setShowModal(!showModal)} style={{ borderRadius: moderateScale(40), borderWidth: 1, borderColor: colors.red, backgroundColor: 'transparent', flex: 1, padding: moderateScale(8), justifyContent: 'space-between', flexDirection: 'row' }}>
                                                <Image source={imagePath.Wrong} />
                                                <Text style={{ fontSize: scale(14), color: colors.black, alignContent: 'center', marginRight: moderateScale(30), alignSelf: 'center' }}>Slide To{'\n'} Reject</Text>
                                            </TouchableOpacity>
                                            <View style={{ marginHorizontal: moderateScale(5) }}></View>
                                            <TouchableOpacity onPress={() => acceptlead(1)} style={{ borderRadius: moderateScale(40), borderWidth: 1,borderColor:colors.green, backgroundColor: 'transparent', flex: 1, padding: moderateScale(8), justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                                                <Image source={imagePath.Rightt} />
                                                <Text style={{ fontSize: scale(14), color: colors.black, alignContent: 'center', marginRight: moderateScale(30), alignSelf: 'center' }}>Slide To{'\n'} Accept</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>

                                </View>

                            </LinearGradient>

                        </Modal>
                    </View>
                </View>
                </Root>
            </SafeAreaView>
            
        </ScrollView>
        
    )
}
const style = StyleSheet.create({
    categoryContainer: {
        flexDirection: 'row',
        marginTop: 30,
        marginBottom: 20,
        justifyContent: 'space-between',
    },
    categoryText: {
        fontSize: 16,
        color: colors.black,
        fontWeight: 'bold',
        marginHorizontal: moderateScale(10),
        borderRadius: scale(10),
        padding: scale(8),
        paddingHorizontal: moderateScale(10),
        backgroundColor: colors.white
    },
    categoryTextSelected: {
        color: colors.white,
        paddingBottom: 5,
        backgroundColor: colors.blue,
    },
    card: {
        height: 225,
        backgroundColor: colors.blue,
        marginHorizontal: 2,
        borderRadius: 10,
        marginBottom: 20,
        padding: 15,
    },
    header: {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    searchContainer: {
        height: 50,
        backgroundColor: colors.blue,
        borderRadius: 10,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        fontSize: 18,
        fontWeight: 'bold',
        flex: 1,
        color: colors.blue,
    },
    modal: {
        flex: 1,
        alignItems: 'center',
        padding: 100,
        backgroundColor: 'red',
        justifyContent: 'center'
    },
    text: {
        color: '#3f2949',
        marginTop: 10,
    },
    linearGradient: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        height: 200,
        width: 350,
    },
});
export default NewLeads;