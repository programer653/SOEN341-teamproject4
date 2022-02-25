<?php 
include '../php/dbConn.php'; 
$name = $_POST['name'];
$category = $_POST['category'];
$price = $_POST['price'];
$quantity = $_POST['quantity'];
$filename = $_FILES['image']['name'];
$description = $_POST['description'];
$src = $_FILES['image']['tmp_name'];
$folder = "../images/".$filename;
if($name == "" || $category ==""|| $price==""||$quantity=="" ||$description==""){
    echo "<script>alert('Please fill all the blanks!');</script>";
}else{
    $sql = "insert into product_table (price,quantity,name,category,description,images)
    values ('$price','$quantity','$name','$category','$description','$filename')";
    $result = mysqli_query($db,$sql);
    if($result){
        if (move_uploaded_file($src, $folder))  {
            echo "<script type='text/javascript'>alert('upload successful');</script>";
            header("location:../php/p7.php");
        }else{
            echo "<script type='text/javascript'>alert('go to debug orz');</script>";
        }
    }else{
        echo "<script>alert('No Image selected.');</script>";
    }
}

?>