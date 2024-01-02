import classNames from 'classnames'
import { FunctionComponent } from 'react'

import { MdDonutSmall } from 'react-icons/md'

const Logo: FunctionComponent<{ styles?: string }> = ({ styles }) => {
  return (
    <div className={classNames(styles, ' text-5xl uppercase')}>
      <MdDonutSmall />
    </div>
  )
}

export default Logo
