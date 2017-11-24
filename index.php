<?php
    // Simple password protection
    if (!isset($_COOKIE['password']) || $_COOKIE['password'] !== 'MYPASS') {
        header('Location: login.php');
        exit;
    }
?>
