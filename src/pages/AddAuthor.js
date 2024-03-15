import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { addAuthor } from "../features/authorSlice";
import { useNavigate } from "react-router-dom";

export const AddAuthor = () => {
  const { authors } = useSelector((state) => state.authorSlice);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const save = (data) => {
    const existingUsername = authors.find(
      (author) => author.username === data.username
    );

    if (existingUsername) {
      alert("Username already exists. Please choose a different one.");
    } else {
      data.id = Date.now();
      dispatch(addAuthor(data));
      reset();
      navigate("/");
    }
  };
  return (
    <div className="d-flex justify-content-center p-3">
      <Form onSubmit={handleSubmit(save)}>
        <h1>Add an author</h1>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="forName">Name:</Form.Label>
          <Form.Control
            id="forName"
            type="text"
            placeholder="Enter your name"
            {...register("name", { required: "Fill the field" })}
          />
          {errors.name && <span>{errors.name.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="surname">Surname:</Form.Label>
          <Form.Control
            id="surname"
            type="text"
            placeholder="Enter your surname"
            {...register("surname", { required: "Fill the field" })}
          />
          {errors.surname && <span>{errors.surname.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="age">Age:</Form.Label>
          <Form.Control
            id="age"
            type="text"
            placeholder="Enter the age"
            {...register("age", {
              required: "Fill the field",
              pattern: {
                value: /^[0-9]+$/,
                message: "Please enter only numeric values",
              },
            })}
          />
          {errors.age && <span>{errors.age.message}</span>}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="username">Username:</Form.Label>
          <Form.Control
            id="username"
            type="text"
            placeholder="Enter your username"
            {...register("username", { required: "Fill the field" })}
          />
          {errors.username && <span>{errors.username.message}</span>}
        </Form.Group>
        <Button variant="success" type="submit">
          Add Author
        </Button>
      </Form>
    </div>
  );
};
