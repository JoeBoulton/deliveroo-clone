import { View, Text, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import RestaurantCard from './RestaurantCard';
import sanityClient from '../sanity';

const FeaturedRow = ({ id, title, description }) => {
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    {
      sanityClient
        .fetch(
          ` *[_type == "featured" && _id==$id] {
        ...,
          restaurants[]->{
            ...,
            dishes[]->,
             type->{
               ...
             }
          },
        }[0]`,
          { id }
        )
        .then((data) => {
          setRestaurants(data?.restaurants);
        });
    }
  }, []);

  console.log(restaurants);

  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <Ionicons name="arrow-forward-outline" color="#00CCBB" size={25} />
      </View>

      <Text className="text-xs text-gray-500 px-4">{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* RESTAURANT CARDS */}
        {restaurants?.map((restaurant) => {
          <RestaurantCard
            key={restaurant._id}
            id={restaurant._id}
            imgUrl={restaurant.image}
            title={restaurant.name}
            rating={restaurant.rating}
            genre={restaurant.type?.name}
            address={restaurant.address}
            short_description={restaurant.short_description}
            dishes={restaurant.dishes}
            long={restaurant.long}
            lat={restaurant.lat}
          />;
        })}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;