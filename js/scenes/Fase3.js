class Fase3 extends Phaser.Scene {
    create() {
        this.Stage3 = true;
        
        this.sky = this.add.image(this.game.renderer.width/2, this.game.renderer.height/2, 'sunset')

        this.checkpoint = this.add.image(753, 550, 'checkpoint')

        this.jules = this.physics.add.sprite(20, 530, 'jules').setScale(2)
        this.jules.damage = false

        this.ground2 = this.physics.add.staticGroup();
        this.ground2.create(-100, 390, 'ground'); 

        this.ground2.create(400, 190, 'ground'); 
        this.ground2.create(400, 450, 'ground'); 
   
        this.ground2.create(900, 390, 'ground'); 
        

        this.ground2.create(1000, 100, 'parede');

        this.ground2.create(-200, 300, 'parede');

        this.ground2.create(800, -17, 'ground2');
        this.ground2.create(750, -17, 'ground2');
        this.ground2.create(700, -17, 'ground2');
        this.ground2.create(650, -17, 'ground2');
        this.ground2.create(600, -17, 'ground2');
        this.ground2.create(550, -17, 'ground2');
        this.ground2.create(500, -17, 'ground2');
        this.ground2.create(450, -17, 'ground2');
        this.ground2.create(400, -17, 'ground2');
        this.ground2.create(350, -17, 'ground2');
        this.ground2.create(300, -17, 'ground2');
        this.ground2.create(250, -17, 'ground2');
        this.ground2.create(200, -17, 'ground2');
        this.ground2.create(150, -17, 'ground2');
        this.ground2.create(100, -17, 'ground2');
        this.ground2.create(50, -17, 'ground2');
        this.ground2.create(0, -17, 'ground2');

        this.floor = this.add.tileSprite(this.game.renderer.width, this.game.renderer.height, 800 * 1, 17 * 1, 'ground').setOrigin(1);

        this.slimes = this.physics.add.group();
        this.slimes.create(300, 70, 'slime');
        this.slimes.create(500, 70, 'slime');
        this.slimes.create(400, 250, 'slime');
        this.slimes.create(400, 500, 'slime');

        this.foods = this.physics.add.group();
        this.foods.create(30, 160, 'pizza');
        this.foods.create(400, 70, 'taco');
        this.foods.create(770, 160, 'frenchFries');

     
            this.anims.create({
                key: 'idle',
                repeat: -1,
                frameRate: 6,
                frames: this.anims.generateFrameNames('jules', {start: 0, end: 1}),
            });
            this.anims.create({    
                key: 'walk', 
                repeat: -1,
                frameRate: 6, 
                frames: this.anims.generateFrameNames('jules', {start: 12, end: 14})     
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
     
            this.anims.create({
                key: 'idleSlime',
                repeat: -1,
                frameRate: 6,
                frames: this.anims.generateFrameNames('slime', {start: 1 , end: 9 })
            });


        this.cursors = this.input.keyboard.createCursorKeys();
        this.cursors.enabled = true


        this.physics.add.existing(this.floor, true);
        this.physics.add.existing(this.jules, this.checkpoint);
        this.physics.add.collider(this.jules, this.floor);
        this.physics.add.collider(this.jules, this.ground2);
        this.physics.add.collider(this.slimes, this.floor);
        this.physics.add.collider(this.slimes, this.ground2);
        this.physics.add.collider(this.foods, this.floor);
        this.physics.add.collider(this.foods, this.ground2);
        this.physics.add.collider(this.checkpoint, this.floor);

      
        this.physics.add.overlap(this.jules, this.slimes, this.onHit, null, this)
        this.physics.add.overlap(this.jules, this.foods, this.collectFoods, null, this)
        this.physics.add.collider(this.jules, this.checkpoint, this.checkPoint, null, this);

        
        this.score = currentScore;
        this.scoreText = this.add.text(0, 0, 'Fragmentos: ' + this.score);

        
        this.sndForestBackground = this.sound.add('garota')
        this.sndForestBackground.loop = true;
        this.sndForestBackground.play();
        this.itemCollect = this.sound.add('itemCollect')
        this.itemCollect.loop = false;
        this.slimeNoise = this.sound.add('slimeNoise')
        this.slimeNoise.loop = false; 

        
        this.timeText = this.add.text(0, 20, 'Tempo: ' + time);
        this.timed = this.time.addEvent({ delay: 1000, callback: this.timer, callbackScope: this, loop: true })
    }
    update(){
        if(this.Stage3){
            this.timeText.setText('Tempo: ' + time);
                this.slimes.playAnimation('idleSlime', true)
                if (this.cursors.enabled){
                    if (this.cursors.right.isDown){
                        this.jules.setVelocityX(160)
                        this.jules.flipX = false;
                        if(this.jules.body.touching.down){
                            this.jules.anims.play('walk', true)
                        }
                    } else if (this.cursors.left.isDown){
                        this.jules.setVelocityX(-160)
                        this.jules.flipX = true;
                        if(this.jules.body.touching.down){
                            this.jules.anims.play('walk', true)
                        } 
                    } else {
                        this.jules.setVelocityX(0)
                        this.jules.anims.play('idle', true)
               
                    }
        
                    if (this.cursors.up.isDown && this.jules.body.touching.down){
                        this.jules.setVelocityY(-350)
                    }
                }
        
                if (this.jules.damage){
                    this.jules.setVelocityX(0)
                    this.cursors.enabled = false
                    this.jules.anims.play('death', true)
                    this.morreu = this.time.addEvent({ delay: 1000, callback: this.gameOver, callbackScope: this, loop: false });
                }
        
                 if(this.jules.x > 753 && this.jules.y > 519) {
                    this.nextStage();
                }
            }
        }
        onHit(jules, slimes){
            if ((slimes.y - jules.y) >= 39){
                if (slimes.disableBody(true, true)) {
                    this.slimeNoise.play();
                }
                this.score += 0;
                this.scoreText.setText('Fragmentos: ' + this.score);
            }
            else{
                jules.disableBody(false, false)
   
                this.jules.damage = true 
            }
        }
        collectFoods(jules, foods){
            if(foods.disableBody(true, true)) {
                this.itemCollect.play(); 
            }
            this.score += 1;
            this.scoreText.setText('Fragmentos: ' + this.score);
        }
        timer(){
            time--
            if(time === 0) {
                this.gameOver();
            }
        }
        nextStage(){
            this.Stage3 = false;
            this.timed.remove(false);
            currentScore = this.score;
            this.sndForestBackground.stop();
            this.scene.pause('fase2');
            this.checkPoint();
        }
        checkPoint(){
            this.scene.start('finalDaFase');
        }
        gameOver(){
            this.timed.remove(false);
            this.jules.disableBody(true, true)
            this.cursors.enabled = false
            time = 80
            this.scene.start('gameOver');
            this.sndForestBackground.stop();
        }
    }