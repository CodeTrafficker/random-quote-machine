import React from 'react';
import axios from 'axios';
import './randomquote.css';

/* Some To-dos:
- random quote pick
- Every 3rd quote give current bitcoin price? Or every 12 sec regardless
  of quote?
- Display as flipping panel on tap.
- Nice fade/dissolve up.
- random quote on scroll instead?
- 'saloon' or 'barndoor' swing-ins via animation/transition.
*/


class RandomQuote extends React.Component {
  constructor(props)  {
    super(props);
    this.state = {
        quotes: '',
        rQuote: '',
        rAuthor: '',
    }
    // Handles, if any, here.
  }

  
  getAllQuotes()  {
    const qData = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';

    axios.get(qData)
      .then(response => {
        console.log('response data is: ', response.data )
        
        this.setState({quotes: response.data.quotes});
        // Run once on load:
        this.getRandomQuote();
      })
      .catch(err => console.log(err))
  }

  // Separated out to leave dev room for displaying
  // all quotes, quotes by certain authors, authors only, etc
  getRandomQuote()  {
    const randomizer = (max) => {
      return Math.floor(Math.random() * (max) )
    }
    let allQuotes = this.state.quotes;
    let randoNum = randomizer(allQuotes.length);
    let thisRandomQuote = allQuotes[randoNum];
    // console.log('thisRandomQuote: '+ thisRandomQuote['quote'] );

    this.setState({
      rQuote: thisRandomQuote['quote'],
      rAuthor: thisRandomQuote['author']
    });
  }

  pullRandomQuote = () => {
    this.getRandomQuote()
  }

  // listAllQuotes() {
  //   //
  // }
  // pullAllQuote = () => {
  //   this.listAllQuotes()
  // }

  // listQuotesByAuthor() {
  //   //
  // }
  // pullByAuthor = () => {
  //   this.listQuotesByAuthor()
  // }

  // randomQuoteHistory()  {
  //   // Maintain list of last 10 quotes
  // }
  // showQuoteHistory = () => {
  //   this.randomQuoteHistory()
  // }


  // This runs third, after constructor and render()
  componentDidMount() {
    this.getAllQuotes();
  }

  render() {
    const {rQuote,rAuthor} = this.state;

    return (
      <div className="qContainer">
        <div className="qrContent">
          <p>"{rQuote}"</p> 
          <p>&mdash; {rAuthor}</p>
        </div>

        <button className="btn" id="quote-random"
          onClick={this.pullRandomQuote}>New Quote, please
        </button>
      </div>
    );
  }
}

export default RandomQuote;
