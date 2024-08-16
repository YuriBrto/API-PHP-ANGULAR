import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Curso } from './curso';
import { CursoService } from './curso.service';
@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrl: './curso.component.css'
})
export class CursoComponent implements OnInit{
  //Vetor
  vetor: Curso[];

  //Objeto da classe curso
  curso = new Curso("", 0, 0);
constructor(private curso_service: CursoService){
  this.vetor=[];
  
}
//Inicializador
ngOnInit(){
//Ao iniciar o sistema, deverá listar os cursos
this.selecao();


}
cadastrar(): void {


  this.curso_service.cadastrarCurso(this.curso).subscribe(
    (res: Curso[]) =>{

      this.vetor= res;
 // Limpar os atributos
 this.curso.nomeCVurso = null;
 this.curso.valorCurso = null;

 
  // Atualizar a listagem
  this.selecao();
    }
  );
 


  
}



//Seleção
selecao(){
  this.curso_service.obterCursos().subscribe(
    (res: Curso[]) => {
      this.vetor = res;
    })
}

//Alterar
alterar(){
     this.curso_service.atualizarCurso(this.curso).subscribe(
      (res)=>{
        this.vetor = res;

        this.curso.nomeCVurso = null;
        this.curso.valorCurso=null;

        this.selecao();
     }
     )
}
//Removet
remover(){
  this.curso_service.removerCurso(this.curso).subscribe(
    (res : Curso[]) =>{
      this.vetor = res;

      // Limpar os campos do formulário
      this.curso.nomeCVurso = null;
      this.curso.valorCurso = null;
    },
    (error) => {
      // Exibir mensagem de erro
      console.error(error);
    }
  );
  this.selecao()
}


//selecionar curso expeifico
selecionarCurso(c:Curso){
  this.curso.idCurso= c.idCurso;
  this.curso.nomeCVurso= c.nomeCVurso;
  this.curso.valorCurso= c.valorCurso;
}
}
