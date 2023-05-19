import { setWheelsId } from "./TransientState.js"

const handleWheelChoice = (changeEvent) => {
    if (changeEvent.target.id === "wheels") {
        setWheelsId(parseInt(changeEvent.target.value))
    }
}

export const Wheels = async () => {
    // Get data first
    const response = await fetch("http://localhost:8088/wheels")
    const wheels = await response.json()
    document.addEventListener("change", handleWheelChoice)
    let html = ""

    html += '<select id="wheels">'
    html += '<option value="0">Select a wheels package</option>'

    for (const wheel of wheels) {
        html += `<option value="${wheel.id}">${wheel.rimPackage}</option>`
    }

    html += "</select>"
    return html
}