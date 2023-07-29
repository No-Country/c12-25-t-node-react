import { useState } from 'react'
import LoginModal from '../components/template/loginModal/LoginModal'
import BackButton from '../components/atom/BackButton'
import { Stack } from '@mui/material'

type LoginProps = {}

const Login: React.FC<LoginProps> = () => {
  const [openLoginModal, setOpenLoginModal] = useState(true)
  const handleCloseLoginModal = () => setOpenLoginModal(false)

  return (
    <main>
      <Stack>
        <BackButton />
        <LoginModal
          openLoginModal={openLoginModal}
          handleCloseLoginModal={handleCloseLoginModal}
        />
      </Stack>
    </main>
  )
}

export default Login
