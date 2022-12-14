import { Content } from "./content";
import { Notification } from "./notification";

describe("Notification", () => {
  it("Should be able to create a notification.", () => {
    const notification = new Notification({
      content: new Content("Hy, my dear."),
      category: "social",
      recipientId: "Nono"
    });

    expect(notification).toBeTruthy();
  });
});
