package com.librarybe.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.librarybe.model.Book;

public interface BookRepository extends JpaRepository<Book, Long>{

}
