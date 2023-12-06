import { FunctionComponent } from 'react'
import CaruselItem from './CaruselItem'

const Carusel: FunctionComponent<{ name: string; img: string }> = ({ name, img }) => {
  return (
    <div className=" grid grid-cols-4 gap-[270px] overflow-scroll pb-2">
      <CaruselItem text={name} img={img} />
      <div className=" p-2 w-64 rounded-lg bg-white bg-opacity-40">
        <h1 className=" text-xl">С возвращение,</h1>
        <p className=" text-xl">{name}</p>
      </div>
      <div className=" p-2 w-64  rounded-lg bg-white bg-opacity-40">
        <h1 className=" text-xl">С возвращение,</h1>
        <p className=" text-xl">{name}</p>
      </div>
      <div className=" p-2 w-64  rounded-lg bg-white bg-opacity-40">
        <h1 className=" text-xl">С возвращение,</h1>
        <p className=" text-xl">{name}</p>
      </div>
    </div>
  )
}

export default Carusel
