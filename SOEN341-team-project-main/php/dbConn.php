<?php

$db = mysqli_connect("localhost", "root", "", "soen341");
 
if(!$db){
    die("ERROR: Fail to connect localhost database!" . mysqli_connect_error());
}

?>