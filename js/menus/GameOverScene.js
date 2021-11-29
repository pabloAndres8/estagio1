class GameOver extends Phaser.Scene {
    create(){
        this.gameOverScreen = this.add.image(this.game.renderer.width/2, this.game.renderer.height/2, 'gameOverScreen')

        this.optionButton = this.add.image(100, 500, 'quitButton').setScale(0.6)

        this.optionButton.setInteractive();
        this.optionButton.on("pointerdown", () => {
            this.scene.start('load');
            this.gameOverSoundtrack.stop();
        })

        this.gameOverSoundtrack = this.sound.add('sndtrackGameOver')
        this.gameOverSoundtrack.loop = true;
        this.gameOverSoundtrack.play();
    }
}