<?PHP
require_once "formvalidator.php";
$show_form=true;
if(isset($_POST['Submit']))
{
    $validator = new FormValidator();
    $validator->addValidation("Name","req","Please fill in Name");
    $validator->addValidation("Email","email",
"The input for Email should be a valid email value");
    $validator->addValidation("Email","req","Please fill in Email");
    if($validator->ValidateForm())
    {
        echo "<h2>Validation Success!</h2>";
        $show_form=false;
    }
    else
    {
        echo "<B>Validation Errors:</B>";

        $error_hash = $validator->GetErrors();
        foreach($error_hash as $inpname => $inp_err)
        {
          echo "<p>$inpname : $inp_err</p>\n";
        }
    }
}

if(true == $show_form)
{
?>

<form name='test' method='POST' action='' accept-charset='UTF-8'>
Name: <input type='text' name='Name' size='20'>
Email: <input type='text' name='Email' size='20'>
<input type='submit' name='Submit' value='Submit'>
</form>



<?PHP
}//true == $show_form
?>



  $name = $_POST['name'];
  $visitor_email = $_POST['email'];
  $message = $_POST['message'];
?>

<?php
	$email_from = 'yourname@yourwebsite.com';

	$email_subject = "New Form submission";

	$email_body = "You have received a new message from the user $name.\n".
                            "Here is the message:\n $message".
?>

mail(to,subject,message,headers)

<?php

  $to = "yourname@yourwebsite.com";

  $headers = "From: $email_from \r\n";

  $headers .= "Reply-To: $visitor_email \r\n";

  mail($to,$email_subject,$email_body,$headers);

 ?>

<?php
function IsInjected($str)
{
    $injections = array('(\n+)',
           '(\r+)',
           '(\t+)',
           '(%0A+)',
           '(%0D+)',
           '(%08+)',
           '(%09+)'
           );
               
    $inject = join('|', $injections);
    $inject = "/$inject/i";
    
    if(preg_match($inject,$str))
    {
      return true;
    }
    else
    {
      return false;
    }
}

if(IsInjected($visitor_email))
{
    echo "Bad email value!";
    exit;
}
?>