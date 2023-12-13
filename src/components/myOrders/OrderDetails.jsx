
function OrderDetails() {

    return (
    <div className="orderDetails">
        <main>
            <h1>Order Details</h1>
            <div>
                <h1>Shipping</h1>
                <p>
                    <b>Address:</b> 12 Oyster lane
                </p>
            </div>
            <div>
                <h1>Contact</h1>
                <p>
                    <b>Name:</b> Jane Doe
                </p>
                <p>
                    <b>Phone:</b> 253-217-2367
                </p>
            </div>
            <div>
                <h1>Order Status</h1>
                <p>
                    <b>Order:</b> Status Processing
                </p>
                <p>
                    <b>Placed At:</b> 22-02-2023
                </p>
                <p>
                    <b>Delivered At:</b> 22-02-2023
                </p>
            </div>
            <div>
                <h1>Payment</h1>
                <p>
                    <b>Payment method:</b> COD
                </p>
                <p>
                    <b>Payment Reference:</b> #wuhn2356khjsy
                </p>
                <p>
                    <b>Paid At:</b> 22-02-2023
                </p>
            </div>
            <div>
                <h1>Amount</h1>
                <p>
                    <b>Item Total:</b> ₹25,400
                </p>
                <p>
                    <b>Shipping Charges:</b> ₹200
                </p>
                <p>
                    <b>Tax:</b> ₹320
                </p>
                <p>
                    <b>Total Amount:</b> ₹25,920
                </p>
            </div>

            <article>
                <h1>Ordered Items</h1>

                <div>
                    <h4>Cheese Burger</h4>
                    <h4>12 * 200</h4>
                </div>
                <div>
                    <h4>Veg Cheese Burger</h4>
                    <h4>10 * 500</h4>
                </div>
                <div>
                    <h4>Burger Fries</h4>
                    <h4>10 * 1,800</h4>
                </div>
                <div>
                    <h3>Sub Total</h3>
                    <h3>₹25,400</h3>
                </div>
            </article>
        </main>
    </div>
    )
}

export default OrderDetails
