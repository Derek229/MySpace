import React from "react";
import { useForm } from "react-hook-form";
import { Button, Form } from "semantic-ui-react";
// import FormLabel from "./FormLabel";


function UpdatePost() {
  const { update, handleSubmit, errors, watch } = useForm();

  const onSubmit = (data) => {
    console.log('data: ', data);
  }; // your form submit function which will invoke after successful validation 

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <h1>Update</h1>
      {/* <FormLabel>Update Post</FormLabel> */}
      <input name="body" defaultValue="test" ref={update} />
      <Button>Update</Button>
    </Form>
  );
}

export default UpdatePost