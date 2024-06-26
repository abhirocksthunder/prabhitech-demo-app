import { GestureHandlerRootView } from "react-native-gesture-handler";
// import { Drawer } from "expo-router/drawer";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Dashboard from ".";
import OnlineExams from "./OnlineExams";
import Logout from "./Logout";
import Profile from "./Profile";
import CustomDrawerContent from "@/components/CustomDrawerContent";
import { useColorScheme } from "@/hooks/useColorScheme.web";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Icon, Text } from "@rneui/base";
import { Alert, TouchableOpacity, View } from "react-native";
import AddDailyHelp from "./AddDailyHelp";
import CustomBackButton from "@/components/CustomBackButton";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function Layout() {
  const Drawer = createDrawerNavigator();
  // const colorScheme = useThemeColor({light:""});
  const drawerIcon = ({ focused = true, color = "#345", size = 20 }) => (
    <Icon
      color={color}
      size={size}
      name={focused ? "dashboard" : "dashboard"}
      type="material"
    />
  );
  return (
    // <NavigationContainer>
    <GestureHandlerRootView>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={({ navigation }) => ({
          drawerStyle: {
            backgroundColor: "#EDE7F6",
          },
          drawerActiveBackgroundColor: "#26A",
          drawerActiveTintColor: "#FFF",
          headerStyle: {
            backgroundColor: "#EDE7F6",
          },
          headerTitleStyle: {
            color: "#222",
          },
          sceneContainerStyle: {
            backgroundColor: "#EDE7F6",
          },
          drawerItemStyle: {
            marginTop: 10,
          },
          drawerInactiveTintColor: "#222",
          // drawerIcon: drawerIcon,
          headerLeft: (props) => <></>,
          headerRight: (props) => (
            <View
              style={{
                paddingHorizontal: 20,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Icon
                name="search"
                color="#333"
                style={{ paddingHorizontal: 10 }}
              />
              <Icon
                name="chat"
                color="#555"
                style={{ paddingHorizontal: 10 }}
              />
              <Icon
                name="notifications"
                color="#555"
                style={{ paddingHorizontal: 10 }}
              />
              <Text
                style={{
                  padding: 5,
                  backgroundColor: "#ccc",
                  borderRadius: 50,
                }}
                onPress={() => router.push("/Profile")}
              >
                AS
              </Text>
            </View>
          ),
        })}
      >
        <Drawer.Screen
          name="Wing 2 215"
          component={Dashboard}
          options={{ drawerIcon: drawerIcon }}
        />
        <Drawer.Screen name="Online Exams" component={OnlineExams} />
        <Drawer.Screen name="Profile" component={Profile} options={({ navigation }) => ({
          headerLeft: () => <CustomBackButton navigation={navigation} />,
          headerRight: () => <TouchableOpacity style={{ padding: 15, }} onPress={() => { Alert.alert("Share") }}>
            <Ionicons name="share-social-outline" size={24} color="black" />
          </TouchableOpacity>
        })} />
        <Drawer.Screen name="AddDailyHelp" component={AddDailyHelp} options={({ navigation }) => ({
          headerLeft: () => <CustomBackButton navigation={navigation} />,
          headerTitle: 'Daily Help',
          title: 'Add Daily Help'
        })} />
        <Drawer.Screen name="Logout" component={Logout} />
      </Drawer.Navigator>
      {/* </NavigationContainer> */}
    </GestureHandlerRootView>
  );
}
