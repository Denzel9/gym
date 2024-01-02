import { FunctionComponent, useContext } from 'react'
import { MdKeyboardArrowLeft } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { UserProviderContext } from '../providers/UserProvider'
import EditProfileBox from '../components/templates/edit-profile/EditProfileBox'

const EditProfile: FunctionComponent = () => {
  const navigate = useNavigate()
  const { name, userInfo, id } = useContext(UserProviderContext)

  return (
    <div>
      <button onClick={() => navigate(-1)} className=" flex items-center gap-2">
        <MdKeyboardArrowLeft className=" text-3xl" />
        <p>Назад</p>
      </button>
      <h1 className=" mt-5 text-3xl">Личная информация</h1>
      <EditProfileBox type={'text'} title={'Имя'} id={id} text={name} userInfo={userInfo} />

      {userInfo &&
        Object.entries(userInfo).map((el) => {
          return (
            <EditProfileBox
              type={'number'}
              key={el[0]}
              id={id}
              title={el[0]}
              text={el[1]}
              userInfo={userInfo}
            />
          )
        })}
    </div>
  )
}

export default EditProfile
