import { View, Text, TextInput, ScrollView, Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import RNDateTimePicker from "@react-native-community/datetimepicker";

const AddTask = () => {
  const [title, onChangeTitle] = useState('Useless Text');
  const [context, onChangeContext] = useState('Useless Textx');
  const [showTime, setShowTime] = useState(false);
  const [showDate, setShowDate] = useState(false);
  const [date, onChangeDate] = useState<any>(new Date());
  const [time, onChangeTime] = useState<any>(new Date());
  const [selectedDate, setSelectedDate] = useState<string>();
  const [selectedTime, setSelectedTime] = useState<string>();

  return (
    <View>
      {/* Input */}
      <View className="px-5 py-2">
        <View className="border-lg gap-4 p-4 bg-white rounded-lg">
          <View className="gap-1">
            <Text className="text-[#6a51a8]">Task Objective</Text>
            <TextInput 
              onChangeText={onChangeTitle} 
              value={title} 
              className="rounded-lg bg-[#f3ecf3] px-3"
            />
          </View>

          <View className="gap-1">
            <Text className="text-[#494551]">Context & Execution Notes</Text>
            <TextInput 
              onChangeText={onChangeContext} 
              value={context} 
              className="rounded-lg bg-[#f3ecf3] px-3 h-40" 
              multiline 
              textAlignVertical="top"
            />
          </View>
        </View>
      </View>

      {/* Category */}
      <View className="px-5 py-2">
        <ScrollView 
          horizontal={true} 
          showsHorizontalScrollIndicator={false} 
          contentContainerClassName="flex-row gap-5 items-center px-5"
        >
          <Pressable className="bg-white rounded-lg px-5 py-3">
            <Text className="font-bold">Work</Text>
          </Pressable>
          <Pressable className="bg-white rounded-lg px-5 py-3">
            <Text className="font-bold">Study</Text>
          </Pressable>
          <Pressable className="bg-white rounded-lg px-5 py-3">
            <Text className="font-bold">Personal</Text>
          </Pressable>
        </ScrollView>
      </View>

      {/* Date picker */}
      <View className="px-5 py-2">
        <Text className="text-2xl font-bold">Deadline & Temporal Triggers</Text>
        <View className="flex-row justify-between mt-3 gap-3">
          <Pressable 
            className="flex-1 bg-white rounded-lg p-4 flex-row items-center justify-between border border-gray-100 shadow-sm" 
            onPress={() => setShowDate(!showDate)}
          >
            <View>
              <Text className="text-lg font-bold">Date</Text>
              <Text className="text-gray-500 mt-1">
                {selectedDate == null ? "Pick date" : selectedDate}
              </Text>
            </View>
            <Ionicons name="calendar-outline" size={22} color="#6B7280" />
          </Pressable>

          <Pressable 
            className="flex-1 bg-white rounded-lg p-4 flex-row items-center justify-between border border-gray-100 shadow-sm" 
            onPress={() => setShowTime(!showTime)}
          >
            <View>
              <Text className="text-lg font-bold">Time</Text>
              <Text className="text-gray-500 mt-1">
                {selectedTime == null ? "Pick time" : selectedTime}
              </Text>
            </View>
            <Ionicons name="time-outline" size={22} color="#6B7280" />
          </Pressable>
        </View>
      </View>

      {/* DateTimePicker Modals */}
      <View className="px-5 py-2">
        {showDate && (
          <RNDateTimePicker
            mode="date"
            value={date}
            onChange={(event, selectedDate) => {
              if (selectedDate) {
                const dateNow = new Date();
                if (selectedDate > dateNow) {
                  onChangeDate(selectedDate);
                  setSelectedDate(`${selectedDate.getDate()}/${selectedDate.getMonth() + 1}/${selectedDate.getFullYear()}`);
                } else {
                  setSelectedDate("wrong");
                }
              }
              setShowDate(false);
            }}
          />
        )}

        {showTime && (
          <RNDateTimePicker
            mode="time"
            value={time}
            onChange={(event, selectedTime) => {
              if (selectedTime) {
                onChangeTime(selectedTime);
                setSelectedTime(
                  `${selectedTime.getHours()}:${selectedTime.getMinutes() > 9 ? selectedTime.getMinutes() : `0${selectedTime.getMinutes()}`}`
                );
              }
              setShowTime(false);
            }}
          />
        )}
      </View>

      {/* Button Submit */}
      <View className="px-5 mt-7">
        <Pressable className="bg-[#6a51a8] rounded-3xl p-5 items-center">
          <Text className="text-white font-bold text-xl">Create Task</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default AddTask;
