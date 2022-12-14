import { Button } from "@material-ui/core";
import { Field, Form, Formik } from "formik";
import * as React from "react";
import { MyField } from "./MyField";

export function MyForm({ onSubmit }) {
  return (
    <Formik
      initialValues={{ expenseName: "", expenseAmount: 0, email: "" }}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);
        resetForm();
      }}
    >
      {({ values }) => (
        <div>
          <Form>
            <div>
              <Field name="expenseName" label="Expense" component={MyField} />
            </div>
            <div>
              <Field name="expenseAmount" label="Amount" component={MyField} />
            </div>
            <div>
              <Field name="email" label="Email" component={MyField} />
            </div>
            <Button type="submit" color="inherit">
              submit
            </Button>
          </Form>
        </div>
      )}
    </Formik>
  );
}
