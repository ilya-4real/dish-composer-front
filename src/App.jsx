import Navigator from './components/navigator';
import Popular from './components/popular';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Favorite from './components/favorite';
import Compounds from './components/compounds';
import Random from './components/random';
import RecipeDetail from './components/recipedetail';
import CompoundForm from './components/forms/compound';
import RecipeForm from './components/forms/recipeform';
import { useTelegram } from './hooks/telegram';


function App() {
  // const { username } = useTelegram()

  return (
    <Router>
      <div className="wrapper">
        {/* <p>{username}</p> */}
        <Routes>
          <Route exact path='/' element={<Popular/>}></Route>
          <Route exact path="/my/own" element={<Favorite />}></Route>
          <Route exact path="my/liked" element={<Favorite />}></Route>
          <Route exact path='/compounds/:type' element={<Compounds/>}></Route>
          <Route exact path='/compounds/new' element={<CompoundForm/>}></Route>
          <Route exact path='/random' element={<Random/>}></Route>
          <Route exact path='/recipe/:id/' element={<RecipeDetail/>}></Route>
          <Route exact path='/recipe/new/' element={<RecipeForm/>}></Route>
        </Routes>
        </div>
        <Navigator />
    </Router>
  )
}

export default App
