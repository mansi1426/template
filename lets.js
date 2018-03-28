var text=[
	"Provide Proper Tax Solutions", "Tax Strategy & Management", "Tax Compliance & Reporting"
];
var end=[
	"Affordable tax advisory services for your benefit", "Improving the effectiveness of your tax strategy", "Ensuring that tax and process risks are minimized"
];
var k;
var l;
var h=document.querySelector(".content h1");
var y=document.querySelector(".content h4");
h.textContent=text[0];
y.textContent=end[0];
var i=1;
function animate(){
		h.textContent=text[i];
		y.textContent=end[i];
		i++;
		if(i==3)
			{i=0;}
	}
var value=setInterval(animate,3000);
var t=document.querySelector(".left");
t.addEventListener("click", function(){
	clearInterval(value);
	clearInterval(k);
	clearInterval(l);
	if(i==0)
		i=1;
	else if (i==1)
		i=2;
	else i=0;
	h.textContent=text[i];
y.textContent=end[i];
i++;
if(i==3)
{i=0;}
	 k=setInterval(animate,3000);
});
var g=document.querySelector(".right");
g.addEventListener("click", function(){
	clearInterval(value);
	clearInterval(l);
	clearInterval(k);
if(i==3)
	i=0;
h.textContent=text[i];
y.textContent=end[i];
i++;
if(i==3)
	i=0;
l=setInterval(animate,3000);
});



$(document).ready(function(){
	
	$('.owl-two').owlCarousel({
	  animateOut: 'slideOutLeft',
	  animateIn: 'slideInRight',
	  items: 1,
	  margin: 30,
	  stagePadding: 30,
	  smartSpeed: 400,
	  autoplay:true,
	  autoplayTimeout:3000,
	  autoplayHoverPause:true,
	  loop: true,
	  nav:true
	});      
  });


  var top1 = document.querySelector("#top");
  animate1();
  top1.addEventListener('click',function(){
	$("html, body").animate({ scrollTop: 0 }, 500);
  });
  
  function animate1(){
	if(window.pageYOffset > window.innerHeight/2){
	  top1.style.right = "4px";
	  top1.style.bottom = "2px";
	}
	else{
	  top1.style.right = "-50px";
	  top1.style.bottom = "-50px";
	}
	requestAnimationFrame(animate1);
  }

 