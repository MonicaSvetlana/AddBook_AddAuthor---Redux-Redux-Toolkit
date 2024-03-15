import Card from "react-bootstrap/Card";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { delBook } from "../features/bookSlice";
import { useMemo, useState } from "react";
import Form from "react-bootstrap/Form";

export const Books = () => {
  const { books } = useSelector((state) => state.bookSlice);
  const { authors } = useSelector((state) => state.authorSlice);
  const dispatch = useDispatch();

  const [searchBook, setSearchBook] = useState("");

  const filteredBooks = useMemo(() => {
    if (!searchBook) return books;
    return books.filter((book) => {
      return (
        book.userId ==
        authors.find(
          (elm) => elm.username.toLowerCase() === searchBook.toLowerCase()
        )?.id
      );
    });
  }, [searchBook, books]);

  return (
    <div>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">
          Search by author's username
        </InputGroup.Text>
        <Form.Control
          placeholder="author's username"
          aria-label="author's username"
          aria-describedby="basic-addon1"
          onKeyDown={(e) => {
            if (e.key == "Enter") {
              setSearchBook(e.target.value);
            }
          }}
        />
      </InputGroup>
      <div className="d-flex justify-content-center p-3">
        <Card style={{ width: "18rem" }} className="d-flex">
          {filteredBooks.map((elm) => (
            <Card.Body key={elm.id}>
              <Card.Title>Book:{elm.name}</Card.Title>
              <Card.Text>Page: {elm.page}</Card.Text>
              <Card.Text>Price: {elm.price}</Card.Text>
              <Card.Text>UserId: {elm.userId}</Card.Text>
              {authors.map((elm) => {
                <Form.Select aria-label="Default select example">
                  <option key={elm.id}>{elm}</option>
                </Form.Select>;
              })}

              <Button onClick={() => dispatch(delBook(elm.id))}>Delete</Button>
            </Card.Body>
          ))}
        </Card>
      </div>
    </div>
  );
};
