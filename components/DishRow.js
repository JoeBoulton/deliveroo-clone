import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import currencyFormatter from '../utilis/currencyFormatter';
import { urlFor } from '../sanity';
import Ionicons from '@expo/vector-icons/Ionicons';

const DishRow = ({ id, name, description, price, image }) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <>
      <TouchableOpacity
        onPress={() => setIsPressed(!isPressed)}
        className={`bg-white border p-4 border-gray-200 ${
          isPressed && 'border-b-0'
        }`}
      >
        <View className="flex-row">
          <View className="flex-1 pr-2">
            <Text className="text-lg mb-1">{name}</Text>
            <Text className="text-gray-400">{description}</Text>
            <Text className="text-gray-400 mt-2">
              <Text>{currencyFormatter(price)}</Text>
            </Text>
          </View>
          <View>
            <Image
              style={{
                borderWidth: 1,
                borderColor: '#F3F3F4',
              }}
              source={{ uri: urlFor(image).url() }}
              className="h-20 w-20 bg-gray-300 p-4"
            />
          </View>
        </View>
      </TouchableOpacity>

      {isPressed && (
        <View className="bg-white px-4">
          <View className="flex-row items-center space-x-2 pb-3">
            <TouchableOpacity>
              <Ionicons
                name="remove-circle"
                size={40}
                style={{
                  height: 40,
                  width: 40,
                  lineHeight: 40,
                  textAlign: 'center',
                }}
                color={'#00CCBB'}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>0</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons
                name="add-circle"
                size={40}
                style={{
                  height: 40,
                  width: 40,
                  lineHeight: 40,
                  textAlign: 'center',
                }}
                color={'#00CCBB'}
              />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DishRow;
