<?php
session_start();
  $conn = mysqli_connect('localhost','root','');
  mysqli_select_db($conn,'pripra');
  if(!$conn){
      echo 'connection error:',mysqli_connect_error();
  }
  // if(isset($_POST['submit']))
  // {
  $fname=$_POST['fname'];
  $oemail=$_POST['email'];
  $phone=$_POST['phoneno'];
  $dedate=$_POST['ddate'];
  $oadd=$_POST['add'];
  $pin=$_POST['pinno'];

  //$o="select * from `order`";
  //$result=mysqli_query($conn,$o);
  $ord="insert into `order`(name,oemail,ocon,deldate,oadd,pincode) values('$fname','$oemail','$phone','$dedate','$oadd','$pin')";
  $result=mysqli_query($conn,$ord);
  echo "<script>alert('order placed');location.href='payment.html';</script>";
  //  $num=mysqli_num_rows($result);
  /*if($num==1)
  {
      
      echo "<script>alert('Order recorded')</script>";
      header('location:pay.html');
  }
  else{
 
  echo "<script>alert('Order recorded')</script>"; 
  header('location:pay.html');  
  }*/
// }
  ?>