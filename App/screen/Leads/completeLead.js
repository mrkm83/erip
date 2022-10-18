import React, { useState } from 'react';
import { SafeAreaView, View, Image, Text, TouchableOpacity, StyleSheet, FlatList, Dimensions, Modal, Button, ScrollView } from 'react-native'
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';
import colors from '../../constants/colors';
import imagePath from '../../utils/imagePath';
import SyncStorage from 'sync-storage';
import moment from 'moment';

const completeLeads = ({navigation}) => {
    const [showModal, setShowModal] = useState(false);
    const [catergoryIndex, setCategoryIndex] = React.useState(0);
    const categories = ['All Leads', 'Today', 'Tommorrow', 'Weekly'];
    let token = SyncStorage.get('token');
    const [leaddata, setleaddata] = useState([]);


    const fetchopenlead = async () => {

        let  bearer = 'Bearer ' + token;

        fetch('http://43.204.87.153/api/v1/partners/open_leads', {

            method: 'GET',
            headers: {
                'Authorization': bearer,
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },

        }).then((response) => response.json())
        .then((responseJson) => {;

            //  console.warn(responseJson.data);
            if(responseJson.success==false){
                setleaddata([]);
                // SyncStorage.remove('partnel_id');
                // navigation.navigate('Login', { });
            }else{
                setleaddata(responseJson.data);

            }

            

        }).catch((error) => {
            //Error 
            console.error(error);
        });
       

    }

    const fetchopenlead_bydate = async (todate , formdate) => {

        let  bearer = 'Bearer ' + token;

        fetch('http://43.204.87.153/api/v1/partners/open_leads?date_from='+todate+'&date_to='+formdate, {

            method: 'GET',
            headers: {
                'Authorization': bearer,
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },

        }).then((response) => response.json())
        .then((responseJson) => {;

            //  console.warn(responseJson.data);
            if(responseJson.success==false){
                setleaddata([]);

            }else{
                setleaddata(responseJson.data);
            }

             

        }).catch((error) => {
            //Error 
            console.error(error);
        });

    }

    React.useEffect(() => {
        fetchopenlead();
        
       
      }, []);


      const dataList = leaddata.map(
        ({ order_id,order_date,order_appointments ,model_segment,brand,order_id_encrypted,order_address,order_issues_total_price,order_job_started,order_timeline}) => ({
                  orderId: "Order Id :#"+order_id,
        date: "Date:"+order_date,
        title: "Display Screen Repair - "+brand+","+model_segment,
        timeSlot: "Time Slot -"+order_appointments.timeslot_title,
        image: imagePath.Location,
        address: order_address[0].address_no+", "+order_address[0].address_line_1+","+order_address[0].address_line_2+","+order_address[0].city_title+","+order_address[0].state_title+","+order_address[0].pincode_number+" India",
        price: 'INR '+order_issues_total_price,
        backgroundColor: '#ECFFF9',
        textColor: '#00B67F',
        text: order_timeline.sub_status_title,
        order_id_encrypted:order_id_encrypted,
        order_job_started:order_job_started,
       

    })
      );


   

    const lead_details = (id,job_status) =>{
        //   alert(job_status);

        SyncStorage.set('order_e_id', id);
        if(job_status==false){
            navigation.navigate('Orderdetails', { });
        }else{
            navigation.navigate('Orderdetails_afterjob', { });
        }
       

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
            //  alert(today);
            fetchopenlead_bydate(today,today);
           
        }else if(i==2){
            fetchopenlead_bydate(tomorrow,tomorrow);
          
        }else if(i==3){
            fetchopenlead_bydate(today,week);
          
        }else{
            fetchopenlead();
           
        }

        // if(i==1){

        // }
       
       
    }


    const CategoryList = () => {
        return (
            <View style={style.categoryContainer}>
                <ScrollView horizontal  showsHorizontalScrollIndicator={false}>
                    {categories.map((item, index) => (
                        <TouchableOpacity
                            key={index}
                            activeOpacity={0.8}
                           // onPress={() => setCategoryIndex(index)}
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
            height: moderateScale(212),
            marginTop: moderateVerticalScale(10),
            backgroundColor: colors.white, width: Dimensions.get('window').width - 20,
            borderRadius: moderateScale(10), marginLeft: moderateScale(10), paddingHorizontal: moderateScale(10)
        }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: moderateScale(10) }}>
                <Text>{item.orderId}</Text>
                <Text>{item.date}</Text>
            </View>
            <TouchableOpacity>
                 <Text style={{ fontSize: scale(15), fontWeight: '800', color: colors.black, paddingVertical: moderateVerticalScale(10) }}>{item.title}</Text>
                 </TouchableOpacity>
            <Text style={{ fontSize: scale(14), color: colors.grey, }}>Completed Date: 25/03/2022, 12:45pm</Text>
            <View style={{ flexDirection: 'row', marginTop: moderateVerticalScale(10) }}>
                <Image source={item.image} />
                <View style={{ marginHorizontal: moderateScale(5) }}></View>
                <Text style={{ fontSize: scale(14), color: colors.grey, }}>{item.address}</Text>
            </View>
            <View style={{ flexDirection: 'row', height: moderateVerticalScale(40), justifyContent: 'space-between' }}>
                <Text style={{ alignSelf: 'flex-end', color: '#7E7E7E', fontSize: scale(15) }}>{item.price}</Text>
                {/* <TouchableOpacity style={{
                    height: moderateScale(40), alignSelf: 'flex-end', borderRadius: moderateScale(10),
                    backgroundColor: item.backgroundColor, padding: moderateScale(10), borderWidth: 1, borderColor: item.textColor
                }}>
                    <Text style={{ color: item.textColor, fontSize: scale(12), alignSelf: 'center' }}>{item.text}</Text>
                </TouchableOpacity> */}

            </View>
        </View>
    }
    return (<SafeAreaView>

        <View style={{ width: '100%', height: moderateScale(50), justifyContent: 'space-between', flexDirection: 'row', marginHorizontal: moderateScale(10), alignItems: 'center' }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={imagePath.BackIcon} style={{ width: moderateScale(20), height: moderateScale(20) }} resizeMode={'contain'} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: scale(20), fontWeight: 'bold', color: colors.black, }}>Complete Leads</Text>
            <TouchableOpacity onPress={()=>navigation.openDrawer()}>
                 <Image source={imagePath.Menu} style={{ width: moderateScale(20), height: moderateScale(20), marginHorizontal: moderateScale(20) }} resizeMode={'contain'} />
                 </TouchableOpacity>
        </View>
        <CategoryList />
        <View >

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: moderateScale(20), alignItems: 'center' }}>
                <Text style={{ fontWeight: 'bold', fontSize: scale(18), color: colors.black }}>Open Leads</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={{ fontWeight: 'bold', color: colors.grey }}>Filter</Text>
                    <View style={{ margin: scale(5) }}></View>
                    <TouchableOpacity onPress={() => {
                        // setShowModal(!showModal);
                    }}>
                        <Image source={imagePath.Filter} />
                    </TouchableOpacity>
                </View>
                {/* <Modal
                    animationType={"slide"}
                    transparent={false}
                    visible={showModal}
                    onRequestClose={() => {
                        Alert.alert('Modal has now been closed.');
                    }}>

                    <View style={style.modal}>
                        <Text style={style.text}>Modal is open!</Text>
                        <Button
                            title="Click To Close Modal"
                            onPress={() => {
                                setShowModal(!showModal);
                            }}
                        />
                    </View>
                </Modal> */}
            </View>
            
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{marginBottom:350}}>
            <FlatList showsVerticalScrollIndicator={false} style={{ flexGrow: 1, marginBottom: moderateScale(40) }}
                data={dataList}
                renderItem={renderItem}
            />
            </View>
            </ScrollView>
            
        </View>
    </SafeAreaView>)
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
        height: Dimensions.get('window').width / 2,
        width: Dimensions.get('window').width / 2,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        padding: 100,
    },
    text: {
        color: '#3f2949',
        marginTop: 10,
    },
});
export default completeLeads;