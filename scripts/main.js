import { Technologies } from "./Technologies.js";
import { Interior } from "./Interiors.js";
import { Paint } from "./Paints.js";
import { Wheels } from "./Wheels.js";
import { placeOrderButton } from "./SaveOrders.js";
import { orders } from "./OrdersList.js";
import { types } from "./Types.js";

const container = document.querySelector("#container");

const render = async () => {
    const techHTML = await Technologies()
    const interiorHTML = await Interior()
    const paintHTML = await Paint()
    const wheelsHTML = await Wheels()
    const OrderButton = placeOrderButton()
    const ordersList = await orders()
    const typesList = await types()

  const composedHTML = `
        <h1>Cars Are Us</h1>
            <div class="main-content">
            <article class="choices">
                <section class="choices__type options">
                <h2>Vehicle Type</h2>
                ${typesList}
            </section>

            <section class="choices__tech options">
                <h2>Tech Packages</h2>
                ${techHTML}
            </section>

            <section class="choices__interior options">
                <h2>Interior Packages</h2>
                ${interiorHTML}
            </section>

            <section class="choices__paint options">
                <h2>Paint Options</h2>
                ${paintHTML}
            </section>

            <section class="choices__wheels options">
            <h2>Wheels Packages</h2>
                ${wheelsHTML}
            </section>
        </article>

        <article class="order">
        ${OrderButton}
        </article>
        </div>
        <article class="customOrders">
            <h2>Orders</h2>
            ${ordersList}
        </article>
    `;

  container.innerHTML = composedHTML;
};
document.addEventListener("newOrderCreated", render)

render()