import { FunctionComponent, useState } from 'react'
import { getMonth } from '../../../helpers/getMonth'
import Modal from '../../ui/Modal'
import StartBtn from './StartBtn'

import { MdArrowForwardIos } from 'react-icons/md'
import TrainingBox from './training-box/TrainingBox'

const TrainingPage: FunctionComponent = () => {
  const [modal, setModal] = useState(false)

  const date = `${new Date().getDate()}  ${getMonth(new Date().getUTCMonth())}`

  return (
    <section>
      <h1 className=" text-5xl">Сегодня</h1>
      <p className=" text-3xl">{date}</p>
      <div className=" mt-48">
        <p className=" text-2xl">Тренировка груди, плечь, бицепса и трицепса</p>
        <button className=" bg-base px-4 py-2 rounded-xl flex items-center gap-2">
          <span>К упражнениям</span> <MdArrowForwardIos className=" mt-1 text-lg" />
        </button>
      </div>
      <StartBtn setModal={setModal} />
      <Modal
        title="Вы уверены что хотите закончить тренировку?"
        modal={modal}
        setModal={setModal}
        isConfirmation
        yesBtn="Да"
        noBtn="Нет"
      />
      <TrainingBox title="Бицепс" />
    </section>
  )
}

export default TrainingPage
