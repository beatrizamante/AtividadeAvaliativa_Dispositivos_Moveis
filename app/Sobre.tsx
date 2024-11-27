import { View, Text, Linking, Image, StyleSheet } from 'react-native'
import React from 'react'
import LinkButton from '../components/LinkButton'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function Sobre() {
  const openLink = () => {
    const url = 'https://github.com/beatrizamante'
    Linking.openURL(url).catch(err => console.log("Not able to start link because: ", err))

  }
  return (
    <View style={style.container}>
      <View style={style.container_up}>
        <Image source={require('../assets/profile_pic.png')} style={style.avatar}></Image>
      <Text style={style.name}>Beatriz Amante</Text>
      <LinkButton onPress={openLink}></LinkButton>
      </View>
      <View style={style.container_down}>
      <Text style={style.about_title}>Sobre:</Text>
      <Text style={style.about_description}>Party Rock isn't in the house tonight!</Text>
      <Image source={require('../assets/about_image.png')} style={style.image}></Image>
      </View>
      <Footer/>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center", 
    backgroundColor: "#243046"

  },
  container_up: {
    height: 360,
    width: 380,
    marginTop: 12,
    backgroundColor: "#38415D",
    justifyContent: "space-evenly",
    alignItems: "center" 
  },
  container_down: {
    height: 360,
    width: 380,
    backgroundColor: "#FFFFFF",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginBottom: 12
  },
  avatar: {
    width: 135,
    height: 135,
    borderRadius: 100
  },
  name: {
    color: "#FFF",
    fontSize: 32
  },
  about_title: {
    color: "#2D2B2B",
    fontSize: 18,
    fontWeight: "semibold"
  },
  about_description: {
    color: "#2D2B2B",
    fontSize: 16,
  },
  image: {
    width: 380,
    height: 189
  }


})