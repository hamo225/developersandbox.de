<?php
// Check for empty fields - Validate the data
if(empty($_POST['name'])      ||
   empty($_POST['email'])     ||
//    empty($_POST['subject'])     ||
   empty($_POST['message'])   ||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
      header('location:errorpage.html');  
      return false;
   }
   
$name = $_POST['name'];
$email_address = $_POST['email'];
$message = $_POST['message'];
   
// Create the email and send the message
$to = 'directsolutions33@gmail.com'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "Subject: Portfolio Contact" ;
$email_body = "You have received a new message from your website contact form.\n\n"."Here are the details:\n\nName: $name\n\nEmail: $email_address
\n\nMessage:\n$message";
$headers = "From: noreply@yourdomain.com\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Reply-To: $email_address";   

if(mail($to,$email_subject,$email_body,$headers)){
   header('location:thanks.html');  
   exit;
} else{
   header('location:errorpage.html');  

}        
?>