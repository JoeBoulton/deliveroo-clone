import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
import sanityClient from '../sanity';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState([]);
  //   as soon as screen mounts do something

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "featured"] {
      ...,
        restaurants[]->{
          ...,
          dishes[]->,
           type->{
             ...
           }
        },
      }`
      )
      .then((data) => {
        setFeaturedCategories(data);
      });
  }, []);

  // console.log(featuredCategories);
  // when UI loads
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white pt-5">
      {/* HEADER */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          source={{ uri: 'https://links.papareact.com/wru' }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">
            Current Location{' '}
            <Ionicons name="chevron-down-outline" size={18} color="#00CCBB" />
          </Text>
        </View>
        <Ionicons name="person-outline" size={35} color="#00CCBB" />
      </View>

      {/* SEARCH */}
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row flex-1 space-x-2 bg-gray-200 p-2">
          <Ionicons name="search-outline" size={20} color="gray" />
          <TextInput
            placeholder="Restaurante and cuisines"
            keyboardType="default"
          />
        </View>
        <Ionicons name="options-outline" size={35} color="#00CCBB" />
      </View>

      {/* BODY */}
      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/* CATEGORIES */}
        <Categories />

        {/* FEATURED ROWS */}
        {featuredCategories?.map((category) => (
          <FeaturedRow
            id={category._id}
            key={category._id}
            title={category.name}
            description={category.short_description}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
