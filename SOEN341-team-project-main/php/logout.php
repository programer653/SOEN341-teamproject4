<?php
session_start();
session_destroy();
header("location:../php/Homepage.php");
?>