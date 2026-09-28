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
    setDatas(data == "No Data" ? [] : JSON.parse(data))
  }

  const updateCheck = (i:number) => {
    datas[i].check = true
    localStorage.postData(JSON.stringify(datas))
    setDatas(JSON.parse(localStorage.getData()))
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
            <View className="gap-2">
              {datas?.map((d:any,i:any) => {
                const [day, month, year] = d.selectedDate.split('/');
                const selectedDate = new Date(Number(year), Number(month) - 1, Number(day));
                const today = new Date();
                if(today.toDateString() == selectedDate.toDateString() && !d.check) {
                  return <List category={d.category} key={i} press={() => updateCheck(i)} check={d.check} title={d.title} time={d.selectedTime} date={d.selectedDate} context={d.context} />
                }
              })}
            </View>
          </View>
        </View>
        
        {/* Upcoming */}
        <View className="px-5 py-2">
          <View className="gap-1">
            <Text className="font-bold text-xl">Upcoming</Text>
            <View className="gap-2">
              {datas?.map((d:any,i:any) => {
                const today = new Date();
                today.setHours(0, 0, 0, 0);
                const [day, month, year] = d.selectedDate.split('/');
                const selectedDate = new Date(Number(year), Number(month) - 1, Number(day));
                if(selectedDate > today && !d.check) {
                  return <List category={d.category} key={i} check={d.check} press={() => updateCheck(i)} title={d.title} time={d.selectedTime} date={d.selectedDate} context={d.context} />
                }
              })}
            </View>
          </View>
        </View>
        
        {/* Completed */}
        <View className="px-5 py-2">
          <View className="gap-1">
            <Text className="font-bold text-xl">Completed</Text>
            <View className="gap-2">
              {datas?.map((d:any,i:any) => {
                if(d.check) {
                  return <List category={d.category} key={i} press="" title={d.title} time={d.selectedTime} date={d.selectedDate} context={d.context} check={d.check}/>
                }
              })}
            </View>
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
