import { ScrollView, View, Image, StyleSheet } from "react-native";
import React from "react";
import { Badge, Card, Header, Icon, Text } from "@rneui/base";
import PreApproveIcon from "@/components/PreApproveIcon";

const Dashboard = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      {/* <Header
        leftComponent={{ text: 'Name', style: { color: '#fff', fontSize: 18 } }}
        centerComponent={{ text: '', style: { color: '#fff' } }}
        rightComponent={(
          <View style={styles.headerRight}>
            <Icon name="search" type="font-awesome" color="#fff" containerStyle={styles.headerIcon} />
            <Icon name="bell" type="font-awesome" color="#fff" containerStyle={styles.headerIcon} />
            <Icon name="envelope" type="font-awesome" color="#fff" />
          </View>
        )}
        containerStyle={{
          backgroundColor: '#3D6DCC',
          justifyContent: 'space-around',
        }}
      /> */}

      <ScrollView>
        {/* Advertisement Cards */}
        <ScrollView horizontal style={{ flexDirection: 'row' }}>

          <Image source={{ uri: 'https://img.freepik.com/premium-vector/real-estate-web-banner-ad-design-business-advertising_701243-15.jpg' }} style={styles.adImages} />
          <Image source={{ uri: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/business-banner-advertising-design-template-aebf779d2afa43bdb051accd03d708de_screen.jpg' }} style={styles.adImages} />
          <Image source={{ uri: 'https://www.creativehatti.com/wp-content/uploads/edd/2022/02/Promote-your-business-with-digital-marketing-on-template-banner-24-large.jpg' }} style={styles.adImages} />
          <Image source={{ uri: 'https://www.creativehatti.com/wp-content/uploads/edd/2022/03/Digital-marketing-agency-with-a-flat-template-banner-23-large.jpg' }} style={styles.adImages} />


        </ScrollView>
        {/* Photos with View All */}
        <Card containerStyle={{ borderRadius: 15 }}>
          <ScrollView horizontal style={styles.photoRow}>
            <PreApproveIcon />
            <Image source={{ uri: 'https://static.vecteezy.com/system/resources/previews/027/951/137/non_2x/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png' }} style={styles.photo} />
            <Image source={{ uri: 'https://static.vecteezy.com/system/resources/previews/028/238/588/non_2x/old-man-teacher-face-3d-profession-avatars-free-png.png' }} style={styles.photo} resizeMethod="scale" />
            <Image source={{ uri: 'https://static.vecteezy.com/system/resources/thumbnails/008/846/297/small_2x/cute-boy-avatar-png.png' }} style={styles.photo} resizeMethod="scale" />
            <Text style={styles.viewAll}>View All</Text>
          </ScrollView>
        </Card>

        {/* Row with Title and Subtitle */}
        <Card containerStyle={{ borderRadius: 15 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', alignContent: 'center', }}>
            <View>
              <Text style={styles.cardTitle}>FlatCheck Offers</Text>
              <Text style={styles.cardSubtitle}>Unlock the future of flats</Text>
            </View>
            <View>
              <Image source={{ uri: 'https://www.shutterstock.com/shutterstock/photos/2180594735/display_1500/stock-vector-black-bulb-with-checkmark-like-quick-tip-icon-flat-stroke-linear-simple-trend-modern-efficiency-2180594735.jpg' }} width={40} height={40} />
            </View>
          </View>
        </Card>

        {/* Horizontal Scroll with Icons */}
        <ScrollView horizontal style={styles.horizontalScroll}>
          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <Card containerStyle={styles.smallCard}>
              <Icon name="chatbox-ellipses-outline" size={35} type="ionicon" color="#444" />
            </Card>
            <Text style={{ marginTop: 5 }}>Ask Society</Text>
          </View>
          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <Card containerStyle={styles.smallCard}>
              <Icon name="payment" size={35} type="material-icon" color="green" />
            </Card>
            <Text style={{ marginTop: 5 }}>Payment</Text>
          </View>
          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <Card containerStyle={styles.smallCard}>
              <Icon name="people-outline" size={35} type="ionicon" color="#444" />
            </Card>
            <Text style={{ marginTop: 5 }}>Community</Text>
          </View>
          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <Card containerStyle={styles.smallCard}>
              <Icon name="miscellaneous-services" size={35} type="material-icons" color="#444" />
            </Card>
            <Text style={{ marginTop: 5 }}>Settings</Text>
          </View>

        </ScrollView>

        {/* List of Detailed Cards */}
        <Card containerStyle={{ borderRadius: 15 }}>
          <View style={styles.detailedCardHeader}>
            <View>
              <Icon name="bell" size={30} type="font-awesome" />
              <Badge
                value="3"
                status="success"
                containerStyle={styles.badge}

              />
            </View>
            <View style={styles.headerText}>
              <Text style={styles.cardTitle}>Notice</Text>
              <Text style={styles.cardSubtitle}>Society</Text>
            </View>
            <Icon name="ellipsis-vertical" type="ionicon" />
          </View>
          <Card.Divider />
          <Text style={styles.cardBody}>This is a notice to everyone as a precautionary measure to fix all the security issues going on in the Society. Please cooperate with RWA.</Text>
        </Card>

        <Card containerStyle={{ borderRadius: 15 }}>
          <View style={styles.detailedCardHeader}>
            <View>
              <Icon name="bell" size={30} type="font-awesome" />
              <Badge
                value="3"
                status="success"
                containerStyle={styles.badge}

              />
            </View>
            <View style={styles.headerText}>
              <Text style={styles.cardTitle}>Notice</Text>
              <Text style={styles.cardSubtitle}>Society</Text>
            </View>
            <Icon name="ellipsis-vertical" type="ionicon" />
          </View>
          <Card.Divider />
          <Text style={styles.cardBody}>This is a notice to everyone as a precautionary measure to fix all the security issues going on in the Society. Please cooperate with RWA.</Text>
        </Card>
        <Card containerStyle={{ borderRadius: 15 }}>
          <View style={styles.detailedCardHeader}>
            <View>
              <Icon name="bell" size={30} type="font-awesome" />
              <Badge
                value="3"
                status="success"
                containerStyle={styles.badge}

              />
            </View>
            <View style={styles.headerText}>
              <Text style={styles.cardTitle}>Notice</Text>
              <Text style={styles.cardSubtitle}>Society</Text>
            </View>
            <Icon name="ellipsis-vertical" type="ionicon" />
          </View>
          <Card.Divider />
          <Text style={styles.cardBody}>This is a notice to everyone as a precautionary measure to fix all the security issues going on in the Society. Please cooperate with RWA.</Text>
        </Card>
        <Card containerStyle={{ borderRadius: 15 }}>
          <View style={styles.detailedCardHeader}>
            <View>
              <Icon name="bell" size={30} type="font-awesome" />
              <Badge
                value="3"
                status="success"
                containerStyle={styles.badge}

              />
            </View>
            <View style={styles.headerText}>
              <Text style={styles.cardTitle}>Notice</Text>
              <Text style={styles.cardSubtitle}>Society</Text>
            </View>
            <Icon name="ellipsis-vertical" type="ionicon" />
          </View>
          <Card.Divider />
          <Text style={styles.cardBody}>This is a notice to everyone as a precautionary measure to fix all the security issues going on in the Society. Please cooperate with RWA.</Text>
        </Card>

        {/* Add more detailed cards as needed */}
      </ScrollView>
    </View>
    // <View style={{ flex: 1, paddingTop: 20, paddingHorizontal: 24 }}>
    //   <View
    //     style={{
    //       padding: 20,
    //       borderWidth: 1,
    //       borderRadius: 20,
    //       backgroundColor: "#ddd",
    //       width: "100%",
    //     }}
    //   >
    //     <View
    //       style={{
    //         flexDirection: "row",
    //         justifyContent: "space-between",
    //         paddingVertical: 8,
    //       }}
    //     >
    //       <Text>Exams Appeared</Text>
    //       <Text>20</Text>
    //     </View>
    //     <View
    //       style={{ borderWidth: 1, borderStyle: "dashed", borderColor: "#222" }}
    //     ></View>
    //     <View
    //       style={{
    //         flexDirection: "row",
    //         justifyContent: "space-between",
    //         paddingVertical: 8,
    //       }}
    //     >
    //       <Text>Exams Passed</Text>
    //       <Text>10</Text>
    //     </View>
    //     <View
    //       style={{ borderWidth: 1, borderStyle: "dashed", borderColor: "#222" }}
    //     ></View>

    //     <View
    //       style={{
    //         flexDirection: "row",
    //         justifyContent: "space-between",
    //         paddingVertical: 8,
    //       }}
    //     >
    //       <Text>Exams Failed</Text>
    //       <Text>10</Text>
    //     </View>
    //   </View>
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerRight: {
    flexDirection: 'row',
  },
  headerIcon: {
    marginLeft: 10,
  },
  photoRow: {
    flexDirection: 'row',
  },
  adImages: { resizeMode: 'cover', width: 90, height: 90, marginHorizontal: 10, marginVertical: 10, borderRadius: 15 },
  photo: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 50,
    resizeMode: 'contain'
  },
  viewAll: {
    color: '#3D6DCC',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  cardSubtitle: {
    fontSize: 14,
    color: 'gray',
  },
  horizontalScroll: {
    marginVertical: 10,
    marginHorizontal: 10
  },
  smallCard: {
    padding: 10,
    margin: 5,
    borderRadius: 15,
    width: 70,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center'
  },
  detailedCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 10
  },
  headerText: {
    flex: 1,
    marginLeft: 10,
  },
  badge: {
    position: 'absolute',
    top: -4,
    right: -4,
  },
  cardBody: {
    marginTop: 0,
  },
});


export default Dashboard;
