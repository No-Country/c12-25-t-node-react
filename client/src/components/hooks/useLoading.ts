import { createContext, useState } from "react";

interface LoadingState {
  loading: boolean
}

// Create context
interface LoadingContextProps extends LoadingState {
  addLoading: () => void;
  removeLoading: () => void;
}

export const LoadingContext = createContext<LoadingContextProps>({
  loading: false,
  addLoading: () => { },
  removeLoading: () => { },
})


export const useLoading = (): LoadingContextProps => {
  const [loadingState, setLoadingState] = useState<LoadingState>({
    loading: false,
  });

  const addLoading = () => {
    setLoadingState((prevState) => ({
      ...prevState,
      loading: true,
    }))
  }

  const removeLoading = () => {
    setTimeout(() => {
      setLoadingState((prevState) => ({
        ...prevState,
        loading: false,
      }))
    }, 5000);
  }

  return { ...loadingState, addLoading, removeLoading };
}