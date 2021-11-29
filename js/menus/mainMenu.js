class MainMenu extends Phaser.Scene {
    create() {

        if(!localStorage.getItem('jules_highScore')){
			localStorage.setItem('jules_highScore', 0);
		}
		
		if(highscore > localStorage.getItem('jules_highScore')){
			localStorage.setItem('jules_highScore', highscore);
		} else {
			highscore = localStorage.getItem('jules_highScore');
        }

        this.mainMenuScreen = this.add.image(this.game.renderer.width/2, this.game.renderer.height/2, 'mainMenuScreen')
        this.sndMainMenu = this.sound.add('sndMenu')
        this.sndMainMenu.loop = true;
        this.sndMainMenu.play();

        this.playButton = this.add.image(this.game.renderer.width/2, this.game.renderer.height/2 + 200, 'playButton').setScale(0.65)

        this.moreButton = this.add.text(this.game.renderer.width/2, 330, 'ENREDO', {fontFamily: 'Arial', fontSize: 24, color: '#ffffff'}).setOrigin(0.5)
        

        this.playButton.setInteractive();
        this.moreButton.setInteractive();
  
        this.playButton.on("pointerdown", () => {
            this.scene.start('story');
            this.sndMainMenu.stop();
        })

        this.moreButton.on("pointerdown", () => {
            this.scene.start('tutorial');
            this.sndMainMenu.stop();
        })       
    }
}

var time = 80;
var highscore = 0;
var currentScore = 0;   