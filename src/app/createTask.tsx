import { View, Text, TextInput, ScrollView, Pressable, Alert } from 'react-native';
import { useState, useEffect } from 'react';
import { useRouter } from 'expo-router';
//import localStorage from "../../modules/localstorage/src/LocalStorageModule";
import Ionicons from '@expo/vector-icons/Ionicons';
import RNDateTimePicker from "@react-native-community/datetimepicker";

const AddTask = () => {
  const router = useRouter();
  const [datas, setDatas] = useState<any[]>([]);
  const [title, onChangeTitle] = useState('');
  const [context, onChangeContext] = useState('');
  const [category, setCategory] = useState('Work');
  const [showTime, setShowTime] = useState(false);
  const [showDate, setShowDate] = useState(false);
  const [date, onChangeDate] = useState<Date>(new Date());
  const [time, onChangeTime] = useState<Date>(new Date());
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");

  // const fetchingData = () => {
  //   const data = localStorage.getData();
  //   setDatas(data == "No Data" ? [] : JSON.parse(data));
  // };

  // useEffect(() => {
  //   fetchingData();
  // }, []);

  const submitData = () => {
    // if (!title.trim() || !selectedDate || !selectedTime) {
    //   Alert.alert("Peringatan", "Mohon isi Judul, Tanggal, dan Waktu tugas!");
    //   return;
    // }

    // const newTask = {
    //   id: Date.now(),
    //   title,
    //   context,
    //   category,
    //   selectedDate,
    //   selectedTime,
    //   check: false
    // };
    
    // const updatedDatas = [...datas, newTask];
    // localStorage.postData(JSON.stringify(updatedDatas));

    // onChangeTitle("");
    // onChangeContext("");
    // setSelectedDate("");
    // setSelectedTime("");
    // router.back();
  };

  return (
    <ScrollView className="flex-1 bg-[#fbf6fb]">
      {/* Input */}
      <View className="px-5 py-2">
        <View className="gap-4 p-4 bg-white rounded-lg">
          <View className="gap-1">
            <Text className="text-[#6a51a8] font-semibold">Task Objective</Text>
            <TextInput 
              onChangeText={onChangeTitle} 
              value={title} 
              placeholder="Input task title..."
              className="rounded-lg bg-[#f3ecf3] px-3 py-2"
            />
          </View>

          <View className="gap-1">
            <Text className="text-[#494551] font-semibold">Context & Execution Notes</Text>
            <TextInput 
              onChangeText={onChangeContext} 
              value={context} 
              placeholder="Add details..."
              className="rounded-lg bg-[#f3ecf3] px-3 py-2 h-32" 
              multiline 
              textAlignVertical="top"
            />
          </View>
        </View>
      </View>

      {/* Category */}
      <View className="px-5 py-2">
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false} 
          contentContainerClassName="flex-row gap-3 items-center"
        >
          {['Work', 'Study', 'Personal'].map((cat) => (
            <Pressable 
              key={cat}
              onPress={() => setCategory(cat)}
              className={`rounded-lg px-5 py-3 ${category === cat ? 'bg-[#6a51a8]' : 'bg-white'}`}
            >
              <Text className={`font-bold ${category === cat ? 'text-white' : 'text-black'}`}>{cat}</Text>
            </Pressable>
          ))}
        </ScrollView>
      </View>

      {/* Date & Time picker */}
      <View className="px-5 py-2">
        <Text className="text-xl font-bold mb-2">Deadline & Temporal Triggers</Text>
        <View className="flex-row justify-between gap-3">
          <Pressable className="flex-1 bg-white rounded-lg p-4 flex-row items-center justify-between border border-gray-100" onPress={() => setShowDate(true)}>
            <View>
              <Text className="text-sm font-bold text-gray-400">Date</Text>
              <Text className="text-base font-semibold mt-1">
                {!selectedDate ? "Pick date" : selectedDate}
              </Text>
            </View>
            <Ionicons name="calendar-outline" size={22} color="#6B7280" />
          </Pressable>

          <Pressable 
            className="flex-1 bg-white rounded-lg p-4 flex-row items-center justify-between border border-gray-100" 
            onPress={() => setShowTime(true)}
          >
            <View>
              <Text className="text-sm font-bold text-gray-400">Time</Text>
              <Text className="text-base font-semibold mt-1">
                {!selectedTime ? "Pick time" : selectedTime}
              </Text>
            </View>
            <Ionicons name="time-outline" size={22} color="#6B7280" />
          </Pressable>
        </View>
      </View>

      {/* DateTimePicker Modals */}
      {showDate && (
        <RNDateTimePicker
          mode="date"
          value={date}
          minimumDate={new Date()}
          onValueChange={(event, selectedVal) => {
            setShowDate(false);
            if (selectedVal) {
              onChangeDate(selectedVal);
              const formattedDate = `${selectedVal.getDate()}/${selectedVal.getMonth() + 1}/${selectedVal.getFullYear()}`;
              setSelectedDate(formattedDate);
            }
          }}
        />
      )}

      {showTime && (
        <RNDateTimePicker
          mode="time"
          value={time}
          onValueChange={(event, selectedVal) => {
            setShowTime(false);
            if (selectedVal) {
              onChangeTime(selectedVal);
              const hours = String(selectedVal.getHours()).padStart(2, '0');
              const minutes = String(selectedVal.getMinutes()).padStart(2, '0');
              setSelectedTime(`${hours}:${minutes}`);
            }
          }}
        />
      )}

      {/* Button Submit */}
      <View className="px-5 mt-5 mb-10">
        <Pressable className="bg-[#6a51a8] rounded-2xl p-4 items-center" onPress={submitData}>
          <Text className="text-white font-bold text-lg">Create Task</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default AddTask;