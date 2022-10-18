import React, { useState } from 'react';
import { SafeAreaView, View, Image, Text, TouchableOpacity, StyleSheet, FlatList, Dimensions, Modal, Button, ScrollView } from 'react-native'
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';
import colors from '../../constants/colors';
// import { ToggleSwitch } from 'rn-toggle-switch'
import imagePath from '../../utils/imagePath';
import {
  PieChart, LineChart, BarChart
} from "react-native-chart-kit";
import Pie from 'react-native-pie';
import DropDownPicker from 'react-native-dropdown-picker';
import navigationStrings from '../../utils/navigationStrings';
import { useNavigation } from '@react-navigation/native';
const Home = () => {
  const navigation = useNavigation();
  const [value, setValue] = React.useState('This Week');

  const [isOn, setIsOn] = useState(false)
  const [openCountry, setopenCountry] = React.useState(false);
  const dataList = [{
    orderId: "Order Id :#0653",
    date: "Date: 24/03/2022",
    title: "Display Screen Repair - Xiami Mi,Upto 46 inches ",
    timeSlot: "Time Slot 05 pm - 07 pm",
    image: imagePath.Location,
    address: "274, 10th Cross Rd, Wilson Garden, Bengaluru, Karnataka 560027, India",

  },
  {
    orderId: "Order Id :#0653",
    date: "Date: 24/03/2022",
    title: "Display Screen Repair - Xiami Mi,Upto 46 inches ",
    timeSlot: "Time Slot 05 pm - 07 pm",
    image: imagePath.Location,
    address: "274, 10th Cross Rd, Wilson Garden, Bengaluru, Karnataka 560027, India",

  }
  ]
  const newsData = [{
    title: 'Lorem ipsum dolor sit amet, consectetur',
    time: 'Updates  |  2 Hours ago',
    image: imagePath.NewsOne
  }, {

    title: 'Lorem ipsum dolor sit amet, consectetur',
    time: 'Updates  |  2 Hours ago',
    image: imagePath.NewsTwo

  }]
  const [items, setItems] = React.useState([
    { label: 'Sun', value: 'Sun' },
    { label: 'Mon', value: 'Mon' },
    { label: 'Tue', value: 'Tue' },
    { label: 'Wed', value: 'Wed' },
    { label: 'Thu', value: 'Thu' },
    { label: 'Fri', value: 'Fri' },
    { label: 'Sat', value: 'Sat' },

  ]);
  const { width, height } = Dimensions.get('window')


  const chartConfig = {
    backgroundGradientFrom: '#ffffff',
    fillShadowGradient: colors.green,
    decimalPlaces: 0,
    barPercentage: 0.5,
    fillShadowGradientOpacity: 1,
    backgroundGradientFromOpacity: 1,
    backgroundGradientTo: '#ffffff',
    spacingInner: 0.7,
    backgroundGradientToOpacity: 1,
    color: () => colors.green,
    labelColor: () => `black`,
    withShadow: false,

    propsForBackgroundLines: {
      strokeWidth: 0,
    },

  }
  const renderItem = ({ item }) => {

    return <View style={{
      height: moderateScale(180),
      marginTop: moderateVerticalScale(10),
      backgroundColor: colors.white, width: Dimensions.get('window').width - 20,
      borderRadius: moderateScale(10), marginLeft: moderateScale(10),
      paddingHorizontal: moderateScale(10)
    }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: moderateScale(10) }}>
        <Text>{item.orderId}</Text>
        <Text>{item.date}</Text>
      </View>
      <Text style={{ fontSize: scale(18), fontWeight: '800', color: colors.black, paddingVertical: moderateVerticalScale(10) }}>{item.title}</Text>
      <Text style={{ fontSize: scale(14), color: colors.grey, }}>{item.timeSlot}</Text>
      <View style={{ flexDirection: 'row', marginTop: moderateVerticalScale(10), alignItems: 'center' }}>
        <Image source={item.image} />
        <View style={{ marginHorizontal: moderateScale(5) }}></View>
        <Text style={{ fontSize: scale(13), color: colors.grey, marginHorizontal: moderateScale(10) }}>{item.address}</Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ alignSelf: 'flex-end', color: '#7E7E7E', fontSize: scale(15) }}>{item.price}</Text>

      </View>
    </View>
  }
  const renderNewsItem = ({ item }) => {
    return (<View>
      <View style={{justifyContent:'center', backgroundColor: colors.white,borderRadius:moderateScale(10),height:moderateScale(200),padding:10,marginHorizontal:10}} resizeMode={'contain'}>

      <Image source={item.image} style={{width:'100%',marginTop:moderateScale(10),height:moderateScale(131),borderRadius:moderateScale(7)}} resizeMode={'cover'}/>
      <Text style={{marginTop:moderateScale(10),fontWeight:'bold',color:colors.black}}>{item.title}</Text>
      
      <Text style={{fontWeight:'600',color:colors.grey,marginTop:moderateScale(5)}}>{item.time}</Text>
      </View>
     
    </View>)
  }
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ marginBottom: moderateScale(20) }}>
      <SafeAreaView>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: moderateVerticalScale(10) }}>
          <Image />
          <View style={{ width: '100%', height: moderateScale(50), justifyContent: 'space-between', flexDirection: 'row', marginHorizontal: moderateScale(10), alignItems: 'center' }}>
            <View>
              <Text style={{ fontWeight: 'bold', fontSize: scale(16), color: colors.black }}>Raiyan Sofwan</Text>
              <Text style={{ fontWeight: '400', fontSize: scale(14), color: colors.grey}}>Friday 01 April</Text>

            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={{ width: moderateScale(40), height: moderateScale(20) }}>
                {/* <ToggleSwitch
        text={{on: 'Online', off: 'Offline', activeTextColor: 'white', inactiveTextColor: '#B7B8BA'}}
        textStyle={{fontWeight: 'bold'}}
        color={{ indicator: 'white', active: 'rgba(32, 193, 173, 1)', inactive:  'rgba( 247, 247, 247, 1)', activeBorder: '#41B4A4', inactiveBorder: '#E9E9E9'}}
        active={true}
        disabled={false}
        width={40}
        radius={10}
        onValueChange={(val) => {
        }}
      /> */}


              </View>
              <Image source={imagePath.Notification} style={{ width: moderateScale(20), height: moderateScale(20), marginHorizontal: moderateScale(2) }} resizeMode={'contain'} />

              <Image source={imagePath.Menu} style={{ width: moderateScale(20), height: moderateScale(20), marginHorizontal: moderateScale(20) }} resizeMode={'contain'} />

            </View>
          </View>

        </View>
        <View>


          <View style={{ marginTop: moderateScale(20), flex: 3, flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: moderateScale(10) }}>
            <TouchableOpacity style={{ height: moderateScale(86), flex: 1, width: Dimensions.get('window').width / 2, borderRadius: moderateScale(10), backgroundColor: colors.white }}
            onPress={() => { navigation.navigate(navigationStrings.NEWLEADS) }}
            >
            


