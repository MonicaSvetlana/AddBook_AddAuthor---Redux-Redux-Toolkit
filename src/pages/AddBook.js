import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { addBook } from "../features/bookSlice";
import { useNavigate } from "react-router-dom";

export const AddBook = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const save = (data) => {
    data.id = Date.now();
    dispatch(addBook(data));
    reset();
    navigate("/books");
  };
  return (
    <div className="d-flex justify-content-center p-3">
      <Form onSubmit={handleSubmit(save)}>
        <h1>Add a book</h1>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="name">Name:</Form.Label>
          <Form.Control
            id="name"
            type="text"
            placeholder="Enter your name"
            {...register("name", { required: "Fill the field" })}
          />
          {errors.name && <span>This field is required</span>}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="page">Page:</Form.Label>
          <Form.Control
            id="page"
            type="text"
            placeholder="Enter the page"
            {...register("page", {
              required: "Fill the field",
              pattern: {
                value: /^[0-9]+$/,
                message: "Please enter only numeric values",
              },
            })}
          />
          {errors.page && <span>{errors.page.message}</span>}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="price">Price:</Form.Label>
          <Form.Control
            id="price"
            type="text"
            placeholder="Enter the price"
            {...register("price", {
              required: "Fill the field",
              pattern: {
                value: /^[0-9]+$/,
                message: "Please enter only numeric values",
              },
            })}
          />
          {errors.price && <span>{errors.price.message}</span>}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="userId">UserId:</Form.Label>
          <Form.Control
            id="userId"
            type="text"
            placeholder="Enter the userId"
            {...register("userId", {
              required: "Fill the field",
              pattern: {
                value: /^[0-9]+$/,
                message: "Please enter only numeric values",
              },
            })}
          />
          {errors.userId && <span>{errors.userId.message}</span>}
        </Form.Group>

        <Button variant="success" type="submit">
          Add Book
        </Button>
      </Form>
    </div>
  );
};
