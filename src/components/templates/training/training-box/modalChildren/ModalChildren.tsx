import { FunctionComponent } from 'react'
import ModalChildrenItem from './ModalChildrenItem'

const ModalChildren: FunctionComponent<{
  weight: number
  setWeight(weight: number): void
  repeat: number
  setRepeat(repeat: number): void
}> = ({ weight, setWeight, repeat, setRepeat }) => {
  console.log(weight, repeat)
  return (
    <>
      <p className="mt-5 mb-2">Повторений:</p>
      <div className=" bg-base h-10 grid grid-cols-6 rounded-xl overflow-hidden ">
        <ModalChildrenItem count={weight} setData={setWeight} number={6} />
        <ModalChildrenItem count={weight} setData={setWeight} number={8} />
        <ModalChildrenItem count={weight} setData={setWeight} number={10} />
        <ModalChildrenItem count={weight} setData={setWeight} number={12} />
        <ModalChildrenItem count={weight} setData={setWeight} number={14} />
        <ModalChildrenItem count={weight} setData={setWeight} number={16} />
      </div>

      <p className="mt-5 mb-2">Вес:</p>
      <div className=" bg-base h-10 grid grid-cols-6 rounded-xl overflow-hidden mb-5">
        <ModalChildrenItem count={repeat} setData={setRepeat} number={10} />
        <ModalChildrenItem count={repeat} setData={setRepeat} number={12} />
        <ModalChildrenItem count={repeat} setData={setRepeat} number={14} />
        <ModalChildrenItem count={repeat} setData={setRepeat} number={16} />
        <ModalChildrenItem count={repeat} setData={setRepeat} number={18} />
        <ModalChildrenItem count={repeat} setData={setRepeat} number={20} />
      </div>
    </>
  )
}

export default ModalChildren
