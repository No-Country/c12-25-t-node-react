import {
  Skeleton,
  Typography
} from '@mui/material'

interface SkeletonMessageProps {
  messageText?: string
}

const SkeletonMessage: React.FC<SkeletonMessageProps> = ({
  messageText
}) => {
  return (
    <>
      <Skeleton
        variant="rectangular"
        animation="wave" width='90%'
        height={ 118 }
        sx={ { bgcolor: '#D8D8FB' } }
      />
      {
        messageText &&
        <Typography sx={ { textAlign: 'center', margin: '1rem auto' } }>
          { messageText }
        </Typography>
      }
    </>
  )
}

export default SkeletonMessage