import React, { useRef, useState, useEffect } from 'react';
import { ScrollView, View, Image, Text, TextInput, TouchableOpacity,FlatList} from "react-native";
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';
import DropDownPicker from 'react-native-dropdown-picker';
import RBSheet from "react-native-raw-bottom-sheet";
import Header from '../../Compoent/DrawerHeader'
import imagePath from "../../utils/imagePath";
import SyncStorage from 'sync-storage';
import { useIsFocused } from '@react-navigation/native';
import {Root,  Popup, Toast } from 'react-native-popup-confirm-toast'
// import EnterOtp from './EnterOtpCopment';
// import QuatationRequ from './QuatationRequCompoent';


const CreateEstimate = ({ navigation }) => {
  const refRBSheet2 = useRef();

  const [issuelist, setissuelist] = useState([]);

  const isFocused = useIsFocused();
  // const [refreshing, setRefreshing] = React.useState(false);

  let token = SyncStorage.get('token');
   
  let order_e_id = SyncStorage.get('order_e_id');
  let order_flow_id = SyncStorage.get('order_flow_id');


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




  const fetchopenlead = async () => {
    let cart_show = SyncStorage.get('cart_show');
   console.warn(cart_show);
  //  alert("sdsd");
    if(cart_show==undefined){

    }else{
      setissuelist(cart_show);
    }
    

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
        console.warn(responseJson.data);
        const nextFormState = {
            ...leaddata,
            order_id: responseJson.data[0].order_id,
            //order_date:moment(responseJson.data[0].order_date, 'DD-MM-YYYY', true).format('Do MMMM ,YYYY'),
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

         
        //   leaddata.order_issues_total_price
        // alert(leaddata.order_id);
        //  console.warn(issuelist);


        //  setleaddata(responseJson.data);

    }).catch((error) => {
        //Error 
        console.error(error);
    });


  
}

const dataList_cart = issuelist.map(
  ({ issue_id,qty,title,price}) =>({

      issue_id:issue_id,
      title:title,
      
      item_qty:qty,
      price:price,
      total_price : price * qty,


  })

);
let totalcart = dataList_cart.reduce((a,v) =>  a = a *1+ v.total_price , 0 );
console.warn(issuelist);

//   React.useEffect(() => {

//     setTimeout(() => {
//       fetchopenlead();
      
//     },3000);

   
   
// //   console.warn(table.tableData);

   
//   }, []);


