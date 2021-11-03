package com.nycolazs.mvbackend.service;

import java.util.List;

import com.nycolazs.mvbackend.models.Profissional;
import com.nycolazs.mvbackend.repository.ProfissionalRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProfissionalService {

    @Autowired
    ProfissionalRepository profissionalRepository;

    public void deleteProfissional(Long id){
        try {
			Profissional profissional =  profissionalRepository.getById(id);
			profissionalRepository.delete(profissional);
		}catch(Exception err){
			System.out.println(err);
		}
    }

    public List<Profissional> listaProfissionais(){
        return profissionalRepository.findAll();
    }

    public void salvaProfissional(Profissional profissional){
        profissionalRepository.save(profissional);
    }

    public void atualizaProfissional(Long id, Profissional profissional){
        profissional.setId(id);
        profissionalRepository.save(profissional);
    }

    public Profissional listaProfissionalId(Long id){
        return profissionalRepository.findById(id).get();
    }

    public List<Profissional> listaProfissionalNome(String nome){
        return profissionalRepository.findByNome(nome);
    }
    
}
