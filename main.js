const fs = require("fs")

document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM loaded")
    initApp()
})


const initApp = () => {
    let data = readListingInfo()
    data = csvmaker(data)
    addToCSV(data)

}

const readListingInfo = () => {
    const name = document.getElementById('input-name').value
    const price = document.getElementById('input-price').value
    const description = document.getElementById('input-description').value
    const condition = document.getElementById('input-condition').value
    const brand = document.getElementById('input-brand').value
    const contactInfo = document.getElementById('input-contact-info').value
    const myObj = {
        name: "name", price: "20", description: "description", condition: "condition", brand: "brand", contactInfo: "954-997-0952"
    }
    return myObj
}

const csvmaker = (info) => {
    csvRows = []

    const headers = Object.keys(info)

    csvRows.push(headers.join(','))

    const values = Object.values(info).join(','); 
    csvRows.push(values) 

    // Returning the array joining with new line
    return csvRows.join('\n') 
}

const addToCSV = () => {
}