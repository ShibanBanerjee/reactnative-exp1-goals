import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

const GoalItem = (item) => {
  return (
      <View style={styles.goalItem}>
        <Pressable 
          android_ripple={{color: '#210644'}}
          style={({ pressed }) => pressed && styles.pressedItem}
          onPress={item.onDeleteItem.bind(this, item.id)} >
         <Text style={styles.goalText}>{item.text}</Text>
        </Pressable>
      </View> 

  )
}

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
      },
      pressedItem: {
        opacity: 0.5,
        backgroundColor: '#210644',
      },
      goalText: {
        color: 'white',
        padding: 8,
      }
});

export default GoalItem