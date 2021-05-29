<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="css/profile.css">
  <title>Your Profile</title>
</head>

<body>
  <div class="header flex">
    <?php

    $entry_username = $_GET["username"];
    $entry_password = $_GET["password"];
    $entry_password_hashed = hash("sha256", $_GET["password"]);
    $mysqli = new mysqli("localhost", "root", "Erzaismaili2002", "shrate");

    if ($mysqli->connect_errno) {
      echo "Failed to connect to MySQL: " . $mysqli->connect_error;
      exit();
    }

    $sql = "SELECT * FROM user where user_name='" . $entry_username . "' and user_password='" . $entry_password_hashed . "';";
    $result = $mysqli->query($sql);

    // Associative array
    if ($result->num_rows > 0) {
      // output data of each row
      while ($row = $result->fetch_assoc()) {
        echo "<h1>Welcome ".$row["user_name"]."!</h2>";
      }
    } else {
      echo "0 results";
    }
    // Free result set
    $result->free_result();

    $mysqli->close();
    ?>
  </div>

  <div class="content flex">
    <div class="myItems panel">
      <h2>Your Items</h2>
      <h1 class="amount flex">1</h1>
    </div>
    <div class="myLevel panel">
      <h2>Current Level</h2>
      <h1 class="amount flex">1</h1>
    </div>
    <div class="myShratePoints panel">
      <h2>Your ShratePoints</h2>
      <h1 class="amount flex">100</h1>
    </div>
  </div>
  <div class="content flex">
    <ul class="item-list">
      <li>
        <div class="item flex">
          <h3>Gamecube Limited Edition</h3>
          <h2>500 USDT</h3>

        </div>
      </li>
      <li>
        <div class="item flex">
          <h3>Gamecube Limited Edition</h3>
          <h2>500 USDT</h3>

        </div>
      </li>
      <li>
        <div class="item flex">
          <h3>Gamecube Limited Edition</h3>
          <h2>500 USDT</h3>

        </div>
      </li>

    </ul>
  </div>




</body>

</html>