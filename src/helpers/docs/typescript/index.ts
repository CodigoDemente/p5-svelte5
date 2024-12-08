export const p5Type = `// p5-svelte5/types.d.ts
import type p5 from 'p5';

/**
 * A p5 instance, re-exported from \`@types/p5\`.
 */
export type p5 = p5;`;

export const sketchType = `// p5-svelte5/types.d.ts

/**
 * A closure representing a p5 sketch in [Instance Mode](https://github.com/processing/p5.js/wiki/Global-and-instance-mode).
 *
 * Within the closure you can set optional \`preload()\`, \`setup()\`, and/or \`draw()\` properties on the given p5 instance.
 */
export type Sketch = (sketch: p5) => void;`;

export const tsExampleSketch = `(p5) => {
    p5.setup = () => {
        p5.createCanvas(p5.windowWidth, p5.windowHeight);
    };
    p5.draw = () => {
        p5.ellipse(p5.width / 2, p5.height / 2, p5.width, p5.height);
    };
}`;

export const jsIntellisenseSketch = `<script>
import P5 from 'p5-svelte5';

/**
 * @type {import('p5-svelte5').Sketch}
 */
const sketch = (p5) => {
    p5.setup = () => {
        p5.createCanvas(400, 400);
    };
    p5.draw = () => {
        p5.background(255, 0, 0);
    };
};
</script>

<P5 {sketch} />`;
