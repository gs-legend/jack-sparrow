import { Component, ReactNode } from 'react';
import ErrorBackground from './ErrorBackground';
import { Link } from 'react-router-dom';

type Props = {
  children: ReactNode;
};

type State = Readonly<{
  hasError: boolean;
}>;

export class ErrorBoundary extends Component<Props, State> {
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  override readonly state: State = {
    hasError: false,
  };

  override render() {
    const { children } = this.props;
    const { hasError } = this.state;

    return hasError ? (
      <div className="flex flex-col items-center pt-10">
        <ErrorBackground></ErrorBackground>
        <div className='flex flex-col justify-center space-x-2 space-y-2'>
          <h1>Unexpected Error</h1>
          <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
            <Link to={"/"}>Go Home</Link>
          </span>
        </div>
      </div>
    ) : (
      children
    );
  }
}
