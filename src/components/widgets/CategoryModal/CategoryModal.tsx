import { useState } from 'react'
import { useActions } from '../../../hooks/useAction'
import { useAppSelector } from '../../../hooks/useTypedRedux'
import Button from '../../ui/buttons/Button/Button'
import ColorPiker from '../../ui/forms/ColorPicker/ColorPiker'
import Input from '../../ui/forms/Input/Input'
import Modal from '../../ui/modals/Modal/Modal'
import './CategoryModal.scss'

const CategoryModal = () => {
	const [isError, setError] = useState<boolean>(false)

	const { isOpenCategoryModal, category } = useAppSelector(
		(state) => state.todo
	)
	const {
		toggleCategoryModal,
		setCategoryLabel,
		addCategory,
		setCategoryColor,
		clearCategory
	} = useActions('todo')

	const handleCloseModal = () => {
		toggleCategoryModal(false)
		clearCategory()
	}

	const handleAddBtn = () => {
		if (!category.labelValue.length) {
			setError(true)
			return
		}

		addCategory()
		handleCloseModal()
	}

	const handleChangeColor = (value: string) => {
		setCategoryColor(value)
	}

	const handleChangeLabel = (value: string) => {
		setCategoryLabel(value)

		setError(!value.length)
	}

	return (
		<Modal
			title='Add Category'
			isOpen={isOpenCategoryModal}
			handleClose={handleCloseModal}
		>
			<Input
				title='Title'
				value={category.labelValue}
				setValue={handleChangeLabel}
				isError={isError}
			/>

			<ColorPiker value={category.color} setValue={handleChangeColor} />

			<Button
				children={'Add'}
				style={{ margin: '0 0 0 auto' }}
				onClick={handleAddBtn}
			/>
		</Modal>
	)
}

export default CategoryModal
