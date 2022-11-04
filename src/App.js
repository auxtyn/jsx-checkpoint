import ProfilePhoto from './components/profile/ProfilePhoto.jsx';
import Address from './components/profile/Address.jsx';
import FullName from './components/profile/FullName.jsx';

function App() {
  return (
    <div className="App">
      <div className="container mt-4 text-center col-md-4"> 
    <FullName />
    <Address />
    <ProfilePhoto />
   
    </div>
    </div>
  );
}

export default App;
