<?php

$inProgress = array();
$completed = array();
$planned = array();
$notStarted = array();
$bugReports = array();

$todos = file("todo.txt");

foreach($todos as $line) {
	$line = trim($line);
	if ($line == '') continue;
	switch (strtolower($line[0])) {
		case 'i': $inProgress[] = $line;
			break;
		case 'c': $completed[] = $line;
			break;
		case 'p': $planned[] = $line;
			break;
		case 'b': $bugReports[] = $line;
			break;
		case '#': // comment, ignore
			break;
		default:
			$notStarted[] = $line;
			break;
	}
}
echo '<table class="table table-sm table-bordered">' . "\n";
echo '<thead class="thead-dark">' . "\n";
echo '<tr>' . "\n";
echo '<th colspan="2">In Progress</th>' . "\n";
echo '</tr>' . "\n";
echo '</thead>' . "\n";
foreach($inProgress as $line) {
	@list($category,$description,$notes) = explode('/',$line);
	echo "<tr class=\"table-info\"><td>$description</td><td>$notes</td></tr>\n";
}

echo '<thead class="thead-dark">' . "\n";
echo '<tr>' . "\n";
echo '<th colspan="2">Completed</th>' . "\n";
echo '</tr>' . "\n";
echo '</thead>' . "\n";
foreach($completed as $line) {
	@list($category,$description,$notes) = explode('/',$line);
	echo "<tr class=\"table-success\"><td>$description</td><td>$notes</td></tr>\n";
}

echo '<thead class="thead-dark">' . "\n";
echo '<tr>' . "\n";
echo '<th colspan="2">Planned / Intended</th>' . "\n";
echo '</tr>' . "\n";
echo '</thead>' . "\n";
foreach($planned as $line) {
	@list($category,$description,$notes) = explode('/',$line);
	echo "<tr class=\"table-warning\"><td>$description</td><td>$notes</td></tr>\n";
}

echo '<thead class="thead-dark">' . "\n";
echo '<tr>' . "\n";
echo '<th colspan="2">Bug reports under investigation</th>' . "\n";
echo '</tr>' . "\n";
echo '</thead>' . "\n";
foreach($bugReports as $line) {
	@list($category,$description,$notes) = explode('/',$line);
	echo "<tr class=\"table-secondary\"><td>$description</td><td>$notes</td></tr>\n";
}

echo '<thead class="thead-dark">' . "\n";
echo '<tr>' . "\n";
echo '<th colspan="2">Low Priority or High Difficulty</th>' . "\n";
echo '</tr>' . "\n";
echo '</thead>' . "\n";
foreach($notStarted as $line) {
	@list($category,$description,$notes) = explode('/',$line);
	echo "<tr class=\"table-danger\"><td>$description</td><td>$notes</td></tr>\n";
}
echo '</table>' . "\n";
