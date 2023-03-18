import { FallbackProps } from 'react-error-boundary';
import { Card } from '../card';

export function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <Card>
      <h1 className='text-xl'>Something went Wrong</h1>
      <div>Rest assured we are looking into it. If this persists, please contact support.</div>
      <div>Error: { error.message }</div>
      <button className='p-3 bg-green-500 rounded-md mt-2' onClick={resetErrorBoundary}>Try again</button>
    </Card>
  );
}

export default ErrorFallback;
