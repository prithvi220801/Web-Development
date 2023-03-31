<?php
     
  session_start();
  $conn = mysqli_connect('localhost','root','','pripra');
  if(!$conn){
      echo 'connection error:',mysqli_connect_error();
  }
  
  $cno=$_POST['card-num'];
  $email=$_POST['email'];

  $s="select * from payment";
  $result=mysqli_query($conn,$s);
  $num=mysqli_num_rows($result);
  if($cno=='' || $email=='')
  {
      echo "<script>alert('Please Fill the required fields');</script>";
  }
  else{
  if($num==1)
  {
     echo "You are already a customer.Thank you for ordering again";
    $pay= "insert into payment(cno,email)values('$cno','$email')";
     mysqli_query($conn,$pay);
     echo "Payment Successful";
  }
  else
  {
  $pay= "insert into payment(cno,email)values('$cno','$email')";
  mysqli_query($conn,$pay);
  echo "Payment Successful";
  header('location:paysuc.html');
  }
  }
  ?>