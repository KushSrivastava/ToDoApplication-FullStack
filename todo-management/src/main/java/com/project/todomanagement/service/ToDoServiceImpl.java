package com.project.todomanagement.service;

import com.project.todomanagement.dto.ToDoDto;
import com.project.todomanagement.entity.ToDo;
import com.project.todomanagement.exception.ResourceNotFoundException;
import com.project.todomanagement.repository.ToDoRepository;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class ToDoServiceImpl implements ToDoService {

    private ToDoRepository repo;
    private ModelMapper mapper;

    @Override
    public ToDoDto addToDo(ToDoDto todoDto) {
        ToDo todo = mapper.map(todoDto, ToDo.class);
        ToDo savedtodo = repo.save(todo);
        ToDoDto savedtodoDto = mapper.map(todo, ToDoDto.class);
        return savedtodoDto;
    }

    @Override
    public ToDoDto getToDoById(int id) {
        ToDo todo = repo.findById(id).orElseThrow(
                () -> new ResourceNotFoundException());
        return mapper.map(todo, ToDoDto.class);
    }

    @Override
    public List<ToDoDto> getAllTodos() {
        List<ToDo> allToDo = repo.findAll();
        List<ToDoDto> allToDoDtos = allToDo.stream().map((e) -> mapper.map(e, ToDoDto.class)).toList();
        return allToDoDtos;
    }

    @Override
    public ToDoDto updateTodo(int id, ToDoDto todoDto) {
        ToDoDto tododto = getToDoById(id);
        ToDo todo = mapper.map(tododto, ToDo.class);

        todo.setTitle(todoDto.getTitle());
        todo.setDescription(todoDto.getDescription());
        todo.setCompleted(todoDto.isCompleted());

        ToDo updatedtodo = repo.save(todo);
        return mapper.map(updatedtodo, ToDoDto.class);
    }

    @Override
    public void delete(int id) {
        ToDoDto tododoto = getToDoById(id);
        repo.deleteById(id);

    }

    @Override
    public ToDoDto completeToDo(int id) {
        ToDoDto todoDto = getToDoById(id);
        ToDo todo = mapper.map(todoDto,ToDo.class);

        todo.setCompleted(Boolean.TRUE);
        ToDo updatedTodo = repo.save(todo);

        return mapper.map(updatedTodo,ToDoDto.class);
    }

    @Override
    public ToDoDto inCompleteToDo(int id) {
        ToDo todo = mapper.map(repo.findById(id),ToDo.class);
        todo.setCompleted(Boolean.FALSE);
        ToDo updatedToDo = repo.save(todo);
        return mapper.map(updatedToDo,ToDoDto.class);
    }

}