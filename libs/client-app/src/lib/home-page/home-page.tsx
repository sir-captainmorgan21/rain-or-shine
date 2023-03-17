import { ErrorFallback } from '@rain-or-shine/ui';
import { ErrorBoundary } from 'react-error-boundary';
import { Weather } from '../weather';

export function HomePage() {
  // 
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      {/* Use Sentry's Error Boundary here for production error monitoring */}
      <Weather></Weather>
    </ErrorBoundary>
  );
}

export default HomePage;
