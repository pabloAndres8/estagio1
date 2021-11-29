class StoryMenu extends MainMenu {
    create(){
        this.storyScreen = this.add.image(this.game.renderer.width/2, this.game.renderer.height/2, 'blankMenu')
        this.storyScreen.setInteractive();

        this.storyScreen.on("pointerdown", () => {
            this.scene.start('fase1');
        })

        this.storyText = this.add.text(200, 150,  'Controles e Jogabilidade', {fontFamily: 'Arial', fontSize: 35, color: '#ffffff'})
        this.storyText = this.add.text(220, 200,  '⇐: correr para esquerda.', {fontFamily: 'Arial', fontSize: 16, color: '#ffffff'})
        
        this.storyText = this.add.text(220, 220,  '⇒: correr para direita', {fontFamily: 'Arial', fontSize: 16, color: '#ffffff'})
        this.storyText = this.add.text(220, 240,  '⇑: pular.', {fontFamily: 'Arial', fontSize: 16, color: '#ffffff'})

        this.storyText = this.add.text(160, 280,  `Colete os "fragmentos de foto" de cada mapa para arrecadar
a maior soma de fragmentos, enquanto desvia dos inimigos em
tempo determinado.`, {fontFamily: 'Arial', fontSize: 20, color: '#ffffff'})

    }
}