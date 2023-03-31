<?php
    session_start();
    $conn=mysqli_connect('localhost','root','');
    mysqli_select_db($conn,'pripra');
    if(!$conn){
        echo 'connection error: ',mysqli_connect_error();
    }
    $name=$_POST['email'];
    $pass=$_POST['password'];
    $s="select * from register where email='$name'";
    $result=mysqli_query($conn,$s);
    $num=mysqli_num_rows($result);
    if($num==1){
        echo "<script>alert('email already exists!');</script>";
        header('location:signupp.html');
    }
    else{
        $reg="insert into register(email,pass) values('$name','$pass') where email=P.email;";
        mysqli_query($conn,$reg);
        echo "<script>alert('registration Successful');</script>";
        header('location:login.html');
    }
?>