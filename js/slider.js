// banner slider
const sliderOne = document.querySelector('#glideOne');
if(sliderOne){
	new Glide(sliderOne,{
		type:'carousel',
		startAt: 0,
		autoplay:3000,
		gap:0,
		hoverpause: true,
		preView: 1,
		animationDuration: 800,
		animationTimingFunc: 'Linear'
	}).mount()
}