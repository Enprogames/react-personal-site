// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// Polyfill requestAnimationFrame for libraries that expect it in JSDOM
if (!(globalThis as any).requestAnimationFrame) {
  (globalThis as any).requestAnimationFrame = (cb: FrameRequestCallback) =>
    setTimeout(() => cb(performance.now()), 16) as unknown as number;
}

if (!(globalThis as any).cancelAnimationFrame) {
  (globalThis as any).cancelAnimationFrame = (id: number) => clearTimeout(id);
}
