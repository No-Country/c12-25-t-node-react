import { useState } from "react"
import LoginModal from "../components/template/loginModal/LoginModal"

type LoginProps = {
}

const Login: React.FC<LoginProps> = () => {
  const [openLoginModal, setOpenLoginModal] = useState(true)
  const handleCloseLoginModal = () => setOpenLoginModal(false)
  
  return (
    <main>
      <LoginModal
        openLoginModal={openLoginModal}
        handleCloseLoginModal={handleCloseLoginModal}
      />
    </main>
  )
}

export default Login