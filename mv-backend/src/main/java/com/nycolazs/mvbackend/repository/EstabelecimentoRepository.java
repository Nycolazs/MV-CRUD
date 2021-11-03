package com.nycolazs.mvbackend.repository;

import java.util.Optional;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.nycolazs.mvbackend.dto.EstabelecimentoProfissionalDTO;
import com.nycolazs.mvbackend.models.Estabelecimento;

@Repository
public interface EstabelecimentoRepository extends JpaRepository<Estabelecimento, Long>{
	
    //@Query("SELECT e.nome FROM esta e")
    List<Estabelecimento> findAll();

	Optional<Estabelecimento> findById(Long id);

    List<Estabelecimento> findByNome(String nome);

    @Query("SELECT new com.nycolazs.mvbackend.dto.EstabelecimentoProfissionalDTO (e.id , e.nome) FROM Estabelecimento e")
    List<EstabelecimentoProfissionalDTO> getEstabelecimento();

}
