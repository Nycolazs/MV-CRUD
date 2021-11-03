package com.nycolazs.mvbackend.models;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.JoinColumn;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="ESTA")
public class Estabelecimento implements Serializable {

    private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE,generator = "seq_estabelecimento")
	@SequenceGenerator(name = "seq_estabelecimento", allocationSize = 1,sequenceName = "seq_estabelecimento")
	@Column(name="cd_estabelecimento")
	private Long id;

    private String nome;
	
	private String endereco;

    private String telefone;

	@ManyToOne
	@JoinColumn(name="cd_profissional", referencedColumnName="cd_profissional")
	private Profissional profissional;
    
}
