import { setRideId } from "./TransientState.js"

const handleTypeChoice = (changeEvent) => {
    if (changeEvent.target.id === "types") {
        setRideId(parseInt(changeEvent.target.value))
    }
}

export const types = async () => {
    // Get data first
    const response = await fetch("http://localhost:8088/rides")
    const types = await response.json()
    document.addEventListener("change", handleTypeChoice)
    let html = ""

    html += '<select id="types">'
    html += '<option value="0">Select Type of Vehicle</option>'

    for (const type of types) {
        html += `<option value="${type.id}">${type.type}</option>`
    }

    html += "</select>"
    return html
}