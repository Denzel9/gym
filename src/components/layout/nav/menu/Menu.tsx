import { FunctionComponent } from 'react'
import MenuItem from './MenuItem'

import { MdHome, MdOutlineTripOrigin, MdOutlinePerson, MdCalendarMonth } from 'react-icons/md'

const Menu: FunctionComponent = () => {
  return (
    <section className=" flex items-center justify-between fixed bottom-0 right-0 left-0 bg-base h-24 text-white text-2xl">
      <MenuItem link={'/'} icon={<MdHome />} />
      <MenuItem link={'/calendar'} icon={<MdCalendarMonth />} />
      <MenuItem link={'/training'} icon={<MdOutlineTripOrigin />} />
      <MenuItem link={'/profile'} icon={<MdOutlinePerson />} />
    </section>
  )
}

export default Menu
