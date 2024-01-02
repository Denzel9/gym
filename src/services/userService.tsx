import { UserInfoInterface, UserIterface } from '../types/user.interface'
import { userAxios, findUserApi, userApi } from './API'

export const UserService = {
  async getUsers() {
    const { data } = await userAxios.get<UserIterface[]>('')
    return data
  },

  async addUser(id: string) {
    const { data } = await userAxios.post('', {
      userId: id,
      userInfo: {
        Возрaст: 0,
        Вес: 0,
        Рост: 0,
      },
    })
    return data
  },

  async findUserById(userId: string) {
    const { data } = await userAxios.get<UserIterface[]>(findUserApi(userId))
    return data[0]
  },

  async updateUserInfo(userId: string, userInfo: UserInfoInterface) {
    const { data } = await userAxios.put<UserIterface[]>(userApi(userId), { userInfo })
    return data
  },

  async updateUserName(userId: string, name: string) {
    const { data } = await userAxios.put<UserIterface[]>(userApi(userId), { name })
    return data
  },
}
