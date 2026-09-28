import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { Link, useFocusEffect } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useState, useCallback } from "react";
import localStorage from "../../modules/localstorage/src/LocalStorageModule";
import List from "../components/List";

const Tasks = () => {
  const [datas, setDatas] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showCompleted, setShowCompleted] = useState(false);

  const fetchingData = useCallback(() => {
    const data = localStorage.getData();
    if (!data || data === "No Data") setDatas([]);
    else {
      try { setDatas(JSON.parse(data)); }
      catch (error) { setDatas([]); }
    }
  }, []);

  useFocusEffect(useCallback(() => { fetchingData(); }, [fetchingData]));

  const updateCheck = (indexToUpdate: number) => {
    const updatedDatas = datas.map((item, index) => index === indexToUpdate ? { ...item, check: true } : item);
    localStorage.postData(JSON.stringify(updatedDatas));
    setDatas(updatedDatas);
  };

  const filteredDatas = datas.filter((d: any) => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return d?.title?.toLowerCase().includes(q) || d?.context?.toLowerCase().includes(q);
  });

  const completedTasks = filteredDatas?.filter((d: any) => d.check) || [];

  return (
    <View className="flex-1 relative bg-[#fbf6fb]">
      <ScrollView className="flex-1" contentContainerStyle={{ paddingBottom: 100 }}>
        
        {/* Search Bar */}
        <View className="px-5 py-2">
          <View className="bg-[#f3ecf3] rounded-full flex-row items-center px-3 py-1">
            <Ionicons name="search" size={20} color="#6a51a8" />
            <TextInput className="flex-1 ml-2 text-base text-[#494551]" placeholder="Search tasks..." value={searchQuery} onChangeText={setSearchQuery} />
          </View>
        </View>
        
        {/* Due Today */}
        <View className="px-5 py-2">
          <View className="gap-1">
            <Text className="font-bold text-xl">Due Today</Text>
            <View className="gap-2">
              {filteredDatas?.map((d: any, i: number) => {
                if (!d?.selectedDate || d.check) return null;
                const [day, month, year] = d.selectedDate.split('/');
                const selectedDate = new Date(Number(year), Number(month) - 1, Number(day));
                if (new Date().toDateString() === selectedDate.toDateString()) {
                  return <List key={i} category={d.category} press={() => updateCheck(i)} check={d.check} title={d.title} time={d.selectedTime} date={d.selectedDate} context={d.context} />;
                }
                return null;
              })}
            </View>
          </View>
        </View>
        
        {/* Upcoming */}
        <View className="px-5 py-2">
          <View className="gap-1">
            <Text className="font-bold text-xl">Upcoming</Text>
            <View className="gap-2">
              {filteredDatas?.map((d: any, i: number) => {
                if (!d?.selectedDate || d.check) return null;
                const today = new Date(); today.setHours(0, 0, 0, 0);
                const [day, month, year] = d.selectedDate.split('/');
                const selectedDate = new Date(Number(year), Number(month) - 1, Number(day));
                if (selectedDate > today) {
                  return <List key={i} category={d.category} check={d.check} press={() => updateCheck(i)} title={d.title} time={d.selectedTime} date={d.selectedDate} context={d.context} />;
                }
                return null;
              })}
            </View>
          </View>
        </View>
        
        {/* Completed */}
        <View className="px-5 py-2">
          <View className="gap-1">
            <TouchableOpacity onPress={() => setShowCompleted(!showCompleted)} className="flex-row items-center justify-between py-2" activeOpacity={0.7}>
              <View className="flex-row items-center gap-2">
                <Text className="font-bold text-xl">Completed</Text>
                {completedTasks.length > 0 && <View className="bg-[#e8def8] px-2 py-0.5 rounded-full"><Text className="text-xs font-semibold text-[#4f378a]">{completedTasks.length}</Text></View>}
              </View>
              <Ionicons name={showCompleted ? "chevron-up" : "chevron-down"} size={22} color="#494551" />
            </TouchableOpacity>

            {showCompleted && (
              <View className="gap-2 mt-1">
                {completedTasks.length === 0 ? <Text className="text-gray-400 italic py-1">No completed tasks</Text> : filteredDatas?.map((d: any, i: number) => d.check ? <List key={i} category={d.category} press={() => {}} title={d.title} time={d.selectedTime} date={d.selectedDate} context={d.context} check={d.check} /> : null)}
              </View>
            )}
          </View>
        </View>

      </ScrollView>
      
      {/* Add Task FAB */}
      <View className="absolute bottom-5 right-5 rounded-xl bg-[#4F378A] p-5 w-28 shadow-lg items-center">
        <Link href="/createTask"><Text className="text-white font-bold text-xl">+ Task</Text></Link>
      </View>

    </View>
  );
};

export default Tasks;