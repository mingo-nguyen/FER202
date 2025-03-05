import logo from './logo.svg';
import './App.css';
import ItemList from './components/ItemList';
import 'bootstrap/dist/css/bootstrap.min.css';
import QuestionBank from './components/QuestionBank';

function App() {
  return (
    <div className="App">
      <ItemList></ItemList>
      <QuestionBank></QuestionBank>
    </div>
  );
}

export default App;
