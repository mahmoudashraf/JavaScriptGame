var iMax = 11;
var jMax = 20;
var HamesterI
var HamesterJ
var handel=0;
var motionFlag=0;
var  tempi=HamesterI;
var  tempj=HamesterJ;
var swapedObjects = new Array();										
var swapedObjectsCounter=0;										
var f = new Array();
var hamesterBlock ;
document.onkeydown = start;
window.onload =init;
var Score = 0;
var hamesterBlock ;
var startopendoor ;
var maxScore =330;
var diamondStep =10; 
var hamesterMoveStep1=20;	 
var hamesterMoveStep2=20;	 
var BlockDim =60;
var left_right_move ;
var explosion ;
var startsound ;
var rookssound ;


function init(){
	 hamesterBlock=document.getElementById("hamester");
	  left_right_move = document.getElementById('leftmove');
	  explosion = document.getElementById('explosion');
	  startsound =document.getElementById('start');
      rookssound =document.getElementById('rookssound');
ResetMatrixBoundres(f);
levelarray();
startgame();
var startopendoor = setTimeout('startdoor()',1000);

	 
}

function start(event)
{
if(Score >= maxScore)
		{
opencloseddoor() ;			
		}
	var  key = event.keyCode;
if(key==37)
{
	hamesterBlock.src="img/hamesterleft.gif";
	leftmove(f);
}
else if(key==38)
{
	//hamesterBlock.src="img/hamesterup.png";
	upmove(f);
}
if(key==39)
{	

if(Score >= maxScore && HamesterJ==jMax-2 && HamesterI==iMax-2)
		{
opencloseddoor() ;	
rightmove(f);	
hamesterBlock.style.left = parseInt(hamesterBlock.style.left) + hamesterMoveStep1 + 'px';
hamesterBlock.style.left = parseInt(hamesterBlock.style.left) + hamesterMoveStep1 + 'px';
hamesterBlock.style.left = parseInt(hamesterBlock.style.left) + hamesterMoveStep2 + 'px';
var ttt4 = setTimeout(nextLevel,1000);
return ;	
		}
		hamesterBlock.src="img/image3.gif";
	rightmove(f);
	
}
else if(key==40)
{
	/*if(Score==maxScore && HamesterJ==jMax-2 && HamesterI==iMax-2)
		{
opencloseddoor() ;			
		}*/
		//hamesterBlock.src="img/hamesterup.png";
	downmove();
}
else if(key==32)
{

location.reload();	
//clearInterval(t2);	
//handel=0;
}

else if(key==27)
{
alert("space to reload for new game");
//window.location="index.html";	
//clearInterval(t2);	
//handel=0;
}


}


/*عناصربترجع مصفوفة من ال
 الموجودة داخل تاج
 game
*/
function getAllDivsInGame(GameDiv)
	{
	}
function getElementByIJ(i,j)
{
	//call get elemnt by id and returm it 
}

