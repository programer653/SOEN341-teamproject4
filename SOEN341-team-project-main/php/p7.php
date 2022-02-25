<?php 
include '../php/header.php'; 
include '../php/dbConn.php'; 
?>
<table border="2" style="border-color:teal;margin-left:3.5%;" >
  <tr span class="tabletd">
    <td>id</td>
    <td>Image</td>
    <td>Name</td>
    <td>Price</td>
    <td>Quantity</td>
    <td>Category</td>
	<td>Description</td>
  </tr>

<?php


$records = mysqli_query($db,"select * from soen341.product_table");

while($data = mysqli_fetch_array($records))
{
  $imageN=$data["images"];
?>
  <tr>
    <td span class="p9c1"><?php echo $data['product_id']; ?></td>
    <td span class="p9c2"><?php echo "<img src='../images/$imageN' width='50px'>"; ?></td>
    <td span class="p9c3"><?php echo $data['name']; ?></td> 
    <td span class="p9c4"><?php echo $data['price']; ?></td>
    <td span class="p9c5"><?php echo $data['quantity']; ?></td>	
    <td span class="p9c4"><?php echo $data['category']; ?></td>
    <td span class="p9c5"><?php echo $data['description']; ?></td>	
  </tr>	
  
<?php
}
?>
</table>

    <br><br><br><br>

    <!--footer-->
    <?php include '../php/footer.php'; ?>
</body>

</html>