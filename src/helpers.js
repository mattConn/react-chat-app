const makeTimestamp = (epoch) => {
	const date = new Date(epoch)

	const month = (date.getMonth()+1).toString()
	const day = date.getDate().toString()
	const year = date.getFullYear().toString()
	const hours = date.getHours()
	const minutes = date.getMinutes()

	return `${month}/${day}/${year} ${hours}:${minutes}` 
}

export {makeTimestamp}