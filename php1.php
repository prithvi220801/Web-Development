<?php
    $conn=mysqli_connect('localhost','root','');
    mysqli_select_db($conn,'pripra');
    if(!$conn){
        echo 'connection error: ',mysqli_connect_error();
    }
?>