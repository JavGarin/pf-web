// sketch.js - Diseño minimalista moderno (red de puntos conectados)
let nodes = [];
let numNodes = 30;
let connectionDistance = 150;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  
  // Crear nodos iniciales
  for (let i = 0; i < numNodes; i++) {
    nodes.push({
      x: random(width),
      y: random(height),
      size: random(3, 6),
      speedX: random(-0.5, 0.5),
      speedY: random(-0.5, 0.5),
      color: random(200, 255) // Blanco a gris claro
    });
  }
}

function draw() {
  background(0); // Fondo negro
  
  // Dibujar conexiones entre nodos cercanos
  stroke(100, 150); // Gris suave semi-transparente
  strokeWeight(0.8);
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      let d = dist(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y);
      if (d < connectionDistance) {
        line(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y);
      }
    }
  }
  
  // Dibujar y mover nodos
  noStroke();
  for (let node of nodes) {
    fill(node.color);
    circle(node.x, node.y, node.size);
    
    // Movimiento suave
    node.x += node.speedX;
    node.y += node.speedY;
    
    // Rebotar en bordes
    if (node.x < 0 || node.x > width) node.speedX *= -1;
    if (node.y < 0 || node.y > height) node.speedY *= -1;
  }
  
  // Efecto de "nodo principal" que sigue al mouse (opcional)
  if (mouseIsPressed) {
    fill(255);
    circle(mouseX, mouseY, 8);
    for (let node of nodes) {
      let d = dist(mouseX, mouseY, node.x, node.y);
      if (d < connectionDistance * 1.5) {
        stroke(255, 100);
        line(mouseX, mouseY, node.x, node.y);
      }
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}