const unroll = require("./unroll");

describe("#unroll", function () {

  it("is a function", function () {
    expect(typeof unroll).toEqual("function");
  });

  it("unrolls a 2x2 square array correctly", function() {
    const square = [
      [1,2],
      [4,3]
    ];
    expect(unroll(square)).toEqual([1,2,3,4]);
  });

  it("unrolls a 4x4 square array correctly", function () {
    const square = [
      [1, 2, 3, 4],
      [12, 13, 14, 5],
      [11, 16, 15, 6],
      [10, 9, 8, 7]
    ];
    expect(unroll(square)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);
  });

  it("handles a single element array", function () {
    const square = [
      [1]
    ];
    expect(unroll(square)).toEqual([1]);
  });
  
});
