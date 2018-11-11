package com.stefanini.pokemon.service;

import java.util.HashSet;
import java.util.Set;

import javax.inject.Singleton;

import com.stefanini.pokemon.entities.Usuario;

@Singleton
public class BaseDados {
	Set<Usuario> usuarios = new HashSet<>();
	
	public void salvar(Usuario user) {
		user.setId((long)usuarios.size()+1);		
		usuarios.add(user);
	}
	
	public Usuario obter(Long id) {
		for (Usuario usuario : usuarios) {
			if (id.equals(usuario.getId())) {
				return usuario;
			}
		}
		
		return null;
	}

	public void excluir(Long id) {
		usuarios.remove(obter(id));
	}
	
	public void alterar(Usuario user) {
		Usuario usuario = obter(user.getId());
		usuario.setEmail(user.getEmail());
		usuario.setSenha(user.getSenha());
	}

	public Set<Usuario> listar() {
		return usuarios;
	}
	
}
