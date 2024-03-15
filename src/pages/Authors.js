import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { delAuthor } from "../features/authorSlice";
import { delBookByAuthor } from "../features/bookSlice";

export const Authors = () => {
  const { authors } = useSelector((state) => state.authorSlice);

  const dispatch = useDispatch();
  return (
    <div className="d-flex justify-content-center p-3">
      <Card style={{ width: "18rem" }}>
        {authors.map((elm) => (
          <Card.Body key={elm.id}>
            <Card.Title>Author - {elm.name}</Card.Title>
            <Card.Text>Surname: {elm.surname}</Card.Text>
            <Card.Text>Age: {elm.age}</Card.Text>
            <Card.Text>Usename: {elm.username}</Card.Text>
            <Button
              onClick={() => {
                dispatch(delAuthor(elm.id));
                dispatch(delBookByAuthor(elm.id));
              }}
            >
              Delete
            </Button>
          </Card.Body>
        ))}
      </Card>
    </div>
  );
};
