import React from "react";
import { FlatList, Text, View } from "react-native";
import { Movie } from "../interfaces/movieInterface";
import { MoviePoster } from "./MoviePoster";

interface Props {
  title: string;
  movies: Movie[];
}

export const HorizontalSlider = ({ title, movies }: Props) => {

    if( !title || !movies ) return null;

  return (
    <View style={{ height: 260 }}>
      <Text style={{ fontSize: 30, fontWeight: "bold", marginRight: 10 }}>{title}</Text>
      <FlatList
        data={movies}
        renderItem={({ item }: any) => (
          <MoviePoster movie={item} width={140} height={200} />
        )}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
