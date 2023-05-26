
export const orders = async () => {
  const fetchResponse = await fetch(
    "http://localhost:8088/orders?_expand=technology&_expand=wheel&_expand=interior&_expand=ride&_expand=paint"
  );
  const orders = await fetchResponse.json();
  let ordersHTML = "";

  const ordersArray = orders.map((order) => {
    let orderPrice =
      order.wheel.price + order.technology.price + order.interior.price + order.paint.price + 30000;

    if (order.ride.type === "SUV") {
      orderPrice *= 1.5; // Update the orderPrice for SUV type
    }

    if (order.ride.type === "Truck") {
      orderPrice *= 2.25; // Update the orderPrice for Truck type
    }

    ordersHTML += `<ul>
      <li>${order.paint.paintColor} ${order.ride.type} with ${order.wheel.rimPackage} wheels,
      ${order.interior.seatOption} interior, and the ${order.technology.techPackage}
      for a total cost of ${orderPrice.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      })}</li>
    </ul>`;
  });

  ordersHTML += ordersArray.join(" ");
  return ordersHTML;
};
