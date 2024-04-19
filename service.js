const textCapitalize = (text) => {
    // .split(/[ .]/)
    var sentence = text.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    sentence = sentence.split('.').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('.')
    return sentence
}

const formatDate = (dateString) => {
    if (!dateString) return undefined;
    let date = dateString.split('-').join('/')
    const [month, day, year] = date.split('/').map(Number); //if the date string is in the format 'mm-dd-yyyy' or 'm-d-yyyy'
    return new Date(year, month - 1, day);  // Month is zero-based in JavaScript Date constructor, so subtract 1 from the month
}

const getMonthAndYear = (date) => {
    const month = date.getMonth()
    const year = date.getFullYear()
    const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']
    return months[month] + year
}

const findNumberOfDays = (fromDate, toDate) => {
    const differenceInMs = toDate - fromDate;
    const differenceInDays = differenceInMs / (1000 * 60 * 60 * 24);    // Convert milliseconds to days
    const days = Math.round(differenceInDays) + 1
    return days
}

module.exports = { textCapitalize, formatDate, getMonthAndYear, findNumberOfDays }