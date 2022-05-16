function BinarioADecimal(num) {
  var num = num.toString().split("").reverse();
  var result = 0;
  for (var i = 0; i < num.length; i++) {
    result += Math.pow(2, i) * num[i];
  }
  return result;
}

describe("BinarioADecimal(num)", function () {
  it("should return 2", function () {
    return expect(BinarioADecimal("10")).toBe(2);
  });
  it("should return 7", function () {
    return expect(BinarioADecimal("111")).toBe(7);
  });
});
