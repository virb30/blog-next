import { setup } from "@/__test-utils__/setup";
import ContentRenderer from "./ContentRenderer";

describe("ContentRenderer tests", () => {
  it("renders html content without sanitize", () => {
    const content = `
      <strong>Test Strong</strong>
      <p>
        Test Paragraph
      </p>
    `;
    const { container } = setup(<ContentRenderer content={content} />);

    const strongText = container.querySelector('strong');
    const pText = container.querySelector("p");
    expect(strongText).toBeDefined();
    expect(pText).toBeDefined();
  })
})