<?php
    session_start();
    $conn=mysqli_connect('localhost','root','');
    mysqli_select_db($conn,'pripra');
    if(!$conn){
        echo 'connection error: ',mysqli_connect_error();
    }
    $name=$_POST['email'];
    $pass=$_POST['password'];
    $s="select * from register where email='$name' && pass='$pass'";
    $result=mysqli_query($conn,$s);
    $num=mysqli_num_rows($result);
    if($num==1){
       
        header('location:menu1.html');
        echo "<script>alert('Login Successful');</script>";
    }
    else{
        echo "<script>alert('Account not found');</script>";
        header('location:signup.php');
       
    }
?>