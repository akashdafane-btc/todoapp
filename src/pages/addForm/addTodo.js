import React from "react";
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
// import { yupResolver } from '@hookform/resolvers/yup';
import { Input, Button } from "../../components/index";
// import schema from '../../schema/addTodo'
import { addTodo } from "../../actions/todoAction";
import { showToast } from "../../utility/common";
import { useDispatch, useSelector } from "react-redux";
import DisplayData from "./displayData";
import { constant } from "../../constants/formConstant";

const AddTodos = () => {
  const dispatch = useDispatch();
  const getAllTodos = useSelector((state) => state.todos);
  console.log(getAllTodos.todos);
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
    reset,
  } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      title: "",
      details: "",
    },
    // resolver: yupResolver(schema),
  });

  // constant
  const { details, title, submit } = constant.formConstant;

  const onSubmit = (data) => {
    const filterData = getAllTodos?.todos?.filter((item) => {
      return item.title == data.title && item;
    });
    console.log(filterData);
    if (filterData.length > 0) {
      alert("already exist");
      showToast("hhii");
    } else {
      dispatch(addTodo(data));
    }
  };

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          controlId="title"
          error={errors.title && errors.title.message}
          showError={touchedFields && touchedFields.title}
          registeredEvents={register("title")}
          isRequired={true}
          placeholder={title}
          label={title}
        />
        <Input
          controlId="details"
          error={errors.details && errors.details.message}
          showError={touchedFields && touchedFields.details}
          registeredEvents={register("details")}
          isRequired={true}
          placeholder={details}
          label={details}
        />
        <Button label={submit} onClick={handleSubmit(onSubmit)} type="button" />
      </Form>
      <div>
        <DisplayData />
      </div>
    </div>
  );
};

export default AddTodos;
