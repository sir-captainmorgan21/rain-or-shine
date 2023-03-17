// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { HomePage } from "@rain-or-shine/client-app";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';

export const App = () => {

  const location = useLocation;

  useEffect(() => {
    trackPageView();
  }, [location]);

  const trackPageView = () => {
    // Track using something like google analytics or adobe analytics
  }

  return (
    <BrowserRouter>
      <div className='p-3 border-b border-b-slate-300 bg-white mb-4'>
        <div className='text-2xl text-green-500'>Rain or Shine</div>
      </div>
      <div className="w-full lg:w-[500px] mx-auto">
        <Routes>
          <Route path="/" Component={HomePage}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
