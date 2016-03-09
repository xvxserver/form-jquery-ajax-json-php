<?php

	if (empty($_POST["username"])) {
		$output = json_encode(array(
			'focus'=>'username',
			'class'=>'danger',
			'text' => 'Empy Username.',
			'check' => false
		));
		die($output);
	}

	if (empty($_POST["password"])) {
		$output = json_encode(array(
			'focus'=>'password',
			'class'=>'danger',
			'text' => 'Empty Password.',
			'check' => false
		));
		die($output);
	}

	$output = json_encode(array(
		'class'=>'success',
		'text' => $_POST["username"] . ' | ' . $_POST["password"],
		'check' => true,
		'redirect' => './'
	));
	die($output);

?>
