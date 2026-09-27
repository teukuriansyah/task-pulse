import { View, Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

interface Props { press: () => void; isCheck: boolean; }

const Checkbox = (props: Props) => (
  <View>
    <Pressable onPress={props.press} className="border border-[#494551] aspect-square rounded h-7 items-center justify-center">
      {props.isCheck ? <Ionicons name="checkmark" size={20} color="#494551" /> : null}
    </Pressable>
  </View>
);

export default Checkbox;