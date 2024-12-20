const sketch = `(p5: p5) => {
	p5.setup = () => {
		p5.createCanvas(865, 400, p5.WEBGL);
	};

	p5.draw = () => {
		p5.background(0);
		const radius = p5.width * 1.5;

		//drag to move the world.
		p5.orbitControl();

		p5.normalMaterial();
		p5.translate(0, 0, -600);
		for (let i = 0; i <= 12; i++) {
			for (let j = 0; j <= 12; j++) {
				p5.push();
				const a = (j / 12) * p5.PI;
				const b = (i / 12) * p5.PI;
				p5.translate(
					p5.sin(2 * a) * radius * p5.sin(b),
					(p5.cos(b) * radius) / 2,
					p5.cos(2 * a) * radius * p5.sin(b)
				);
				if (j % 2 === 0) {
					p5.cone(30, 30);
				} else {
					p5.box(30, 30, 30);
				}
				p5.pop();
			}
		}
	};
}`;

export default eval(sketch);
export const sketchCode = sketch;
