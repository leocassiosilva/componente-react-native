import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Pessoas from './src/Pessoa/Pessoas';

class App extends Component{
  
  constructor(props){
    super(props);
    this.state = {
      lista: [
        {id: '1', nome:'Matheus', idade:50, email:'matheus@matheus.com'},
        {id: '2', nome:'Pedro', idade:21, email:'pedro@pedro.com'},
        {id: '3', nome:'Aluisio', idade:35, email:'aluisio@aluisio.com'},
        {id: '4', nome:'José', idade:28, email:'jose@jose.com'},
        {id: '5', nome:'Maria', idade:45, email:'maria@maria.com'},
      ]
    };
  }

  render(){
    return (
      <View style={styles.container}>
        <FlatList data={this.state.lista} keyExtractor={(item)=> item.id} renderItem={({item}) => <Pessoas data={item}/> } />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App; 