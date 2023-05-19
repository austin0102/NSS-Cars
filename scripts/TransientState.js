const TransientState = {
    paintId: 0,
    technologyId: 0,
    wheelId: 0,
    interiorId: 0,
}

export const setPaintId = (chosenPaint) => {
    TransientState.paintId = chosenPaint
}

export const setTechId = (chosenTech) => {
    TransientState.technologyId = chosenTech
}
export const setWheelsId = (chosenWheels) => {
    TransientState.wheelId = chosenWheels
}
export const setInteriorId = (chosenInterior) => {
    TransientState.interiorId = chosenInterior
}

export const placeOrder = async () => {
    /*
          Add the required keys to the object below that are
          needed for a POST operation.
      */
  
    const postOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(TransientState),
    };
  
    // Send the transient state to your API
    const response = await fetch("http://localhost:8088/orders", postOptions);
    const customEvent = new CustomEvent("newOrderCreated");
    document.dispatchEvent(customEvent);
  };