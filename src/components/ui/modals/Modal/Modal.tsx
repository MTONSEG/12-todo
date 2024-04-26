import { FC, ReactNode } from 'react'
import './Modal.scss'

interface PropsType {
	title: string
	children: ReactNode
	isOpen: boolean
	handleClose: () => void
}

const Modal: FC<PropsType> = ({ children, title, isOpen, handleClose }) => {
	return (
		<div className={`modal ${isOpen ? 'active' : ''}`} onClick={handleClose}>
			<div
				className='modal__content'
				onClick={(e) => {
					e.stopPropagation()
				}}
			>
				<button className='modal__close' onClick={handleClose} />

				<h2 className='modal__title'>{title}</h2>

				{children}
			</div>
		</div>
	)
}

export default Modal
