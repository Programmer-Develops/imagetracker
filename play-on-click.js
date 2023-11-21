AFRAME.registerComponent("play-on-click", {
 //Add code here
  schema: {
    isPlaying:{
        default:false,
        type:"boolean",
    }
  },

  init: function () {
    this.videoelement = this.el.getAttribute("material").src
    this.onClick = this.onClick.bind(this)
  },
  play: function() {
    window.addEventListener("click", this.onClick)

  },
  onClick: function() {
    if ( !this.videoelement) {
        return
    }
    var isPlaying = this.el.getAttribute("play-on-click").isPlaying
    this.el.object3D.visible = true
    if (!isPlaying) {
        this.el.setAttribute("play-on-click",{isPlaying:true})
        this.videoelement.play()
     }
    else{
        this.el.setAttribute("play-on-click",{isPlaying:false})
        this.videoelement.pause()
    }
  }
});