function rightmove(){

	if(HamesterJ<jMax-2){
		
	if(f[HamesterI][HamesterJ+1] !=5 ){
			motionFlag=3;
	if(f[HamesterI][HamesterJ+1] ==9 )
	{
		Score=Score+diamondStep;
		//alert(left_right_move.src);
		left_right_move.play();
		
		if(Score==maxScore /*&& HamesterJ==jMax-2 && HamesterJ==jMax-2 */)
		{
		//alert("Scorey="+Score);
		opencloseddoor() ;	
		}
	}
	f[HamesterI][HamesterJ+1]=f[HamesterI][HamesterJ];
	f[HamesterI][HamesterJ]=0;
	
	if(f[HamesterI-1][HamesterJ] ==5 ||f[HamesterI-1][HamesterJ] ==9 ){
			
											
										var stonenum=upstones();
										tempi=HamesterI;
										tempj=HamesterJ;
										
										addNewStonesFalling();
																				
												  }
												  
	
HamesterJ++;	
	var nextBlock = document.getElementById(HamesterI+""+HamesterJ);
	printMatrix(f);									
	rightMotion(hamesterBlock,nextBlock);	
	}
	}
	return false ;
}


	 function invisible_pic(hamesterBlock,nextBlock){
		 
		 
		 
		 // y3ni lma el penguin td5ol gwa el block el block hy5tfy
		 if( (parseInt(nextBlock.style.top) < parseInt(hamesterBlock.style.top) +(BlockDim/2))
		  && (parseInt(nextBlock.style.top) + (BlockDim/2) > parseInt(hamesterBlock.style.top))
		   && (parseInt(nextBlock.style.left) < parseInt(hamesterBlock.style.left) +(BlockDim/2)) 
		   && (parseInt(nextBlock.style.left) +(BlockDim/2) > parseInt(hamesterBlock.style.left)))
		   {
		nextBlock.style.display = "none";
		
		 }
		 
		 //alert("ttt3t");
		 //y3ni lma el penguin ytl3 ll diamond el diamond hy5tfy w el score yzeed 
/*
		  if( (parseInt(diamond.style.top) < parseInt(move.style.top) +50) && (parseInt(diamond.style.top) + 50 > parseInt(move.style.top)) && (parseInt(diamond.style.left) < parseInt(move.style.left) +50) && (parseInt(diamond.style.left) +50 > parseInt(move.style.left))){
			document.getElementById("diamond").style.display = "none";
			//score++;
		 }
*/
	//	 alert("rgreg");
		 }
		 
function rightMotion(hamesterBlock,nextBlock)
{
hamesterBlock.style.left = parseInt(hamesterBlock.style.left) + hamesterMoveStep1 + 'px';
hamesterBlock.style.left = parseInt(hamesterBlock.style.left) + hamesterMoveStep1 + 'px';
hamesterBlock.style.left = parseInt(hamesterBlock.style.left) + hamesterMoveStep2 + 'px';


invisible_pic(hamesterBlock,nextBlock);
//fallBlocks();
}
function leftMotion(hamesterBlock,nextBlock)
{	
hamesterBlock.style.left = parseInt(hamesterBlock.style.left) - hamesterMoveStep1 + 'px';
hamesterBlock.style.left = parseInt(hamesterBlock.style.left) - hamesterMoveStep1 + 'px';
hamesterBlock.style.left = parseInt(hamesterBlock.style.left) - hamesterMoveStep2 + 'px';

invisible_pic(hamesterBlock,nextBlock);
//fallBlocks();
}
function upMotion(hamesterBlock,nextBlock) //up
		   {  
		   
				hamesterBlock.style.top=parseInt(hamesterBlock.style.top) - hamesterMoveStep1 + 'px';
				hamesterBlock.style.top=parseInt(hamesterBlock.style.top) - hamesterMoveStep1 + 'px';
				hamesterBlock.style.top=parseInt(hamesterBlock.style.top) - hamesterMoveStep2 + 'px';
	invisible_pic(hamesterBlock,nextBlock);
	//fallBlocks();
		   }
		   
		   
		   
		   function DownMotion(hamesterBlock,nextBlock) //up
		   {  
		  
		   		hamesterBlock.style.top=parseInt(hamesterBlock.style.top) + hamesterMoveStep1 + 'px';
				hamesterBlock.style.top=parseInt(hamesterBlock.style.top) + hamesterMoveStep1 + 'px';
				hamesterBlock.style.top=parseInt(hamesterBlock.style.top) + hamesterMoveStep2 + 'px';
	invisible_pic(hamesterBlock,nextBlock);
	//fallBlocks();
		   }
		   
		   
		   function DownStoneMotion(stoneBlock) //up
		   {  
				stoneBlock.style.top=parseInt(stoneBlock.style.top) + hamesterMoveStep1 + 'px';
				
				stoneBlock.style.top=parseInt(stoneBlock.style.top) + hamesterMoveStep1 + 'px';
				
				stoneBlock.style.top=parseInt(stoneBlock.style.top) + hamesterMoveStep2 + 'px';
				
//	invisible_pic(hamesterBlock,nextBlock);
	//fallBlocks();
		   }
		   
		   
		   
