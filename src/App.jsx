import { useEffect } from "react";
import { useState } from "react";
import "./bootstrap.css";
import "./App.scss";
import Create from "./Components/Create";
import DataContext from "./Components/DataContext";
import List from "./Components/List";
import Edit from "./Components/Edit";
import axios from 'axios';

function App() {
  
  const [animals, setAnimals] = useState([]);
  const [lastUpdate, setLastUpdate] = useState(Date.now ());

  const [createAnimal, setCreateAnimal] = useState(null);
  const [deleteAnimal, setDeleteAnimal] = useState(null);
  const [editAnimal, setEditAnimal] = useState(null);

  const [modalAnimal, setModalAnimal] = useState(null);

  useEffect(()=>{
    axios.get('http://localhost/crud_react/my-app-server/animals')
    .then(res => setAnimals (res.data));
  }, [lastUpdate]);
  
  useEffect(()=>{
    if(null === createAnimal) return;
    axios.post('http://localhost/crud_react/my-app-server/animals', createAnimal)
    .then(_ => setLastUpdate(Date.now()));
  }, [createAnimal]);

  useEffect(() => {
    if(null === deleteAnimal) return;
    axios.delete('http://localhost/crud_react/my-app-server/animals/' + deleteAnimal.id)
      .then(_ => setLastUpdate(Date.now()));
  }, [deleteAnimal]);
  
  useEffect(() => {
    if(null === editAnimal) return;
    axios.put('http://localhost/crud_react/my-app-server/animals/' + editAnimal.id, editAnimal)
      .then(_ => setLastUpdate(Date.now()));
  }, [editAnimal]);


  return (
    <DataContext.Provider value={
      {
        animals, 
        setCreateAnimal,
        setDeleteAnimal,
        modalAnimal, 
        setModalAnimal,
        setEditAnimal,    //kada/kodel reikia paduot abu/viena???
      }
      }>
    <div className="container">
      <div className="row">
        <Create />
        <List />
      </div>
    </div>
    <Edit></Edit>
    </DataContext.Provider>
  );
}

export default App;
