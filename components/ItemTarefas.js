import {Image, Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

export const ItemTarefas = ({id, text, isChecked, onCheck, onDelete}) => {
  console.log(text, isChecked);
  return (
    <View style={styles.boxTarefa}>
      <CheckBox value={isChecked} onValueChange={onCheck} />
      <View style={styles.tarefa}>
        <Text>
          {text}
          {id}
        </Text>
      </View>
      <View style={styles.trashContainer}>
        <TouchableOpacity onPress={onDelete}>
          <Image
            source={require('../assets/lixeira.png')}
            style={styles.lixeira}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  boxTarefa: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tarefa: {},
  lixeira: {
    height: 20,
    width: 20,
  },
  trashContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
