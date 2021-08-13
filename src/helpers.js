const makeTimestamp = () => {
	const date = new Date()

	const month = (date.getMonth()+1).toString()
	const day = date.getDate().toString()
	const year = date.getFullYear().toString()

	return `${month}/${day}/${year}` 
}

export {makeTimestamp}