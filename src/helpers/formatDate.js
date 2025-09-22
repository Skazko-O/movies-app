export function formateDate(date) {  
    console.log(date)  
    if (/\d\d\d\d-\d\d-\d\d/.test(date)===false) return '-- --- ----'
    const arDate = date.split('-')
    const arMonth = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ]
    return `${arDate[2]} ${arMonth[parseInt(arDate[1], 10)-1]} ${arDate[0]}`
}