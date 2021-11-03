package com.nycolazs.mvbackend.service;

import java.util.List;

import com.nycolazs.mvbackend.dto.EstabelecimentoProfissionalDTO;
import com.nycolazs.mvbackend.models.Estabelecimento;
import com.nycolazs.mvbackend.repository.EstabelecimentoRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EstabelecimentoService {

    @Autowired
    EstabelecimentoRepository estabelecimentoRepository;

    public void deleteEstabelecimento(Long id){
        try {
			Estabelecimento estabelecimento =  estabelecimentoRepository.getById(id);
			estabelecimentoRepository.delete(estabelecimento);
		}catch(Exception err){
			System.out.println(err);
		}
    }

    public List<Estabelecimento> listaEstabelecimentos(){
        return estabelecimentoRepository.findAll();
    }

    public void salvaEstabelecimento(Estabelecimento estabelecimento){
        estabelecimentoRepository.save(estabelecimento);
    }

    public void atualizaEstabelecimento(Long id, Estabelecimento estabelecimento){
        estabelecimento.setId(id);
        estabelecimentoRepository.save(estabelecimento);
    }

    public Estabelecimento listaEstabelecimentoId(Long id){
        return estabelecimentoRepository.findById(id).get();
    }

    public List<Estabelecimento> listaEstabelecimentoNome(String nome){
        return estabelecimentoRepository.findByNome(nome);
    }

    public List<EstabelecimentoProfissionalDTO> getEstabelecimentos(){
        return estabelecimentoRepository.getEstabelecimento();
    }
}
