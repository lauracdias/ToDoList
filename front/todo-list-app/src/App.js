import './App.css';
import {useEffect, useState} from 'react';
import axios from 'axios';

function App() {

  const [itemText, setItemText] = useState('')
  const [listItems, setListItems] = useState([]);
  const [atualizando,setAtualizando] = useState('');
  const [updateItemText, setUpdateItemText] = useState('')

  const adicionarTarefa = async (e) =>
  {
    e.preventDefault();
    try
    {
      const res = await axios.post('http://localhost:5000/api/item', {item: itemText})
      setListItems(prev => [...prev,res.data]);
      setItemText('');
    }
    catch(err)
    {
      console.log(err);
    }
  }

  useEffect(() => {
    const getListaTarefas = async () => {
      try
      {
        const res = await axios.get('http://localhost:5000/api/items');
        setListItems(res.data);
        console.log('render');
      }
      catch(err)
      {
        console.log(err);
      }
    }
    getListaTarefas()
  },[]);

  const deletarTarefa = async (id) => {
    try
    {
      const res = await axios.delete(`http://localhost:5000/api/item/${id}`);
      const novaLista = listItems.filter(item => item._id !== id);
      setListItems(novaLista);
    }
    catch(err)
    {
      console.log(err);
    }
  }

  const atualizarTarefa = async (e) => {
    e.preventDefault()
    try
    {
      const res = await axios.put(`http://localhost:5000/api/item/${atualizando}`, {item: updateItemText});
      console.log(res.data);
      const indexTarefaAtualizada = listItems.findIndex(item => item._id === atualizando);
      const tarefaAtualizada = listItems[indexTarefaAtualizada].item = updateItemText;
      setUpdateItemText('');
      setAtualizando('');
    }
    catch(err)
    {
      console.log(err);
    }
  }

  const exibirFormAtualizacao = () => (
    <form className="update-form" onSubmit={(e) => {atualizarTarefa(e)}}>
      <input className="nova-tarefa" type="text" placeholder="Nova tarefa" onChange={e=>{setUpdateItemText(e.target.value)}} value={updateItemText} />
      <button className="botao-atualizar" type="submit">Atualizar</button>
    </form>
  )

  return (
    <div className="App">
      <h1>ToDo List</h1>
      <form className="form" onSubmit={e => adicionarTarefa(e)}>
        <input type="text" placeholder='Adicionar nova tarefa' onChange={e => {setItemText(e.target.value)}} value={itemText}/>
        <button type="submit">Adicionar</button>
      </form>
      <div className="lista-tarefas">
        {
          listItems.map(item => (
          <div className="tarefas">
            {
              atualizando === item._id
              ? exibirFormAtualizacao()
              : <>
                  <p className="nome-tarefa">{item.item}</p>
                  <button className="atualizar-tarefa" onClick={() => {setAtualizando(item._id)}}>Atualizar</button>
                  <button className="excluir-tarefa" onClick={() =>{deletarTarefa(item._id)}}>Excluir</button>
                </>
            }
          </div>
          ))
        }
      </div>
    </div>
  );
}

export default App;
