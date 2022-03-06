import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Movie } from "../interfaces/movieInterface";

interface Props {
  movie: Movie;
  height?: number; //opcional
  width?: number; //opcional
}

export const MoviePoster = ({ movie, height = 420, width = 300 }: Props) => {

  const navigation = useNavigation();

  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <TouchableOpacity onPress={() => navigation.navigate('DetailsScreen', movie)} activeOpacity={0.8} style={{ width, height, marginHorizontal: 5 }}>
      <View style={styles.imageContainer}>
        <Image source={{ uri }} style={styles.image} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: 18,
  },
  imageContainer: {
    flex: 1,
    borderRadius: 18,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 50,
  },
});
