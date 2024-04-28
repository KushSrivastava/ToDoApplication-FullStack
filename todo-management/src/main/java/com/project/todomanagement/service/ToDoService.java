package com.project.todomanagement.service;

import com.project.todomanagement.dto.ToDoDto;

import java.util.List;

public interface ToDoService {

    public ToDoDto addToDo(ToDoDto todoDto);
   public ToDoDto getToDoById(int id);
    public List<ToDoDto> getAllTodos();
    public ToDoDto updateTodo(int id,ToDoDto todoDto);
    public void delete(int id);
    ToDoDto completeToDo(int id);
    ToDoDto inCompleteToDo(int id);

}
