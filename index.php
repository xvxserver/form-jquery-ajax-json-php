<!doctype html>
<html lang="es">
<head>
	<meta charset="utf-8">
	<title>document</title>
	<link rel="stylesheet" href="style.css">
	<script src="http://code.jquery.com/jquery-2.2.1.min.js"></script>
	<script src="function.js"></script>
</head>
<body>

<section>

	<form id="form_1" method="post" autocomplete="off" action="validate.php">
		<input id="username" placeholder="Usuario" type="text" name="username"></input><br />
		<input id="password" placeholder="Contraseña" type="text" name="password"></input><br />
		<input id="submit_1" type="submit" value="Conectar">
	</form>

	<div id="status_1" style="display: none">
		<div class="success" id="progress_1">
			<progress id="progressbar_1" value="0" max="100"></progress>
		</div>
		<div id="result_1"></div>
	</div>

</section>

</body>
</html>
