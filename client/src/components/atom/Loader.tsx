import { Box, CircularProgress, Typography } from "@mui/material";
import { useContext, useEffect } from "react";
import { LoadingContext, useLoading } from "../hooks/useLoading";

type LoaderProps = {
  imageSrc?: string
  text?: string
  loadingInitialState: boolean
}
const Loader: React.FC<LoaderProps> = ({
  imageSrc,
  text,
  loadingInitialState
}) => {
  const { addLoading, removeLoading } = useLoading()
  const { loading } = useContext(LoadingContext)

  useEffect(() => {
    if (loadingInitialState === true) {
      addLoading()
      setTimeout(removeLoading, 3000)
    }
  }, [])

  // Loader no show if there isn't active loaders
  if (!loading) null

  return (
    <>
      { loading &&
        <LoadingContext.Provider
          value={ {
            loading: true,
            addLoading,
            removeLoading,
          } }
        >
          { loading &&
            <Box
              style={ {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh',
                background: '#F1F1F9'
              } }
            >
              { imageSrc && <img src={ imageSrc } alt="Loader" /> }
              <CircularProgress />
              { text && <Typography variant="body1">{ text }</Typography> }
            </Box>
          }

        </LoadingContext.Provider>
      }
    </>
  )
}
export default Loader