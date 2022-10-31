import { define } from "typeorm-seeding";
import { Faker } from "@faker-js/faker";
import { Notification } from "../../entity/Notification";

define(Notification, (faker: Faker) => {
  const notification = new Notification();
  notification.text = faker.lorem.words();
  notification.postId = 1;
  notification.createdAt = faker.date.past();
  return notification;
});
