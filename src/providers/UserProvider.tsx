import { FunctionComponent, ReactNode, createContext, useEffect, useState } from 'react'
import { UserService } from '../services/userService'
import { UserIterface } from '../types/user.interface'

export const UserProviderContext = createContext({} as UserIterface)

const UserProvider: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<UserIterface>({} as UserIterface)

  const isSign = () => {
    UserService.findUserById('user_2YlPJwLIdFxjQFMz3tyGn7VRVUR').then((res) => setCurrentUser(res))
  }
  useEffect(() => isSign(), [])

  return <UserProviderContext.Provider value={currentUser}>{children}</UserProviderContext.Provider>
}

export default UserProvider
