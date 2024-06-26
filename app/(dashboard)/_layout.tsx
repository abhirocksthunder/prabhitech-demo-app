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
import { Icon } from "@rneui/base";

export default function Layout() {
  const Drawer = createDrawerNavigator();
  // const colorScheme = useThemeColor({light:""});
  const drawerIcon = ({ focused = true, color = "#345", size = 20 }) => <Icon color={color}
    size={size} name={focused ? 'dashboard' : 'dashboard'} type="material" />
  return (
    // <NavigationContainer>
    <GestureHandlerRootView>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          drawerStyle: {
            backgroundColor: '#CCC',
          },
          drawerActiveBackgroundColor: "#CCC",
          drawerActiveTintColor: '#FFF',
          headerStyle: {
            backgroundColor: '#EDE7F6',

          },
          headerTitleStyle: {
            color: "#222"
          },
          sceneContainerStyle: {
            backgroundColor: '#EDE7F6'
          },
          drawerItemStyle: {
            marginTop: 10
          },
          drawerInactiveTintColor: "#222",
          drawerIcon: drawerIcon,
        }}

      >
        <Drawer.Screen name="Abhilash S" component={Dashboard} options={{ drawerIcon: drawerIcon }} />
        <Drawer.Screen name="Online Exams" component={OnlineExams} />
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="Logout" component={Logout} />
      </Drawer.Navigator>
      {/* </NavigationContainer> */}
    </GestureHandlerRootView>
  );
}
