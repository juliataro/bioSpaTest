import { render, screen, cleanup } from "@testing-library/react";
import DropDiseases from "./DropDiseases";

test("should render DropDiseases component", () => {
  render(<DropDiseases />);
  const dropDisElement = screen.getAllByTestId("dropDis-1");
  expect(dropDisElement).toBeInTheDocument;
});

// test("test", () => {
//   expect(true).toBe(true);
// });
