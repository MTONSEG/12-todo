import { useState, useEffect, useRef } from 'react'

export default function useClickOutside<T extends HTMLDivElement>(
	initialIsVisible: boolean
): {
	ref: React.RefObject<T>
	isShow: boolean
	setShow: React.Dispatch<React.SetStateAction<boolean>>
} {
	const [isShow, setShow] = useState(initialIsVisible)
	const ref = useRef<T>(null)

	const handleClickOutside = (event: MouseEvent) => {
		if (ref.current && !ref.current.contains(event.target as Node)) {
			setShow(false)
		}
	}

	useEffect(() => {
		document.addEventListener('click', handleClickOutside, true)

		return () => {
			document.removeEventListener('click', handleClickOutside, true)
		}
	}, [ref])

	return { ref, isShow, setShow }
}
