<?php
//incluir a conexão
include("conexao.php" );

//Sql

$sql = "SELECT * FROM cursos";

//Executar
$executar = mysqli_query($conexao, $sql);

//Vetor
$cursos = [];

//Indice
$indice = 0;

//Laço
while($linha = mysqli_fetch_assoc($executar)){
    $cursos[$indice]['idCurso']= $linha['idCurso'];
    $cursos[$indice]['nomeCVurso']= $linha['nomeCVurso'];
    $cursos[$indice]['valorCurso']= $linha['valorCurso'];

    $indice++;
}

//JSON
echo json_encode(['cursos'=>$cursos]);



?>