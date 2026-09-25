import { View, Text, ScrollView, TextInput } from 'react-native';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useState, useEffect } from "react"
import localStorage from "../../modules/localstorage/src/LocalStorageModule"
import List from "../components/List";

const Tasks = () => {
  const [datas,setDatas] = useState<any>()
  
  const fetchingData = () => {
    const data = localStorage.getData()
    setDatas(data == "No Data" ? [] : data)
  }

  useEffect(() => {
    fetchingData()
  },[])
  return (
    <View className="flex-1 relative bg-[#fbf6fb]">
      <ScrollView className="flex-1" contentContainerStyle={{ paddingBottom: 100 }}>
        
        {/* Search */}
        <View className="px-5 py-2">
          <View className="bg-[#f3ecf3] rounded-full flex-row items-center px-3 py-1">
            <Ionicons name="search" size={20} color="#6a51a8" />
            <TextInput className="w-full ml-2 text-base text-[#494551]" placeholder="Search tasks..." />
          </View>
        </View>
        
        {/* Due date */}
        <View className="px-5 py-2">
          <View className="gap-1">
            <Text className="font-bold text-xl">Due Today</Text>
            <View><List /></View>
          </View>
        </View>
        
        {/* Upcoming */}
        <View className="px-5 py-2">
          <View className="gap-1">
            <Text className="font-bold text-xl">Upcoming</Text>
            <View><List /></View>
          </View>
        </View>
        
        {/* Completed */}
        <View className="px-5 py-2">
          <View className="gap-1">
            <Text className="font-bold text-xl">Completed</Text>
            <View><List /></View>
          </View>
        </View>

      </ScrollView>
      
      <View className="absolute bottom-5 right-5 rounded-xl bg-[#4F378A] p-5 w-28 shadow-lg items-center">
        <Link href="/createTask"><Text className="text-white font-bold text-xl">+ Task</Text></Link>
      </View>

    </View>
  );
};

export default Tasks;
