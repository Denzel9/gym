import { axiosBase, findUserApi } from './API'

export const UserService = {
  async addUser() {
    const { data } = await axiosBase('')
    return data
  },

  async findUser(userId: string) {
    const { data } = await axiosBase(findUserApi(userId))
    return data
  },
}
