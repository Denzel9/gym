import classNames from 'classnames'
import { FunctionComponent, useState } from 'react'
// import Modal from '../../../ui/Modal'

const BoxItem: FunctionComponent<{ step: number }> = ({ step }) => {
  const [done, setDone] = useState(false)
  return (
    <>
      <div
        onClick={() => setDone(!done)}
        className={classNames(
          done ? ' bg-green-800' : ' bg-base',
          ' p-1 flex items-center justify-center'
        )}
      >
        {step}
      </div>
      {/* <Modal modal={false} setModal={} isConfirmation={false} title={''}>
        <input type="text" />
        <input type="text" />
      </Modal> */}
    </>
  )
}

export default BoxItem
