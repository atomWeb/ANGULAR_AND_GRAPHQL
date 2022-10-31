import { define } from "typeorm-seeding";
import { Faker } from "@faker-js/faker";
import { Post } from "../../entity/Post";

define(Post, (faker: Faker) => {
  const post = new Post();
  post.text = faker.lorem.text();
  post.image = faker.image.imageUrl();
  post.commentsCount = 100;
  post.likesCount = 200;
  post.latestLike = faker.name.firstName();
  post.createdAt = faker.date.past();
  return post;
});