function leftmove(){//5


		if(HamesterJ>1){
		
	if(f[HamesterI][HamesterJ-1] !=5 ){
				motionFlag=1;
	
	if(f[HamesterI][HamesterJ-1] ==9 )
	{
		left_right_move.play();
		Score=Score+diamondStep;
		if(Score==maxScore)
		{
		//alert("Scorey="+Score);
		opencloseddoor();	
		}
	}
	f[HamesterI][HamesterJ-1]=f[HamesterI][HamesterJ];
	f[HamesterI][HamesterJ]=0;
	if(f[HamesterI-1][HamesterJ] ==5 || f[HamesterI-1][HamesterJ] ==9){
			
											
										var stonenum=upstones();
										tempi=HamesterI;
										tempj=HamesterJ;
										addNewStonesFalling();										
												  }
												  							  
	HamesterJ--;
	printMatrix(f);

var nextBlock = document.getElementById(HamesterI+""+HamesterJ);

		 								
	leftMotion(hamesterBlock,nextBlock);
	
	


	}
	}
	return false ;

}




function upmove(){
		if(HamesterI>1){


if(f[HamesterI-1][HamesterJ] !=5 ){
	motionFlag=2;
	
	if(f[HamesterI-1][HamesterJ] ==9 )
	{
		Score=Score+diamondStep;
		left_right_move.play();
		if(Score==maxScore)
		{
		//alert("Scorey="+Score);	
		opencloseddoor();
		}
	}
	
f[HamesterI-1][HamesterJ]=f[HamesterI][HamesterJ];
	
	f[HamesterI][HamesterJ]=0;
	
	HamesterI--;
	printMatrix(f);
	var nextBlock = document.getElementById(HamesterI+""+HamesterJ);

	
									
	upMotion(hamesterBlock,nextBlock);
}
	
		}
}
function downmove(){
if(HamesterI<iMax-2){


if(f[HamesterI+1][HamesterJ] !=5 ){
	
	
			
			if(f[HamesterI-1][HamesterJ] !=5 && f[HamesterI-1][HamesterJ] !=9 )
											{swaphamster();motionFlag=4;
											  }else{
										var stonenum=upstones();
										//alert(stonenum);
										tempi=HamesterI;
										tempj=HamesterJ;
										swaphamster();motionFlag=4;
										
										addNewStonesFalling(stonenum);
												  }
								  }
                    }
}
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

function addNewStonesFalling(stonenum)
{										
										
										//check secound object
								 		var i ;var existanceflag=0;
										for(i=0;i<swapedObjectsCounter;i++)
										{
											if((swapedObjects[i][1]==tempi)&&(swapedObjects[i][2]==tempj))
											{
												existanceflag=1;
											}
										}
										if(existanceflag==0){
										if(stonenum==null)
										{	
 										var stonenum=upstones();
										}
										//alert(stonenum);
										swapedObjects[swapedObjectsCounter]=new Array();
										swapedObjects[swapedObjectsCounter][0]=stonenum;
										swapedObjects[swapedObjectsCounter][1]=tempi;
										swapedObjects[swapedObjectsCounter][2]=tempj;
										swapedObjects[swapedObjectsCounter][3]=0;
										swapedObjectsCounter++;
										rookssound.play();
										if(handel==0)
										{
										t=setInterval("swapstones("+stonenum+")",180);	
										handel=1;
										}
							}
										
				
}
function upstones()
{
	//واقفين عند اننا نشوف امتا بيتنادى عليها ونظبها  من الداون
	var stonecount=0;
	var internalI=HamesterI-1;
	while(f[internalI][HamesterJ]==5 || f[internalI][HamesterJ]==9)
	{
		
		stonecount++;
		internalI--;
	}
	return stonecount;
}


