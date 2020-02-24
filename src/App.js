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
      value: "",
      quotes: []

      // {
      //   quote: null,
      //   author: null
      // }
    };
    // Handles here.
  }


  componentDidMount() {
    const quoteJsonStr = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';

    let quoAuth = '';
    let quoteArr = [];

    axios.get(quoteJsonStr)
      .then(response => {
        console.log('response data first: ', typeof response.data )
       // this.setState({quotes: response.data})
        console.log('In FIRST THEN: ', typeof this.state.quotes);

        let quotesObj = response.data;
        // t.s.quotes is not an iterable object, so 
        // have to do this - push the bits to an array:
        const quoteEntries = Object.entries(quotesObj)[0][1];
        for(quoAuth of quoteEntries ){ 
          console.log('Quote: ', quoAuth.quote); 
          console.log('Author: ', quoAuth.author); 
          quoteArr.push(quoAuth);
        }
        this.setState({quotes: quoteArr});
        console.log('What is this.state.quotes now: ', Array.isArray(this.state.quotes)
         +', [3]: ', this.state.quotes[3].quote );

      } )
     // .then(quotes =>  {
        // let quotesObj = this.state.quotes;
        // // console.log('quotesObj: ', quotesObj);
        // // console.log('no4 quote: ', Object.entries(quotesObj)[0][1][4].quote )
        // // console.log('no4 author: ', Object.entries(quotesObj)[0][1][4].author )
        
        // // t.s.quotes is not an iterable object, so 
        // // have to do this - push the bits to an array:
        // const quoteEntries = Object.entries(quotesObj)[0][1];
        // for(quoAuth of quoteEntries ){ 
        //   console.log('Quote: ', quoAuth.quote); 
        //   console.log('Author: ', quoAuth.author); 
        //   // Make this a fn, pull into then();
        //   // Build these into mor controllable array,
        //   // reveal in render()
        //   // return quoAuth;
        //   quoteArr.push(quoAuth);
        // }
        // this.setState({quotes: quoteArr});
        // console.log('What is this.state.quotes now: ', Array.isArray(this.state.quotes)
        //  +', [3]: ', this.state.quotes[19].quote 

        //   );
        //console.log('setState quote/s: ', this.state.quotes);
   //   })
      .catch(err => console.log(err))
  }

  

  render() {
    // const obj = this.state.quotes;
    // console.log('obj: ', obj);
    // console.log('no4 quote: ', Object.entries(obj)[0][1][4].quote )
    // console.log('no4 author: ', Object.entries(obj)[0][1][4].author )

    // const allQuotesMounts = allQuotes.map(x=>x)
    // if(obj.length>0)  {
    //   for(let i of obj){console.log(i); }
    // }
    let quotesRen = this.state.quotes;

   // const { quote, author } = this.props;

    console.log(' quotes is an array? ', Array.isArray(this.state.quotes) +
      ', No 17 in render: ', quotesRen[17] )
//    const qMap = quotes.map(eachQ => console.log(eachQ.quote));
    return (
      <div className="App">
        <h1>Here:  </h1>
      </div>
    );
  }
}


// class ThisQuote extends React.Component {
//   render()  {
//     let {quotes} = this.props
//     return(
//       <p> thisQuote is: {quotes[2]}</p>
//     )
//   }
// }

export default App;
