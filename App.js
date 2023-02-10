import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [coarseGoals, setCoarseGoals] = useState([]);

  const startAtGoalHandler = () => {
    setModalIsVisible(true);
  }

  const closeAtGoalHandler = () => {
    setModalIsVisible(false);
  }

  const addGoalHandler = (enteredGoalText) => {
    if(enteredGoalText) {
    setCoarseGoals((currentCoarseGoals) => [...currentCoarseGoals, {text: enteredGoalText, id: Math.random().toString()}]);
    closeAtGoalHandler();
    }
  }

  const deleteGoalHandler = (id) => {
    setCoarseGoals(currentCoarseGoals => {
      return currentCoarseGoals.filter((goal) => goal.id !== id );
    });
  }

  return (
    <>
    <StatusBar style='light' />
    <View style={styles.appContainer}>
      <Button title='Add New Goal' color="#b180f0" onPress={startAtGoalHandler} />
      <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler} onClose={closeAtGoalHandler} />
      <View style={styles.goalsContainer}>
      <FlatList 
        data={coarseGoals} 
        renderItem={(itemData) => {
          return (
            <GoalItem 
              text={itemData.item.text} 
              id={itemData.item.id}
              onDeleteItem={deleteGoalHandler} 
              />
          )
      }} 
      keyExtractor={(item, index) => {
            return item.id;
          }}
      alwaysBounceVertical={false} 
      />
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
});
