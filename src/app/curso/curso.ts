export class Curso {
    // Propriedades
    idCurso: number ;
    nomeCVurso: string | null;
    valorCurso: number | null;
  
    // Construtor
    constructor(nomeCVurso: string | null, valorCurso: number | null, idCurso: number ) {
      this.idCurso = idCurso;
      this.nomeCVurso = nomeCVurso;
      this.valorCurso = valorCurso;
    }
  }
  