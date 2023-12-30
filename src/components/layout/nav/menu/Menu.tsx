import { FunctionComponent, useState } from 'react'
import MenuItem from './MenuItem'

import { MdHome, MdOutlineTripOrigin, MdOutlinePerson, MdCalendarMonth } from 'react-icons/md'
import Modal from '../../../ui/Modal'
import { useAppDispatch } from '../../../../hooks/useAppDispatch'
import { reset } from '../../../../redux/reducer'
import { stopTraining, startTraining } from '../../../../redux/currentTraining'

const Menu: FunctionComponent = () => {
  const [modal, setModal] = useState(false)
  const dispatch = useAppDispatch()

  const handleStop = () => {
    dispatch(reset())
    dispatch(stopTraining())
    dispatch(startTraining())
    setModal(false)
  }
  return (
    <>
      <section className=" flex items-center justify-between fixed bottom-0 right-0 left-0 bg-base h-24 text-white text-2xl z-40">
        <MenuItem link={'/main'} icon={<MdHome />} setModal={setModal} />
        <MenuItem link={'/calendar'} icon={<MdCalendarMonth />} setModal={setModal} />
        <MenuItem link={'/training'} icon={<MdOutlineTripOrigin />} setModal={setModal} />
        <MenuItem link={'/profile'} icon={<MdOutlinePerson />} setModal={setModal} />
      </section>
      <Modal
        title={'Закончить тренировку?'}
        modal={modal}
        setModal={setModal}
        isConfirmation={true}
        yesBtn="Да"
        noBtn="Нет"
        yesBtnFn={handleStop}
      />
    </>
  )
}

export default Menu
