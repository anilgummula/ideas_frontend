import React from 'react';
import { BrowserRouter, Routes, Route, Link ,NavLink} from 'react-router-dom';
import Home from './components/Home';
import Share from './components/share';

const App = () => {
  return (
    <>
    <BrowserRouter>
        <nav className='bg-emerald-950 text-white font-semibold flex justify-center mx-auto space-x-20 h-16 py-4 text-lg'>
            {/* <Link to="/" className='focus:border-b-2'  >Home</Link> */}
            <NavLink to="/">
                {({ isActive }) => (
                    <span className={isActive ? "text-yellow-400 font-bold underline" : ""}>Home</span>
                )}
            </NavLink>
            <NavLink to="/share">
                {({ isActive }) => (
                    <span className={isActive ? "text-yellow-400 font-bold underline" : ""}>Share your ideas</span>
                )}
            </NavLink>
            {/* <Link to="/share" className='focus:border-b-2'  >Share your idea</Link> */}
        </nav>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/share' element={<Share/>} />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App