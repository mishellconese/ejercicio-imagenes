import logo from './utils/images/logo.svg';
import './App.css';
import Todo from'./Components/Todo.jsx'
import Cuerpo from './Components/Cuerpo.jsx'
import Footer from './Components/Footer.jsx'
import Title from './Components/Title.jsx'
import GlobalStyles from './GlobalStyle.js'

function App() {
	 return (
	    <div className="App">
	      <GlobalStyles />
	      <Title/>
	      <Todo />
	      <Cuerpo />
	      <Footer />
	    </div>
	 );
}

export default App;