function swaphamster()
{
	if(f[HamesterI+1][HamesterJ] ==9 )
	{
		Score=Score+diamondStep;
		left_right_move.play();
		if(Score==maxScore)
		{
		//alert("Scorey="+Score);	
		opencloseddoor() ;
		}
	}
	
	f[HamesterI+1][HamesterJ]=f[HamesterI][HamesterJ];
	f[HamesterI][HamesterJ]=0;
	//DownMotion(move,block,diamond)
	HamesterI++;
	
	printMatrix(f);


var nextBlock = document.getElementById(HamesterI+""+HamesterJ);	
DownMotion(hamesterBlock,nextBlock);
}

/*function fallBlocks() {
	
		var fallingBlock = document.getElementById('fallingBlock').style;
		var move=document.getElementById('penguins');

		//alert(parseInt(move.style.left) + "move");
		//alert(parseInt(fallingBlock.left));
		if ((parseInt(fallingBlock.left)+100<parseInt(move.style.left))
		 ||(parseInt(fallingBlock.top)+100<parseInt(move.style.top)) )   
		fallingBlock.top = parseInt(fallingBlock.top) + 10 + 'px';
		if (parseInt(fallingBlock.top)>400)
		document.getElementById('fallingBlock').style.display = "none"; //3amla da 3lshan el block mayfdlsh ynzl t7t l mala nehaya fel matrix hnsheelha
		
		block_fall_Time = setTimeout('fallBlocks()',400);
		
		}*/
		
