import RegisterModal from '../components/template/registerModal/RegisterModal'
import BackButton from '../components/atom/BackButton'
import { Stack } from '@mui/material'

type RegisterProps = {}

const Register: React.FC<RegisterProps> = () => {
  return (
    <main>
      <Stack>
        <BackButton />
        <RegisterModal />
      </Stack>
    </main>
  )
}

export default Register
