<?php

include("conexao.php");

$idCurso = $_GET["idCurso"];

$sql = "DELETE FROM cursos WHERE idCurso = $idCurso";

mysqli_query($conexao, $sql);

echo "<script>alert('Curso removido com sucesso!');</script>";

header("Location: /index.php");

?>
