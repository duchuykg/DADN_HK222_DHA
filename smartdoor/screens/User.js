import * as React from "react";
import { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { Image, StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput} from "react-native";
const Door = ({navigation }) => {
  const onPressButton = () => {
    return navigation.navigate('Details')
  };
  

  
  
  return (
    <>
      <View style={styles.groupContainer}>
        <View style={styles.listConfirmGroup}>
          <View style={styles.listConfirm1}>
            <Image
              style={styles.iconL1}
              resizeMode="cover"
              source={require("../assets/Avatar.png")}
            />
            <View style={[styles.masterList1, styles.ml12]}>
              <Text style={[styles.caption1, {fontWeight: 'bold'}]}>IU</Text>
              <Text style={[styles.subcaption1, styles.mt2]}>Ca sĩ Hàn Quốc</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.listConfirm2} onPress={onPressButton}>
            <Image
              style={styles.iconL1}
              resizeMode="cover"
              source={require("../assets/group-9.png")}
            />
          </TouchableOpacity>
        </View>
      </View>

      
      
{/* ############################################################################################# */}
<View style={styles.groupContainer}>
        <View style={styles.listConfirmGroup}>
          <View style={styles.listConfirm1}>
            <Image
              style={styles.iconL1}
              resizeMode="cover"
              source={require("../assets/Avatar1.png")}
            />
            <View style={[styles.masterList1, styles.ml12]}>
              <Text style={[styles.caption1, {fontWeight: 'bold'}]}>Tiểu Long Nữ</Text>
              <Text style={[styles.subcaption1, styles.mt2]}>Thần điêu đại hiệp</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.listConfirm2} onPress={onPressButton}>
            <Image
              style={styles.iconL1}
              resizeMode="cover"
              source={require("../assets/group-9.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.groupContainer}>
        <View style={styles.listConfirmGroup}>
          <View style={styles.listConfirm1}>
            <Image
              style={styles.iconL1}
              resizeMode="cover"
              source={require("../assets/Avatar2.png")}
            />
            <View style={[styles.masterList1, styles.ml12]}>
              <Text style={[styles.caption1, {fontWeight: 'bold'}]}>Huỳnh Hiểu Minh</Text>
              <Text style={[styles.subcaption1, styles.mt2]}>Diễn viên Trung Quốc</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.listConfirm2} onPress={onPressButton}>
            <Image
              style={styles.iconL1}
              resizeMode="cover"
              source={require("../assets/group-9.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.groupContainer}>
        <View style={styles.listConfirmGroup}>
          <View style={styles.listConfirm1}>
            <Image
              style={styles.iconL1}
              resizeMode="cover"
              source={require("../assets/Avatar3.png")}
            />
            <View style={[styles.masterList1, styles.ml12]}>
              <Text style={[styles.caption1, {fontWeight: 'bold'}]}>Lưu Diệc Phi</Text>
              <Text style={[styles.subcaption1, styles.mt2]}>Diễn viên Trung Quốc</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.listConfirm2} onPress={onPressButton}>
            <Image
              style={styles.iconL1}
              resizeMode="cover"
              source={require("../assets/group-9.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.groupContainer}>
        <View style={styles.listConfirmGroup}>
          <View style={styles.listConfirm1}>
            <Image
              style={styles.iconL1}
              resizeMode="cover"
              source={require("../assets/Avatar4.png")}
            />
            <View style={[styles.masterList1, styles.ml12]}>
              <Text style={[styles.caption1, {fontWeight: 'bold'}]}>Amanda Doe</Text>
              <Text style={[styles.subcaption1, styles.mt2]}>amanda@gmail.com</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.listConfirm2} onPress={onPressButton}>
            <Image
              style={styles.iconL1}
              resizeMode="cover"
              source={require("../assets/group-9.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.groupContainer}>
        <View style={styles.listConfirmGroup}>
          <View style={styles.listConfirm1}>
            <Image
              style={styles.iconL1}
              resizeMode="cover"
              source={require("../assets/Avatar5.png")}
            />
            <View style={[styles.masterList1, styles.ml12]}>
              <Text style={[styles.caption1, {fontWeight: 'bold'}]}>Yoona</Text>
              <Text style={[styles.subcaption1, styles.mt2]}>Nhóm nhạc Hàn Quốc</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.listConfirm2} onPress={onPressButton}>
            <Image
              style={styles.iconL1}
              resizeMode="cover"
              source={require("../assets/group-9.png")}
            />
          </TouchableOpacity>
        </View>
        
      </View>
      <View style={styles.groupContainer}>
        <View style={styles.listConfirmGroup}>
          <View style={styles.listConfirm1}>
            <Image
              style={styles.iconL1}
              resizeMode="cover"
              source={require("../assets/Avatar.png")}
            />
            <View style={[styles.masterList1, styles.ml12]}>
              <Text style={[styles.caption1, {fontWeight: 'bold'}]}>Lee Ji-eun</Text>
              <Text style={[styles.subcaption1, styles.mt2]}>Thần tượng Kpop</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.listConfirm2} onPress={onPressButton}>
            <Image
              style={styles.iconL1}
              resizeMode="cover"
              source={require("../assets/group-9.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.groupContainer}>
        <View style={styles.listConfirmGroup}>
          <View style={styles.listConfirm1}>
            <Image
              style={styles.iconL1}
              resizeMode="cover"
              source={require("../assets/Avatar6.png")}
            />
            <View style={[styles.masterList1, styles.ml12]}>
              <Text style={[styles.caption1, {fontWeight: 'bold'}]}>IU</Text>
              <Text style={[styles.subcaption1, styles.mt2]}>Ca sĩ Hàn Quốc</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.listConfirm2} onPress={onPressButton}>
            <Image
              style={styles.iconL1}
              resizeMode="cover"
              source={require("../assets/group-9.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
    
{/* ############################################################################################# */}

      
    </>
  );
};

const handleFilterPress = () => {
    console.log("Filter button pressed!");
};


// const handleFilterDialogClose = () => {
//     setShowFilterDialog(false); // Ẩn hộp thoại khi nhấn nút đóng
// };
const Doors = ({navigation}) => {
    const [searchText, setSearchText] = useState("");

    const handleRedButtonPress = () => {
      return navigation.navigate('Details')
    };
   
    const doors = [
      { name: "Door 1", direction: "North" },
      { name: "Door 2", direction: "South" },
      { name: "Smart Door", direction: "West" }
    ];
  
    const filteredDoors = doors.filter(door => {
      return door.name.toLowerCase().includes(searchText.toLowerCase()) ||
             door.direction.toLowerCase().includes(searchText.toLowerCase());
    });
  
    return (
        <View style={styles.accessHistory}>
            <View style={styles.searchfilter}>
                <View style={styles.search}>
                    <Image
                        source={require('../assets/search.png')}
                        style={styles.searchIcon}
                    />
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search ..."
                        value={searchText}
                        onChangeText={text => setSearchText(text)}
                    />
                </View>
                
                <TouchableOpacity
                    style={styles.filterButton}
                    onPress={handleFilterPress}
                    >
                    <Image
                    source={require('../assets/filters.png')}
                    style={styles.filterIcon}
                    />
                </TouchableOpacity>

            </View>
            
            
            <View style={styles.accessHistory}>
                {<ScrollView style={styles.body}>
                    <Door navigation={navigation}/>
                </ScrollView>}            
            </View>

            <View style={styles.redButtonContainer}>
              
            <TouchableOpacity onPress={handleRedButtonPress}>
              <View style={styles.redButton}>
                <Image
                  source={require('../assets/Buttonred.png')}
                  style={styles.redButtonIcon}
                />
              </View>
            </TouchableOpacity>
            </View>

            </View>
            

        
        
    );
  };
  

const styles = StyleSheet.create({
  ml12: {
    marginLeft: 16,
  },
  body: {
    paddingTop: 20,
  },
  caption1: {
    fontSize: 16,
    letterSpacing: 0.3,
    lineHeight: 24,
    color: "#000",
    textAlign: "left",
  },
  subcaption1: {
    fontSize: 14,
    letterSpacing: 0.2,
    lineHeight: 20,
    textAlign: "left",
    opacity: 0.5,
  },
  accessHistory: {
    backgroundColor: "#fff",
    width: "100%",
  },
  ibmPlexHeadline4: {
    paddingTop: 70,
    paddingLeft: 16,
    width: "100%",
  },
  manropeHeadline: {
    width: "100%",
    top: "0%",
    left: "0%",
    fontSize: 34,
    lineHeight: 44,
    fontWeight: "600",
    color: "#000",
    textAlign: "left",
  },
  groupContainer: {
    paddingLeft: 24,
    width: "100%",
  },
  listConfirmGroup: {
    width: "100%",
    paddingTop: 70,
    paddingRight: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  listConfirm2: {
    position: "absolute",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  listConfirm1: {
    position: "absolute",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  iconL1: {
    position: "relative",
    width: 40,
    height: 40,
  },
  masterList1: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },

  searchInput: {    
    
    marginLeft: 10,
    fontSize: 16,
    flex: 1,
    color: "#000",
    alignItems: 'center',
  },

  searchfilter: {
    
  },

  search: {
    // paddingLeft: 24,
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: "#E8E8E8",
    borderRadius: 30, 
    width: "80%",
    alignItems: 'center',
    
  },

  searchIcon: {
    marginLeft: 6,
    width: 20,
    height: 20,
    marginRight: 0,
    tintColor: '#999',
  },
  filterButton: {
    position: 'absolute',
    right: 25,
    backgroundColor: "#FFFFFF",
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 8,
    
  },
  filterIcon: {
    width: 25,
    height: 25,
    alignItems: 'center',

  },
  redButtonContainer: {
    position: 'absolute',
    bottom: 50,
    right: 20,
  },
  redButton: {
    borderRadius: 50,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  redButtonIcon: {
    width: 60,
    height: 60,
  },
});


export default Doors;
