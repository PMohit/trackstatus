import React from 'react';
import {Cards,Chart,CountryPicker} from './components';
import styles from './App.module.css';
import {fetchData} from './api';

class App extends React.Component {

  state = {
    data:{},
    country:'',
  }

 async componentDidMount(){
   const fetcheddata = await fetchData();
  // console.log(fetcheddata);
   this.setState({data:fetcheddata});
 }

 handleCountryChange = async (country) =>{

 }



  render() {
    const {data} = this.state;
    return (
    <div className={styles.container}>
       <Cards data={data}></Cards>       
      
       <CountryPicker handleCountryChange={this.handleCountryChange}></CountryPicker>
        <Chart></Chart>
      
    </div>
  );
    }
}

export default App;
