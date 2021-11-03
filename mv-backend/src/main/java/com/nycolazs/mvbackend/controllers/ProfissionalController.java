package com.nycolazs.mvbackend.controllers;

import java.util.List;

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

import com.nycolazs.mvbackend.models.Profissional;
import com.nycolazs.mvbackend.repository.ProfissionalRepository;
import com.nycolazs.mvbackend.service.ProfissionalService;


@RestController
@RequestMapping(value="/api")
@Api(value="API REST CRUD-MV")
@CrossOrigin(origins="*")
public class ProfissionalController {
	
	@Autowired
	ProfissionalRepository profissionalRepository;

	@Autowired
	ProfissionalService profissionalService;

	@GetMapping("/profissionais")
	@ApiOperation(value = "Retorna uma lista de profissionais")
	public ResponseEntity<List<Profissional>>  listaEstabelecimento(){
		return ResponseEntity.ok().body(profissionalService.listaProfissionais());
  	}

	@GetMapping("/profissional/{id}")
	@ApiOperation(value = "Retorna um profissional encontrado pelo id")
	public ResponseEntity<Profissional> listaEstabelecimentoId(@PathVariable Long id){
		return ResponseEntity.ok().body(profissionalService.listaProfissionalId(id));
	}

	@GetMapping("/profissional")
	@ApiOperation(value = "Retorna um profissional encontrado pelo nome")
	public ResponseEntity <List<Profissional>> listaEstabelecimentoNome(@RequestParam("nome") String nome){
		return ResponseEntity.ok(profissionalService.listaProfissionalNome(nome));
	}


	@PostMapping("/profissional")
	@ApiOperation(value = "Salva um profissional")
	public ResponseEntity<Void> salvaEstabelecimento(@RequestBody Profissional profissional) {
		profissionalService.salvaProfissional(profissional);
		return ResponseEntity.noContent().build();
	}

	@DeleteMapping("/profissional/{id}")
	@ApiOperation(value = "Deleta um profissional")
	public ResponseEntity<Void> getdeletaProfissional(@PathVariable(value="id") Long id) {
		profissionalService.deleteProfissional(id);
		return ResponseEntity.noContent().build();
	}
	

	@PutMapping("/profissional/{id}")
	@ApiOperation(value = "Atualiza um profissional")
	public ResponseEntity<Void> atualizaEstabelecimento(@PathVariable(value="id") Long id, @RequestBody Profissional profissional) {
		profissionalService.atualizaProfissional(id, profissional);
		return ResponseEntity.noContent().build();
	}
}
