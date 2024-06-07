let q, f;

function setup() {
 var canvas = createCanvas(452, 283);
  noFill();
  canvas.parent('wave');
  q = new p5.AudioIn();
  q.start();
  f = new p5.FFT();
  f.setInput(q);
  amp = new p5.Amplitude();
  amp.setInput(q);

   
}

function draw() {
  background(118, 136, 97);
noStroke();
  let spectrum = f.analyze();

  beginShape();
for (let i = 0; i < spectrum.length; i++) {
    let amp = spectrum[i];
  space_between_lines = width / 70;
    let y = map(amp, 0, 306, height, 0);
fill(255,255,255); 
rect(i * space_between_lines, y, space_between_lines, height - y);
  }
  endShape();
}
