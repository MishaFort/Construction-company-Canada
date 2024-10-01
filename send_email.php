<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars(trim($_POST['user-name-contact']));
    $email = htmlspecialchars(trim($_POST['user-email-contact']));
    $phone = htmlspecialchars(trim($_POST['user-tel-contact'])); 

    // Check if at least one communication method is selected
    $emailContact = isset($_POST['email-contact']) && $_POST['email-contact'] === 'on';
    $telephoneContact = isset($_POST['telephone-contact']) && $_POST['telephone-contact'] === 'on';
    $termsAccepted = isset($_POST['terms-conditions-contact']) && $_POST['terms-conditions-contact'] === 'on';

    // Validate email format
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Wrong email format";
        exit;
    }

    // Validate that at least one checkbox is checked
    if (!$emailContact && !$telephoneContact) {
        echo "You should select at least one communication method.";
        exit;
    }

    // Validate terms acceptance
    if (!$termsAccepted) {
        echo "You must accept the terms and conditions.";
        exit;
    }

    // Recipient of the email
    $to = "John.burn@phoenix-res.com";
    
    // Subject of the email
    $subject = "New message from $name";

    // Prepare the email body
    $body = "Name: $name\nEmail: $email\nPhone: $phone\n"; // Included phone
    $body .= "Preferred contact methods:\n";
    if ($emailContact) {
        $body .= "- Email\n";
    }
    if ($telephoneContact) {
        $body .= "- Telephone\n";
    }

    // Headers
    $headers = "From: $email";

    // Send the email
    if (mail($to, $subject, $body, $headers)) {
        echo "Your message has been sent successfully.";
    } else {
        echo "Failed to send message.";
    }
} else {
    echo "Wrong request";
}
?>
