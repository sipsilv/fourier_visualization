let time = 0;
let wave =  [];

function setup() {
  createCanvas(windowWidth - 20,400);
  slider = createSlider(2, 10,5);
  
}

function draw() {
  background(0);
  translate(50, height / 2);
  
  let x = 0;
  let y = 0;
  for(let n =1; n< slider.value(); n+=2){
    let prevx = x;
    let prevy = y;
    let radius = 50 * (4 /(n * PI));
    
    x += radius * cos( n * time) ;
    y += radius * sin(n *  time) ;
    
    stroke(255,100);
    noFill();
    ellipse(prevx,prevy, radius * 2);

    fill(255);
    //ellipse(x,y,2);
    line(prevx, prevy, x, y);
    //translate(50,0);
    //line(x - 50, y, 0, wave[0]);
  }
  wave.unshift(y);
  
  beginShape();
  noFill();
  stroke(255);
  for(let i = 0; i< wave.length; i++){
    vertex(i,wave[i]);
  }
  endShape();
  time += 0.05;

  if (wave.length > 2000){
    wave.pop();
  }


}