function swapstones(stonenum)
{
	
var i ;
	
	for (i = 0; i <= /*swapedObjects.length*/swapedObjectsCounter; i++) {
		
		try{
	//سوابد المكان اللى هيتنقل له الحج 
	if(f[swapedObjects[i][1]-1][swapedObjects[i][2]]!=0){
	
	if(f[swapedObjects[i][1]][swapedObjects[i][2]]==8 && (motionFlag!=4))
	{
		if(swapedObjects[i][3]==0)
		{continue;}
		else
		{
	f[swapedObjects[i][1]][swapedObjects[i][2]]=5;
	f[(swapedObjects[i][1])-(swapedObjects[i][0])][swapedObjects[i][2]]=0;	
	printMatrix(f);
	swapBlocks(i);
	explode();
	
	var ttt3 = setTimeout("location.reload()",2000);
		}
	}
	//عشان لو ضغط لتحت والحجر بيتحرك 
	
	
	
	if(f[swapedObjects[i][1]][swapedObjects[i][2]]==8 && (motionFlag==4))
	{
	f[swapedObjects[i][1]][swapedObjects[i][2]]=5;
	f[(swapedObjects[i][1])-(swapedObjects[i][0])][swapedObjects[i][2]]=0;	
	printMatrix(f);
	swapBlocks(i);
	explode();
		var ttt3 = setTimeout("location.reload()",2000);
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	if(f[swapedObjects[i][1]][swapedObjects[i][2]]==1||f[swapedObjects[i][1]][swapedObjects[i][2]]==7
	||f[swapedObjects[i][1]][swapedObjects[i][2]]==5||f[swapedObjects[i][1]][swapedObjects[i][2]]==9
	||(  f[swapedObjects[i][1]-2][swapedObjects[i][2]]==0 && motionFlag==2) )
	{
		swapedObjects[i][3]=0;
		//فلاج الحرجة شمال او يمين وكمان ان يون مكان الهامستر دلوقتى هوا المكان اللى بيعمل شيك عليه 		
continue;
}else{	
	
	
	var j =0;
	//loop on stonesnumber
	for(j=0;j<swapedObjects[i][0];j++)
	{
	f[swapedObjects[i][1]-j][swapedObjects[i][2]]=f[swapedObjects[i][1]-j-1][swapedObjects[i][2]];
	
		changeImgSource(swapedObjects[i][1]-j,swapedObjects[i][2]);
	}
	f[(swapedObjects[i][1])-(swapedObjects[i][0])][swapedObjects[i][2]]=0;
	printMatrix(f);
	swapBlocks(i);
			swapedObjects[i][3]=1;
		swapedObjects[i][1]=(swapedObjects[i][1])+1;
}

}//0 not exploded		


}catch(eror){}

}
}
function changeImgSource(i,j)
{
	var elem=document.getElementById(i+""+j);

	if(f[i][j]==5)
	{
	elem.src = "img/ROCK.GIF";}
	else
	{
		 if(f[i][j]==9)
		{
		elem.src = "img/DIAMOND.GIF";
		}
	}
}
function explode()
{
	hamesterBlock.style.display = "none";
var elem1 = document.getElementById(HamesterI+""+HamesterJ);
var elem2 = document.getElementById((HamesterI+1)+""+HamesterJ);
var elem3 = document.getElementById((HamesterI-1)+""+HamesterJ);
var elem4 = document.getElementById(HamesterI+""+(HamesterJ+1));
var elem5 = document.getElementById(HamesterI+""+(HamesterJ-1));
explosion.play();
elem1.src ="img/explode.png";
elem2.src ="img/explode.png";
elem3.src ="img/explode.png";
elem4.src ="img/explode.png";
elem5.src ="img/explode.png";


}


function swapBlocks(i)
	{
		
		//alert(swapedObjects[i][0]);
var elem = document.getElementById(((swapedObjects[i][1])-(swapedObjects[i][0]))+""+swapedObjects[i][2]);
elem.style.display = "none";

changeImgSource(swapedObjects[i][1],swapedObjects[i][2]);
var elem = document.getElementById(((swapedObjects[i][1]))+""+swapedObjects[i][2]);
elem.style.display = "block";
//elem.src = "DIAMOND.GIF";

/*		var j=0 ;
		
		while(j<swapedObjects[i][0])
		{
			//ابقى شوف عند الشكات لو 7 و1 وك
			//كدا
			//-j-(j))
var elem = document.getElementById(((swapedObjects[i][1])-j-1)+""+swapedObjects[i][2]);
DownStoneMotion(elem);
			j++;
		}	*/
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	







function printMatrix(f)
{
	

	var out = "" ;
for (i=0;i<iMax;i++) {
 for (j=0;j<jMax;j++) {
  out = out+f[i][j].toString();
  }
  out=out+"<br/>";
   var error=document.getElementById("error");
error.innerHTML =out;		


}
}



function ResetMatrixBoundres(f)
{
for (i=0;i<iMax;i++) {
 f[i]=new Array();
 for (j=0;j<jMax;j++) {
  f[i][j]=1;
 }
}

for (i=0;i<iMax;i++) {
 f[i][0]=7;
 }

for (i=0;i<iMax;i++) {
 f[i][jMax-1]=7;
}

 for (j=0;j<jMax;j++) {
  f[0][j]=7;
 }
 
 for (j=0;j<jMax;j++) {
  f[iMax-1][j]=7;
 }
 
}


function startdoor()
{
	var elem= document.getElementById("hamester");
elem.src="img/image3.gif";
 clearTimeout(startopendoor);
 startsound.play() ;
}		
function opencloseddoor()
{
	f[iMax-2][jMax-1]=1;
	var elem= document.getElementById(iMax-2+""+jMax-1);
	
elem.src="img/openeddoor.png";

}


/*function startsound(){}
function movesound(){}
function diamondsound(){}
function killsound(){}
function fallingsound(){}*/		
function startgame()
{
var k ;
var l ;
var elem ;
	for(k=0;k<iMax;k++)
	{
		for(l=0;l<jMax;l++)
		{
		 var elem= document.getElementById(k+""+l);
		/* var myArray = [5,9,1];
		     
		if(k==0||l==0||k==iMax-1||l==jMax-1)
		{
			
		}else
		{
			var rand = parseInt(myArray[Math.floor(Math.random() * myArray.length)]);
			f[k][l]=rand;
		}*/
		

			if(k+""+l=="11")
			{
				continue;
			}
			
			if( k==iMax-2)
			{
				if(l==jMax-1){
				elem.src = "img/EXIT.GIF";
				continue;
				}
			//	
			}
		//alert(k+""+l);
		  switch (f[k][l])
		  {
			  case 1 :
			  elem.src = "img/DIRT.GIF";
			  break ;
			  
			  case 7 :
			  
			  elem.src = "img/SOLID.GIF";
			  //alert(elem.src);
			  break ;
			  
			  case 9 :
			  elem.src = "img/DIAMOND.GIF";
			  break ;
			  
			  case 5 :
			  elem.src = "img/ROCK.GIF";
			  break ;
			  
			  /*default :
			   elem.src ="DIRT.GIF";
			  break ;*/
			  
		  }

		}
	}
	//loop for i and j 
	//if(numarray[i][j]=1)
	//elearray[i][j].src="";
	//if(numarray[i][j]=7)
	//elearray[i][j].src="";
	//if(numarray[i][j]=5)
	//elearray[i][j].src="";


}



/*
var animate ;
var container= document.getElementById("container");
function init(){
	
   var container= document.getElementById("container");
   container.style.width=1000;
   container.style.left=10;
   container.style.top=10;
   container.style.height=400;
fedo= document.getElementById("fedo");
fedo.style.width=150;
container.style.top=10
 fedo.style.height=100;
//alert("sssssssssssssss");
}
window.onload =init;
function aa(event)
{
var  key = event.keyCode;
//alert(key);
fedo= document.getElementById("fedo");
var container= document.getElementById("container");
if(key==39)
{
	if (!fedo.style.left)
		{fedo.style.left = 0;}
	fedo.style.left = parseInt(fedo.style.left) + 10;
		//alert(container.style.width);
	if(parseInt(fedo.style.left) > (parseInt(container.style.width)-parseInt(fedo.style.width)))
	{
	fedo.style.left = parseInt(container.style.width)-parseInt(fedo.style.width);
	}
}else if(key==37)
{
if (!fedo.style.left)
		{fedo.style.left = 0;}
	fedo.style.left = parseInt(fedo.style.left) - 10;
		//alert(container.style.width);
		//alert(container.style.left);
	if(parseInt(fedo.style.left) < parseInt(container.style.left))
	{
	fedo.style.left = 0;
	}
}




else if(key==40)
{

if (!fedo.style.top)
		{fedo.style.top = 0;}
	fedo.style.top = parseInt(fedo.style.top) +10;
		//alert(container.style.width);
		//alert(container.style.left);
	if((parseInt(fedo.style.top)+parseInt(fedo.style.height)) > parseInt(container.style.height))
	{
	fedo.style.top = parseInt(container.style.height)-parseInt(fedo.style.height);
	}
}


else if(key==38)
{

if (!fedo.style.top)
		{fedo.style.top = 0;}
	fedo.style.top = parseInt(fedo.style.top) -10;
		//alert(container.style.width);
		//alert(container.style.left);
	if(parseInt(fedo.style.top) < parseInt(container.style.top))
	{
	fedo.style.top = 0;
	}
}

}
*/
















function startLevel(){
alert("finish supposed00");
var elems = document.getElementsByClassName("image");
for (var i = 0; i < elems.length; ++i) {
alert(i);
    var item = elems[i].style.opacity = "1";
}
alert("finish supposed");
var levelpopupelem = document.getElementById("levelpopup");
levelpopupelem.style.display = 'none';
}