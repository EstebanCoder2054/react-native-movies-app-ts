import React from 'react'
import { ActivityIndicator, Dimensions, Text, View, FlatList, ScrollView } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies';

export const HomeScreen = () => {

  const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();
  const { top } = useSafeAreaInsets();
  const { width: windowWidth } = Dimensions.get('window');

  if(isLoading) {
    return(
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator color='red' size={20} />
      </View>
    )
  }

  return (
    <ScrollView>
      <View style={{ marginTop: top + 20 }}>

        {/* Carousel principal */}
        <View style={{ height: 440 }}>
          <Carousel
            data={nowPlaying}
            renderItem={( { item } : any ) => <MoviePoster movie={item} />}
            sliderWidth={windowWidth}
            itemWidth={300}
          />
        </View>

        {/* Películas principales */}
        <HorizontalSlider title='Populares' movies={popular} />
        <HorizontalSlider title='Top Rated' movies={topRated} />
        <HorizontalSlider title='Upcoming' movies={upcoming} />
      </View>
    </ScrollView>
  )
}
