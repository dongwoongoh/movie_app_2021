import React from 'react';
import axios from 'axios';

class App extends React.Component {
  state = {
    isLoading : true,
    movie : [],
  };
  componentDidMount() {
    //movie data loding...
    axios.get("https://yts.mx/api/v2/movie_details.json");
  }
  render() {
    const {isLoading} = this.state;
    return <div>{isLoading ? 'Loding...' : 'We are ready'}</div>;
  }
}

export default App;
