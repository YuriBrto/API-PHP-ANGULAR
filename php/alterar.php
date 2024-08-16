<?php
//Incluir conexao
include("conexao.php");

//Obter DADOS
$obterDados = file_get_contents("php://input");

//Extrair os dados do JSON
$extrair = json_decode($obterDados);

//Separar dos dados do JSON
$idCurso = $extrair->cursos->idCurso;
$nomeCVurso = $extrair->cursos->nomeCVurso;
$valorCurso = $extrair->cursos->valorCurso;

//SQL
$sql="UPDATE cursos SET nomeCVurso='$nomeCVurso', valorCurso=$valorCurso WHERE idCurso=$idCurso";
mysqli_query($conexao, $sql);

//Exportar os dados cadastrados
$curso = [
    'idCurso' => $idCurso,
    'nomeCVurso' => $nomeCVurso,
    'valorCurso' => $valorCurso
];
 json_encode(['curso'=>$curso]);
?>