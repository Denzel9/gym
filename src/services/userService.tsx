import { axiosBase } from './API'

export const UserService = {
  async addUser() {
    const { data } = await axiosBase('')
    return data
  },
}
