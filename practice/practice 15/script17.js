// Module aliases
const { Engine, Render, Runner, Bodies, Composite, Mouse, MouseConstraint } = Matter;

// Create engine
const engine = Engine.create();
const world = engine.world;

// Create renderer
const container = document.getElementById('container');
const render = Render.create({
    element: container,
    engine: engine,
    options: {
        width: container.clientWidth,
        height: container.clientHeight,
        wireframes: false, // Use solid shapes instead of outlines
    },
});

Render.run(render);

// Create runner
const runner = Runner.create();
Runner.run(runner, engine);

// Add walls (container boundaries)
const walls = [
    Bodies.rectangle(container.clientWidth / 2, 0, container.clientWidth, 20, { isStatic: true }),
    Bodies.rectangle(container.clientWidth / 2, container.clientHeight, container.clientWidth, 20, { isStatic: true }),
    Bodies.rectangle(0, container.clientHeight / 2, 20, container.clientHeight, { isStatic: true }),
    Bodies.rectangle(container.clientWidth, container.clientHeight / 2, 20, container.clientHeight, { isStatic: true }),
];
Composite.add(world, walls);

// Add random falling objects
for (let i = 0; i < 10; i++) {
    const randomWidth = Math.random() * 60 + 20;
    const randomHeight = Math.random() * 60 + 20;
    const randomX = Math.random() * container.clientWidth;
    const randomY = Math.random() * container.clientHeight * 0.5;

    const randomShape = Math.random() > 0.5
        ? Bodies.rectangle(randomX, randomY, randomWidth, randomHeight, { restitution: 0.7 })
        : Bodies.circle(randomX, randomY, randomWidth / 2, { restitution: 0.7 });

    Composite.add(world, randomShape);
}

// Add mouse control
const mouse = Mouse.create(render.canvas);
const mouseConstraint = MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
        stiffness: 0.2,
        render: { visible: false },
    },
});
Composite.add(world, mouseConstraint);

// Keep canvas responsive
window.addEventListener('resize', () => {
    Render.stop(render);
    render.options.width = container.clientWidth;
    render.options.height = container.clientHeight;
    Render.run(render);
});
