<!DOCTYPE html>
<html lang="en">

<head>
    <title>WayToHealth</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta charset="UTF-8">
    <!--stylesheet-->
    <link rel="stylesheet" type="text/css" href="../css/accessing_details.css">
    <link rel="stylesheet" type="text/css" href="../css/accessing_details.css">
    <link rel="stylesheet" type="text/css" href="../css/accessing_details.css">
    <!--icons-->
    <link rel="shortcut icon" href="../css/sitestyle.css">
</head>

<body>
        <!--header-->
    <nav class="navbar">
        <div class="navbar-container">
            <!--left navbar-->
            <div class="navbar-left">
                <!--logo-->
                <a href="../php/Homepage.php" class="logo">
                    <img src="../images/icon.png" alt="a logo image" width="50px">
                </a>
            </div>
            <!--right navbar-->
            <div class="navbar-right">
                <div class="navbar-right-top">
                    <ul>
                        <!--contact-->
                        <li><a href="../php/p5.php">Log in</a></li>
                        <!--user-->
                        <li><a href="../php/p6.php">Sign up</a></li>
                        <!--shopping cart-->
                        <li class="cart-icon">
                            <a href="../php/p4_shopCart.php"><img src="../images/cart.png" alt="icon of cart" width="30px"></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>

    <!--menu-->
    <nav class="menu">
        <div class="menu-bar hide">
            <ul>
                <li><a href="../php/Homepage.php">Home</a></li>
                <li><a href="#">Aisle</a>
                    <ul class="dropdown">
                        <li><a href="../php/p2_vegetablePage.php">Vegetables</a></li>
                        <li><a href="../php/p2_fruitsPage.php">Fruits</a></li>
                        <li><a href="../php/p2_meatPage.php">Meat</a></li>
                        <li><a href="../php/p2_milkAndBeverage.php">Beverages</a></li>
                    </ul>
                </li>
                <li><a href="../php/p4_shopCart.php">Cart</a></li>
                <li><a href="#">BackEnd</a>
                    <ul class="dropdown">
                        <li><a href="../php/p8.php">Product</a></li>
                        <li><a href="../php/p7.php">Products List</a></li>
                    </ul>
                </li>
            </ul>
        </div>
        <div class="menu-bar show">
            <ul>
                <li><a href="#">Aisle</a>
                    <ul class="dropdown">
                        <li><a href="../php/p2_vegetablePage.php">Vegetables</a></li>
                        <li><a href="../php/p2_fruitsPage.php">Fruits</a></li>
                        <li><a href="../php/p2_meatPage.php">Meat</a></li>
                        <li><a href="../php/p2_milkAndBeverage.php">Beverages</a></li>
                    </ul>
                </li>
                <li><a href="#">BackEnd</a>
                    <ul class="dropdown">
                        <li><a href="../php/p8.php">Product</a></li>
                        <li><a href="../php/p7.php">Products List</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </nav>

    <!--banner-->
    <!-- <div class="banner-container">
        <div class="banner">
            <div class="content" style="background-image:url('../images/banner.jpg')">
                <h3><mark class="declaration">We Offer</mark></h3>
                <h3><mark class="declaration">ONE-day delivery</mark></h3>
                <a href="../php/p2_vegetablePage.php" class="btn">SHOP NOW</a>
            </div>
        </div>
    </div> -->

  

    <!------ whole product description -->

    <div class="wholeBox">
        <img class="productImage" src="../images/Meat/LeanGroundBeef.jpg" alt="">
        
		<div class="description">
            <div class="information">
                <h2 name="p3applename">Lean Ground Beef</h2>

                <h4 class='priceEachap' name="p3applepriceunit">3.00</h4>
                <h4>$13 / kg</h4>
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



