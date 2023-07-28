import { ReactNode } from 'react'
import {
  Box,
  Paper,
} from '@mui/material'

type TextBoxProps = {
  children?: ReactNode
  subTitle?: React.ReactElement
  paperMinHeight?: string
  paperWidth?: string
  paperMargin?: string
  boxTop?: string
}

const TextBox: React.FC<TextBoxProps> = ({
  subTitle,
  paperMinHeight,
  children,
  paperWidth,
  paperMargin,
  boxTop
}) => {
  return (
    <>
      <Box
        sx={ {
          width: `${ paperWidth ? paperWidth : '80%' }`,
          maxWidth: '800px',
          margin: `${ paperMargin ? paperMargin : '2rem auto' }`,
          position: 'relative',
          top: `${boxTop? boxTop :'-220px'}`,
        } }
      >
        <Paper
          elevation={ 8 }
          sx={ {
            borderRadius: '1rem',
            padding: '1rem 0rem 1.75rem',
            minHeight: `${ paperMinHeight ? paperMinHeight : '300px' }`
          } }
        >
          { subTitle }
          { children }
        </Paper>
      </Box>
    </>
  )
}

export default TextBox