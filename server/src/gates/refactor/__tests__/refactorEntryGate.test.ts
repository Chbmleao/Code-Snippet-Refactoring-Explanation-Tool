// jest.mock("~/src/domains/refactor/refactorDomain");

// import { refactorEntryGate } from "../../../gates/refactor/refactorEntryGate";
// import { refactorDomain } from "../../../domains/refactor/refactorDomain";

// describe("refactorEntryGate", () => {
//   const mockCode = "  const a = 1;  ";
//   const trimmedCode = "const a = 1;";
//   const validResponse = {
//     explanation: "This refactors the code for better readability.",
//     code: "const a = 1; // Refactored",
//     reasoning: "Improves maintainability by adding comments.",
//   };

//   afterEach(() => {
//     jest.clearAllMocks();
//   });

//   it("should trim the input code before passing it to refactorDomain", async () => {
//     (refactorDomain as jest.Mock).mockResolvedValue(validResponse);

//     await refactorEntryGate(mockCode);

//     expect(refactorDomain).toHaveBeenCalledTimes(1);
//     expect(refactorDomain).toHaveBeenCalledWith(trimmedCode);
//   });

//   it("should pass already trimmed code to refactorDomain without changes", async () => {
//     (refactorDomain as jest.Mock).mockResolvedValue(validResponse);

//     await refactorEntryGate(trimmedCode);

//     expect(refactorDomain).toHaveBeenCalledTimes(1);
//     expect(refactorDomain).toHaveBeenCalledWith(trimmedCode);
//   });

//   it("should return the response from refactorDomain", async () => {
//     (refactorDomain as jest.Mock).mockResolvedValue(validResponse);

//     const result = await refactorEntryGate(trimmedCode);

//     expect(result).toEqual(validResponse);
//   });

//   it("should propagate errors from refactorDomain", async () => {
//     const error = new Error("Domain error");
//     (refactorDomain as jest.Mock).mockRejectedValue(error);

//     await expect(refactorEntryGate(trimmedCode)).rejects.toThrow(error);

//     expect(refactorDomain).toHaveBeenCalledTimes(1);
//     expect(refactorDomain).toHaveBeenCalledWith(trimmedCode);
//   });
// });
