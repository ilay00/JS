let player = {
    x: 0,
    y: 0,

    /**
     * Метод задает пользователю новое расположение.
     * @param {{x: int, y: int}} nextPoint координаты куда ставим пользователя.
     */
    changePosition(nextPoint) {
        this.x = nextPoint.x;
        this.y = nextPoint.y;
    }
};
let player1 = {
    x: 5,
    y: 4,

    /**
     * Метод задает пользователю новое расположение.
     * @param {{x: int, y: int}} nextPoint координаты куда ставим пользователя.
     */
   changePosition1(nextPoint) {
        this.x = nextPoint.x;
        this.y = nextPoint.y;
    }
};
          
