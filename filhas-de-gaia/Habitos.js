//lista de hábitos 
import React from 'react';
import { View, Text, Button } from 'react-native';

export default function ListHabitos(){
const HabitList = ({ habits, onEdit, onDelete }) => {
  return (
    <View>
      {habits.map((habit, index) => (
        <View key={index} style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
          <Text>{habit}</Text>
          <Button title="Edit" onPress={() => onEdit(index)} />
          <Button title="Delete" onPress={() => onDelete(index)} />
        </View>
      ))}
    </View>
  );
};

//form dos hábitos p/ editar

import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

export default function FormHabitos(){
const HabitForm = ({ onSubmit, habitToEdit }) => {
  const [habit, setHabit] = useState(habitToEdit || '');

  const handleSubmit = () => {
    onSubmit(habit);
    setHabit('');
  };

  return (
    <View style={{ marginBottom: 10 }}>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, paddingHorizontal: 10 }}
        onChangeText={text => setHabit(text)}
        value={habit}
        placeholder="Enter habit"
      />
      <Button title={habitToEdit ? 'Edit Habit' : 'Add Habit'} onPress={handleSubmit} />
    </View>
  );
};

//para excluir um hábito
import React, { useState } from 'react';
import { View } from 'react-native';
import HabitForm from './HabitForm';
import HabitList from './HabitList';


export default function FormHabitos(){
const HabitTracker = () => {
  const [habits, setHabits] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const addHabit = (habit) => {
    if (habit.trim() !== '') {
      if (editIndex !== null) {
        const updatedHabits = [...habits];
        updatedHabits[editIndex] = habit;
        setHabits(updatedHabits);
        setEditIndex(null);
      } else {
        setHabits([...habits, habit]);
      }
    }
  };

  const editHabit = (index) => {
    setEditIndex(index);
  };

  const deleteHabit = (index) => {
    const updatedHabits = [...habits];
    updatedHabits.splice(index, 1);
    setHabits(updatedHabits);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20 }}>
      <HabitForm onSubmit={addHabit} habitToEdit={editIndex !== null ? habits[editIndex] : null} />
      <HabitList habits={habits} onEdit={editHabit} onDelete={deleteHabit} />
    </View>
  );
};

export default HabitTracker;
