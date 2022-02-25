<?php
    function get_products_by_category($category_name = ''){
        $query = query("SELECT * FROM products where category_name ='$category_name'");
        echo "<table>";
        while($row = fetch_array($query)) {
            echo "<tr><td>".$row['product_name']."</td></tr>";
        }
        echo "</table>";
    }
    get_products_by_category(add_slashes($_GET['category']));
?>