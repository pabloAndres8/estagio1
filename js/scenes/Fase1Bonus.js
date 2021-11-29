class Fase1Bonus extends Phaser.Scene {
    create(){
        this.Stage1Bonus = true;

        this.sky = this.add.image(this.game.renderer.width/2, this.game.renderer.height/2, 'sky')

        this.jules = this.physics.add.sprite(200, 550, 'jules').setScale(2)
        this.jules.damage = false

        this.foods = this.physics.add.group()

        this.ground2 = this.physics.add.staticGroup();
        this.ground2.create(200, 200, 'ground2');

        //Animações - Jules
        this.anims.create({
            key: 'idle',
            repeat: -1,
            frameRate: 6,
            frames: this.anims.generateFrameNames('jules', {start: 0, end: 5}),
        });
        this.anims.create({
            key: 'walk', 
            repeat: -1,
            frameRate: 6, 
            frames: this.anims.generateFrameNames('jules', {start: 9, end: 16})     
        });
        this.anims.create({
            key: 'low-health',
            repeat: -1,
            frameRate: 3,
            frames: this.anims.generateFrameNames('jules', {start: 27, end: 30})
        });
        this.anims.create({
            key: 'death',
            repeat: -1,
            frameRate: 6,
            frames: this.anims.generateFrameNames('jules', {start: 36, end: 42})
        });

        //Colisores
        this.jules.body.setCollideWorldBounds(true);
        //this.physics.add.existing(this.floor, true);
        this.physics.add.collider(this.jules, this.floor);
        this.physics.add.collider(this.jules, this.ground2);
        this.physics.add.collider(this.foods, this.floor);
        this.physics.add.collider(this.foods, this.ground2);

        //Colisões relativas
        this.physics.add.overlap(this.jules, this.foods, this.collectFoods, null, this)

        //Cursores
        this.cursors = this.input.keyboard.createCursorKeys();
        this.cursors.enabled = true

        //Pontos
        this.score = currentScore;
        this.scoreText = this.add.text(0, 0, 'Pontos: ' + this.score);
    }
    update(){
        if(this.Stage1Bonus) {

        }
    }
}