useEffect(() => {
  if(isFocused) {
  fetchopenlead();
  }
}, [isFocused]);


  


  const sendqutation = () =>{
    // alert(totalcart);
    let cart_issue = SyncStorage.get('cart_issue');
  //   let cart_show = SyncStorage.get('cart_show');
//  console.warn(cart_issue);
    let  bearer = 'Bearer ' + token;
       if(totalcart==0){
        //  alert("Please add some ");
        Popup.show({
          type: 'danger',
          title: 'Cart is empty?',
          textBody: 'Please add some Item in cart then proceed .',
            buttonText: 'Ok',
      okButtonStyle:{backgroundColor: '#0085FF'},
          
      //    duration:300,
          //  timing:3000,
      //   buttonEnabled: false,
          callback: () => {
              // alert('Okey Callback && hidden');
              // Popup.hide();
              // fetchneworder();
              Popup.hide();
          },
          
          
          
      })

       }else{
    if(order_flow_id==1){

    fetch('http://43.204.87.153/api/v1/partners/lead_add_issues', {

        method: 'POST',
        body: JSON.stringify({
            order: order_e_id,
            issues:cart_issue
         
           }), //post body
        headers: {
          'Authorization': bearer,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },


      }).then((response) => response.json())
      .then((responseJson) => {
      //  alert(responseJson);
       console.warn(responseJson);
        if(responseJson.success==true){

          
            navigation.goBack();

        }else{
           navigation.goBack();

       
        }

      }).catch((error) => {
        //Error 
        console.error(error);
    });

    
    // console.warn(cart_issue);
    // console.warn(cart_show);
  }else{


    fetch('http://43.204.87.153/api/v1/partners/lead_add_parts', {

        method: 'POST',
        body: JSON.stringify({
            order: order_e_id,
            part:cart
         
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

          
            // navigation.goBack();

        }else{
            // navigation.goBack();

        //   setleadissue([]);
        }

      }).catch((error) => {
        //Error 
        console.error(error);
    });

  }
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
        ₹ {item.price * item.item_qty}
        </Text>
      </View>
    </View>
    <View style={{ height: moderateScale(50), width: '60%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: scale(14), textAlign: 'center', color: 'grey' }}>
      {item.title}
      </Text>
    </View>

  </View>



  }
  return (
    <Root>
    <View style={{ flex: 1, flexDirection: 'column', }}>
      <Header image1={false}

        name={'Create Estimate'}


        
      />
      <ScrollView style={{ flex: 1, backgroundColor: "#F5F5F5" }}>
      
        <View style={{ alignItems: 'center', flexDirection: 'column', }}>
        <View style={{ alignItems: 'center', flexDirection: 'column',width:"90%", backgroundColor: "white",borderRadius:20, }}>

          {/* <View style={{ height: moderateScale(60), width: '100%', alignItems: 'center', flexDirection: 'row', backgroundColor: "#F5F5F5" }}>

            <View style={{ height: moderateScale(40), width: '40%', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', }}>

              <Text style={{ fontSize: scale(14), color: '#969696' }}>Device 1</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('NewPartScreen')} style={{ height: moderateScale(40), width: '60%', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', }}>

              <Text style={{ fontSize: scale(14), color: '#0085FF' }}>Add New Part</Text>
            </TouchableOpacity>

          </View> */}
          <View style={{ height: moderateScale(140), width: '100%', flexDirection: 'column', alignItems: 'center', }}>
            
          <View style={{ height: moderateScale(45), width: '100%', alignItems: 'center', flexDirection: 'row' }}>

<View style={{ height: moderateScale(40), width: '40%', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', }}>

  <Text style={{ fontSize: scale(14), color: '#969696' }}>Device 1</Text>
</View>
<TouchableOpacity onPress={() => navigation.navigate('newpart')} style={{ height: moderateScale(40), width: '60%', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', }}>

  <Text style={{ fontSize: scale(14), color: '#0085FF' }}>Add New Part</Text>
</TouchableOpacity>

</View>


            <View style={{ height: moderateScale(80), width: '90%', alignItems: 'center', borderBottomWidth: 0.8, borderColor: "grey", justifyContent: 'center', flexDirection: 'column', }}>
              <Text style={{ fontSize: scale(18), color: 'black', }}>
                {leaddata.issue_name} - {leaddata.brand},{leaddata.model_segment}
              </Text>

            </View>

            <View style={{ height: moderateScale(40), width: '90%', alignItems: 'center', justifyContent: 'flex-end', flexDirection: 'column', }}>

              <View style={{
                height: moderateScale(50), width: '80%', alignItems: 'flex-start', justifyContent: 'center',
              }}>
                <Text style={{ fontSize: scale(16), textAlign: 'center', color: '#000000' }}>
                  Part Details

                </Text>
              </View>


            </View>
          </View>

          <View style={{ height: moderateScale(350), width: '90%', flexDirection: 'column', borderRadius: 10, flexDirection: 'column', alignItems: 'center', }}>
            

      
            <FlatList showsVerticalScrollIndicator={false}
                            style={{ flexGrow: 1 }}
                            data={dataList_cart}
                            renderItem={renderItem}
                        />
                        








           


            <View style={{ height: moderateScale(60), width: '100%', flexDirection: 'row', alignItems: 'center', }}>

              <View style={{ height: moderateScale(30), width: '50%', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', paddingLeft: moderateScale(35), }}>
                <Text style={{ fontSize: scale(18), textAlign: 'center', color: 'black' }}>
                  Total
                </Text>
              </View>
              <View style={{ height: moderateScale(30), width: '50%', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'center', paddingRight: moderateScale(35), }}>
                <Text style={{ fontSize: scale(18), textAlign: 'center', color: 'black' }}>
                ₹ {totalcart}
                </Text>
              </View>

            </View>
          </View>
         
         

         

</View>
        </View>
        
      </ScrollView>
      <View style={{ height: moderateScale(90), width: '100%', flexDirection: 'column', borderRadius: 10, alignItems: 'center', marginBottom: moderateScale(20), justifyContent: 'center' }}>

        <View style={{ height: moderateScale(75), width: '100%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

          <TouchableOpacity onPress={()=>sendqutation()} style={{ height: moderateScale(50), width: '90%', borderRadius: moderateScale(10), backgroundColor: '#0C7EFA', alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: scale(16), color: 'white' }}>Send Quotation</Text>
          </TouchableOpacity>

        </View>
      </View>
    </View>
    </Root>

  )
}
export default CreateEstimate;

