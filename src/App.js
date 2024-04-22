
import './App.css';

import ComponentOne from './Components/ComponentOne';
import ComponentTwo from './Components/ComponentTwo';



function App() {
  const firstname = "Mike";
  return (
    <div className="App">
      
<h1>The app being deployed</h1>
      <ComponentOne firstname="Jack" secondname="Black" birthdate={421}/>
      <ComponentOne firstname="Jackie" secondname="Chan" birthdate={422}/>
      <ComponentTwo firstname={firstname} />

      <h1>X</h1>
    
    </div>
  );
}

export default App;
