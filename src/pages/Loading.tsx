import { SignInButton, SignUpButton, useAuth } from '@clerk/clerk-react'
import { FunctionComponent, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Loading: FunctionComponent = () => {
  const { userId } = useAuth()

  let navigate = useNavigate()

  useEffect(() => {
    navigate('/main')
  }, [navigate, userId])

  return (
    <div className=" mt-[15rem]">
      <h1 className=" text-3xl">Загрузка...</h1>
      {userId && (
        <div className=" flex flex-col gap-3 mt-3">
          <div className=" text-xl bg-gold w-fit px-4 py-2 rounded-lg border border-base">
            <SignInButton mode="modal">Войти</SignInButton>
          </div>
          <div className=" text-xl bg-base w-fit px-4 py-2 rounded-lg border border-gold">
            <SignUpButton mode="modal">Зарегестрироваться</SignUpButton>
          </div>
        </div>
      )}
    </div>
  )
}

export default Loading
