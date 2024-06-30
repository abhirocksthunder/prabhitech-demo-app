// ProfileScreen.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Avatar, Input, Button, Icon, Card } from '@rneui/base';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import lightPalette from '@/themes/lightPalette';
import * as SecureStore from "expo-secure-store";
import { router } from "expo-router";

const Profile: React.FC = () => {
  const [bio, setBio] = useState<string>('This is a sample bio.');
  const [interests, setInterests] = useState<string[]>(['Traveling', 'Cooking', 'Reading']);
  const [about, setAbout] = useState<string>('This is some information about me.');
  const [newInterest, setNewInterest] = useState<string>('');

  const handleAddInterest = () => {
    if (newInterest.trim()) {
      setInterests([...interests, newInterest]);
      setNewInterest('');
    }
  };

  const handleShare = () => {
    // Add sharing functionality
    console.log('Share Profile');
  };

  const logout = async () => {
    await SecureStore.deleteItemAsync("authToken");
    await SecureStore.deleteItemAsync("userData");
    router.push("/");
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.profileSection}>
          <Avatar
            size="xlarge"
            rounded
            source={{ uri: 'https://placekitten.com/200/200' }}
            containerStyle={styles.avatar}
          >
            <Avatar.Accessory size={30} />
          </Avatar>
          <Input
            label="Bio"
            placeholder="Add your bio here..."
            value={bio}
            onChangeText={setBio}
            containerStyle={styles.inputContainer}
          />
        </View>

        <Card containerStyle={styles.card}>
          <Card.Title>About</Card.Title>
          <Card.Divider />
          <Text style={styles.cardText}>{about}</Text>
          <Input
            placeholder="Edit about..."
            value={about}
            onChangeText={setAbout}
            containerStyle={styles.inputContainer}
          />
        </Card>

        <Card containerStyle={styles.card}>
          <Card.Title>Interests</Card.Title>
          <Card.Divider />
          {interests.map((interest, index) => (
            <View key={index} style={styles.interestItem}>
              <Text style={styles.interestText}>{interest}</Text>
              <TouchableOpacity onPress={() => setInterests(interests.filter((_, i) => i !== index))}>
                <Ionicons name="close-circle-outline" size={20} color="red" />
              </TouchableOpacity>
            </View>
          ))}
          <Input
            placeholder="Add new interest..."
            value={newInterest}
            onChangeText={setNewInterest}
            rightIcon={
              <TouchableOpacity onPress={handleAddInterest}>
                <Ionicons name="add-circle-outline" size={24} color="blue" />
              </TouchableOpacity>
            }
            containerStyle={styles.inputContainer}
          />
        </Card>

        <Button
          title="Enable Calling"
          icon={<Ionicons name="call-outline" size={24} color="white" />}
          buttonStyle={styles.callButton}
          onPress={() => Alert.alert('Calling enabled')}
        />
        <Button
          title="Logout"
          icon={<Icon name="logout" type="material-community" size={24} color="white" />}
          buttonStyle={styles.callButton}
          onPress={logout}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lightPalette.purpleRedTheme.palette.primary.light,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  scrollContainer: {
    padding: 10,
    backgroundColor: lightPalette.purpleRedTheme.palette.primary.light
  },
  profileSection: {
    alignItems: 'center',
  },
  avatar: {
    marginBottom: 10,
  },
  inputContainer: {
    width: '90%',
    alignSelf: 'center',
  },
  card: {
    borderRadius: 15,
    marginVertical: 10,
  },
  cardText: {
    fontSize: 16,
    marginBottom: 10,
  },
  interestItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
  },
  interestText: {
    fontSize: 16,
  },
  callButton: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 5,
    marginVertical: 20,
    alignSelf: 'center',
    width: '90%',
  },
});

export default Profile;
