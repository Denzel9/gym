import { UserIterface } from '../types/user.interface'
import { axiosBase, findUserApi } from './API'

export const UserService = {
  async addUser() {
    const { data } = await axiosBase('')
    return data
  },

  async findUserById(userId: string) {
    const { data } = await axiosBase<UserIterface[]>(findUserApi(userId))
    return data[0]
  },
}
