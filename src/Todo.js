import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  List,
  ListItem,
  ListItemText,
  TextField,
  ListItemSecondaryAction,
  IconButton,
  Checkbox,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addTodo = () => {
    if (todo.trim() !== "") {
      setTodoList([
        ...todoList,
        { todo, itemId: Date.now(), completed: false },
      ]);
      console.log(todoList);
      setTodo("");
    }
  };

  const deleteTodo = (id) => {
    setTodoList(todoList.filter((item) => item.itemId !== id));
  };

  const toggleCompleted = (id) => {
    setTodoList(
      todoList.map((item) =>
        item.itemId === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  return (
    <Box display="flex" alignItems="center" height="90vh">
      <Container
        maxWidth="sm"
        style={{
          padding: 20,
          backgroundColor: "white",
          borderRadius: 8,
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        }}
      >
        <h1>Todo List: </h1>
        <TextField
          label="Enter a new todo"
          variant="outlined"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          fullWidth
        />
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: 10 }}
          fullWidth
          onClick={addTodo}
        >
          Add Todo
        </Button>
        <List>
          {todoList.map((item, index) => (
            <ListItem key={item.itemId} dense>
              <Checkbox onChange={() => toggleCompleted(item.itemId)} />
              <ListItemText
                primary={item.todo}
                style={{
                  textDecoration: item.completed ? "line-through" : "none",
                }}
              ></ListItemText>
              <ListItemSecondaryAction>
                <IconButton
                  edge="end"
                  aria-label="Delete"
                  onClick={() => deleteTodo(item.itemId)}
                >
                  <DeleteIcon></DeleteIcon>
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </Container>
    </Box>
  );
};

export default Todo;
