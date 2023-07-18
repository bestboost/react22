import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
// import { Reader } from './Reader';
// import items from '../publications.json';
import {MaterialForm} from './MaterialForm/MaterialForm'
import { Materials } from './Materials/Materials';
import * as API from './services/api';

export class App extends Component {
  state = {
    materials: [],
    isLoading: false,
    error: false,
  };
  
async componentDidMount() {
  try{
    this.setState({isLoading: true});
    const materials = await API.getMaterials();
    this.setState({materials, isLoading: false})
  } catch (error){
    this.setState({error: true, isLoading: false});
     console.log(error);
  }
}

addMaterial =  async (values) => {
  try{
    const material = await API.addMaterial(values);
    this.setState(state => ({materials: [...state.materials, material],
    }));
  } catch (error) {
    this.setState({error: true, isLoading: false});
    console.log(error)
  } 
};

deleteMaterials = async id => {
  await API.deleteMaterials(id);
  this.setState(state => ({
    materials: state.materials.filter(material => material.id !== id)
  }))
}

  render() { 
    const {materials, isLoading, error} = this.state;
     
    return (
      <>
        <GlobalStyle />
        {error && <p>Ой-йой! Щось пішло не так :( Перегрузіть сторінку і спробуйте ще раз.</p>}
        <MaterialForm onSubmit={this.addMaterial}/>
        {isLoading ? 'LOADING...' : (
          <Materials items={materials} onDelete={this.deleteMaterials}/>
        )} 
        {/* <Reader items={items} /> */}
      </>
    ); 
  }
}