package com.acw.todoapp.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.Objects;

@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Table(name = "todo")
public class Todo {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private String todo_content;

    public Todo(Integer id, String todo_content) {
        this.id = id;
        this.todo_content = todo_content;
    }

    public Todo(String todo_content) {
        this.todo_content = todo_content;
    }

    public Todo() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTodo_content() {
        return todo_content;
    }

    public void setTodo_content(String todo_content) {
        this.todo_content = todo_content;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Todo todo = (Todo) o;
        return Objects.equals(id, todo.id) && Objects.equals(todo_content, todo.todo_content);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, todo_content);
    }

    @Override
    public String toString() {
        return "Todo{" +
                "id=" + id +
                ", todo_content='" + todo_content + '\'' +
                '}';
    }
}
