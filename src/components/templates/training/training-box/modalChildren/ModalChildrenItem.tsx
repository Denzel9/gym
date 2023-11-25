import classNames from 'classnames'
import { FunctionComponent } from 'react'

const ModalChildrenItem: FunctionComponent<{
  count: number
  setData(count: number): void
  number: number
}> = ({ count, setData, number }) => {
  return (
    <button
      className={classNames(
        count === number ? ' bg-green-800' : ' bg-base',
        ' p-1 flex items-center justify-center'
      )}
      onClick={() => setData(number)}
    >
      {number}
    </button>
  )
}

export default ModalChildrenItem
