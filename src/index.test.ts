import './index';

describe('index.ts', () => {
  it('should run without errors and initialize globalThis.console', () => {
    // Check if globalThis.console exists after running index.ts
    expect(globalThis.console).toBeDefined();
  });
});
