import { View, Text, ScrollView, Pressable } from 'react-native';
import { useState, useEffect } from "react";
import ProgressCircle from '@/components/ProgressCircle';
import Ionicons from '@expo/vector-icons/Ionicons';

const Focus = () => {
  const [isPlay, setIsPlay] = useState(false);
  const [timeFocus, setTimeFocus] = useState("25 Min");
  const [saveTime, setSaveTime] = useState()
  const [percentageTime, setPercentageTime] = useState(100);

  useEffect(() => {
    let interval = null;
    if (isPlay && percentageTime > 0) interval = setInterval(() => setPercentageTime(prev => prev - 1), 1000);
    else if (percentageTime === 0) setIsPlay(false);
    return () => interval && clearInterval(interval);
  }, [isPlay, percentageTime]);

  const handleSelectTime = (mode:any) => { setTimeFocus(mode); setIsPlay(false); setPercentageTime(100); setSaveTime(mode)};

  return (
    <ScrollView className="bg-[#fbf6fb]">
      <View className="items-center mt-20"><ProgressCircle percentage={percentageTime} time={timeFocus}/></View>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerClassName="flex-row gap-5 items-center px-5 mt-24">
        <Pressable className={`${timeFocus === "25 Min" ? "bg-green-700" : "bg-[#f3ecf3]"} p-4 rounded-lg justify-center h-12`} onPress={() => handleSelectTime("25 Min")}><Text className={`${timeFocus === "25 Min" ? "text-green-400" : ""}`}>25 Min</Text></Pressable>
        <Pressable className={`${timeFocus === "50 Min" ? "bg-green-700" : "bg-[#f3ecf3]"} p-4 rounded-lg justify-center h-12`} onPress={() => handleSelectTime("50 Min")}><Text className={`${timeFocus === "50 Min" ? "text-green-400" : ""}`}>50 Min</Text></Pressable>
        <Pressable className={`${timeFocus === "15 Min" ? "bg-green-700" : "bg-[#f3ecf3]"} p-4 rounded-lg justify-center h-12`} onPress={() => handleSelectTime("15 Min")}><Text className={`${timeFocus === "15 Min" ? "text-green-400" : ""}`}>Custom (15 Min)</Text></Pressable>
        <Pressable className={`${timeFocus === "5 Min" ? "bg-green-700" : "bg-[#f3ecf3]"} p-4 rounded-lg justify-center h-12`} onPress={() => handleSelectTime("5 Min")}><Text className={`${timeFocus === "5 Min" ? "text-green-400" : ""}`}>Break (5 Min)</Text></Pressable>
      </ScrollView>

      <View className="px-5 mt-5">
        <View className="flex-row justify-between">
          <Pressable className="bg-[#f3ecf3] p-4 rounded-full aspect-square justify-center items-center h-16" onPress={() => { setIsPlay(false); setPercentageTime(100); }}><Ionicons name="refresh" size={28} color="black" /></Pressable>
          <Pressable className="bg-[#6a51a8] flex-row justify-center p-4 rounded-full w-52 h-16 items-center gap-4" onPress={() => setIsPlay(!isPlay)}><Ionicons name={isPlay ? "pause" : "play"} size={28} color="white" /><Text className="text-white font-bold text-2xl">{isPlay ? "Pause" : "Play"}</Text></Pressable>
          <Pressable className="bg-[#f3ecf3] p-4 rounded-full aspect-square justify-center items-center h-16" onPress={() => { setIsPlay(false); setPercentageTime(0); setTimeFocus(saveTime)}}><Ionicons name="checkmark" size={28} color="black" /></Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

export default Focus;