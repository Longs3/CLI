
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

//Format #1 

foreach ($a_array as $value) 
{
   //$value = $value * 2;

   //echo "$value <br/> \n";

   echo "<h$value>Hello $value </h$value>";

}


?>
----------Alternative code loop--------------------<br>
//Format #2
<?php foreach ($a_array as $value)  { ?>

      <h<?php echo $value; ?>> 
         Hello H 
      </h<?php echo $value; ?>>
  
<?php } ?>

</body>

</html>
