<?php
  // Get the order details from the form
  $name = $_POST["name"];
  $email = $_POST["email"];
  $phone = $_POST["phone"];
  $package = $_POST["package"];

  // Create a string to write to the orders.txt file
  $order_details = "Name: $name\n";
  $order_details.= "Email: $email\n";
  $order_details.= "Phone: $phone\n";
  $order_details.= "Package: $package\n";

  // Open the orders.txt file in write mode
  $file = fopen("orders.txt", "a");

  // Write the order details to the file
  fwrite($file, $order_details);

  // Close the file
  fclose($file);

  // Return a success message
  echo 'Order placed successfully!';
?>