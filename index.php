<?php 

if (empty($_SERVER['HTTPS']) || $_SERVER['HTTPS'] === "off") {
    $location = 'https://' . $_SERVER['HTTP_HOST'] . '/index.html';
    header('HTTP/1.1 301 Moved Permanently');
    header('Location: ' . $location);
    exit;
}
 

?>
