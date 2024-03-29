import classNames from 'classnames'
import { FunctionComponent, ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface ModalProps {
  title: string
  modal: boolean
  setModal(modal: boolean): void
  isConfirmation: boolean
  yesBtn?: string
  noBtn?: string
  children?: ReactNode
  yesBtnFn?(): void
  link?: string
}

const Modal: FunctionComponent<ModalProps> = ({
  modal,
  setModal,
  isConfirmation,
  yesBtn,
  noBtn,
  title,
  children,
  yesBtnFn,
  link,
}) => {
  return (
    <div
      className={classNames(
        modal ? 'bg-black bg-opacity-40' : 'bg-opacity-0 pointer-events-none ',
        ' fixed z-50 h-full w-full top-0 left-0 flex items-center '
      )}
      onClick={() => setModal(false)}
    >
      <div
        className={classNames(
          modal ? ' translate-y-0' : ' translate-y-96',
          'duration-500 fixed bottom-0 left-0 right-0 bg-black px-5 py-10 '
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <p className=" text-xl">{title}</p>
        {children}
        {isConfirmation && (
          <div className=" float-right flex gap-2">
            <button onClick={() => setModal(false)} className=" bg-red-800 px-4 py-2 rounded-xl">
              {noBtn}
            </button>
            {link ? (
              <Link
                to={link!}
                onClick={() => yesBtnFn && yesBtnFn()}
                className=" bg-green-800 px-4 py-2 rounded-xl"
              >
                {yesBtn}
              </Link>
            ) : (
              <button
                onClick={() => yesBtnFn && yesBtnFn()}
                className=" bg-green-800 px-4 py-2 rounded-xl"
              >
                {yesBtn}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default Modal
