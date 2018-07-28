if(!+"\v1"){
	var quirks='v'=='\v';
	window[quirks?'attachEvent':'addEventListener']((quirks?'on':'')+'load',function(){
		document.documentElement.className+=' ie';
	},false);
}