import { Feather } from '@expo/vector-icons';
import * as React from 'react';
import { ActivityIndicator, Dimensions, FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Page from '../components/Page';
import { IMAGE_URL } from '../context/MovieContext';
import { useMovie } from '../hooks/useMovie';

export default function Home({ navigation }) {
  const {
    isLoaded,
    carrocelList,
    categoriesList,
    selectedCategory,
    selectedCategoryMovieList,
    popularList,
    handleSelectCategory,
    setSelectedMovie
  } = useMovie()

  if (!isLoaded) return (
    <Page>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size={32} color="FFF" />
      </View>
    </Page >
  )

  return (
    <Page>
      <View style={styles.headerContainer}>
        <View style={styles.userContainer}>
          <Image source={{ uri: "https://github.com/filipeleonelbatista.png" }} style={styles.avatar} />
          <View style={styles.greetingsContainer}>
            <Text style={styles.headerTitle}>Olá Filipe Batista</Text>
            <Text style={styles.headerSubtitle}>Seja Bem vindo!</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.headerButtonRounded}>
          <Feather name="bell" size={20} color="#F72585" />
        </TouchableOpacity>
      </View>

      <FlatList
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        horizontal
        data={carrocelList}
        contentContainerStyle={styles.carrocelContainer}
        renderItem={
          ({ item, index }) => (
            <TouchableOpacity onPress={() => setSelectedMovie(item)} style={{ position: 'relative' }}>
              <View style={{ position: 'absolute', zIndex: 100, bottom: 8, left: 24 }}>
                <Text style={{ ...styles.title, color: "#CCC" }}>{item.title}</Text>
              </View>
              <Image key={index} source={{ uri: IMAGE_URL + item.backdrop }} style={styles.carrocelImage} />
            </TouchableOpacity>
          )
        }
      />

      <View style={styles.column}>
        <Text style={styles.title}>Categorias</Text>
        <ScrollView horizontal>
          {
            categoriesList.map(cat => (
              <TouchableOpacity onPress={() => handleSelectCategory(cat)} key={cat.id} style={{ ...styles.chipContainer, backgroundColor: cat.id === selectedCategory.id ? "#F72585" : "#29293C" }}>
                <Text style={{ ...styles.chipText, fontWeight: cat.id === selectedCategory.id ? "bold" : "normal" }}>{cat.name}</Text>
              </TouchableOpacity>

            ))
          }
        </ScrollView>
      </View>

      <View style={styles.column}>
        <Text style={styles.title}>{selectedCategory.name}</Text>
        <ScrollView horizontal style={{ marginVertical: 16 }}>
          {
            selectedCategoryMovieList.map(movie => (
              <TouchableOpacity key={movie.id} onPress={() => setSelectedMovie(movie)}>
                <Image source={{ uri: IMAGE_URL + movie.image }} style={styles.scrollImage} />
              </TouchableOpacity>
            ))
          }
        </ScrollView>
      </View>

      <View style={styles.column}>
        <Text style={styles.title}>Filmes populares</Text>
        <ScrollView horizontal style={{ marginVertical: 16 }}>
          {
            popularList.map(movie => (
              <TouchableOpacity key={movie.id} onPress={() => setSelectedMovie(movie)}>
                <Image source={{ uri: IMAGE_URL + movie.image }} style={styles.scrollImage} />
              </TouchableOpacity>
            ))
          }
        </ScrollView>
      </View>
    </Page>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    width: Dimensions.get('screen').width,
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: 'space-between',
    alignItems: "center",
    marginVertical: 10,
  },
  userContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 16
  },
  greetingsContainer: {},
  headerTitle: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#FFF"
  },
  headerSubtitle: {
    fontWeight: "normal",
    fontSize: 14,
    color: "#FFF"
  },
  headerButtonRounded: {
    backgroundColor: "#FFF",
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: "center",
  },
  carrocelContainer: {
    paddingVertical: 10
  },
  carrocelImage: {
    width: Dimensions.get('screen').width - 40,
    height: 150,
    marginHorizontal: 20,
    borderRadius: 8,
  },
  column: {
    marginHorizontal: 20,
  },
  title: {
    fontWeight: "normal",
    fontSize: 24,
    color: "#FFF"
  },
  chipContainer: {
    alignSelf: "flex-start",
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "#29293C",
    borderRadius: 32,
    marginVertical: 16,
    marginHorizontal: 4
  },
  chipText: {
    fontWeight: "normal",
    fontSize: 12,
    color: "#FFF"
  },
  scrollImage: {
    width: 100,
    height: 150,
    borderRadius: 8,
    marginRight: 8
  },
})