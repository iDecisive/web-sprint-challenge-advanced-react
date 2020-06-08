import React from "react";
import * as rtl from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import { getByTestId, getByLabelText, getByDisplayValue } from "@testing-library/react";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {

    let { getByText } = rtl.render(<CheckoutForm />);

    getByText('Checkout Form');

});

test("form shows success message on submit with form details", () => {

    //Render
    let { getByText, getByRole, getByLabelText } = rtl.render(<CheckoutForm />)

    //Type in inputs
    rtl.fireEvent.change(getByLabelText('First Name:', {target: {value: 'Daniel'}}));
    rtl.fireEvent.change(getByLabelText('Last Name:', {target: {value: 'Johnson'}}));
    rtl.fireEvent.change(getByLabelText('Address:', {target: {value: '123 Main Street'}}));
    rtl.fireEvent.change(getByLabelText('City:', {target: {value: 'Gastonia'}}));
    rtl.fireEvent.change(getByLabelText('State:', {target: {value: 'NC'}}));
    rtl.fireEvent.change(getByLabelText('Zip:', {target: {value: '28054'}}));

    //Submit form
    rtl.fireEvent.click(getByRole('button'));

    //Check for checkout confirmation in UI
    getByText('You have ordered some plants! Woo-hoo!');
    
});
