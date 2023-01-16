import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import MapView, {Callout, Marker, Circle} from 'react-native-maps'
import { auth } from '../firebase'

const HomeScreen = () => {
    const navigation = useNavigation()
    const handleSignOut = () => {
        auth
        .signOut()
        .then(() => {
            navigation.replace("Login")
        })
        .catch(error => alert(error.message))
    }
  return (
    <View style={styles.container}>
        <MapView 
            style={styles.map}
            initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }} 
        >
            <Marker
                coordinate={{
                    latitude: 37.78825,
                    longitude: -122.4324
                }}
                pinColor="black"
            >
                <Callout>
                    <Text>I'm Here</Text>
                </Callout>
            </Marker>
                {/* <Circle 
                    center={{
                        latitude: 37.78825,
                        longitude: -122.4324
                    }}
                    radius={1000}
                /> */}
        </MapView>
        <Text>Email: {auth.currentUser?.email}</Text>
        <TouchableOpacity
        onPress={handleSignOut}
            style={styles.button}
        >
            <Text style={styles.buttonText}>Sign Out</Text>
        </TouchableOpacity>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    map: {
        width: '100%',
        height: '100%',
      },
    button: {
        backgroundColor: 'green',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: 'black',
        fontWeight: '700',
        fontSize: 16,
    },
})