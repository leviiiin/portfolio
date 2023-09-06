<?php
$to = "levinigor.web@gmail.com";
$subject = "Theme";
$message = "Message!";
$headers = "Content-type: text/plain; charset=utf-8 \r\n";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST["username"])) {
        $name = trim(strip_tags($_POST["username"]));
    }
    if (isset($_POST["useremail"])) {
        $email = trim(strip_tags($_POST["useremail"]));
    }
    if (isset($_POST["text"])) {
        $text = trim(strip_tags($text));
    }
    $message = "<html>";
    $message .= "<body>";
    $message .= "Email: " . $email;
    $message .= "<br />";
    $message .= "Name: " . $name;
    $message .= "<br />";
    $message .= "Message: " . $text;
    $message .= "</body>";
    $message .= "</html>";
    mail($to, $subject, $message, $headers);
} else {
    exit;
}
?>