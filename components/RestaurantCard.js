import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';

const RestaurantCard = ({
  id,
  imgurl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat,
}) => {
  return (
    <TouchableOpacity className="bg-white mr-3 shadow">
      <Image source={{ uri: imgurl }} className="h-36 w-64 rounded-sm" />
      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className="flex-row items-center space-x-1">
          <Ionicons
            name="star"
            size={22}
            color="green"
            opacity={0.5}
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
            color="gray"
            opacity={0.4}
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
    </TouchableOpacity>
  );
};

export default RestaurantCard;
