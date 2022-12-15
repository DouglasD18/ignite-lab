import { InMemoryNotificationsRepository } from "../../../test/repositories/in-memory-test-repository";
import { SendNotification } from "./send-notification";

describe("Send Notification", () => {
  it("Should be able to send a notification.", async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const sendNotification = new SendNotification(notificationsRepository);

    const { notification } = await sendNotification.execute({
      category: "Social",
      content: "A notification",
      recipientId: "First"
    })

    expect(notificationsRepository.notifications).toHaveLength(1);
    expect(notificationsRepository.notifications[0]).toEqual(notification);
  })
})