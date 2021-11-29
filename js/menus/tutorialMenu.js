class TutorialMenu extends MainMenu {
    create() {
        this.tutorialScreen = this.add.image(this.game.renderer.width/2, this.game.renderer.height/2, 'blankMenu')

        this.sndMainMenu = this.sound.add('sndMenu')
        this.sndMainMenu.loop = false;
        this.sndMainMenu.play();

        this.tutorialText = this.add.text(350, 150, 'Enredo', {fontFamily: 'Arial', fontSize: 35, color: '#FFFFFF'})
        this.directionalKeys = this.add.text(
            150, 
            200, 
            `Conta a história de um jovem que ao completar seus 
18 anos decide se aventurar pelo mundo atrás de 
conhecer as 7 maravilhas do mundo moderno, no qual
seus pais tanto falavam em sua infância. O jogo 
abordará três deles(Taj Mahal, Torre Eiffel e Cristo 
Redentor).`,            
            {fontFamily: 'Arial', fontSize: 20, color: '#FFFFFF'})

        this.quitButton = this.add.image(100, 500, 'quitButton').setScale(0.6)
        this.quitButton.setInteractive();
        this.quitButton.on("pointerdown", () => {
            this.scene.start('load');
            this.sndMainMenu.stop();
        })
    }
}