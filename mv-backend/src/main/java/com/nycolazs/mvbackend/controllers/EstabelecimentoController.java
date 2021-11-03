package com.nycolazs.mvbackend.controllers;

import java.util.List;

import com.nycolazs.mvbackend.dto.EstabelecimentoProfissionalDTO;
import com.nycolazs.mvbackend.models.Estabelecimento;
import com.nycolazs.mvbackend.repository.ProfissionalRepository;
import com.nycolazs.mvbackend.service.EstabelecimentoService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping(value="/api")
@Api(value="API REST CRUD-MV")
@CrossOrigin(origins="*")
public class EstabelecimentoController {


	@Autowired
	EstabelecimentoService estabelecimentoService;

	@Autowired
	ProfissionalRepository profissionalRepository;
    
    @GetMapping("/estabelecimentos")
	@ApiOperation(value = "Retornar uma lista de estabelecimentos")
	public ResponseEntity<List<Estabelecimento>>  listaEstabelecimento(){
		return ResponseEntity.ok().body(estabelecimentoService.listaEstabelecimentos());
  	} 

	@GetMapping("/estabelecimento/{id}")
	@ApiOperation(value = "Retorna um estabelecimento encontrado pelo id")
	public ResponseEntity<Estabelecimento> listaEstabelecimentoId(@PathVariable Long id){
		return ResponseEntity.ok().body(estabelecimentoService.listaEstabelecimentoId(id));
	}

	@GetMapping("/estabelecimento")
	@ApiOperation(value = "Retorna um estabelecimento encontrado pelo nome")
	public ResponseEntity <List<Estabelecimento>> listaEstabelecimentoNome(@RequestParam("nome") String nome){
		return ResponseEntity.ok(estabelecimentoService.listaEstabelecimentoNome(nome));
	}	
	
	@PostMapping("/estabelecimento")
	@ApiOperation(value = "Salva um estabelecimento")
	public ResponseEntity<Void> salvaEstabelecimento(@RequestBody Estabelecimento estabelecimento) {
		estabelecimentoService.salvaEstabelecimento(estabelecimento);
		return ResponseEntity.ok().build();
	}

	
	@DeleteMapping("/estabelecimento/{id}")
	@ApiOperation(value = "Deleta um estabelecimento")
	public ResponseEntity<Void> deletaEstabelecimento(@PathVariable(value="id") Long id) {
		estabelecimentoService.deleteEstabelecimento(id);
		return ResponseEntity.noContent().build();
	}
	

	@PutMapping("/estabelecimento/{id}")
	@ApiOperation(value = "Atualiza um estabelecimento")
	public ResponseEntity<Void> atualizaEstabelecimento(@PathVariable(value="id") Long id, @RequestBody Estabelecimento estabelecimento) {
		estabelecimentoService.atualizaEstabelecimento(id, estabelecimento);
		return ResponseEntity.noContent().build();
	}

	@GetMapping("/getestabelecimento")
	@ApiOperation(value = "Retorna uma lista de estabelecimentos")
	public ResponseEntity<List<EstabelecimentoProfissionalDTO>>  getEstabelecimentos(){
		return ResponseEntity.ok().body(estabelecimentoService.getEstabelecimentos());
  	}
}
