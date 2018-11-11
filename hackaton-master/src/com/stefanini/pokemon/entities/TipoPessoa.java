package com.stefanini.pokemon.entities;

import org.codehaus.jackson.annotate.JsonValue;

public enum TipoPessoa {

	PESSOA_FISICA (1, "Pessoa Fisica"),
	PESSOA_JURIDICA(2, "Pessoa Juridica");
	
	private Integer codigo;
	private String descricao;
	
	private TipoPessoa(Integer codigo, String descricao) {
		this.codigo = codigo;
		this.descricao = descricao;
	}
	
	@JsonValue
	public Integer getCodigo() {
		return codigo;
	}
	
	public String getDescricao() {
		return descricao;
	}	
}
