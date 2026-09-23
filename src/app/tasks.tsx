import { View, Text, TextInput } from 'react-native';
import { useState } from "react"
import Ionicons from '@expo/vector-icons/Ionicons';
import List from "../components/List"

interface Props {
  // Define your props here
}

const Tasks = (props: Props) => {
  const [search, onChangeSearch] = useState('Useless Text');
  return (
    <View className="bg-[#fbf6fb]">
      {/* Search */}
      <View className="px-5 py-2">
        <View className="bg-[#f3ecf3] rounded-full flex-row items-center px-3">
          <Ionicons name="search" size={20} color="#6a51a8" />
          <TextInput onChangeText={onChangeSearch} value={search}  className="w-full"/>
        </View>
      </View>
      
      {/* Due date */}
      <View className="px-5 py-2">
        <View className="gap-1">
          <Text className="font-bold text-xl">Due Today</Text>
          <View>
            <List />
          </View>
        </View>
      </View>
      
      {/* Upcoming */}
      <View className="px-5 py-2">
        <View className="gap-1">
          <Text className="font-bold text-xl">Upcoming</Text>
          <View>
            <List />
          </View>
        </View>
      </View>
      
      {/* Completed */}
      <View className="px-5 py-2">
        <View className="gap-1">
          <Text className="font-bold text-xl">Completed</Text>
          <View>
            <List />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Tasks;