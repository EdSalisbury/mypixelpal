MyPixelPal
==========
by Ed Salisbury <ed.salisbury@gmail.com>

# About:
MyPixelPal is a web-based tool to create patterns for use in crafts such as
Perler beads, cross-stitch, latchhook, etc. -- anything that uses a pattern of
dots to create.  The software will take an image that you upload, match it to a
palette, and display the pattern, with color counts associated.  After writing
the software and hosting it for many years, I decided to de-prioritize web
development (and in turn stop paying for a webhost), so I took down
MyPixelPal.com as of 2017/01/01, and decided to make the software open source.

# Installation:
MyPixelPal requires PHP and a webserver to run.  The most common way to do this
locally is to install a product like
[XAMPP](https://www.apachefriends.org/index.html).  After you get that up and
running, download and put the contents of this MyPixelPal repo into the document
directory (/Applications/XAMPP/xamppfiles/htdocs on OSX), or if you have git
installed, go to the htdocs directory, and run:

`git clone https://github.com/EdSalisbury/mypixelpal.git`

To use mypixelpal, browse to http://localhost/mypixelpal/public/ and you should
see the main page, where you can upload images, etc.  If you run into
permissions issues after uploading an image, you will need to chmod the images
and palettes directories to be able to write to them.
