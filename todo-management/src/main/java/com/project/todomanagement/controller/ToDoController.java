package com.project.todomanagement.controller;

import com.project.todomanagement.dto.ToDoDto;
import com.project.todomanagement.service.ToDoServiceImpl;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@AllArgsConstructor
@RequestMapping("api/todos")
public class ToDoController {

    private ToDoServiceImpl service;

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping
    public ResponseEntity<ToDoDto> createToDo(@RequestBody ToDoDto todoDto){
        return new ResponseEntity<>(service.addToDo(todoDto), HttpStatus.CREATED);
    }

    @PreAuthorize("hasAnyRole('ADMIN','USER')")
    @GetMapping("{id}")
    public ResponseEntity<ToDoDto> gettoDoById(@PathVariable("id") int id){
        return ResponseEntity.ok(service.getToDoById(id));
    }

    @PreAuthorize("hasAnyRole('ADMIN','USER')")
    @GetMapping
    public ResponseEntity<List<ToDoDto>> allToDos(){
        return ResponseEntity.ok(service.getAllTodos());
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("{id}")
    public ResponseEntity<ToDoDto> updateToDo(@PathVariable("id") int id,
                                              @RequestBody ToDoDto todoDto){

        return ResponseEntity.ok(service.updateTodo(id,todoDto));
    }

    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("{id}")
    public void deleteToDo(@PathVariable("id") int id){
        service.delete(id);
    }

    @PreAuthorize("hasAnyRole('ADMIN','USER')")
    @PatchMapping("{id}/complete")
    public ResponseEntity<ToDoDto> completeTodo(@PathVariable("id") int id){
        return ResponseEntity.ok(service.completeToDo(id));
    }

    @PreAuthorize("hasAnyRole('ADMIN','USER')")
    @PatchMapping("{id}/incomplete")
    public ResponseEntity<ToDoDto> incompleteToDo(@PathVariable int id){
        return ResponseEntity.ok(service.inCompleteToDo(id));
    }
}
