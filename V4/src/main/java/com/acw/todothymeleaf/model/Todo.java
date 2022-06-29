package com.acw.todothymeleaf.model;

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
    private String todo;

    public Todo(Integer id, String todo) {
        this.id = id;
        this.todo = todo;
    }

    public Todo(String todo) {
        this.todo = todo;
    }

    public Todo() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTodo() {
        return todo;
    }

    public void setTodo(String todo) {
        this.todo = todo;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Todo todo1 = (Todo) o;
        return Objects.equals(id, todo1.id) && Objects.equals(todo, todo1.todo);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, todo);
    }

    @Override
    public String toString() {
        return "Todo{" +
                "id=" + id +
                ", todo='" + todo + '\'' +
                '}';
    }
}
