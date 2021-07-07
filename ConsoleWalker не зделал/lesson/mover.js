/**
 * Объект, отвечающий за перемещение
 * @type {{getDirection(): (null|*|undefined), getNextPosition(*): *}}
 */
let mover = {

    // JSDOC
    /**
     * Метод для получение направления
     * @returns {direction - направление, которое может быть 2, 4...}
     */
    getDirection() {

        const availableDirections = [2, 4, 6, 8, 1,3,5,7];

        while(true) {
           let direction =  parseInt(prompt('Введите число (2, 4, 6 или 8), куда вы хотите переместиться, "Отмена" для выхода.'));

           if(isNaN(direction)) {
               return null;
           }

           if(!availableDirections.includes(direction)) {
               alert('Для перемещения необходимо ввести одно из чисел 2, 4, 6 или 8.');
               continue;
           }

           return direction;
        }
    },

    /**
     *
     * @param direction - направление движения
     * @returns {{x: (number|*), y: (number|*)}} - координата
     */
    getNextPosition(direction) {
        let nextPosition = {
            x: player.x,
            y: player.y,
            dx: player.dx,
            dy: player.dy,
           
        };

        switch (direction) {
            case 2:
                nextPosition.y--;
                break;
            case 8:
                nextPosition.y++;
                break;
            case 4:
                nextPosition.x--;
                break;
            case 6:
                nextPosition.x++;
                break;
                case 1:
                nextPosition.dx++;
                break;
                case 3:
                nextPosition.dx--;
                break;
                 case 5:
                nextPosition.dy++;
                break;
                 case 7:
                nextPosition.dy--;
                break;
            
               
        }

        return nextPosition;
    }
};

/*123
  456
  789
 */
