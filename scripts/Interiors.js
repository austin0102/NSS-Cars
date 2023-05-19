import { setInteriorId } from "./TransientState.js"

const handleInteriorChoice = (changeEvent) => {
    if (changeEvent.target.id === "interior") {
        setInteriorId(parseInt(changeEvent.target.value))
    }
}


export const Interior = async () => {
    // Get data first
    const response = await fetch("http://localhost:8088/interiors")
    const seats = await response.json()
    document.addEventListener("change", handleInteriorChoice)

    let html = ""

    html += '<select id="interior">'
    html += '<option value="0">Select a interior package</option>'

    for (const seat of seats) {
        html += `<option value="${seat.id}">${seat.seatOption}</option>`
    }

    html += "</select>"
    return html
}