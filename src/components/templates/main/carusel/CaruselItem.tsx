import { FunctionComponent } from 'react'

const CaruselItem: FunctionComponent<{ text: string; img: string }> = ({ text, img }) => {
  return (
    <div className=" p-2 w-64 rounded-lg bg-white bg-opacity-40 relative">
      <h1 className=" text-xl">С возвращение,</h1>
      <p className=" text-xl">{text}</p>
      <img className=" w-10 h-10 rounded-full absolute right-2 top-2" src={img} alt="user logo" />
    </div>
  )
}

export default CaruselItem
