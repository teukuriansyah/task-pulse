import { View, Text, TextInput, ScrollView, Pressable } from 'react-native';
import { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';

interface Props {
  // Define your props here
}

const AddTask = (props: Props) => {
  const [title, onChangeTitle] = useState('Useless Text');
  return (
    <View>
      {/* Input */}
      <View className="px-5 py-2">
        <View className="border-lg gap-4 p-4 bg-white rounded-lg">
          <View className="gap-1">
            <Text className="text-[#6a51a8]">Task Objective</Text>
            <TextInput onChangeText={onChangeTitle} value={title} className="rounded-lg bg-[#f3ecf3] px-3"/>
          </View>
          <View className="gap-1">
            <Text className="text-[#494551]">Context & Execution Notes</Text>
            <TextInput onChangeText={onChangeTitle} value={title} className="rounded-lg bg-[#f3ecf3] px-3"/>
          </View>
        </View>
      </View>

      {/* Category */}
      <View className="px-5 py-2">
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerClassName="flex-row gap-5 items-center px-5">
          <Pressable className="bg-white rounded-lg px-5 py-3"><Text className="font-bold">Work</Text></Pressable>
          <Pressable className="bg-white rounded-lg px-5 py-3"><Text className="font-bold">Study</Text></Pressable>
          <Pressable className="bg-white rounded-lg px-5 py-3"><Text className="font-bold">Personal</Text></Pressable>
        </ScrollView>
      </View>
      
      {/* Button Submit */}
      <View className="px-5 mt-7">
        <Pressable className="bg-[#6a51a8] rounded-3xl p-5 items-center"><Text className="text-white font-bold text-xl">Create Task</Text></Pressable>
      </View>
    </View>
  );
};

export default AddTask;