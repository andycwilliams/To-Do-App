package com.acw.todothymeleaf.controller;

import com.acw.todothymeleaf.model.Todo;
import com.acw.todothymeleaf.repository.TodoRepository;
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

    @GetMapping
    public Todo getTodo(@PathVariable int id) {
        System.out.println("GETTING TODO");
        Optional<Todo> findTodo = todoRepository.findById(id);
        if (findTodo.isPresent()) {
            return findTodo.get();
        } else {
            return null;
        }
    };

    @GetMapping
    public List<Todo> getAllTodos() {
        return todoRepository.findAll();
    }

    @PostMapping
    public Todo postTodo(@RequestBody Todo todo) {
        System.out.println("POSTING TODO");
        todoRepository.save(todo);
        return todo;
    }

    @DeleteMapping
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteTodo(@PathVariable int id) {
        System.out.println("BALETING TODO");
        todoRepository.deleteById(id);
    }
}
