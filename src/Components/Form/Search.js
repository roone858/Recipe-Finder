import { useContext, useState } from "react";
import axios from "axios";
import { Form, Button, Container } from "react-bootstrap";
import { Store } from "../../App";
import { useNavigate } from "react-router-dom";

export default function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const { value, updateValue } = useContext(Store);
  const navigate = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`
      )
      .then((res) => {
        updateValue(res.data.meals);
        navigate("/search");
      })
      .catch((err) => console.log(err));
  };
  return (
    <Container>
      <Form className="my-5" onSubmit={handleSearch}>
        <Form.Group>
          <Form.Control
            className="my-2"
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </Form.Group>
        <Button className="w-100" variant="dark" type="submit">
          Search
        </Button>
      </Form>
    </Container>
  );
}
