package com.acw.todoapp.controller;

import com.acw.todoapp.model.Todo;
import com.acw.todoapp.repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value = "/todo")
public class TodoController {

    @Autowired
    TodoRepository todoRepository;

    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Todo getTodo(@PathVariable int id) {
        System.out.println("-------------------------------");
        System.out.println("GETTING TODO");
        System.out.println("-------------------------------");
        Optional<Todo> findTodo = todoRepository.findById(id);
        if (findTodo.isPresent()) {
            return findTodo.get();
        } else {
            System.out.println("NO ID BY THAT NUMBER");
            return null;
        }
    };

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<Todo> getAllTodos() {
        System.out.println("-------------------------------");
        System.out.println("GETTING ALL TODOS");
        System.out.println("-------------------------------");
        return todoRepository.findAll();
//        return todoList;
    }


    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Todo postTodo(@RequestBody Todo todo) {
        System.out.println("-------------------------------");
        System.out.println("POSTING TODO");
        System.out.println("-------------------------------");
        todoRepository.save(todo);
        return todo;
    }

    @PutMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void updateTodo(@PathVariable int id, @RequestBody Todo todo) {
        if (todo.getId() == null) {
            todo.setId(id);
        }
        if (todo.getId() != id) {
//            throw new InvalidRequestException("ID in request body must match ID in path");
            System.out.println("NO TODO BY THAT ID");
        }
        System.out.println("-------------------------------");
        System.out.println("UPDATING TODO");
        System.out.println("-------------------------------");
        todoRepository.save(todo);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteTodo(@PathVariable int id) {
        System.out.println("-------------------------------");
        System.out.println("BALETING TODO");
        System.out.println("-------------------------------");
        todoRepository.deleteById(id);
    }
}
