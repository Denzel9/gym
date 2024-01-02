export interface UserIterface {
  createdAt: string
  id: string
  name: string
  userId: string
  userInfo: UserInfoInterface
}
export interface UserInfoInterface {
  weight: number
  height: number
  age: number
}
