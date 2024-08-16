

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Curso } from './curso';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  // URL
  private readonly API_URL = 'http://localhost/api/php/';

  // Vetor
  vetor: Curso[];

  constructor(private http: HttpClient) {
    this.vetor = [];
    this.API_URL = 'http://localhost/api/php/';
  }

  // Obter todos os cursos
  public obterCursos(): Observable<any> {
    return this.http.get<any>(this.API_URL + 'listar').pipe(
      map((res) => {
        this.vetor=res.cursos
        return this.vetor;
      })
    );
  }

  // Cadastrar um curso
  public cadastrarCurso(c: Curso): Observable<Curso[]> {
    return this.http.post(this.API_URL + 'cadastrar', {cursos:c})
        .pipe(map((res:any) => {
            // Adicionar dados ao vetor
            this.vetor.push(res.curso);

            

            return this.vetor;
        }));
}



//remover o curso
removerCurso(c: Curso): Observable<Curso[]> {
  const params = new HttpParams().set("idCurso", c.idCurso.toString());

  return this.http.delete(this.API_URL+'excluir',{params:params})
  .pipe(
    map((res: any) => {
      // Analisar a string JSON recebida do servidor
      const dados = JSON.parse(res);

      // Verificar se a exclusão foi bem-sucedida
      if (dados.sucesso) {
        // Filtrar o curso excluído do vetor
        const filtro = this.vetor.filter((curso) => {
          return + curso['idCurso'] !== +c.idCurso;
        });

        // Atualizar o vetor com o curso excluído
        this.vetor = filtro;

        return this.vetor;
      } else {
        throw new Error(dados.erro);
      }
    })
  );
}

//Atualizar curso
atualizarCurso(c:Curso): Observable<Curso[]>{

  //executa a função via url
  return this.http.put(this.API_URL+'alterar',{cursos: c})

  //percorre o vetor

  .pipe(map((res)=> {
     const cursoAlterado = this.vetor.find((item) =>{
      return+item['idCurso'] === +['idCurso'];
     });

     //alterar o vetor local
       if(cursoAlterado){
        cursoAlterado['nomeCVurso'] = c['nomeCVurso'];
        cursoAlterado['valorCurso'] = c['valorCurso'];
       }
       //retorno
       return this.vetor;
  }))

}
}
