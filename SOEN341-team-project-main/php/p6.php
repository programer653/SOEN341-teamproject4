<?php include '../php/header.php'; ?>

    <!--sign up page-->
    <div id="login-box">
        <form action="../php/signup.php" method="post">
         <h1>Sign up</h1>
          <div class="form">
            <div class="item">
                <input type="text" placeholder="First name" name="FirstName"/>
                <input type="text" placeholder="Last name" name="LastName"/>
                <input type="text" placeholder="User name" name="Username"/>
                <input type="text" placeholder="Address" name="Address"/>
                <input type="text" placeholder="Phone number" name="PhoneNumber"/>
            </div>
            <div class="item">
              <input type="text" placeholder="email" name="Email"/>
            </div>
            <div class="item">
              <input type="password" placeholder="Password" name="Password"/>
            </div>
          </div>
          <button type="submit">Submit</button>
          <button type="reset">Reset</button>
        </form>
      </div>


    <!--footer-->
    <?php include '../php/footer.php'; ?>
</body>
</html>