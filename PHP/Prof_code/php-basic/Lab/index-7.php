
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

// Define array
$a_array = array(1, 2, 3, 4); //int


foreach ($a_array as $value) 
{
   //$value = $value * 2;

   //echo "$value <br/> \n";

   echo "<h$value>Hello $value </h$value>";

}

?>


  
</body>

</html>
