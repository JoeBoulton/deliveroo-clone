import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import { urlFor } from '../sanity';
import Ionicons from '@expo/vector-icons/Ionicons';
import DishRow from '../components/DishRow';

const RestuarantScreen = () => {
  const navigation = useNavigation();

  const {
    params: {
      id,
      imgUrl,
      title,
      rating,
      genre,
      address,
      short_description,
      dishes,
      long,
      lat,
    },
  } = useRoute();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <ScrollView>
      <View className="relative">
        <Image
          source={{ uri: urlFor(imgUrl).url() }}
          className="w-full h-56 bg-gray-300 p-4"
        />
        <TouchableOpacity
          onPress={navigation.goBack}
          className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full"
        >
          <Ionicons
            name="arrow-back-outline"
            size={20}
            color="#00CCBB"
            style={{
              height: 20,
              width: 20,
              lineHeight: 20,
              textAlign: 'center',
            }}
          />
        </TouchableOpacity>
      </View>
      <View className="bg-white">
        <View className="px-4 pt-4">
          <Text className="text-3xl font-bold">{title}</Text>
          <View className="flex-row space-x-2 my-1">
            <View className="flex-row items-center space-x-1">
              <Ionicons
                name="star"
                size={22}
                opacity={0.5}
                color="green"
                style={{
                  height: 22,
                  width: 22,
                  lineHeight: 22,
                  textAlign: 'center',
                }}
              />
              <Text className="text-xs text-gray-500">
                <Text className="text-green-500">{rating}</Text> · {genre}
              </Text>
            </View>
            <View className="flex-row items-center space-x-1">
              <Ionicons
                name="location-outline"
                size={22}
                opacity={0.4}
                color="gray"
                style={{
                  height: 22,
                  width: 22,
                  lineHeight: 22,
                  textAlign: 'center',
                }}
              />
              <Text className="text-xs text-gray-500">Nearby · {address}</Text>
            </View>
          </View>
          <Text className="text-gray-500 mt-2 pb-4">{short_description}</Text>
        </View>
        <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
          <Ionicons
            name="help-circle-outline"
            size={20}
            opacity={0.6}
            color="gray"
            style={{
              height: 20,
              width: 20,
              lineHeight: 20,
              textAlign: 'center',
            }}
          />
          <Text className="pl-2 flex-1 text-md font-bold">
            Have a food allergy?
          </Text>
          <Ionicons
            name="arrow-forward-outline"
            size={20}
            color="#00CCBB"
            style={{
              height: 20,
              width: 20,
              lineHeight: 20,
              textAlign: 'center',
            }}
          />
        </TouchableOpacity>
      </View>
      <View>
        <Text className="pt-6 mb-3 px-4 font-bold text-xl">Menu</Text>

        {/* DISHES */}
        {dishes.map((dish) => (
          <DishRow
            key={dish._id}
            id={dish._id}
            name={dish.name}
            description={dish.short_description}
            price={dish.price}
            image={dish.image}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default RestuarantScreen;
