import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 10,
  },
  headerRight: {
    flexDirection: "row",
  },
  headerIcon: {
    marginLeft: 10,
  },
  photoRow: {
    flexDirection: "row",
  },
  adImages: {
    resizeMode: "cover",
    width: 120,
    height: 120,
    marginHorizontal: 5,
    marginVertical: 10,
    borderRadius: 15,
  },
  photo: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 50,
    resizeMode: "contain",
  },
  viewAll: {
    color: "#222",
    fontWeight: "bold",
    alignSelf: "center",
    fontSize: 12,
    marginTop: 8,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: "bold",
  },
  cardSubtitle: {
    fontSize: 14,
    color: "gray",
  },
  horizontalScroll: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
  smallCard: {
    padding: 10,
    margin: 5,
    borderRadius: 15,
    width: 70,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
  },
  detailedCardHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 10,
  },
  headerText: {
    flex: 1,
    marginLeft: 10,
  },
  badge: {
    position: "absolute",
    top: -4,
    right: -4,
  },
  cardBody: {
    marginTop: 0,
  },
  smallIconsText: { marginTop: 5, fontSize: 12, overflow: "hidden" },
});

export default styles;
