import logo from './logo.svg';
import './App.css';
import Card from './components/card';
import NavBar from './components/navBar';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  //UseState
  const [quotes, setQuotes] = useState([]);

  //UseEffect
  useEffect(() => {
    axios.get("https://brapi.dev/api/quote/list", {
      params: {
        token: "35TmUkRTDKTCv6xDuhyecq",
        /* search: "TR",
        sortBy: "close",
        sortOrder: "desc", */
        limit: 30,
        type: "stock",
      }
    })
    .then(response => {
      // Faça algo com os dados recebidos
      console.log(response.data.stocks);
      setQuotes(response.data.stocks);
    })
    .catch(error => {
      console.error("Erro durante a requisição:", error);
    });

  }, [])

  //Return
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <main className='App-main p-4'>

        <div className='grid grid-cols-6 gap-5'>
          {
            quotes.map((quote, index) => (
              <Card quote={quote} key={index} />
            ))
          }
        </div>

      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
