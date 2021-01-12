export class Scoreboard {
    constructor(config) {
        this.tokensTotal = config;  // config.spins;config.locks;config.removes;
        
   
        this.points = 0;
        this.spinsRemaining=0
        this.locksRemaining=0
        this.removesRemaining=0

        this.$points=$("#sb-total-points");
        this.$spinsRemaining=$("#sb-spins-remaining");
        this.$locksRemaining=$("#sb-locks-remaining");
        this.$removesRemaining=$("#sb-removes-remaining");

        this.$spinsTotal=$("#sb-spins-total");
        this.$locksTotal=$("#sb-locks-total");
        this.$removesTotal=$("#sb-removes-total");

        this.startGame();
    }

    startGame(){
        this.points = 0;
        this.spinsRemaining= this.tokensTotal.spins;
        this.locksRemaining=this.tokensTotal.locks;
        this.removesRemaining=this.tokensTotal.removes;
        this.render();
    }

    render(){
        this.$points.html( this.points)
        this.$spinsRemaining.html( this.spinsRemaining)
        this.$locksRemaining.html( this.locksRemaining)
        this.$removesRemaining.html( this.removesRemaining)
        this.$spinsTotal.html( this.tokensTotal.spins)
        this.$locksTotal.html( this.tokensTotal.locks)
        this.$removesTotal.html( this.tokensTotal.removes) 
    }


  }
  