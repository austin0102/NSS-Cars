import { setTechId } from "./TransientState.js"

const handleTechChoice = (changeEvent) => {
    if (changeEvent.target.id === "tech") {
        setTechId(parseInt(changeEvent.target.value))
    }
}

export const Technologies = async () => {
    // Get data first
    const response = await fetch("http://localhost:8088/technologies")
    const techs = await response.json()

    document.addEventListener("change", handleTechChoice)
    let html = ""

    html += '<select id="tech">'
    html += '<option value="0">Select a technology package</option>'

    for (const tech of techs) {
        html += `<option value="${tech.id}">${tech.techPackage}</option>`
    }

    html += "</select>"
    return html
}