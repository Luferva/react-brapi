import logo from './logo.svg';
import './App.css';
import Card from './components/card';
import NavBar from './components/navBar';
import { useEffect, useState } from 'react';
import { getQuoteList } from './Service/QuoteService';


function App() {

  //UseState
  const [quotesData, setQuotes] = useState([]);

  //UseEffect
  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const quotesData = await getQuoteList();
        
        setQuotes(quotesData.stocks);
      } catch (error) {
        console.error("Erro durante a requisição:", error);
      }
    };

    fetchQuotes();

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
            quotesData.map((quote, index) => (
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
