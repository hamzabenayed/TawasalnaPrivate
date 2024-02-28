import { View, Text,FlatList } from 'react-native'
import React from 'react'
import Posts from '../../data/Posts'
import ShowPosts from '../components/ShowPosts'
const Home = () => {
  return (
    <View>
      <FlatList
        data={Posts}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => <ShowPosts item={item}/>}
         />
      
    </View>
  );
}

export default Home