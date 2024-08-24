import CheckBox from '@react-native-community/checkbox';
import {useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
  StatusBar,
  Alert,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import {ItemTarefas} from './components/ItemTarefas';

export default function App() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState('');

  function addItem() {
    const newItem = {isChecked: false, text: text};
    const newList = items.concat(newItem);
    setItems(newList);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titulo}>
        <Text>To Do List</Text>
      </View>
      {items.map(function (item) {
        return <ItemTarefas text={item.text} />;
      })}
      <ItemTarefas text="Tarefa 1" />
      <View style={styles.submitTarefa}>
        <TextInput style={styles.textInput} onChangeText={setText} />
        <TouchableOpacity style={styles.addButton} onPress={addItem}>
          <Image source={require('./assets/add.png')} style={styles.add} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: 8,
    //margin: 10
  },
  titulo: {},
  boxTarefa: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tarefa: {},
  lixeira: {
    height: 25,
    width: 25,
  },
  trashContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'black',
    flex: 1,
  },
  add: {
    height: 20,
    width: 20,
  },
  submitTarefa: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addButton: {
    borderColor: 'black',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 25,
    width: 25,
    borderRadius: 150,
  },
});
