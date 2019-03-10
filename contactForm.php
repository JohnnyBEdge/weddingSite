<?php

if(isset($_POST['submit'])){
    $name = $_POST['name'];
    $mailFrom = $_POST['email'];
    $guests = $_POST['guests'];
    $foodOption = $_POST['foodOption'];
    $comments = $_POST['comments'];

    $mailTo = "jrmartin182@gmail.com";
    $headers = "From: ".$mailFrom;
    $txt = " You have received an email from: ".$name;".\n\n".$comments;

    mail($mailTo, $headers);
   header("Location: index.php?mailsend");
}
