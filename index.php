<!doctype html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>Form jQuery</title>
	<link rel="stylesheet" href="style.css">
	<script src="jquery.js"></script>
	<script src="function.js"></script>
</head>
<body>

<section>

	<form id="form_1" method="post" autocomplete="off" action="validate.php">
		<input id="username" placeholder="Username" type="text" name="username">
		<input id="password" placeholder="Password" type="text" name="password">
		<input id="submit_1" type="submit" value="Login">
	</form>

	<div id="status_1" style="display: none;">
		<progress id="progressbar_1" value="0" max="100"></progress>
		<div id="result_1"></div>
	</div>

</section>

</body>
</html>
