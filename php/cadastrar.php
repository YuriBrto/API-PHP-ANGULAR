<?php
include("conexao.php");

$obterDados = file_get_contents("php://input");

$extrair = json_decode($obterDados);

$nomeCVurso = $extrair->cursos->nomeCVurso;
$valorCurso = $extrair->cursos->valorCurso;

$sql = "INSERT INTO cursos (nomeCVurso, valorCurso) VALUES ('$nomeCVurso','$valorCurso')";
mysqli_query($conexao, $sql);

// Exportar os dados cadastrados
$curso = [
    'nomeCVurso' => $nomeCVurso,
    'valorCurso' => $valorCurso
];

echo json_encode(['curso' => $curso]);

?>

