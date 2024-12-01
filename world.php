<?php
$host = 'localhost';
$username = 'lab5_user';
$password = 'password123';
$dbname = 'world';

$country = $_GET['country']?? '';
$city = $_GET['city']?? '';

$conn = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
$stmt = $conn->query("SELECT * FROM countries WHERE name LIKE '%$country%");

if ($city == "false") {
  $stmt = $conn->query("SELECT * FROM countries WHERE name LIKE '%$country%'");
}
elseif ($city == "true") {
  $stmt = $conn->query("SELECT c.id, c.name AS city , c.district , c.country_code, cs.name, c.population FROM cities c JOIN countries cs ON c.country_code = cs.code WHERE cs.name LIKE '%$country%'  ");
}

$results = $stmt->fetchAll(PDO::FETCH_ASSOC);

?>

<?php if ($city == "false"):?>

<table>
  <tr>
    <th>Country Name</th>
    <th>Continent</th>
    <th>Independence Year</th>
    <th>Head of State</th>
  </tr>

  <?php foreach($results as $r): ?>
    <tr>
      <td><?= $row['name']?></td>
      <td><?= $row['continent']?></td>
      <td><?= $row['independence_year']?></td>
      <td><?= $row['head_of_state']?></td>
    </tr>
    <?php endforeach; ?>
</table>

  <?php elseif ($city == "true"): ?>
    <table>
      <tr>
        <th>Name</th>
        <th>District</th>
        <th>Population</th>
      </tr>
      
      <?php foreach ($results as $r): ?>
        <tr>
          <td><?= $row['name']?></td>
          <td><?= $row['district']?></td>
          <td><?= $row['population']?></td>
        </tr>
        <?php endforeach; ?>
    </table>
  <?php endif; ?>
