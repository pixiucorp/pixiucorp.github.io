window.onload = function () {
 var tv = document.getElementById("fit1");
 var mytv = document.createElement("script");
 mytv.type = 'text/javascript';
 mytv.async = true;
 mytv.src = "https://www.youtube.com/iframe_api";
 mytv.setAttribute("id", "ytvv");
 mytv.style = ("width:100%;height:70%;display:none;");
 tv.style = ("width:100%;height:70%;display:none;");
 document.getElementsByTagName('head')[0].appendChild(mytv);
}

function onYouTubeIframeAPIReady() {
 var player;
 player = new YT.Player("fit1", { videoId: "IeZYsYiup14",width: 852,height: 480,
  playerVars: { autoplay: 1,controls: 0,showinfo: 0,modestbranding: 0,loop: 1,fs: 0,cc_load_policy: 0,iv_load_policy: 0,autohide: 0,},
  events: { onReady: function (e) { e.target.mute(); },},});
}
