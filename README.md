# jonwells10.github.io

### Bootstrap Notes

Look of everysite defined by HTML/CSS: setup a grid
Desgin your pages with a grid in mind

websites design in coloumn format

### Tools for Sketch / Grid Creation 
WireFrame: 
    *balsmiq: https://balsamiq.com/
    framebox: http://framebox.org/
    pen and paper: use your notebook

Grids for  Photoshop / Illustrator:
960 GS: http://960.gs/
GuideGuide: https://guideguide.me/

Desigining with Grids Guides:
960 Grid System Made Easy: http://bit.ly/1sjYaFC
desgin by grid: http://designbygrid.com/
designing with grid-based approach: http://bit.ly/1CM4Hzo

### 12 Magic number for Grids

Do not go over 12 coloumns/rows

### Container
Encompases a whole element 

## Rows and Columns
ORDER in HTML
*container
*row
*coloumn 
<div class="container">
            <div class="row">
                    <div class="col-md-2">
                        <div class="row"> for sub row/coloumn
                            <div class="col-md-2">


col-md-*   col-(size)-(number of columns)

space inbetween columns/rows is margins

12 is defined at whatever point the developer decides 


### Media queries 
define how css styles are applied in relation to the characteristics of the device viewpoint

Through media queries you can change the way a web page is displayed

media queries must be declared last

*Mobile First - mobile is most common way of access 
 *pixel based break points to differeniate between destop/mobile pages*

Media Query 
 @media screen and (max-width: 768px) {

        background-color: #333;

 }

### Firebase Review

database = database.firebase ()

.set ({}) saves the data

.ref() specifies where the data will be saved

.on ("value", function (){}) which creats an "on-change" event so that the moment the page first loads or the moment the database changes, the impact is reflected immediately 
