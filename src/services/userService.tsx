import { UserIterface } from '../types/user.interface'
import { userAxios, findUserApi } from './API'

export const UserService = {
  async getUsers() {
    const { data } = await userAxios.get<UserIterface[]>('')
    return data
  },

  async addUser(id: string) {
    const { data } = await userAxios.post('', { userId: id })
    return data
  },

  async findUserById(userId: string) {
    const { data } = await userAxios.get<UserIterface[]>(findUserApi(userId))
    return data[0]
  },
}
