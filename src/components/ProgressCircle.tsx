import { View, Text } from "react-native";

export default function ProgressCircle({
  percentage,
  size = 220,
  strokeWidth = 20,
  time
}:any) {
  const progress = Math.min(Math.max(percentage, 0), 100);

  const radius = (size - strokeWidth) / 2;
  const center = size / 2;

  const segments = Math.round((progress / 100) * 360);

  return (
    <View
      className="items-center justify-center"
      style={{
        width: size,
        height: size,
      }}
    >
      {/* Background */}
      <View
        className="absolute rounded-full border-gray-200"
        style={{
          width: size,
          height: size,
          borderWidth: strokeWidth,
        }}
      />

      {/* Progress segments */}
      {Array.from({ length: segments }).map((_, index) => {
        // Mulai dari posisi atas
        const angle = (index - 90) * (Math.PI / 180);

        const x = center + radius * Math.cos(angle);
        const y = center + radius * Math.sin(angle);

        return (
          <View
            key={index}
            className="absolute rounded-full bg-[#6a51a8]"
            style={{
              width: strokeWidth,
              height: strokeWidth,
              left: x - strokeWidth / 2,
              top: y - strokeWidth / 2,
            }}
          />
        );
      })}

      {/* Text */}
      <Text className="text-2xl font-bold text-[#6a51a8]">
        {time}
      </Text>
    </View>
  );
}