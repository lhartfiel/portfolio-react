<?php


  // Import PHPMailer classes into the global namespace
  // These must be at the top of your script, not inside a function
  use PHPMailer\PHPMailer\PHPMailer;
  use PHPMailer\PHPMailer\Exception;

  //Load Composer's autoloader
  require 'vendor/autoload.php';

  $mail = new PHPMailer(true);                              // Passing `true` enables exceptions
  try {
      //Server settings
      $mail->SMTPDebug = 2;                                 // Enable verbose debug output
      $mail->isSMTP();                                      // Set mailer to use SMTP
      $mail->Host = 'http://lindsayhartfiel.com';  // Specify main and backup SMTP servers
      $mail->SMTPAuth = true;                               // Enable SMTP authentication
      // $mail->Username = 'lkhartfiel@uwalumni.com';                 // SMTP username
      // $mail->Password = 'secret';                           // SMTP password
      // $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
      $mail->Port = 587;                                    // TCP port to connect to

      //Recipients
      $mail->setFrom('lindsay@lindsayhartfiel.com', 'Mailer');
      // $mail->addAddress('joe@example.net', 'Joe User');     // Add a recipient
      // $mail->addAddress('ellen@example.com');               // Name is optional
      $mail->addReplyTo('info@example.com', 'Information');
      // $mail->addCC('cc@example.com');
      // $mail->addBCC('bcc@example.com');

      //Attachments
      // $mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
      // $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name

      //Content
      $mail->isHTML(true);                                  // Set email format to HTML
      $mail->Subject = 'Here is the subject';
      $mail->Body    = 'This is the HTML message body <b>in bold!</b>';
      $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

      $mail->send();
      echo 'Message has been sent';
  } catch (Exception $e) {
      echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;
  }










  // // trim() function strips any white space from beginning and end of the string
  // $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
  // //  strip_tags() function strips all HTML and PHP tags from a variable.
  // $message = strip_tags($_POST["message"]);

  // // Check that data was sent to the mailer.
  // if ( empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
  //   // Set a 400 (bad request) response code and exit.
  //   http_response_code(400);
  //   echo "Oops! There was a problem with your submission. Please complete the form and try again.";
  //   exit;
  // }

  // // Set the recipient email address.
  // $recipient = "lhaqua84@yahoo.com";
  // // Set the email subject.
  // $subject = "Website Form Submission";

  // // Build the email content.
  // $body .= "Email: $email\n\n";
  // $body .= "Message: \n$message\n";

  // // success
  // $success = mail($recipient, $subject, $body, "From:" . $email);

  // // Send the email.
  // if ($success) {
  //   // Set a 200 (okay) response code.
  //   http_response_code(200);
  //   echo "Thank You! Your message has been sent.";
  // } else {
  //   // Set a 500 (internal server error) response code.
  //   http_response_code(500);
  //   echo "Oops! Something went wrong and we couldn’t send your message.";
  // }

?>
