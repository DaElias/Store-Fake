import React, { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import Alerta from "../Components/Alerta";
const style = { layout: "vertical" };

const PaypalPay = ({ handleSumTotal, paymentHandleSuccess }) => {
  const [smShow, setSmShow] = useState(false);
  return (
    <PayPalScriptProvider
      options={{
        "client-id": process.env.REACT_APP_PAYPAL_ID,
        currency: "USD",
      }}
    >
      <Alerta smShow={smShow} setSmShow={setSmShow} title="Pago Exitoso!!" />
      <PayPalButtons
        style={style}
        disabled={false}
        createOrder={(data, actions) =>
          actions.order
            .create({
              purchase_units: [
                {
                  amount: {
                    // currency_code: currency,
                    value: Number.parseFloat(handleSumTotal()).toFixed(2),
                  },
                },
              ],
            })
            .then((orderId) => {
              // Your code here after create the order
              return orderId;
            })
        }
        onApprove={(data, actions) => {
          return actions.order
            .capture()
            .then((data) => {
              // Your code here after capture the
              setSmShow(true);
              paymentHandleSuccess(data);
            })
            .catch((error) => console.log(error));
        }}
      />
    </PayPalScriptProvider>
  );
};

export default PaypalPay;


