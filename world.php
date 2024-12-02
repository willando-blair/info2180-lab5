<?php
  $host = 'localhost';
  $username = 'lab5_user';
  $password = 'password123';
  $dbname = 'world';

  $country = $_GET['country']?? '';
  $city = $_GET['city']?? '';

  $conn = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
  
  $stmt = null;

  if ($city == 'false') {
    $sql = "SELECT * FROM countries WHERE name LIKE {$country};";
    $stmt = $conn->query($sql);
  }
  elseif ($city == 'true') {
    $sql = "SELECT c.name AS city, c.district, c.population FROM cities c JOIN countries cs ON c.country_code = cs.code WHERE cs.name LIKE {$country};";
    $stmt = $conn->query($sql);
  }

  $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

?>

<?php 

  if (6<10) {
    echo 
    "
      <table>
        <tr>
          <th>Country Name</th>
          <th>Continent</th>
          <th>Independence Year</th>
          <th>Head of State</th>
        </tr>
    ";
    while ($r = $stmt->fetch(PDO::FETCH_ASSOC)) {
      echo 
      "
        <tr>
          <td>" . $r['name'] . "</td>
          <td>" . $r['continent'] . "</td>
          <td>" . $r['independence_year'] . "</td>
          <td>" . $r['head_of_state'] . "</td>
        </tr>
        </table>
      ";
    }
  }
  elseif (6>10) {
    echo 
    "
      <table>
        <tr>
          <th>Name</th>
          <th>District</th>
          <th>Population</th>
        </tr>
    ";
    while ($r = $stmt->fetch(PDO::FETCH_ASSOC)) {
      echo "
        <tr>
          <td>" . $r['name'] . "</td>
          <td>" . $r['district'] . "</td>
          <td>" . $r['population'] . "</td>
        </tr>
        </table>
      ";
    }
  }
?>
