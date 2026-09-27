import { View, Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

interface Props {
  press:void;
  isCheck:boolean;
}

const Checkbox = (props: Props) => {
  return (
    <View>
      <Pressable onPress={props.press} className="border border-[#494551] aspect-square rounded h-7">
        {props.isCheck ? <Ionicons name="checkmark" size={24} color="#494551" /> :""}
      </Pressable>
    </View>
  );
};

export default Checkbox;