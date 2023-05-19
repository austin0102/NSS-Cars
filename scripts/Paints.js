import { setPaintId } from "./TransientState.js"

const handlePaintChoice = (changEvent) => {
    if (changEvent.target.id === "paint") {
        setPaintId(parseInt(changEvent.target.value))
    }
}

export const Paint = async () => {
    // Get data first
    const response = await fetch("http://localhost:8088/paints")
    const colors = await response.json()
    document.addEventListener("change", handlePaintChoice)

    let html = ""

    html += '<select id="paint">'
    html += '<option value="0">Select a paint color</option>'

    for (const color of colors) {
        html += `<option value="${color.id}">${color.paintColor}</option>`
    }

    html += "</select>"
    return html
}