import confetti from 'https://cdn.skypack.dev/canvas-confetti';

export const shootConfetti = () => {
  return confetti({
    particleCount: 1000,
    startVelocity: 35,
    spread: 360,
    colors: ['#C41200'],
    shapes: ['circle'],
    gravity: 0.1,
  });
};
