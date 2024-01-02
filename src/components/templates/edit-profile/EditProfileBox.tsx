import { FunctionComponent, useState } from 'react'
import { MdOutlineMode } from 'react-icons/md'
import { UserInfoInterface } from '../../../types/user.interface'
import { useUpdateUserInfo, useUpdateUserName } from '../../../hooks/query-hooks/useUser'

const EditProfileBox: FunctionComponent<{
  title: string
  text: string | number
  userInfo: UserInfoInterface
  id: string
  type: string
}> = ({ title, text, id, userInfo, type }) => {
  const [edit, setEdit] = useState(false)
  const [editText, setEditText] = useState('')
  const { updateUserInfo } = useUpdateUserInfo(id)
  const { updateUserName } = useUpdateUserName(id)

  const handlEditText = () => {
    title === 'Имя' ? updateUserName(editText) : updateUserInfo({ ...userInfo, [title]: editText })
    setEdit(false)
    setEditText('')
  }

  return (
    <div className="mt-3">
      {edit ? (
        <div className=" w-full flex relative ">
          <input
            type={type}
            autoFocus
            placeholder={`Введите ${title.toLowerCase()}`}
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className=" py-2 pl-2 pr-28 w-full rounded-lg text-black"
          />
          <button
            onClick={editText.length ? handlEditText : () => setEdit(false)}
            className=" absolute right-0 top-0 p-2 bg-gold rounded-tr-lg rounded-br-lg"
          >
            {editText.length ? 'Сохранить' : 'Закрыть'}
          </button>
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <p className=" text-xl">{title}:</p> <p className=" text-lg">{text}</p>
          <MdOutlineMode className=" text-xl" onClick={() => setEdit(true)} />
        </div>
      )}
    </div>
  )
}

export default EditProfileBox
