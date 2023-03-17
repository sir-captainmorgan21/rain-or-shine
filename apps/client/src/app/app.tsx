// eslint-disable-next-line @typescript-eslint/no-unused-vars

import { Weather } from "@rain-or-shine/client-app";

export const App = () => {
  return (
    <>
      <div className='p-3 border-b border-b-slate-300 bg-white mb-4'>
        <div className='text-2xl text-green-500'>Rain or Shine</div>
      </div>
      <div className="w-full lg:w-[500px] mx-auto">
        <Weather></Weather>
      </div>
    </>
  );
}

export default App;
