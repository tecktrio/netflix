import NaveBar from './components/NavBar/NaveBar';
import './App.css'
import Banner from './components/Banner/Banner';
import RowPost from './components/RowPost/RowPost';
import {action,originals,ComedyMovies,HorrorMovies,ActionMovies,RomanceMovies} from './urls'
function App() {
  return (
    <div className="App">
     <NaveBar/>
     <Banner/>
     <RowPost  title='Netflix Originals' url={action}/>
     <RowPost title='originals' url={originals} isSmall  />
     <RowPost title='ComedyMovies' url={ComedyMovies} isSmall  />
     <RowPost title='HorrorMovies' url={HorrorMovies} isSmall  />
     <RowPost title='ActionMovies' url={ActionMovies} isSmall  />
     <RowPost title='RomanceMovies' url={RomanceMovies} isSmall  />
    </div>
  );
}

export default App;
