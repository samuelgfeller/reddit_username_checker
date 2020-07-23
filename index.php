<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
      integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
<link rel="stylesheet" href="style.css">
<script src="main.js"></script>

<div class="container">
    <h1>Reddit username checker</h1>
    <label for="userInput">
        Username
    </label><input type="text" name="user" id="userInput">
    <button id="checkBtn">Check</button>
    <br><br>
    <button id="checkAllBtn">Check all</button>
    <div id="output"></div>
</div>

<?php
/*POST /some-path HTTP/1.1
Content-Type: application/x-www-form-urlencoded

foo=bar&name=John

=&=dsf

*/