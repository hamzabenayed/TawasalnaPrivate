import { View, Text,FlatList, SafeAreaView } from 'react-native'
import React from 'react'
import Posts from '../../data/Posts'
import ShowPosts from '../components/ShowPosts'
const Home = () => {
  return (
    <SafeAreaView>
      <FlatList
        data={Posts}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <ShowPosts item={item} />}
      />
    </SafeAreaView>
  );
}

export default Home