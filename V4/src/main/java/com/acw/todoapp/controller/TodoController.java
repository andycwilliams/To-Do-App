package com.acw.todoapp.controller;

import com.acw.todoapp.model.Todo;
import com.acw.todoapp.repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value = "/todo")
public class TodoController {

    private List<Todo> todoList;

    public TodoController(){
        this.todoList = new ArrayList<>();
        todoList.add(new Todo("STUFF"));
        todoList.add(new Todo("Delete"));
    }

//    @Autowired
//    TodoRepository todoRepository;

//    @GetMapping(value = "/{id}")
//    @ResponseStatus(HttpStatus.OK)
//    public Todo getTodo(@PathVariable int id) {
//        System.out.println("-------------------------------");
//        System.out.println("GETTING TODO");
//        System.out.println("-------------------------------");
//        Optional<Todo> findTodo = todoRepository.findById(id);
//        if (findTodo.isPresent()) {
//            return findTodo.get();
//        } else {
//            return null;
//        }
//    };

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<Todo> getAllTodos() {
        System.out.println("-------------------------------");
        System.out.println("GETTING ALL TODOS");
        System.out.println("-------------------------------");
//        return todoRepository.findAll();
        return todoList;
    }


//    @PostMapping
//    public Todo postTodo(@RequestBody Todo todo) {
//        System.out.println("POSTING TODO");
//        todoRepository.save(todo);
//        return todo;
//    }
//
//    @DeleteMapping
//    @ResponseStatus(HttpStatus.NO_CONTENT)
//    public void deleteTodo(@PathVariable int id) {
//        System.out.println("BALETING TODO");
//        todoRepository.deleteById(id);
//    }
}
