import React, { useRef, useState, } from 'react';
import { ScrollView, View, Image, Text, TextInput, TouchableOpacity ,FlatList} from "react-native";
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';
import Header from '../../Compoent/DrawerHeader'
import imagePath from "./../../utils/imagePath";
import SyncStorage from 'sync-storage';
import colors from '../../constants/colors';
const NewPart = ({navigation}) => {
    const [Search, setSearch] = useState(null);
    const [counter, setCounter] = useState(99);
    const [counter2, setCounter2] = useState(0);
    const [counter3, setCounter3] = useState(0);
    const [counter4, setCounter4] = useState(12);
    const [counter5, setCounter5] = useState(5);
    const [counter6, setCounter6] = useState(99);

    let token = SyncStorage.get('token');
   
    let order_e_id = SyncStorage.get('order_e_id');
    let order_flow_id = SyncStorage.get('order_flow_id');

    const [loadissue, setleadissue] = useState([]);


    const fetch_part_issue = () =>{
        // alert(order_flow_id);
        let  bearer = 'Bearer ' + token;
        if(order_flow_id==1){
            // load issue

           
            fetch('http://43.204.87.153/api/v1/partners/lead_get_issues', {

                  method: 'POST',
                  body: JSON.stringify({
                    order: order_e_id,
                   
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
                    // responseJson.data[index].qty = 0;
                    var datanew = [...responseJson.data];
                    // alert(datanew.length);
                    for(let i = 0; i < datanew.length; i++){
                        datanew[i].qty = 0;
                    }
                   
                    setleadissue(datanew)
                     console.warn(datanew);
                   

                  }else{
                    setleadissue([]);
                  }

                }).catch((error) => {
                  //Error 
                  console.error(error);
              });


        }else{
            // load part


        }
    }
    // const [dataList,setdataList] = useState([]);

    

    const dataList = loadissue.map(
        ({ issue_id,issue_title,repair_type,repair_duration,warranty_period,discounted_price,templates_icon_url,qty}) =>({

            item_id:issue_id,
            item_title:issue_title,
            item_repair_type:repair_type,
            item_repair_duration:repair_duration,
            item_warranty_period:warranty_period,
            item_discounted_price:discounted_price,
            item_icon:templates_icon_url,
            item_qty:qty,
            item_price:discounted_price,


        })

    );


    const renderItem = ({ item }) => {
        return <View style={{ height: moderateScale(90), width: '100%', alignItems: 'center', flexDirection: 'column', justifyContent: 'center',   }}>
        <View style={{ height: moderateScale(78), width: '100%', alignItems: 'center', flexDirection: 'row', justifyContent: 'flex-start', }}>
            <View style={{ height: moderateScale(73), width: '20%', alignItems: 'center', flexDirection: 'column', justifyContent: 'center', }}>
                <Image
                     source={imagePath.add2}
                    // source={{
                    //     uri: item.item_icon,
                    //   }}
                    style={{
                        height: moderateScale(70), width: '80%', resizeMode: 'contain',marginLeft:scale(5)
                    }}
                />
                
            </View>
            <View style={{ height: moderateScale(70), width: '45%', alignItems: 'center', flexDirection: 'column', justifyContent: 'center', }}>

                <View style={{ height: moderateScale(50), width: '95%', alignItems: 'center', flexDirection: 'column', justifyContent: 'center', }}>
                    <Text style={{ fontSize: scale(14), color: '#000000' }}>{item.item_title}</Text>
                </View>
                <View style={{ height: moderateScale(25), width: '95%', alignItems: 'center', flexDirection: 'column', justifyContent: 'center', }}>
                    <Text style={{ fontSize: scale(13), color: '#000000' }}>₹ {item.item_price}</Text>
                </View>
            </View>
            <View style={{ height: moderateScale(55), width: '33%', alignItems: 'center', flexDirection: 'row', justifyContent: 'flex-start', }}>
                <TouchableOpacity onPress={() => incqty(item.item_qty - 1,item.item_id,item.item_title,item.item_discounted_price)} style={{ height: moderateScale(40), width: '37%', borderRadius: moderateScale(10), alignItems: 'center', justifyContent: 'center', flexDirection: 'row', borderWidth: 2, borderColor: '#0085FF', paddingBottom: moderateScale(15) }}>
                    <Text style={{ fontSize: scale(20), color: '#0085FF', textAlign: 'center' }}>‒</Text>
                </TouchableOpacity>
                <View style={{ height: moderateScale(30), width: '24%', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', }}>
                    <Text style={{ fontSize: scale(16), color: '#000000', textAlign: 'center' }}>{item.item_qty}</Text>
                </View>
                <TouchableOpacity onPress={() => incqty(item.item_qty + 1,item.item_id,item.item_title,item.item_discounted_price)} style={{ height: moderateScale(40), width: '37%', borderRadius: moderateScale(10), alignItems: 'center', justifyContent: 'center', flexDirection: 'row', borderWidth: 2, borderColor: '#0085FF', paddingBottom: moderateScale(15) }}>
                    <Text style={{ fontSize: scale(20), color: '#0085FF', textAlign: 'center' }}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>

    }

    React.useEffect(() => {
        fetch_part_issue();
        
       
      }, []);

      const [newupdatedList, setupdatedList] = useState([]);

      const [cart, setcart] = useState([]);
      const [cart_show, setcartshow] = useState([]);

      const [cart_total, setcarttotel] = useState('');
      const [cart_issue, setcartissue] = useState([]);

     
     

      const incqty = (qty,item_id,title,price) =>{
        

        var data = [...loadissue];
   var index = data.findIndex(obj => obj.issue_id === item_id);
   data[index].qty = qty;

setupdatedList({data})



if(cart.length==0){
    setcartissue(cart_issue => [item_id,...cart_issue] );
    setcart(cart => [{"part": item_id,"quantity":qty},...cart]);
     setcartshow(cart_show => [{"issue_id": item_id,"qty":qty,"title":title,"price":price},...cart_show] );

}else{
    var index = cart.findIndex(obj => obj.part === item_id);

    // alert(index);

      if(index==-1){
        setcart(cart => [{"part": item_id,"quantity":qty},...cart] );
        setcartissue(cart_issue => [item_id,...cart_issue] );
        setcartshow(cart_show => [{"issue_id": item_id,"qty":qty,"title":title,"price":price},...cart_show] );
      }else{
        // setcart( cart => (cart, {array: {"qty":qty}}) );
        cart[index].quantity = qty;
        cart_show[index].qty = qty;
        cart_show[index].price = price;
        //setcartshow(cart_show);

        

      }

   
    


}


   

      }
    //   console.warn(cart_issue);
      


      const dataList_cart = cart_show.map(
        ({ issue_id,qty,title,price}) =>({

            issue_id:issue_id,
            title:title,
            
            item_qty:qty,
            price:price,
            total_price : price * qty,


        })

    );
    
    let totalcart = dataList_cart.reduce((a,v) =>  a = a *1+ v.total_price , 0 );

const send_qutation = () =>{

    let  bearer = 'Bearer ' + token;
    if(order_flow_id==1){

    // console.warn(cart_show);
    SyncStorage.set('cart_show', cart_show);
   SyncStorage.set('cart_issue', cart_issue);
//  navigation.navigate('CreateEstimate', { });
navigation.navigate('CreateEstimate');
    
    // navigation.goBack();

    // fetch('http://43.204.87.153/api/v1/partners/lead_add_issues', {

    //     method: 'POST',
    //     body: JSON.stringify({
    //         order: order_e_id,
    //         issues:cart_issue
         
    //        }), //post body
    //     headers: {
    //       'Authorization': bearer,
    //       Accept: 'application/json',
    //       'Content-Type': 'application/json',
    //     },


    //   }).then((response) => response.json())
    //   .then((responseJson) => {
       
    //   console.warn(responseJson);
    //     if(responseJson.success==true){

          
    //         navigation.goBack();

    //     }else{
    //         navigation.goBack();

       
    //     }

    //   }).catch((error) => {
    //     //Error 
    //     console.error(error);
    // });
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

          
            navigation.goBack();

        }else{
            navigation.goBack();

        //   setleadissue([]);
        }

      }).catch((error) => {
        //Error 
        console.error(error);
    });

}

    // alert("working");
}

      const renderItem_part = ({ item }) => {
               return <View style={{ height: moderateScale(75), width: '100%', flexDirection: 'column', justifyContent: 'flex-start', }}>
                            <View style={{ height: moderateScale(30), width: '100%', flexDirection: 'row', alignItems: 'flex-start' }}>

                                <View style={{ height: moderateScale(50), width: '70%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ fontSize: scale(14), textAlign: 'center', color: 'black' }}>
                                    {item.title}
                                    </Text>
                                </View>
                                <View style={{ height: moderateScale(30), width: '30%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ fontSize: scale(14), textAlign: 'center', color: 'black' }}>
                                    ₹ {item.price * item.item_qty}
                                    </Text>
                                </View>
                            </View>
                            {/* <View style={{ height: moderateScale(30), width: '60%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ fontSize: scale(14), textAlign: 'center', color: 'grey' }}>
                                {item.title}
                                </Text>
                            </View> */}

                        </View>


      }
      
     


    return (
        <View style={{ flex: 1, flexDirection: 'column',backgroundColor:"#F5F5F5" }}>
            {/* <Header name={'Add New Part'} AddIcon={true} /> */}
            <View style={{ width: '100%', height: moderateScale(50), justifyContent: 'space-between', flexDirection: 'row', marginHorizontal: moderateScale(10), alignItems: 'center' }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={imagePath.BackIcon} style={{ width: moderateScale(20), height: moderateScale(20) }} resizeMode={'contain'} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: scale(20), fontWeight: 'bold', color: colors.black, }}>Add New Part</Text>
         {order_flow_id==2 && (
            <TouchableOpacity onPress={()=>navigation.navigate('AddNewPart')}>
                 <Image source={imagePath.plus} style={{ width: moderateScale(20), height: moderateScale(20), marginHorizontal: moderateScale(20) }} resizeMode={'contain'} />
                 </TouchableOpacity>
                 )}

{order_flow_id==1 && (
          
                 <Image source={imagePath.plus} style={{ width: moderateScale(20), height: moderateScale(20), marginHorizontal: moderateScale(20) }} resizeMode={'contain'} />
              
                 )}
        </View>
            <ScrollView>
                <View style={{ alignItems: 'center', flexDirection: 'column' }}>

                    <View style={{ height: moderateScale(70), width: '100%', alignItems: 'center', flexDirection: 'column', justifyContent: 'center' }}>


                        <View style={{ height: moderateScale(44), width: '90%', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row',   borderRadius: moderateScale(10), borderWidth: 2, borderColor: '#C4C4C4' }}>
                            <View style={{ height: moderateScale(40), width: '80%', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', }}>
                                <TextInput
                                    style={{ fontSize: scale(16), paddingLeft: moderateScale(20), height: moderateScale(40), width: '90%', alignItems: 'center', justifyContent: 'center', }}
                                    onChangeText={setSearch}
                                    value={Search}
                                    placeholder="Search for Part..."

                                    placeholderTextColor={"grey"}
                                />

                            </View>
                            <View style={{ height: moderateScale(34), width: '20%', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', }}>
                                <Image
                                    source={imagePath.search}
                                    style={{ height: moderateScale(20), width: '34%', resizeMode: 'contain', }}
                                />

                            </View>

                        </View>
                    </View>



                    <FlatList showsVerticalScrollIndicator={false} style={{ flexGrow: 1, marginBottom: moderateScale(40) }}
                data={dataList}
                renderItem={renderItem}
            />

                  
                    
                    
                    
                    <View style={{ height: moderateScale(60), width: '90%', alignItems: 'center', justifyContent: 'flex-end', flexDirection: 'column', }}>

                        <View style={{
                            height: moderateScale(50), width: '80%', alignItems: 'flex-start', justifyContent: 'center',
                        }}>
                            <Text style={{ fontSize: scale(16), textAlign: 'center', color: '#000000' }}>
                                Part Details

                            </Text>
                        </View>
                    </View>
                    <View style={{ height: moderateScale(280), width: '90%', flexDirection: 'column', borderRadius: 10, flexDirection: 'column', alignItems: 'center', }}>
                    <View style={{ height: moderateScale(155), width: '100%', flexDirection: 'column', justifyContent: 'flex-start', }}>

                    <FlatList showsVerticalScrollIndicator={false} style={{ flexGrow: 1, marginBottom: moderateScale(40) }}
                data={dataList_cart}
                renderItem={renderItem_part}
            />
            </View>


                       
                        


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
            </ScrollView>
            <View style={{ height: moderateScale(70), width: '100%', flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', justifyContent: 'center', marginBottom: moderateScale(20), marginTop: moderateScale(10) }}>

                <TouchableOpacity onPress={() => navigation.goBack()} style={{ height: moderateScale(47), width: '35%', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#BABABA', borderRadius: moderateScale(10), marginRight: moderateScale(5), }}>
                    <Text style={{ fontSize: scale(16), textAlign: 'center', color: 'white' }}>
                        Skip
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => send_qutation()} style={{ height: moderateScale(47), width: '55%', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#0085FF', borderRadius: moderateScale(10), marginLeft: moderateScale(5), }}>
                    <Text style={{ fontSize: scale(16), textAlign: 'center', color: 'white' }}>
                        Update Parts
                    </Text>
                </TouchableOpacity>

            </View>
        </View>

    )
}
export default NewPart;

