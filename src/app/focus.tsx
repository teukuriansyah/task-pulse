import { View, Text, ScrollView, Pressable } from 'react-native';
import { useState, useEffect, useRef } from "react";
import ProgressCircle from '@/components/ProgressCircle';
import Ionicons from '@expo/vector-icons/Ionicons';

const TIME_OPTIONS: Record<string, number> = {
  "25 Min": 25 * 60,
  "50 Min": 50 * 60,
  "15 Min": 15 * 60,
  "5 Min": 5 * 60,
};

const Focus = () => {
  const [isPlay, setIsPlay] = useState(false);
  const [selectedTime, setSelectedTime] = useState("25 Min");
  const [totalSeconds, setTotalSeconds] = useState(25 * 60);
  const [countdown, setCountdown] = useState(25 * 60);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isPlay) {
      interval = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            setIsPlay(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlay]);

  const percentageTime = totalSeconds > 0 ? (countdown / totalSeconds) * 100 : 0;

  const handleSelectTime = (mode: string) => {
    const seconds = TIME_OPTIONS[mode] || 25 * 60;
    setSelectedTime(mode);
    setTotalSeconds(seconds);
    setCountdown(seconds);
    setIsPlay(false);
  };

  const handleReset = () => {
    setIsPlay(false);
    setCountdown(totalSeconds);
  };

  const handleComplete = () => {
    setIsPlay(false);
    setCountdown(0);
  };

  return (
    <ScrollView className="bg-[#fbf6fb]">
      <View className="items-center mt-20">
        <ProgressCircle 
          percentage={percentageTime} 
          time={formatTime(countdown)} 
        />
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerClassName="flex-row gap-5 items-center px-5 mt-24">
        {Object.keys(TIME_OPTIONS).map((mode) => (
          <Pressable 
            key={mode}
            className={`${selectedTime === mode ? "bg-green-700" : "bg-[#f3ecf3]"} p-4 rounded-lg justify-center h-12`} 
            onPress={() => handleSelectTime(mode)}
          >
            <Text className={selectedTime === mode ? "text-green-400 font-semibold" : "text-black"}>
              {mode === "15 Min" ? "Custom (15 Min)" : mode === "5 Min" ? "Break (5 Min)" : mode}
            </Text>
          </Pressable>
        ))}
      </ScrollView>

      <View className="px-5 mt-5">
        <View className="flex-row justify-between">
          {/* Tombol Reset */}
          <Pressable 
            className="bg-[#f3ecf3] p-4 rounded-full aspect-square justify-center items-center h-16" 
            onPress={handleReset}
          >
            <Ionicons name="refresh" size={28} color="black" />
          </Pressable>

          {/* Tombol Play/Pause */}
          <Pressable 
            className="bg-[#6a51a8] flex-row justify-center p-4 rounded-full w-52 h-16 items-center gap-4" 
            onPress={() => setIsPlay(!isPlay)}
          >
            <Ionicons name={isPlay ? "pause" : "play"} size={28} color="white" />
            <Text className="text-white font-bold text-2xl">{isPlay ? "Pause" : "Play"}</Text>
          </Pressable>

          {/* Tombol Finish */}
          <Pressable 
            className="bg-[#f3ecf3] p-4 rounded-full aspect-square justify-center items-center h-16" 
            onPress={handleComplete}
          >
            <Ionicons name="checkmark" size={28} color="black" />
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

export default Focus;
