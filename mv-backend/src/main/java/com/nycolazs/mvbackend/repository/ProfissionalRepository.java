package com.nycolazs.mvbackend.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.nycolazs.mvbackend.models.Profissional;

@Repository
public interface ProfissionalRepository extends JpaRepository<Profissional, Long>{

    List<Profissional> findAll();

	Optional<Profissional> findById(Long id);

	List<Profissional> findByNome(String nome);
	
}
