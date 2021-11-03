package com.nycolazs.mvbackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EntityScan(basePackages = {"com.nycolazs.mvbackend.models"})
@ComponentScan(basePackages = {"com.nycolazs.mvbackend.*"})
@EnableJpaRepositories(basePackages = {"com.nycolazs.mvbackend.repository"})
@SpringBootApplication
public class MvBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(MvBackendApplication.class, args);
	}

}
