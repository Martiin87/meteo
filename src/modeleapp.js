// import React, { Component } from "react";
// import './App.css';
// import todayWeather from './todayWeather';

// class App extends Component {
//   state = {
//     data: {}
//   }
//   componentDidMount() {
//     axios.get('https://api.openweathermap.org/data/2.5/onecall?lat=50.4291723&lon=2.8319805&units=metric&lang=fr&exclude=minutely,hourly,alerts&appid=d83819ab29b7d94c8380be3c6172e818')
//     .then(res => {
//       this.setState({
//         data: res.data
//       })
//     })
//   }

//   render() {
//     const data = this.state.data;

    
//      // Checker que data est vide
//     if(Object.keys(data).length !== 0) {
//       const daysJSX = data.daily.map(day => {
//         const dayName = new Date(day.dt * 1000).toLocaleString("fr-FR", {weekday:"long"});
//         const temp = day.temp.day;
//         const desc = day.weather[0].description;
//         return <p>{dayName}: {temp}° / {desc}</p>;

//       })
//       // S'il est pas vide, alors this.state.data.current... a une valeur
//       return (
//         <div className="App">
//           <header className='App-header'>
//           <h1>Ville de Lens</h1>
//           <p>Météo d'Aujourd'hui:  {this.state.data.current.temp}° / Ciel dégagé</p>
//           {daysJSX}
//           </header>
//           <todayWeather/>
//         </div>
//       );
//     }
//     else {
//       // Sinon j'affiche un loading
//       return (<p>Loading...</p>);
//     }


//   }
// }

// export default App;