let renderer = {
    map: '',
    render() {
        for(let row = 0; row < config.rowCount; row++) {
            for(let coll = 0; coll < config.collCount; coll++) {
if(coll === player.x && row === player.y) {
                              this.map += 'x';

                 
             }else {
                    this.map += '0';
                }   
               if(coll === player.dx && row === player.dx){
                                   this.map += 'x';
               }
                
                if(coll === player.dy && row === player.dy){
                             this.map += 'x';
                }         

                }
        
            this.map += '\n';
        };
        console.log(this.map);
    },

    clear() {
        console.clear();
        this.map = '';
    }
};
