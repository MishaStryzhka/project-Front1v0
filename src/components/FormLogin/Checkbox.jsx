import * as React from 'react';
import { Field, ErrorMessage, Form } from 'formik';
// import { FormGroup, FormLabel } from 'react-bootstrap';

// export type Props = {
//   label?: String,
//   id?: String,
//   name?: String,
//   disabled?: boolean,
//   onChange: function,
//   className?: string
// };

export const Checkbox = ({ label, name, disabled, id, className }) => {
  return (
    <Form>
      <Field type="checkbox" id={name} name={name} />
      <label htmlFor={name}> {label}</label>
      <ErrorMessage component="div" className="input-error" name="checkbox" />
    </Form>
  );
};

Checkbox.defaultProps = {
  label: 'Default text',
  name: 'checkbox',
  disabled: false,
  className: '',
};

export default Checkbox;
