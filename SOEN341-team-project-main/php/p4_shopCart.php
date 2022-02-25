<?php include '../php/header.php'; ?>
    <script>
        function passinfo(name){
        	sessionStorage.clear();
            sessionStorage.p_name = name;
        }
    </script>

    <div class="cart-container">
            <h2 class="section-header">SHOPPING CART</h2>
            <div class="cart-row">
                <span class="cart-item cart-header cart-column">ITEM</span>
                <span class="cart-price cart-header cart-column">PRICE</span>
                <span class="cart-quantity cart-header cart-column">QUANTITY</span>
            </div>
            <div class="cart-items">
                <?php

                include "../php/dbConn.php";
                $records = mysqli_query($db,"select * from soen287.product");
                $quantity = 0;
                $total = 0;
                while($data = mysqli_fetch_array($records)){
                ?>
                <div class="cart-row">
                    <div class="cart-item cart-column">
                        <img class="cart-item-image" src=<?php echo $data['psrc']; ?> width="100" height="100">
                        <span name="abb" class="cart-item-title"><?php echo $data['pname']; ?></span>
                    </div>
                    <span class="cart-price cart-column">$<?php echo $data['pprice']; ?></span>
                    <div class="cart-quantity cart-column">
                        <button>
                            <a href="../php/p4_shopCart_update.php?pname=<?php echo $data['pname']; ?>&num=1; ?>">+</a>
                        </button>
                            <div class="product-quantity"><?php echo $data['pquantity']; ?></div>
                        <?php
                        if ($data['pquantity']>0){
                        ?>
                            <button>
                                <a class="change-quantity" href="../php/p4_shopCart_update.php?pname=<?php echo $data['pname']; ?>&num=-1; ?>"><bold>-</bold></a>
                            </button>
                        <?php
                        }else{
                        ?>
                            <button class="fake-button">
                                <a href="#"><bold>-</bold><a/>
                            </button>
                        <?php
                        }
                        ?>
                        <?php $quantity+=$data['pquantity']; ?>
                        <button class="btn btn-remove" type="button"><a class="x-remove" href="../php/p4_shopCart_delete.php?pname=<?php echo $data['pname']; ?>">X</a></button>

                    </div>
                    <?php $total+=($data['pquantity']*$data['pprice']); ?>
                </div>
                <?php
                }
                ?>

            </div>
            <div class="cart-summary">
                <table>
                    <tr>
                        <td>Total Quantity</td>
                        <td>$<?php echo $quantity; ?></td>
                    </tr>
                    <tr>
                        <td>Subtotal</td>
                        <td>$<?php echo round($total, 2); ?></td>
                    </tr>
                    <tr>
                        <td>Estimated GST</td>
                        <td>$<?php echo round($total*0.05, 2); ?></td>
                    </tr>
                    <tr>
                        <td>Estimated QST</td>
                        <td>$<?php echo round($total*0.1, 2); ?></td>
                    </tr>
                    <tr>
                        <td><strong>Estimated Total</strong></td>
                        <td><strong>$<?php echo round($total*1.15, 2); ?></strong></td>
                    </tr>
                </table>
            </div>
        <button class="btn btn-primary btn-purchase" type="button" ><a href="../php/p4_shopCart_checkout.php">CHECK OUT</a></button>
        </div>


    <!--footer-->
    <?php include '../php/footer.php'; ?>
</body>

</html>