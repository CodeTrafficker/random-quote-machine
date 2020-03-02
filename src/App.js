import React from 'react';
import axios from 'axios';
import './App.css';

/*
Use fetch() or import Axios to roll through this json string.
- random quote pick
- Every 3rd quote give current bitcoin price? Or every 12 sec regardless
  of quote?
- Display as flipping panel on tap.
- Nice fade/dissolve up.
- good colors from colorlouvers or similar.
- random quote on scroll instead?
- 'saloon' or 'barndoor' swing-ins via animation/transition.
*/


class App extends React.Component {
  constructor(props)  {
    super(props);
    this.state = {
      quotes: {
        quote: '',
        author: '',
      },
    };
    // Handles here.
  }


  componentDidMount() {
    const jsonStr = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';

    let quoAuth = '';
    let quoteArr = [];

    axios.get(jsonStr)
      .then(response => {
        console.log('response data first: ', response.data )
        
        this.setState({quotes: response.data.quotes});


        console.log('no4 quote: ', this.state.quotes[4] );
        console.log('Is this.state.quotes an array: ', Array.isArray(this.state.quotes) );
      })
      .catch(err => console.log(err))
  }



  render() {
    let allQuotes = this.state.quotes;

    const {quote,author} = this.state;

    const randomizer = (max) => {
      return Math.floor(Math.random() * (max) )
    }

    let randoNum = randomizer( allQuotes.length );


    let thisRandomQuote='';
    for (var keys in allQuotes[randoNum]) {
      if (allQuotes[randoNum].hasOwnProperty(keys)) {
        thisRandomQuote = 'TEST: '+allQuotes[randoNum][keys]+', key: ' +keys;
        //return 'TEST: '+thisRandomQuote
      }
    }

    // let thisRandomQuote = allQuotes[randoNum].map( (quote, index) => {
    //   return(
    //     <p>{quote}, by {author}</p>
    //     );
    // });



    console.log('thisRandomQuote: ', thisRandomQuote );
/*
    function AllQuotesMod(props) {
      return(
        <div className="container">
          {allQuotes.map((quote, index) => (
            <div className="quoteCont" key={index}>
              <p>{index+1}] Quote: {quote.quote}<br />
              Author: {quote.author}</p>
            </div>
          ))}
        </div>
      )
    }
*/

    console.log('this.state.quotes at 85: ', this.state.quotes )

    function RandomQuote(props) {
      let randoNum = randomizer( allQuotes.length );
      const randQuote = allQuotes[randoNum];
      

      console.log('allQuotes.length: '+ allQuotes.length )
      // 102

      return(
        <div className="container"> 
          randoNum: {randoNum} 
           
          <div className="quoteCont">
            <p> 
              Quote: {thisRandomQuote}
              <br />
              Author: {author} 
            </p>
          </div> 
        </div>
      )
    }


    // console.log(' quotes is an array? ', Array.isArray(this.state.quotes) +
    //   ', No 17 in render: ', allQuotes[17] )

    return (
      <div className="App">
        <h1>Here: randoNum is {RandomQuote.randoNum} </h1>
        
        RandomQuote------------ 
        <RandomQuote /> 
        END RandomQuote-----------

         ||  AllQuotesMod /|| 

      </div>
    );
  }
}

export default App;