<Text style={{ padding: moderateScale(10), alignSelf: 'flex-start', fontSize: scale(14), fontWeight: '600', color: colors.grey }}>New Leads</Text>
              <Text style={{ fontSize: scale(26), alignSelf: "flex-start", color: colors.blue, paddingStart: moderateScale(10), fontWeight: 'bold' }}>03</Text>
</TouchableOpacity>
            <View style={{ marginHorizontal: moderateScale(5) }}></View>
            <View style={{ height: moderateScale(86), flex: 1, width: Dimensions.get('window').width / 2, borderRadius: moderateScale(10), backgroundColor: colors.white }}>
              <Text style={{ padding: moderateScale(10), alignSelf: 'flex-start', fontSize: scale(14), fontWeight: '600', color: colors.grey }}>Earnings</Text>
              <Text style={{ fontSize: scale(26), alignSelf: "flex-start", color: colors.blue, paddingStart: moderateScale(10), fontWeight: 'bold' }}>₹ 9,876</Text>
            </View>
            <View style={{ marginHorizontal: moderateScale(5) }}></View>
            <View style={{ height: moderateScale(86), flex: 1, width: Dimensions.get('window').width / 2, borderRadius: moderateScale(10), backgroundColor: colors.white }}>
              <Text style={{ padding: moderateScale(10), alignSelf: 'flex-start', fontSize: scale(14), fontWeight: '600', color: colors.grey }}>Your Ratings</Text>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontSize: scale(26), alignSelf: "flex-start", color: colors.blue, paddingStart: moderateScale(10), fontWeight: 'bold' }}>4.5</Text>
                <Image source={imagePath.Star} style={{ marginStart: moderateScale(10), width: moderateScale(20), height: moderateScale(20), alignSelf: 'center' }} />
              </View>

            </View>

          </View>
          <View style={{ borderRadius: moderateScale(10), marginTop: moderateScale(20), height: moderateScale(220), flexDirection: 'row', marginHorizontal: moderateScale(10), backgroundColor: colors.white }}>
            <View style={styles.sectionWrapper}>
              <View style={styles.container}>
                <View style={{ marginTop: moderateScale(40), marginHorizontal: moderateVerticalScale(20) }}>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', width }}>

                    <Pie
                      radius={80}
                      innerRadius={60}
                      sections={[
                        {
                          percentage: 10,
                          color: '#F9623B',
                        },
                        {
                          percentage: 20,
                          color: '#00B67F',
                        },
                        {
                          percentage: 30,
                          color: '#F9933B',
                        },
                        {
                          percentage: 40,
                          color: '#0085FF',
                        },

                      ]}
                      dividerSize={4}
                      strokeCap={'round'}
                    />
                    <View>
                      <View style={{ marginHorizontal: moderateScale(44), paddingVertical: moderateVerticalScale(5) }}>
                        <Text style={{ fontWeight: '800', color: colors.blue }}>25 Accepted</Text>
                      </View>
                      <View style={{ marginHorizontal: moderateScale(44), paddingVertical: moderateVerticalScale(5) }}>
                        <Text style={{ fontWeight: '800', color: colors.green }}>14 Job Started</Text>
                      </View>
                      <View style={{ marginHorizontal: moderateScale(44), paddingVertical: moderateVerticalScale(5) }}>
                        <Text style={{ fontWeight: '800', color: colors.yellow }}>25 Accepted</Text>
                      </View>
                      <View style={{ marginHorizontal: moderateScale(44), paddingVertical: moderateVerticalScale(5) }}>
                        <Text style={{ fontWeight: '800', color: colors.red }}>05 RTC</Text>
                      </View>
                      <View style={{ marginHorizontal: moderateScale(44), paddingVertical: moderateVerticalScale(5) }}>
                        <Text style={{ fontWeight: '800', color: colors.grey }}>Others</Text>
                      </View>
                    </View>
                  </View>


                </View>

              </View>
            </View>
          </View>
          <View style={{ borderRadius: moderateScale(10), marginTop: moderateScale(20), height: moderateScale(270), flexDirection: 'row', marginHorizontal: moderateScale(10), backgroundColor: colors.white }}>
            <View style={{ marginTop: moderateVerticalScale(20) }}>
              <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginHorizontal: moderateScale(10) }}>
                <Text style={{ fontSize: scale(16), color: colors.blue }}>₹ 3,645.00</Text>
                <View style={{ marginHorizontal: moderateScale(5) }}></View>
                <Text style={{ fontSize: scale(12), color: colors.green, alignContent: 'center' }}>15% More Than{'\n'} Last Week</Text>
              </View>
              <BarChart
                data={{
                  labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                  datasets: [
                    {
                      data: [
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100
                      ]
                    }
                  ]
                }}
                width={width - 20}
                height={height * 0.30}
                chartConfig={chartConfig}
                showBarTops={false}
                yAxisLabel={''}
                fromZero={true}
                segments={2}
              />
            </View>
          </View>
          <View style={{ borderRadius: moderateScale(10), marginTop: moderateScale(20), height: moderateScale(70), flexDirection: 'row', marginHorizontal: moderateScale(10), backgroundColor: colors.white }}>
            <View style={{ flexDirection: 'row', justifyContent: "space-between", padding: moderateScale(10), alignItems: 'center' }}>
              <View style={{ backgroundColor: colors.lightRed, justifyContent: 'center', width: moderateScale(60), height: moderateScale(60), alignItems: 'center', borderRadius: moderateScale(6) }}>
                <Image source={imagePath.Alert} style={{
                  width: moderateScale(30), height: moderateScale(30)
                  , alignSelf: 'center'
                }} resizeMode={'contain'} />
              </View>
              <View>
                <Text style={{ color: colors.red, fontSize: scale(16), fontWeight: 'bold', marginHorizontal: moderateScale(10) }}>3 Orders are late to delivered!!</Text>
                <Text style={{ color: colors.grey, fontSize: scale(14), fontWeight: '600', marginHorizontal: moderateScale(10) }}>Pick it up now</Text>
              </View>
            </View>
          </View>

        </View>
        <View style={{ marginTop: moderateVerticalScale(10), justifyContent: 'center', alignItems: 'center', width: '100%' }}>
          <Image source={imagePath.Repair} style={{ height: moderateScale(170), width: '100%' }} resizeMode={'cover'} />
        </View>
        <View style={{ marginTop: moderateVerticalScale(10) }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: moderateScale(20), alignItems: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: scale(18), color: colors.black }}>New Leads</Text>
            <TouchableOpacity onPress={() => { navigation.navigate(navigationStrings.NEWLEADS) }} style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <Text style={{ fontWeight: 'bold', color: colors.grey }}>See All</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { navigation.navigate(navigationStrings.PROFILE) }} style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <Text style={{ fontWeight: 'bold', color: colors.grey }}>Profile</Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: moderateVerticalScale(20) }}>
            <FlatList showsVerticalScrollIndicator={false} style={{ flexGrow: 1 }}
              data={dataList}
              renderItem={renderItem}
            />
          </View>

          <View style={{ marginTop: moderateVerticalScale(20),borderRadius:moderateScale(10)}}>
            <FlatList showsVerticalScrollIndicator={false} style={{ flexGrow: 1,borderRadius:moderateScale(10) }}
              data={newsData}
              horizontal
              renderItem={renderNewsItem}
            />
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  )
}
const styles = StyleSheet.create({

  container: { alignItems: 'center', justifyContent: 'center', },
  gauge: {
    position: 'absolute',
    width: 100,
    height: 160,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gaugeText: {
    backgroundColor: 'transparent',
    color: '#000',
    fontSize: 24,
  },
  propsForBackgroundLines: {
    strokeWidth: 0,
  },
})
export default Home