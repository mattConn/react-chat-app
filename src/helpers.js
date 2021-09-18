const makeDate = (epoch) => {
	const date = new Date(epoch)

	const month = (date.getMonth()+1).toString()
	const day = date.getDate().toString()
	const year = date.getFullYear().toString().slice(2)

	return `${month}/${day}/${year}` 
}

const makeTime = (epoch) => {
	const date = new Date(epoch)

	const hours = date.getHours()
	const minutes = date.getMinutes()

	return `${hours}:${minutes}` 
}

export {makeDate, makeTime}