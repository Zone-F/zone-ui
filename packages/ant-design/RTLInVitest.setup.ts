// import '@testing-library/jest-dom'
import { expect, afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import matchers, {
  TestingLibraryMatchers,
} from "@testing-library/jest-dom/matchers";
declare global {
  namespace Vi {
    interface JestAssertion<T = any>
      extends jest.Matchers<void, T>,
        TestingLibraryMatchers<T, void> {}
  }
}
// 承继 testing-library 的扩展 except
expect.extend(matchers);
// 全局设置整理函数，防止每个测验文件手动整理
afterEach(() => {
  cleanup();
});
