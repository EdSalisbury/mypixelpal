<?php
set_time_limit(360);

$imagedir = "../images";

print "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01//EN\" \"http://www.w3.org/TR/html4/strict.dtd\">\n";
print "<html>";
print "<head>";
print "<title>MyPixelPal Images</title>";
print "<link rel='stylesheet' href='style.css'>";
print "</head>";
print "<body>";
print "<div id='header'>";
print "<h1>MyPixelPal v. 1.6</h1>";
print "<h2>&copy;2008-16 Ed Salisbury</h2>";
print "</div>";
print "<table id='main'>";
print "<tr><td class='box'>";
print "<h3>All Images:</h3>";

$files = array();
$dir = opendir($imagedir);
while ($file = readdir($dir))
{
    if (substr($file, 0, 1) != ".")
    {
      $filectime = filectime("$imagedir/$file");
        array_push($files, array('filename' => $file, 'ctime' => $filectime));
    }
}

$num_images=100;

$files = msort($files, 'ctime');

for ($ii = 0 ; $ii < count($files) ; $ii++)
{
    $file = $files[$ii]['filename'];
    print "<a href='index.php?img=$file'><img src='../images/$file' border='0' class='recent_image'></a>";
    if ($ii % 10 == 0)
        print "<br>";
}

print "</td></tr></table>";

print "</body>";
print "</html>";

// Multi-dimensional sort, by alishahnovin@hotmail.com (from php.net)
function msort($array, $id="id")
{
   $temp_array = array();
   while(count($array)>0)
   {
       $lowest_id = 0;
       $index=0;
       foreach ($array as $item)
       {
           if ($item[$id] < $array[$lowest_id][$id])
               $lowest_id = $index;
           $index++;
       }
       $temp_array[] = $array[$lowest_id];
       $array = array_merge(array_slice($array, 0, $lowest_id), array_slice($array, $lowest_id+1));
   }
   return $temp_array;
}

?>
