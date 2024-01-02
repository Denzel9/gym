import { FunctionComponent, useEffect } from 'react'
import Logo from '../components/layout/Logo'
import { useAuth } from '@clerk/clerk-react'
import Auth from './Auth'
import { useAddUser, useGetUsers } from '../hooks/query-hooks/useUser'
import { useNavigate } from 'react-router-dom'

const Loading: FunctionComponent = () => {
  // const { userId } = useAuth()
  // const { addUser } = useAddUser(userId!)
  // const nav = useNavigate()
  // const { data } = useGetUsers(userId!)
  // const findUser = () => {
  //   const user = data?.find((el) => el.userId === userId)
  //   !user && addUser().then(() => nav('/'))
  //   console.log(user)
  // }

  // useEffect(() => {
  //   findUser()
  // }, [])

  return (
    <>
      {1 ? (
        <div className=" flex items-center justify-center h-screen p-5">
          <div className=" flex flex-col items-center">
            <Logo styles=" text-8xl animate-pulse" />
            <h1 className=" text-3xl font-bold mt-2">DN</h1>
            <h2 className=" text-4xl font-bold">GYM</h2>
          </div>
        </div>
      ) : (
        <Auth />
      )}
    </>
  )
}

export default Loading
