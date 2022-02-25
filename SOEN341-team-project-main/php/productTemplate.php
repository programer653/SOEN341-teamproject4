<?php include '../php/header.php'; ?>

    <!------ whole product description -->

    <div class="wholeBox">
        <img class="productImage" src="../images/Fruits/apple.jpg" alt="">
        
		<div class="description">
            <div class="information">
                <h2 name="p3applename">Apples</h2>

                <h4 class='priceEachap' name="p3applepriceunit">1.04</h4>
                <h4>$5.49 / kg</h4>
            </div>
            <div>
                <button onclick="showDescription()"> More description </button>
                <p id="description1">This is a very fresh one! Enjoy it!</p>
            </div>

        </div>
		
        <form name="pappleadd" action="../php/p3_fruit_apple_update.php" method="get">
        <div class="item-quantity">
            <form action="">
                <label for="quantity">Quantity: </label>
                <input class="quantityProductap" type="number" name="quantity" id="quantityap" value="1" min="1"
                    onclick="createItemap()" onblur="createItemap()">
            </form>
            <h4>Total Price：</h4>
            <h5 class="totalPriceProductap" id="ppap">$1.04</h5>

            <button class="rightButton" type="submit" value="Submit" >
                Add to Shop Cart
            </button>
        </div>
        </form>
    </div>




    <!--footer-->
    <?php include '../php/footer.php'; ?>
</body>

</html>

