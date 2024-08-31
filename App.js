import CheckBox from '@react-native-community/checkbox';
import {useRef, useState} from 'react';
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
  const [checkedItems, setCheckedItems] = useState([]);
  const idCount = useRef(1);

  const [text, setText] = useState('');

  function addItem() {
    const newItem = {isChecked: false, text: text, id: idCount.current};
    idCount.current += 1;
    const newList = items.concat(newItem);
    if (newItem.text != '') {
      setItems(newList);
    }
    setText('');
  }

  function checkItem(item) {
    function filterItem(i) {
      return i.id !== item.id;
    }
    const filteredList = items.filter(filterItem);
    setItems(filteredList);

    const newList = checkedItems.concat(item);
    setCheckedItems(newList);
  }
  function deleteItem(item) {
    function filterItem(i) {
      return i.id !== item.id;
    }
    const newList = items.filter(filterItem);
    setItems(newList);
  }
  function deleteCheckedItem(item) {
    function filterItem(i) {
      return i.id !== item.id;
    }
    const newList = checkedItems.filter(filterItem);
    console.log(newList);
    setCheckedItems(newList);
  }
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.tituloToDo}>To Do List</Text>
      </View>
      {items.map(function (item) {
        function handleCheck(value) {
          const checkedItem = {
            ...item,
            isChecked: value,
          };
          checkItem(checkedItem);
        }
        function handleDelete() {
          deleteItem(item);
        }
        return (
          <ItemTarefas
            key={item.id}
            id={item.id}
            text={item.text}
            isChecked={item.isChecked}
            onCheck={handleCheck}
            onDelete={handleDelete}
          />
        );
      })}
      <View>
        <Text style={styles.tituloCheckedList}>Is Checked</Text>
      </View>
      {checkedItems.map(function (checkedItem) {
        function handleCheck() {
          checkItem(checkedItem);
        }
        function handleDeleteChecked() {
          deleteCheckedItem(checkedItem);
        }
        return (
          <ItemTarefas
            key={checkedItem.id}
            id={checkedItem.id}
            text={checkedItem.text}
            isChecked={checkedItem.isChecked}
            onCheck={handleCheck}
            onDelete={handleDeleteChecked}
          />
        );
      })}
      <View style={styles.submitTarefa}>
        <TextInput
          style={styles.textInput}
          onChangeText={setText}
          onSubmitEditing={addItem}
          value={text}
        />
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
  tituloToDo: {
    fontSize: 19,
    fontWeight: '800',
    color: 'red',
  },
  tituloCheckedList: {
    fontSize: 19,
    fontWeight: '800',
    color: 'green',
  },
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
    borderRadius: 5,
    marginRight: 4,
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
