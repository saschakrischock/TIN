<?php
if(!empty($_POST['password'])) {
    if(md5('blah@#$'.sha1('3NhNj8&'.$_POST['password']) ) =='MD5 value of your password' ) {
    header("Location: http://www.nextpage.com"); /* Redirect here if the password is correct */
    }
    else {
        header("Location: http://www.pagewheretheformis.com"); /* Return here if the password ain't correct */
    }
}
else {
    header("Location: http://www.pagewheretheformis.com"); /* Return here if the field is empty */
}
?>
