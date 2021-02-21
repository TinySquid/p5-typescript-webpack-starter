import p5 from "p5";

/*
  I highly recommend following OOP principles with p5 

  Tutorials: https://p5js.org/learn/
  Docs: https://p5js.org/reference/
  Plugins: https://p5js.org/libraries/
  Examples: https://p5js.org/examples/
*/

export const sketch = (p: p5): void => {
  let origin: p5.Vector;
  let bg: p5.Graphics;

  p.setup = (): void => {
    p.createCanvas(500, 500);
    p.ellipseMode(p.CENTER);

    origin = p.createVector(250, 250);

    // Create a custom background
    bg = p.createGraphics(p.width, p.height);
    bg.background("#000");

    for (let x = 4; x < p.width; x += 4) {
      for (let y = 4; y < p.height; y += 4) {
        // Selectively draw points
        if (p.random() > 0.99) {
          bg.push();
          bg.stroke(255, 255, 255);
          bg.strokeWeight(0.5 + p.noise(x, y));
          bg.point(x, y);
          bg.pop();
        }
      }
    }
  };

  p.draw = (): void => {
    // Starry background we made in setup()
    p.image(bg, 0, 0);

    // Draw some circles
    p.ellipse(origin.x - 192, origin.y - 192, 8, 8);
    p.ellipse(origin.x - 128, origin.y - 128, 16, 16);
    p.ellipse(origin.x - 64, origin.y - 64, 32, 32);
    p.ellipse(origin.x, origin.y, 64, 64);
    p.ellipse(origin.x + 64, origin.y + 64, 32, 32);
    p.ellipse(origin.x + 128, origin.y + 128, 16, 16);
    p.ellipse(origin.x + 192, origin.y + 192, 8, 8);
  };
};
