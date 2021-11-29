class LoadScene extends Phaser.Scene {
    preload(){
       
        this.load.image('dawn', 'assets/taj.png')
        this.load.image('morning', 'assets/torre.png')
        this.load.image('sunset', 'assets/rio.png')
        this.load.image('ground', 'assets/chao.png')
        this.load.image('parede', 'assets/chao2.png')
        this.load.image('ground2', 'assets/platform.png');
        this.load.image('iceCream', 'assets/camera.png')
        this.load.image('pudding', 'assets/camera.png')
        this.load.image('taco', 'assets/camera.png')
        this.load.image('frenchFries', 'assets/camera.png')
        this.load.image('pizza', 'assets/camera.png')
        this.load.image('strawberryCake', 'assets/camera.png')
        this.load.image('checkpoint', 'assets/Checkpoint.png')
        
   
        this.load.spritesheet('jules', 'assets/carinha.png', {
            frameWidth: 32,
            frameHeight: 32
        })

        this.load.spritesheet('slime', 'assets/glu.png', {
            frameWidth: 36,
            frameHeight: 30
        })

     
        this.load.audio('forest', ['assets/sounds/india.mp3'])
        this.load.audio('tarantella', ['assets/sounds/tarantella.mp3'])
        this.load.audio('garota', ['assets/sounds/samba.mp3'])
        this.load.audio('itemCollect', ['assets/sounds/camera.mp3'])
        this.load.audio('slimeNoise', ['assets/sounds/slimeNoise.mp3'])

   
        this.load.image('mainMenuScreen', 'assets/OTURISTA.png')
        this.load.image('moreButton', 'assets/moreButton.png')
        this.load.image('playButton', 'assets/botao.png')
        this.load.image('optionsButton', 'assets/optionsButton.png')
        this.load.audio('sndMenu', ['assets/sounds/goodvibes.mp3'])
       
        this.load.image('gameOverScreen', 'assets/game.png')
       

        this.load.image('quitButton', 'assets/voltar.png')
        this.load.audio('sndtrackGameOver', ['assets/sounds/gameover.wav'])


        this.load.image('blankMenu', 'assets/OTURISTA2.png')

  
        this.load.image('endForest', 'assets/congra.png')
        this.load.audio('endAudio', ['assets/sounds/vencedor.mp3'])
        
    }
    create(){
        this.scene.start('mainMenu');
    }

}