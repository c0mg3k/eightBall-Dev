namespace eightball_dev.Controllers {

    export class HomeController {
        public message = 'Hello from the home page!';
        public stage: createjs.Stage = new createjs.Stage("magicBall");
        public questionmarks[]: createjs.Text;
        public spins: number = 0;

        constructor(){
          let that = this;

          for(let i=0; i<=3; i++){
            this.questionmarks[i] = new createjs.Text("????", "40px Arial", "#ffffff");
            this.questionmarks[i].x = 20;
            this.questionmarks[i].y = (200/3)*i;
            this.questionmarks[i].scaleY = 1;
            this.questionmarks[i].scaleX = 1;

            this.stage.addChild(this.questionmarks[i])

          }

          createjs.Ticker.setFPS(120);

          createjs.Ticker.addEventListener('tick', function(e){
            that.stage.update();
          });

          this.rollEm();



        }
        public rollEm(){
          let that = this;

          createjs.Ticker.addEventListener('tick', function(e){

            that.questionmarks.forEach(function (q, i, qmarks) {
              console.log(q.y);
              if(q.y <= 75){
                q.scaleY += .01;
                q.scaleX += .01;
              }
              else{
                q.scaleY -= .01;
                q.scaleX -= .01;
              }
              if q.y >= 200){
                q.scaleY = 1;
                q.scaleX = 1;
                q.y = -47;
                that.spins++;
              }
              q.y = q.y + 3;

              if(that.spins == 19){
                that.questionmarks[3].text = "Bang Her";
                that.questionmarks[3].x = 0
                that.questionmarks[3].scaleY = 1;
                that.questionmarks[3].scaleX = 1;
                console.log(that.questionmarks[1]);
                that.stage.update();
                createjs.Ticker.removeAllEventListeners();
              }
            });
          });



        }




    }


    export class AboutController {
        public message = 'Hello from the about page!';
    }
}
