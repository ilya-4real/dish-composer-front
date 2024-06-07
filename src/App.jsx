import { useState } from 'react'
import MainButton from './components/button';
import Navigator from './components/navigator';
import Popular from './components/popular';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Favorite from './components/favorite';
import Compounds from './components/compounds';
import Random from './components/random';
import RecipeDetail from './components/recipedetail';
import OwnLiked from './components/own-liked';

const tg = window.Telegram.WebApp;

function App() {
  const onClose = () => {
    tg.close()
  }

  const user_data = tg.initDataUnsafe.user;

  return (
    <Router>
      <div className="wrapper">
        <Routes>
          <Route exact path='/' element={<Popular/>}></Route>
          <Route exact path="/my/own" element={<Favorite />}></Route>
          <Route exact path="my/liked" element={<Favorite />}></Route>
          <Route exact path='/compounds' element={<Compounds/>}></Route>
          <Route exact path='/random' element={<Random/>}></Route>
          <Route exact path='/recipe/:id/' element={<RecipeDetail/>}></Route>
        </Routes>
        </div>
        <Navigator />
    </Router>
  )
}

export default App
