package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.models.Narudzbina;
import com.example.demo.models.NarudzbinaSadrzi;
import com.example.demo.models.NarudzbinaSadrziKey;

public interface NarudzbinaSadrziRepo extends JpaRepository<NarudzbinaSadrzi,NarudzbinaSadrziKey >{

    List<NarudzbinaSadrzi> findByNarudzbina(Narudzbina narudzbina);

}
