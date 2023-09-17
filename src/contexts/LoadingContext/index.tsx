import React, { createContext, useMemo, useState } from 'react';
import Loading from '../../components/Loading';

interface ContextProps {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoadingContextContent = createContext<ContextProps>({
  loading: false,
  setLoading: () => {},
});

interface ContextParams {
  children: React.ReactNode;
}

export function LoadingContext({ children }: ContextParams) {
  const [loading, setLoading] = useState<boolean>(false);

  const loadingWrapper = useMemo(
    () => ({
      loading: loading,
      setLoading: setLoading,
    }),
    [loading]
  );

  return (
    <LoadingContextContent.Provider value={loadingWrapper}>
      {loading && <Loading />}
      {children}
    </LoadingContextContent.Provider>
  );
}

export default LoadingContextContent;
