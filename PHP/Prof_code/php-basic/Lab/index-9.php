
<!DOCTYPE html>
<head>
<title> </title>
<style>
h1{
color:red

}
h2{
color: blue;

}
h3{
color: green;

}
</style>

</head>

<body>

<?php
//Functions
function show_h($h, $str){

return "<h$h>".$str."</h$h>";

}


//Call function

echo show_h("1", "Hello"); //<h1>Hello</h1>
echo show_h("2", "Hello"); //<h2>Hello</h2>
echo show_h("3", "Hello"); //<h3>Hello</h3>

?>


</body>

</html>