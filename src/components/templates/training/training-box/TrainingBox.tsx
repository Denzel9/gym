import { FunctionComponent, useState } from 'react'
import BoxItem from './BoxItem'

const TrainingBox: FunctionComponent<{ title: string }> = ({ title }) => {
  const [weight, setWeight] = useState(0)
  return (
    <div className=" w-full p-2 bg-gold rounded-xl relative">
      <div className=" flex items-center justify-between">
        <h2 className=" text-xl">{title}</h2>
        <div>
          <span className=" text-base text-xl mr-2">Текущий вес:</span>
          <input
            className=" w-8 rounded-xl text-black px-2"
            type="text"
            value={weight}
            onChange={(e) => setWeight(+e.target.value)}
          />
          <span className=" text-base text-xl ml-2">кг</span>
        </div>
      </div>
      <p className=" py-2">Подходы:</p>
      <div className=" bg-base w-full h-10 grid grid-cols-5 rounded-xl overflow-hidden">
        <BoxItem step={1} />
        <BoxItem step={2} />
        <BoxItem step={3} />
        <BoxItem step={4} />
        <BoxItem step={5} />
      </div>
      <p className="mb-8 pt-2 text-xs">*oтметить кол-во выполненных</p>
      <button className=" absolute right-2 bottom-2">Выполнено</button>
    </div>
  )
}

export default TrainingBox
