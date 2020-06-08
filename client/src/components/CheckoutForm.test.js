import React from "react";
import * as rtl from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {

    let { getByText } = rtl.render(<CheckoutForm />);

    getByText('Checkout Form');

});

test("form shows success message on submit with form details", () => {});
