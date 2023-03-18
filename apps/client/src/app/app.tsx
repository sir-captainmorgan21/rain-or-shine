// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { HomePage } from "@rain-or-shine/client-app";
import { ErrorFallback } from "@rain-or-shine/ui";
import { useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Location, Route, Routes, useLocation } from 'react-router-dom';

export const App = () => {

  const location = useLocation();

  useEffect(() => {
    trackPageView(location);
  }, [location]);

  const trackPageView = (location: Location) => {
    // Track using something like google analytics or adobe analytics
  }

  return (
    <>
      <div className='p-3 border-b border-b-slate-300 bg-white mb-4'>
        <div className='text-2xl text-green-500'>Rain or Shine</div>
      </div>
      <div className="w-full lg:w-[500px] mx-auto">
        <ErrorBoundary FallbackComponent={ErrorFallback} onError={(error) => {
          // Send error to monitoring service like Sentry
          console.log(error);
        }}>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
          </Routes>
        </ErrorBoundary>
      </div>
    </>
  );
}

export default App;
