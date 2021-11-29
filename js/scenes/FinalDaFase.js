class FinalDaFase extends Phaser.Scene {
    create() {
        this.endPhase = this.add.image(this.game.renderer.width/2, this.game.renderer.height/2, 'endForest');
        this.endPhase.setInteractive();

        this.optionButton = this.add.text(this.game.renderer.width/2 - 250, this.game.renderer.height/2 + 200, '', {fontFamily: 'Arial', fontSize: 24, color: '#fff'}).setOrigin(0.5);
        this.optionButton.setInteractive();

        this.score = currentScore;
        this.scoreText = this.add.text(0, 0, 'Fragmentos: ' + this.score);

        

        this.endPhase.on("pointerdown", () => {
            this.sndEndPhase.stop();
            this.scene.start('mainMenu');
        })

        this.pontuacao = this.add.text(
            280,
            250,
            'Fragmentos coletados  : ' + currentScore + '/9',
            {fontFamily: 'Arial', fontSize: 24, color: '#ffffff'}
        )


        this.sndEndPhase= this.sound.add('endAudio')
        this.sndEndPhase.loop = true;
        this.sndEndPhase.play();


        if(currentScore > highscore){
            highscore = currentScore;
            this.recordText = this.add.text(this.game.renderer.width / 2, 475,'Novo Recorde! '+ currentScore + 'pts',
            {fontFamily: 'Verdana', fontSize: 24, color: '#b00298'}).setOrigin(0.5);
        }

        currentScore = 0;
    }
}