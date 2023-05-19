export const orders = async () => {
const fetchResponse = await fetch(
    "http://localhost:8088/orders?_expand=technology&_expand=wheel&_expand=interior&_expand=paint"
  );
  const orders = await fetchResponse.json();
  let ordersHTML = "";
  const ordersArray = orders.map((order) => {
    const orderPrice =
      order.wheel.price + order.technology.price + order.interior.price + order.paint.price;
    ordersHTML += `<div>
            ${order.paint.paintColor} car with ${order.wheel.rimPackage} wheels,
            ${order.interior.seatOption} interior, and the ${order.technology.techPackage}
            for a total cost of ${orderPrice.toLocaleString("en-US", {
                style: "currency",
                currency: "USD"
            })}
            </div>`;
  });
  ordersHTML += ordersArray.join(" ");
  return ordersHTML;
};