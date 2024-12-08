const sketch = `(p5) => {
    let x = [],
        y = [],
        segNum = 6,
        segLength = 40;

    for (let i = 0; i < segNum; i++) {
        x[i] = 0;
        y[i] = 0;
    }

    p5.setup = () => {
        p5.createCanvas(865, 400);
        p5.strokeWeight(12);
        p5.stroke('#ed225d80');
    };

    p5.draw = () => {
        p5.background(0);
        dragSegment(0, p5.mouseX, p5.mouseY);
        for (let i = 0; i < x.length - 1; i++) {
            dragSegment(i + 1, x[i], y[i]);
        }
    };

    function dragSegment(i, xin, yin) {
        const dx = xin - x[i];
        const dy = yin - y[i];
        const angle = p5.atan2(dy, dx);
        x[i] = xin - p5.cos(angle) * segLength;
        y[i] = yin - p5.sin(angle) * segLength;
        segment(x[i], y[i], angle);
    }

    function segment(x, y, a) {
        p5.push();
            p5.translate(x, y);
            p5.rotate(a);
            p5.line(0, 0, segLength, 0);
        p5.pop();
    }
};`;

export default eval(sketch);
export const sketchCode = sketch;
