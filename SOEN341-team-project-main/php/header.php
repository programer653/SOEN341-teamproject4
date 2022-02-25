<!DOCTYPE html>
<html lang="en">
<?php session_start();?>
<head>
    <title>WayToHealth</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta charset="UTF-8">
    <!--stylesheet-->
    <link rel="stylesheet" type="text/css" href="../css/sitestyle.css">
    <link rel="stylesheet" type="text/css" href="../css/p5p6.css">
    <link rel="stylesheet" type="text/css" href="../css/p4_cart.css">
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
                    <img src="../images/icon.png" alt="a logo image" width="110px">
                </a>
            </div>
            <!--right navbar-->
            <div class="navbar-right">
                <div class="navbar-right-top">
                    <ul>
                        <!--contact-->
                        
                        <?php 
                        if(isset($_SESSION["Username"])){
                            if($_SESSION["Email"]=="Admin"){
                            echo "";
                            }else{
                                $link="../php/UserPortal.php";
                                echo '<a href="'.$link.'">My Account</a>';
                            }

                        }else{
                            echo "";
                        } 
                       ?>
                       
                       &nbsp;&nbsp;
                        
                        <?php
                        if(isset($_SESSION["Username"])){
                            echo $_SESSION["Username"];
                        }else{
                            $link="../php/p5.php";
                            echo '<a href="'.$link.'">Log in</a>';
                        }
                        
                        ?>   
                        
                        &nbsp;&nbsp;
                        <!--user-->
                       
                        <?php if(isset($_SESSION["Username"])){
                            $link="../php/logout.php";
                            echo '<a href="'.$link.'">Log out</a>';
                        }else{
                            $link="../php/p6.php";
                            echo '<a href="'.$link.'">  Sign up</a>';
                        } 
                       ?>
                        &nbsp;&nbsp;&nbsp;
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
                <li>
                <?php
                if(isset($_SESSION["Email"])){
                    if($_SESSION["Email"] == "Admin"){
                    echo  '  <a href="#">BackEnd</a>
                     <ul class="dropdown">
                            <li><a href="../php/p8.php">Product</a></li>
                            <li><a href="../php/p7.php">Products List</a></li>
                        </ul>';
                    }else{
                       echo "";
                    }
                }else{
                    echo "";
                }
                ?>
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
                <li>
                   <a href="#">BackEnd</a>
                    <ul class="dropdown">
                        <li><a href="../php/p8.php">Product</a></li>
                        <li><a href="../php/p7.php">Products List</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </nav>

    <!--banner-->
    <div class="banner-container">
        <div class="banner">
            <div class="content" style="background-image:url('../images/banner.jpg')">
                <h3><mark class="declaration">We Offer</mark></h3>
                <h3><mark class="declaration">ONE-day delivery</mark></h3>
                <a href="../php/p2_vegetablePage.php" class="btn">SHOP NOW</a>
            </div>
        </div>
    </div>
