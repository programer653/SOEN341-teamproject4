<?php include '../php/header.php'; ?>
<style>
    .button {
        transition-duration: 0.4s;
        border: 1px solid #A9A9A9;
        position:relative;
        padding:4px 8px;
        background:white;
        font-size:0.79vw;
    }

    .button:hover {
        background-color: #A9A9A9;
        position:relative;
        color:white;
        padding:4px 8px;
        font-size:0.79vw;
        text-align: center;
    }    
</style>
    <br>
    <div>
        <h1 style="color:darkgray; position:static; text-align:center">Product Detail</h1>

        <div style="position:static; height:800px; width:90wh;">
            <form action="../php/AddProduct.php" id="Detail" method="post" enctype="multipart/form-data"> 
            <div style="float:left">
                <h2 style="color:darkgray; margin-left:13vw;">Product Description</h2>
                <textarea name="description" rows="40" cols="85" style="resize:none; width:30vw; margin-left:8vw; line-height:1.2em;"></textarea>
            </div>

            <div style="height: 800px">
                <br>
                <h2 style="color:darkgray; margin-left:58vw;">Product Image</h2>
                <input type="file" name="image" style="margin-left:20vw;">
<!--    <img src="../images/garlic_commodity-page.png" style="margin-left:20vw; width:8vw; height:auto"/>   -->
<!--    <button class="button" id="new_img" name="new_img" type="button" style="top:4vh; left:-6vw"><label for="new_img">UPLOAD</label></button> -->
                <br><br><br><br><br>
                <h2 style="color:darkgray; margin-left:58vw;">Product Name</h2>
                <input type="text"  name="name" style="margin-left:20vw;">
                <h2 style="color:darkgray; margin-left:58vw;">Product Category</h2>
                <select  name="category" style="margin-left:20vw;">
                    <option value="">Select...</option>
                    <option value="Vegetables">Vegetables</option>
                    <option value="Fruits">Fruits</option>
                    <option value="Meat">Meat</option>
                    <option value="Beverages">Beverages</option>
                </select>
<!--                <input type="text"  name="category" style="margin-left:20vw;"> -->
                <h2 style="color:darkgray; margin-left:58vw;">Product Price</h2>
                <input type="text"  name="price" style="margin-left:20vw;">
                <h2 style="color:darkgray; margin-left:58vw;">Product Quantity</h2>
                <input type="text"  name="quantity" style="margin-left:20vw;">
            </div>
            <br><br>
            <button class="button" type="submit" form="Detail" style="top:-8.7vh; left:76vw;">Add</button>
            </form>
        </div>
    </div>
    
    <br><br>

    <!--footer-->
    <?php include '../php/footer.php'; ?>
</body>
</html>