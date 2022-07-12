package com.acw.todoapp.controller;

import com.acw.todoapp.model.Todo;
import com.acw.todoapp.repository.TodoRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.Before;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.junit.runner.RunWith;
import org.springframework.test.web.servlet.MockMvc;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.mockito.Mockito.doReturn;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@WebMvcTest(TodoController.class)
public class TodoControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private TodoRepository todoRepository;

    private ObjectMapper mapper = new ObjectMapper();

    Todo todo;

    private String todoJson;

    private List<Todo> allTodos = new ArrayList<>();
    private String allTodosJSON;

    @Before
    public void setup() throws Exception {
        todo = new Todo(17,"Test todo");
        todoJson = mapper.writeValueAsString(todo);

        Todo todo2 = new Todo(45, "Another test");

        allTodos.add(todo);
        allTodos.add(todo);
        allTodosJSON = mapper.writeValueAsString(allTodos);
    }

    @Test
    public void shouldGetTodoById() throws Exception {
        String inputJson = mapper.writeValueAsString(todoJson);

        mockMvc.perform(get("/todo/44")
                        .content(inputJson)
                        .contentType(MediaType.APPLICATION_JSON)
                )
                .andDo(print())
                .andExpect(status().isOk());
    }

    @Test
    public void shouldGetAllTodos() throws Exception {
        String outputJson = mapper.writeValueAsString(todoJson);

        mockMvc.perform(get("/todo")
                        .content(outputJson)
                        .contentType(MediaType.APPLICATION_JSON)
                )
                .andExpect(status().isOk());

//        doReturn(allTodos).when(todoRepository).findAll();
//
//        mockMvc.perform(
//                        get("/todo"))
//                .andExpect(status().isOk())
//                .andExpect(content().json(allTodosJSON)
//                );
    }

    @Test
    public void shouldPostTodo() throws Exception {
        String inputJson = mapper.writeValueAsString(todo);

        mockMvc.perform(post("/todo")
                        .content(inputJson)
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isCreated());
    }

    @Test
    public void shouldUpdateTodo() throws Exception {
        mockMvc.perform(
                        put("/todo/17")
                                .content(todoJson)
                                .contentType(MediaType.APPLICATION_JSON)
                )
                .andDo(print())
                .andExpect(status().isNoContent());
    }

    @Test
    public void shouldDeleteTodo() throws Exception {
        mockMvc.perform(delete("/todo/45")).andDo(print()).andExpect(status().isNoContent());
    }

    @Test
    public void shouldReturn404WhenGetTodoByInvalidId() throws Exception{
        mockMvc.perform(get("/todo/-7"))
                .andDo(print())
                .andExpect(status().isNotFound());
    }

    @Test
    public void shouldReturnUnprocessableEntityWhenUpdateTodoByInvalidId() throws Exception {
        String inputJson = mapper.writeValueAsString(todoJson);

        mockMvc.perform(put("/todo/-7")
                        .content(inputJson)
                        .contentType(MediaType.APPLICATION_JSON))
                .andDo(print())
                .andExpect(status().isUnprocessableEntity());
    }
}