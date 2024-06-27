
var table = document.getElementById('t');
var rows = document.querySelectorAll('tr');

var i;
         var items = [
  [0,0,0,0],
  [0,0,0,0],
  [0,0,0,0],
  [0,0,0,0]
];
function  change(v)
{ 
   var x=document.getElementById(v);
       x.innerHTML="&#128081";
       solvenq(v);
}
function alert()
{

}
function solvenq(c)
{
const rowsArray = Array.from(rows);
const rowIndex = rowsArray.findIndex(row => row.contains(event.target));
const columns = Array.from(rowsArray[rowIndex].querySelectorAll('td'));
const columnIndex = columns.findIndex(column => column == event.target);
console.log(rowIndex, columnIndex);
items[rowIndex][columnIndex]=1;
console.log("first call");
console.log(items);
compare(c,items,rowIndex,columnIndex);
}
function compare(v,boards,rows,cols)
{
 var c=document.getElementById(v);
 var i,j;
 //row comparisions
 console.log("row comparisions");
 for(i=0;i<cols;i++)
 {
   if(boards[rows][i]==1)
   {
     console.log("i value is"+i);
     console.log("j value is"+j);
     //alert("not possible");
     c.innerHTML="";
     c.style.backgroundColor="red";
   }
 }
 //left diagonal
 console.log("left diagonal")
 for(i=0;i<rows;i++)
 {
   for(j=0;j<cols;j++)
   {
     if(boards[i][j]==1)
     {
       console.log(i,j);
       c.style.backgroundColor="red";
       c.innerHTML="";
     }
     //right diagonal
     console.log("right diagonal");
     if((i+j)==(3))
     {
       if(boards[i][j]==1)
       {
         console.log(i+j);
         c.style.backgroundColor="red";
       c.innerHTML="";
       }
     }
   }
 }
 console.log("comparision call");
 console.log(boards);
 //columns comparision
 for(i=0;i<rows;i++)
 {
   if(boards[cols][i]==1)
   {
     //alert("not possible");
     c.innerHTML="";
     c.style.backgroundColor="red";
   }
 }
}


       