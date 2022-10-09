package com.librarybe.controller;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.librarybe.model.Book;
import com.librarybe.repository.BookRepository;

@RestController
@CrossOrigin(origins = "http://localhost:7678")
public class BookController {
	
	@Autowired
	private BookRepository bookRepository;

	@PostMapping("/book/post")
	public Book postBook(@RequestBody Book book) {
		book.setAvailable("Yes");
		return bookRepository.save(book);
	}
	
	@GetMapping("/book/all")
	public List<Book> getAllBooks(){
		return bookRepository.findAll();
	}
	
	@GetMapping("/book/borrow/{id}")
	public Book borrowBook(@PathVariable("id") Long id) {
		Optional<Book> optional = bookRepository.findById(id);
		
		if(!optional.isPresent())
			throw new RuntimeException("Invalid Book Id");
		
		Book book = optional.get();
		if(book.getAvailable().equals("No")) {
			throw new RuntimeException("Book is already Borrowed");
		}
		
		book.setIssueDate(LocalDate.now());
		book.setDueDate(LocalDate.now().plusDays(7));
		
		book.setAvailable("No");
		
		return bookRepository.save(book);
	}
	
	@GetMapping("/book/return/{id}")
	public Book returnBook(@PathVariable("id") Long id) {
		Optional<Book> optional = bookRepository.findById(id);
		
		if(!optional.isPresent())
			throw new RuntimeException("Invalid Book Id");
		
		Book book = optional.get();
		if(book.getAvailable().equals("Yes")) {
			throw new RuntimeException("Book is already Returned");
		}
		
		book.setIssueDate(null);
		book.setDueDate(null);
		
		book.setAvailable("Yes");
		
		return bookRepository.save(book);
	}
}
