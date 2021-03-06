import { sortAlphabetize } from "./util";

describe("Alphabetics Array Object return sort by object property name ascending", () => {
  it("it should matching array object return", () => {
    const listItems = [
      { title: "bbc" },
      { title: "abc" },
      { title: "cbc" },
      { title: "cbc" }
    ];
    const expectedItem = [
      { title: "abc" },
      { title: "bbc" },
      { title: "cbc" },
      { title: "cbc" }
    ];
    const response = sortAlphabetize(listItems, "title", true);
    expect(response).toEqual(expectedItem);
  });

  it("it should matching Array Object return sort by property name descending ", () => {
    const listItems = [
      { title: "bbc" },
      { title: "abc" },
      { title: "cbc" },
      { title: "cbc" }
    ];
    const expectedItem = [
      { title: "cbc" },
      { title: "cbc" },
      { title: "bbc" },
      { title: "abc" }
    ];
    const response = sortAlphabetize(listItems, "title", false);

    // response 내꺼 아닌거
    // expectedItem 내꺼 
    expect(response).toEqual(expectedItem);
  });
}); 
