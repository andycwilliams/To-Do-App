package com.acw.todoapp.controller;

import com.acw.todoapp.repository.TodoRepository;
import org.junit.Before;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import org.junit.runner.RunWith;
import org.springframework.test.web.servlet.MockMvc;

@RunWith(SpringRunner.class)
@WebMvcTest(TodoController.class)
public class TodoControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private TodoRepository todoRepository;

    @Before
    public void setup() throws Exception {}

    @Test
    public void shouldGetTodo() throws Exception {}

    @Test
    public void shouldGetAllTodos() throws Exception {}

    @Test
    public void shouldPostTodo() throws Exception {}

    @Test
    public void shouldUpdateTodo() throws Exception {}

    @Test
    public void shouldDeleteTodo() throws Exception {}
}