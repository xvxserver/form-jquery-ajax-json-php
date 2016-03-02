<?php

	if (empty($_POST["username"])) {
		$output = json_encode(array(
			'focus'=>'username',
			'class'=>'danger',
			'text' => 'Campo Usuario Está Vacío.',
			'check' => false
		));
		die($output);
	}

	if (empty($_POST["password"])) {
		$output = json_encode(array(
			'focus'=>'password',
			'class'=>'danger',
			'text' => 'Campo Contraseña Está Vacío.',
			'check' => false
		));
		die($output);
	}

	$output = json_encode(array(
		'class'=>'success',
		'text' => $_POST["username"] . ' ' . $_POST["password"] . ' Listo Redireccionando.',
		'check' => true,
		'redirect' => './'
	));
	die($output);

?>
