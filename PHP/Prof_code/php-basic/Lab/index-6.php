
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


for ($i=1; $i<=5; $i++)
{

    //<h1> .... </h1>
    //<h2>..... </h2>
    echo "<h".$i."> Hello World h$i !</h".$i.">";
    echo "<br>";

}



?>

  
</body>

</html>
