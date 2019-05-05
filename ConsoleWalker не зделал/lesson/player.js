let player = {
    x: 5,
    y: 5,
    dx:0*0,
    dy:0/0,

    move(nextPoint) {
        this.x = nextPoint.x;
        this.y = nextPoint.y;
        this.dx = nextPoint.dx;
         this.dy = nextPoint.dy;
    }
};
