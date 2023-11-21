<?php
$host = 'localhost';
$username = 'lab5_user';
$password = 'password123';
$dbname = 'world';

$conn = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
$stmt = $conn->query("SELECT * FROM countries");

if (isset($_GET['country']) && !empty($_GET['country'])) {
    $country = $_GET['country'];
    $stmt = $conn->prepare("SELECT * FROM countries WHERE name LIKE :country");
    $stmt->execute(['country' => "%$country%"]);
}
$results = $stmt->fetchAll(PDO::FETCH_ASSOC);

if (isset($_GET['lookup']) && $_GET['lookup'] === 'cities') {
    if (isset($_GET['country']) && !empty($_GET['country'])) {
        $country = $_GET['country'];
        $stmt=$conn->query("SELECT countries.name, cities.district, countries.population FROM countries INNER JOIN cities ON cities.name=countries.name; ");
        $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
    ?>
    <table class="center">
        <thead>
            <tr>
                <th>Country Name</th>
                <th>District</th>
                <th>Population</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach ($results as $row): ?>
                <tr>
                    <td><?= $row['name']; ?></td>
                    <td><?= $row['district']; ?></td>
                    <td><?= $row['population']; ?></td>
                </tr>
            <?php endforeach; ?>
        </tbody>
    </table>
    <?php
    }
} else {
?>
    <table class="center">
        <thead>
            <tr>
                <th>Country Name</th>
                <th>Continent</th>
                <th>Independence Year</th>
                <th>Head of State</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach ($results as $row): ?>
                <tr>
                    <td><?= $row['name']; ?></td>
                    <td><?= $row['continent']; ?></td>
                    <td><?= $row['independence_year']; ?></td>
                    <td><?= $row['head_of_state']; ?></td>
                </tr>
            <?php endforeach; ?>
        </tbody>
    </table>
<?php
}
?>
