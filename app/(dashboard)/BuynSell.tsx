// screens/MainScreen.tsx
import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { SearchBar, Icon, Card } from '@rneui/base';
const { width } = Dimensions.get('window');
const listings = [
    {
        id: '1',
        title: 'Toyota Camry',
        description: '2019 Model, 20,000 miles',
        imageUrl: 'https://cdni.autocarindia.com/ExtraImages/20220112010811_Camry_Hybrid__Exterior.jpg',
    },
    {
        id: '2',
        title: 'Laptop Dell XPS',
        description: 'Intel i7, 16GB RAM',
        imageUrl: 'https://m.media-amazon.com/images/I/51fXuiChdJL._AC_UF1000,1000_QL80_.jpg',
    },
    {
        id: '3',
        title: 'Free Sofa Set',
        description: '2 years old, good condition',
        imageUrl: 'https://www.orangetree.in/cdn/shop/files/Gallery-1ChiyoL-ShapedSofaBuyOnline.jpg?v=1695188191',
    },
    {
        id: '4',
        title: 'Modern Coffee Table',
        description: 'Wooden, Brown',
        imageUrl: 'https://m.media-amazon.com/images/I/81ctsZ-RdhL._AC_UF894,1000_QL80_.jpg',
    },
];

const listingsData = [
    { id: '1', title: 'Toyota Camry', description: '2018, 25k miles', price: '15,000', category: 'Cars', imageUrl: 'https://via.placeholder.com/150' },
    { id: '2', title: 'Gaming Laptop', description: 'High performance', price: '1,200', category: 'Anything', imageUrl: 'https://via.placeholder.com/150' },
    { id: '3', title: 'Sofa Set', description: 'Used, good condition', price: 'Free', category: 'Free', imageUrl: 'https://via.placeholder.com/150' },
    { id: '4', title: 'Modern Lamp', description: 'Brand new', price: '7550', category: 'Home Decor', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn3uiLFLTxwCkl6-tYpPvy4Z24oZQrmktW9Q&s' },
    { id: '5', title: 'Dressing table', description: 'Brand new', price: '5050', category: 'Home Decor', imageUrl: 'https://images.jdmagicbox.com/quickquotes/images_main/-10x3w470.jpg' },
    { id: '6', title: 'Laptop holder', description: 'Brand new', price: '750', category: 'Home Decor', imageUrl: 'https://images-cdn.ubuy.co.in/634d0e2737121251c5587dc2-wood-laptop-stand-laptop-stand-laptop.jpg' },
    { id: '7', title: 'Phone holder', description: 'Brand new', price: '450', category: 'Home Decor', imageUrl: 'https://www.portronics.com/cdn/shop/products/Modesk-1.jpg?v=1647446052' },
    { id: '8', title: 'Pooja Room', description: 'Brand new', price: '2550', category: 'Home Decor', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1vHUrTbHOzh87hgGO1rbPOg2YDNAX0VIyVg&s' },
    // Add more listings as needed
];

const renderListingCard = ({ id, title, description, price, category, imageUrl }: any) => (
    <Card key={id} containerStyle={styles.listingCard}>
        <Card.Image source={{ uri: imageUrl }} style={styles.listingImage} />
        <Card.Title>{title}</Card.Title>
        <Text style={styles.listingDescription}>{description}</Text>
        <Text style={styles.listingPrice}>Rs. {price}</Text>
    </Card>
);

const BuynSell: React.FC = () => {
    return (
        <ScrollView style={styles.container}>
            {/* Search Bar */}
            <SearchBar
                placeholder="Search..."
                platform="default"
                containerStyle={styles.searchBarContainer}
                inputContainerStyle={styles.searchBarInput}
                inputStyle={styles.searchBarText}
            />

            {/* Advertisement */}
            <View style={styles.adContainer}>
                <Image
                    source={{ uri: 'https://www.creativehatti.com/wp-content/uploads/edd/2022/03/Digital-marketing-agency-with-a-flat-template-banner-23-large.jpg' }} // Replace with actual ad image URL
                    style={styles.adImage}
                />
            </View>

            {/* Icons with Text and Count */}
            <View style={styles.iconsContainer}>
                <View style={styles.iconItem}>
                    <Icon name="car" type="font-awesome" size={30} />
                    <Text style={styles.iconText}>Cars</Text>
                    <Text style={styles.iconCount}>123</Text>
                </View>
                <View style={styles.iconItem}>
                    <Icon name="home" type="font-awesome" size={30} />
                    <Text style={styles.iconText}>Houses</Text>
                    <Text style={styles.iconCount}>45</Text>
                </View>
                <View style={styles.iconItem}>
                    <Icon name="shopping-bag" type="font-awesome" size={30} />
                    <Text style={styles.iconText}>Shopping</Text>
                    <Text style={styles.iconCount}>78</Text>
                </View>
            </View>

            {/* Recent Listings */}
            <View style={styles.listingsContainer}>
                <Text style={styles.sectionTitle}>Recent Listings</Text>
                {listings.map((listing) => (
                    <Card key={listing.id} containerStyle={styles.cardContainer}>
                        <Image source={{ uri: listing.imageUrl }} style={styles.cardImage} />
                        <Card.Title>{listing.title}</Card.Title>
                        <Text style={styles.cardDescription}>{listing.description}</Text>
                    </Card>
                ))}
            </View>
            <Text style={styles.sectionHeader}>Home Decor</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 20 }}>
                {listingsData.filter(item => item.category === 'Home Decor').map(renderListingCard)}
            </ScrollView>
        </ScrollView>
    );
};

export default BuynSell;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#f8f8f8',
        marginBottom: 5
    },
    searchBarContainer: {
        backgroundColor: 'transparent',
        borderBottomColor: 'transparent',
        borderTopColor: 'transparent',
    },
    searchBarInput: {
        backgroundColor: '#fff',
        borderRadius: 20,
    },
    searchBarText: {
        fontSize: 16,
    },
    adContainer: {
        marginVertical: 15,
        alignItems: 'center',
    },
    adImage: {
        width: '100%',
        height: 150,
        borderRadius: 10,
    },
    iconsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 20,
    },
    iconItem: {
        alignItems: 'center',
    },
    iconText: {
        marginTop: 5,
        fontSize: 14,
    },
    iconCount: {
        marginTop: 5,
        fontSize: 12,
        color: 'gray',
    },
    listingsContainer: {
        marginVertical: 20,
        paddingVertical: 10
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    cardContainer: {
        borderRadius: 10,
        padding: 0,
        overflow: 'hidden',
    },
    cardImage: {
        width: '100%',
        height: 150,
    },
    cardDescription: {
        margin: 10,
        fontSize: 14,
        color: 'gray',
    },
    sectionHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    listingCard: {
        width: width * 0.6,
        marginRight: 10,
        borderRadius: 10,
    },
    listingImage: {
        borderRadius: 10,
    },
    listingDescription: {
        fontSize: 14,
        color: 'gray',
    },
    listingPrice: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});
