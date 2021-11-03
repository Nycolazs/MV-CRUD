package com.nycolazs.mvbackend.dto;

import java.io.Serializable;

import lombok.Data;

@Data
public class EstabelecimentoProfissionalDTO implements Serializable {

    private String nome;
    private Long id;
    
    public EstabelecimentoProfissionalDTO(Long id, String nome){
        this.id = id;
        this.nome = nome;
    }
    
}
