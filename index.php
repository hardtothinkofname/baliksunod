<!DOCTYPE html>
<html>
	<head>
		<title>Pagination</title>
		<link rel="stylesheet" href="_source/bootstrap/css/bootstrap.min.css">
	</head>
	<body>
		<table class="table" id = "trytable">
			<thead>
				<th>#</th>
				<th>Name</th>
				<th>Mobile</th>
				<th>Gender</th>
				<th>Country</th>
			</thead>
			<tbody>
				<?php 
				for ($i=1; $i <= 500; $i++) { 
					?>
					<tr>
						<td><?php echo $i; ?></td>
						<td>this is a try</td>
						<td>dfgdfgdfg</td>
						<td>dfgdfgdf</td>
						<td>dfgkmfghgh lfgh;f l;df,hf</td>
					</tr>
					<?php
				}
				?>
			</tbody>
		</table>

		<!-- this is a try and the quick brown fox jumps over the head of the lazy dog -->
		
		<script type = "text/javascript" src = "_source/js/jquery-1.11.1.min.js"></script>
		<script type = "text/javascript" src = "_source/bootstrap/js/bootstrap.min.js"></script>
		<script type = "text/javascript" src = "_source/js/baliksunod.js"></script>
		<script type = "text/javascript">
			$(document).ready(function() {
				$('#trytable').baliksunod({ no_of_items: 7 });
			});
		</script>
	</body>
</html>