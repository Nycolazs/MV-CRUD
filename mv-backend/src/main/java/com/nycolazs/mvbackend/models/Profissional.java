package com.nycolazs.mvbackend.models;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="PROF")
public class Profissional implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE,generator = "seq_profissional")
	@SequenceGenerator(name = "seq_profissional", allocationSize = 1,sequenceName = "seq_profissional")
	@Column(name="cd_profissional")
	private Long id;
	
	private String nome;
	
	private String endereco;
	
	private String celular;
	
	private String telefone;
	
	private String funcao;

	@OneToMany(mappedBy="profissional", fetch=FetchType.EAGER)
	private List<Estabelecimento> estabelecimento;
}
