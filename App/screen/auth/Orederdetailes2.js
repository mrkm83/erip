import React, { useRef, useState } from "react";
import { ScrollView, View, Image, Text, TextInput, TouchableOpacity,ProgressBarAndroid } from "react-native";
   import { scale, verticalScale, moderateScale,moderateVerticalScale } from 'react-native-size-matters-ch';
   import RBSheet from "react-native-raw-bottom-sheet";
 
import image from '../../aasets/index';
import Header from '../../Compoent/DrawerHeader';
const Orederdetailes2 = ({navigation}) => {


     
      const refRBSheet = useRef();
            const refRBSheet1 = useRef();
                        const refRBSheet2 = useRef();
     return (
        <View style={{ flex: 1, flexDirection: 'column', }}>
            <Header name={'Order Details'} />
            <ScrollView  style={{backgroundColor:"#F5F5F5",flex:1}}>
            <View   style={{height:moderateScale(50),width:"100%",justifyContent:"center"}}>
             <View   style={{height:moderateScale(40),borderRadius:12,width:"83%",backgroundColor:"#FFCFA5",justifyContent:"center" ,alignItems:"center" ,marginLeft:scale(28)}}>
            

            <Text style={{color:"#E26900",textAlign:"center",fontSize:scale(14)}}>
            Job has been rescheduled

            </Text>
            </View>
            </View>
                <View style={{ alignItems: 'center', flexDirection: 'column' }}>
                    <View style={{ height: moderateScale(60), width: '100%', alignItems: 'center', flexDirection: 'row' }}>
                        <View style={{ height: moderateScale(40), width: '50%', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', }}>
                            <Text style={{ fontSize: scale(14),color:"#7E7E7E" }}>Order ID # 0653</Text>
                        </View>
                        <View style={{ height: moderateScale(40), width: '50%', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', }}>
                            <Text style={{ fontSize: scale(14), color: 'black' }}>24th March, 2022</Text>
                        </View>
                    </View>
                    <View style={{ height: moderateScale(160), width: '100%', flexDirection: 'column', alignItems: 'center', }}>
                        <View style={{ height: moderateScale(50), width: '90%', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', }}>
                            <Text style={{ fontSize: scale(16), color: 'black', textAlign: 'center' }}>
                                Display Screen Repair - Xiaomi Mi,Upto 46 Inches
                            </Text>
                        </View>
                        <View style={{ height: moderateScale(40), width: '90%', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', }}>
                            <Text style={{ fontSize: scale(14), textAlign: 'center' ,color:"#7E7E7E"}}>
                                Client: Raiyan Sofwan
                            </Text>
                        </View>
                        <View style={{ height: moderateScale(70), width: '90%', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', }}>
                            <View style={{ height: moderateScale(50), width: '10%', alignItems: 'center', justifyContent: 'center' }}>
                                <Image
                                    source={image.Location}
                                    style={{
                                        height: moderateScale(28), width: 30, resizeMode: 'contain',
                                    }}
                                />
                            </View>
                            <View style={{
                                height: moderateScale(50), width: '80%', alignItems: 'center', justifyContent: 'center',
                            }}>
                                <Text style={{ fontSize: scale(14), textAlign: 'center',color:"#7E7E7E" }}>
                                    274, 10th Cross Rd, Wilson Garden,
                                    Bengaluru, Karnataka 560027, India
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ height: moderateScale(90), width: '90%', flexDirection: 'column', backgroundColor: 'white', borderRadius: 10, flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ height: moderateScale(80), width: '33%', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                source={image.Location}
                                style={{
                                    height: moderateScale(33), width: '80%', resizeMode: 'contain', marginBottom: moderateScale(7)
                                }}
                            />
                            <Text style={{ fontSize: scale(14), textAlign: 'center', color: 'black' }}>
                                Get Direction
                            </Text>
                        </View>
                        <View style={{ height: moderateScale(80), width: '33%', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                source={image.Phoneout}
                                style={{
                                    height: moderateScale(33), width: '80%', resizeMode: 'contain', marginBottom: moderateScale(7)
                                }}
                            />
                            <Text style={{ fontSize: scale(14), textAlign: 'center', color: 'black' }}>
                                Call
                            </Text>
                        </View>
                        <View style={{ height: moderateScale(80), width: '34%', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                source={image.Chat}
                                style={{
                                    height: moderateScale(33), width: '80%', resizeMode: 'contain', marginBottom: moderateScale(7)
                                }}
                            />
                            <Text style={{ fontSize: scale(14), textAlign: 'center', color: 'black' }}>
                                WhatsApp
                            </Text>
                        </View>
                    </View>
                    <View style={{ height: moderateScale(60), width: '100%', alignItems: 'center', flexDirection: 'row' }}>
                        <View style={{ height: moderateScale(40), width: '50%', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', }}>
                            <Text style={{ fontSize: scale(16), color: 'black' }}>Job Summary</Text>
                        </View>
                        <View style={{ height: moderateScale(40), width: '50%', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', }}>
                            <Text style={{ fontSize: scale(16), color: '#0085FF' }}>Add Remarks</Text>
                        </View>
                    </View>
                    <View style={{ height: moderateScale(290), width: '90%', flexDirection: 'column', backgroundColor: 'white', borderRadius: 10, flexDirection: 'column', alignItems: 'center', marginBottom: 25 }}>
                        <View style={{ height: moderateScale(75), width: '100%', flexDirection: 'column', justifyContent: 'flex-start', }}>
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
                        </View>
                        <View style={{ height: moderateScale(75), width: '100%', flexDirection: 'column', justifyContent: 'flex-start', }}>
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
                            <View style={{ height: moderateScale(30), width: '63%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ fontSize: scale(14), textAlign: 'center', color: 'grey' }}>
                                    Display Screen Repair
                                </Text>
                            </View>
                        </View>
                        <View style={{ height: moderateScale(75), width: '100%', flexDirection: 'column', justifyContent: 'flex-start', }}>
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
                            <View style={{ width: '80%', height: 1, backgroundColor: 'grey', marginLeft: moderateScale(35), marginRight: moderateScale(35), flexDirection: 'row', marginTop: moderateScale(20) }}></View>
                        </View>
                        <View style={{ height: moderateScale(60), width: '100%', flexDirection: 'row', alignItems: 'center', }}>
                            <View style={{ height: moderateScale(30), width: '50%', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', paddingLeft: moderateScale(35), }}>
                                <Text style={{ fontSize: scale(14), textAlign: 'center', color: 'black' }}>
                                    Total
                                </Text>
                            </View>
                            <View style={{ height: moderateScale(30), width: '50%', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'center', paddingRight: moderateScale(35), }}>
                                <Text style={{ fontSize: scale(14), textAlign: 'center', color: 'black' }}>
                                    $1234.00
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ height: moderateScale(70), width: '100%', flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', justifyContent: 'center', marginBottom: 35 }}>
                        <TouchableOpacity style={{ height: moderateScale(50), width: '45%', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#0085FF', borderRadius: moderateScale(10), marginRight: moderateScale(5), }}>
                            <Text style={{ fontSize: scale(16), textAlign: 'center', color: 'white' }}>
                                Update Status
                            </Text>
                        </TouchableOpacity  
                        >
                        
                        <TouchableOpacity style={{ height: moderateScale(50), width: '45%', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#00B67F', borderRadius: moderateScale(10), marginLeft: moderateScale(5), }}
                        
                onPress={() => refRBSheet1.current.open()} 

                        >
                            <Text style={{ fontSize: scale(16), textAlign: 'center', color: 'white' }}>
                                Start Job
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

 
       <RBSheet
        ref={refRBSheet1}
        closeOnDragDown={true}
        closeOnPressMask={true}
        // animationType={true}
        customStyles={{
             container: {
              justifyContent: "center",
              alignItems: "center",
              borderRadius:20,
              height:moderateScale(210),
              borderTopLeftRadius:moderateScale(20),
                borderTopRightRadius:moderateScale(20),



             

            // backgroundColor: "transparent",
            backgroundColor:"white"
                 
           },
                   
            
          
        }}

 
      >

      <View  style ={{height:moderateScale(210),width:"100%",backgroundColor:"white",borderBottomStartRadius:40}}>
            <View  style ={{height:moderateScale(40),width:"30%",justifyContent:"center",alignItems:"center"}}>

            <Text  style={{color:"#000000",textAlign:"center",fontSize:scale(14),fontWeight:"500"}}>
            Arriving Late

            </Text>
</View>

            <View  style ={{height:moderateScale(80),width:"100%",alignItems:"center",flexDirection:"row",}}>

           <View  style ={{height:moderateScale(50),width:"28%",borderRadius:10,alignItems:"center",justifyContent:"center",backgroundColor:"#E8E8E8",marginLeft:scale(15)}}>
<Text  style={{color:"black",fontSize:scale(14),fontWeight:"500"}}>10 minutes
</Text>
          
</View>
           <View  style ={{height:moderateScale(50),width:"28%",borderRadius:10,alignItems:"center",justifyContent:"center",marginLeft:scale(15),backgroundColor:"#0085FF"}}>
<Text  style={{color:"white",fontSize:scale(14),fontWeight:"500"}}>30 minutes
</Text>
          
</View>
           <View  style ={{height:moderateScale(50),width:"28%",borderRadius:10,alignItems:"center",justifyContent:"center",backgroundColor:"#E8E8E8",marginLeft:scale(15)}}>
<Text  style={{color:"black",fontSize:scale(14),fontWeight:"500"}}>1 Hour

</Text>
          
</View>
 
</View>
 <View style={{height: moderateScale(60),
 width:'100%',
   flexDirection:"column",
    marginTop:moderateScale(8),
   justifyContent:"center",
    borderRadius:10,
  
   }}>

 <TouchableOpacity      


 
style={{height: moderateScale(50),
 width:'90%',
   flexDirection:"column",
    marginTop:moderateScale(10),
   justifyContent:"center",
   borderWidth:1,
   borderColor:"#0085FF",
   borderRadius:12,backgroundColor:"#0085FF",
   marginLeft:moderateScale(20)

 
   



}} 

                onPress={() => refRBSheet2.current.open()} 

    >
 <Text style={{textAlign:"center",fontSize:scale(16),marginLeft:moderateScale(15),color:"#FFFFFF"}}>
 
 
Update Status
 </Text>
 </TouchableOpacity>


</View>
      </View>

        </RBSheet>




       <RBSheet
        ref={refRBSheet2}
        closeOnDragDown={true}
        closeOnPressMask={true}
         customStyles={{
             container: {
              justifyContent: "center",
              alignItems: "center",
              borderRadius:20,
              height:moderateScale(710),
              borderTopLeftRadius:moderateScale(20),
                borderTopRightRadius:moderateScale(20),
            // backgroundColor: "transparent",
            backgroundColor:"white"
                 
           },
        }}

 
      >

      <View  style ={{              height:moderateScale(710),
width:"100%",backgroundColor:"white",borderBottomStartRadius:40}}>
 
  <View  style ={{              height:moderateScale(30),
width:"30%",borderBottomStartRadius:40,justifyContent:"center",alignItems:"center"}}>
  <ProgressBarAndroid
          styleAttr="Horizontal"
           progress={0.5}
          color="#2196F3"
        />
 
</View>``


  <View  style ={{              height:moderateScale(270),
width:"100%",flexDirection:"column", justifyContent:"center"}}>
  
 



 <View  style ={{              height:moderateScale(215),
width:"90%",flexDirection:"column",borderWidth:0.8,marginLeft:scale(15),borderRadius:14,borderColor:"#C4C4C4"}}>
  
  <View  style ={{              height:moderateScale(58),
width:"100%",flexDirection:"row",}}>
  
  <View  style ={{   height:moderateScale(55)
, width:"20%",alignItems:"center",flexDirection:"row",justifyContent:"center",borderBottomWidth:0.5,borderColor:"#DCDCDC"}}>

  <View  style ={{              height:moderateScale(55),justifyContent:"center"
, width:"20%",  }}>


  <Text style={{textAlign:"center",fontSize:scale(15),marginLeft:scale(-28),color:'black',fontWeight:"700"}}>
  
  Sl</Text>
 </View>
<View  style={{height:55,borderWidth:0.3,borderColor:"#DCDCDC"}}>

</View>
</View>
   <View  style ={{              height:moderateScale(55)
, width:"56%",alignItems:"center",flexDirection:"row",justifyContent:"center",borderBottomWidth:0.8,borderColor:"#DCDCDC"}}>

  <View  style ={{              height:moderateScale(45),justifyContent:"center"
, width:"56%",  }}>


  <Text style={{textAlign:"center",fontSize:scale(15),marginLeft:scale(-45),color:"black",fontWeight:"700"}}>
  
  Remark</Text>
 </View>
<View  style={{height:60,borderWidth:0.3,borderColor:"#DCDCDC" }}>

</View>


</View>
  <View  style ={{              height:moderateScale(55)
, width:"24%",alignItems:"center",flexDirection:"row",justifyContent:"center",borderBottomWidth:0.8,borderColor:"#DCDCDC"}}>

 


  <Text style={{textAlign:"center",fontSize:scale(15),marginLeft:scale(-28),color:"black",fontWeight:"700"}}>
  
  Date</Text>
 </View>

 

</View>
 
  <View  style ={{              height:moderateScale(78),
width:"100%",flexDirection:"row", }}>
  
  <View  style ={{   height:moderateScale(75)
, width:"19%",flexDirection:"row",justifyContent:"center",borderBottomWidth:0.8,borderColor:"#DCDCDC"}}>

  <View  style ={{              height:moderateScale(75),justifyContent:"center",alignItems:"center"
, width:'19%',  }}>
  <Text style={{textAlign:"center",fontSize:scale(15),marginLeft:scale(-17),color:"black"}}>

  01</Text>
 </View>
<View  style={{height:85,borderWidth:0.3,borderColor:"#DCDCDC" ,marginLeft:scale(6), }}>

</View>
</View>
   <View  style ={{              height:moderateScale(75),alignItems:"center"
, width:"44%",flexDirection:"row",justifyContent:"center",borderBottomWidth:0.8,borderColor:"#DCDCDC"}}>

  <View  style ={{              height:moderateScale(75),justifyContent:"center" 
,  width:163, }}>

<View>
 <Text style={{fontSize:scale(13),textAlign:"center",color:"#000000"}}>
  
  Add Remark Details 
 </Text>
</View>
 

<View>
 <Text style={{fontSize:scale(12),textAlign:"center",marginTop:scale(2),color:"#000000"}}>
  
  2nd Line of details
</Text>
</View>
 


 </View>
<View  style={{height:85,borderWidth:0.3,borderColor:"#DCDCDC" ,marginLeft:scale(6)}}>

</View>


</View>
  <View  style ={{              height:moderateScale(75)
, width:"37%",alignItems:"center",flexDirection:"column",justifyContent:"center",borderBottomWidth:0.8,borderColor:"#DCDCDC"}}>

 
 <View>
  <Text style={{textAlign:"center",fontSize:scale(15),marginStart:scale(20),color:"black",marginBottom:scale(6)}}>
  04/01/22  
 </Text>
  </View>
 <View>
  <Text style={{textAlign:"center",fontSize:scale(15),marginStart:scale(20),color:"black",}}>
  05:00pm
 </Text>
</View>
 </View>

 

</View>
 
  <View  style ={{              height:moderateScale(78),
width:"100%",flexDirection:"row", }}>
  
  <View  style ={{   height:moderateScale(75)
, width:"19%",flexDirection:"row",justifyContent:"center",borderColor:"#DCDCDC"}}>

  <View  style ={{              height:moderateScale(75),justifyContent:"center",alignItems:"center"
, width:'19%',  }}>


  <Text style={{textAlign:"center",fontSize:scale(15),marginLeft:scale(-17),color:"black"}}>
  
  02</Text>
 </View>
<View  style={{height:84,borderWidth:0.3,borderColor:"#DCDCDC",marginLeft:scale(6), }}>

</View>
</View>
   <View  style ={{              height:moderateScale(75),alignItems:"center"
, width:"44%",flexDirection:"row",justifyContent:"center",borderColor:"#DCDCDC"}}>

  <View  style ={{              height:moderateScale(75),justifyContent:"center" 
,  width:163, }}>

<View>
 <Text style={{fontSize:scale(13),textAlign:"center",color:"#000000"}}>
  
  Add Remark Details 
 </Text>
</View>
 

<View>
 <Text style={{fontSize:scale(12),textAlign:"center",marginTop:scale(2),color:"#000000"}}>
  
  2nd Line of details
</Text>
</View>
 </View>
<View  style={{height:85,borderWidth:0.3,borderColor:"#DCDCDC",marginLeft:scale(6)}}>

</View>
</View>
  <View  style ={{              height:moderateScale(75)
, width:"37%",alignItems:"center",flexDirection:"column",justifyContent:"center",borderColor:"#DCDCDC"}}>

  <View>
  <Text style={{textAlign:"center",fontSize:scale(15),marginStart:scale(20),color:"black",marginBottom:scale(6)}}>
  02/01/26
 </Text>
  </View>
 <View>
  <Text style={{textAlign:"center",fontSize:scale(15),marginStart:scale(20),color:"black",}}>
  09:00pm
 </Text>
</View>
 </View>

 

</View>
 
 </View>





</View>
<View   style={{

    height:moderateScale(50),width:"100%",flexDirection:"row", alignItems:"center"
}}>
  <View  style ={{              height:moderateScale(45), 
width:"30%",backgroundColor:"white",justifyContent:"center",alignItems:"center"}}>
 <Text style={{color:"black",fontSize:scale(15),fontWeight:"700",textAlign:"center",}}>
Add Remark
 
 
 
 </Text>
 </View>
</View>

<View style={{
   height:moderateScale(200),
   width:"100%", 
   justifyContent:"center",
  }}>
<View style={{
   height:moderateScale(190),
   width:"90%", 
    marginLeft:scale(20),
   borderWidth:1,
   borderColor:"#C8C8C8",
   borderRadius:scale(10)

 }}>
 
 <Text style={{color:"#999999",fontSize:scale(15),marginLeft:scale(8),top:scale(12)}}>
 
 Write your remark

 </Text>
 </View>
 </View>
  <View style={{height: moderateScale(200),
 width:'100%',
   flexDirection:"column",
    marginTop:moderateScale(8),
   justifyContent:"center",
    borderRadius:10,
  
   }}>

 <TouchableOpacity      


 
style={{height: moderateScale(50),
 width:'90%',
   flexDirection:"column",
    marginTop:moderateScale(10),
   justifyContent:"center",
   borderWidth:1,
   borderColor:"#0085FF",
   borderRadius:12,backgroundColor:"#0085FF",
   marginLeft:moderateScale(20)

 
   



}} 
                                                     onPress={() => navigation.navigate('Notification')}

    >
 <Text style={{textAlign:"center",fontSize:scale(16),marginLeft:moderateScale(15),color:"#FFFFFF"}}>

Add Remarks
 </Text>
 </TouchableOpacity>


</View>
</View>
 
 
        </RBSheet>
              </ScrollView>
        </View>
    )
}
export default Orederdetailes2
