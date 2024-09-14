import {
  Image,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  TextInput,
  Button,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {useState} from 'react';

export const ItemTarefas = ({
  text,
  isChecked,
  onCheck,
  onDelete,
  onEdit,
  isEditMode,
  onConfirmEditing,
}) => {
  const [editedText, setEditedText] = useState(text);

  function handleConfirmEditing() {
    onConfirmEditing(editedText);
  }

  return (
    <View style={styles.boxTarefa}>
      <CheckBox value={isChecked} onValueChange={onCheck} />
      <View style={styles.tarefa}>
        {isEditMode ? (
          <View style={styles.boxTarefa}>
            <TextInput style={styles.editMode} onChangeText={setEditedText} />
            <Button title="ok" onPress={handleConfirmEditing} />
          </View>
        ) : (
          <Text>{text}</Text>
        )}
      </View>
      <View style={styles.trashContainer}>
        <TouchableOpacity onPress={onDelete}>
          <Image
            source={require('../assets/lixeira.png')}
            style={styles.lixeira}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={onEdit}>
          <Image
            source={require('../assets/edit.png')}
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
  editMode: {
    borderWidth: 1,
    width: 280,
  },
});
