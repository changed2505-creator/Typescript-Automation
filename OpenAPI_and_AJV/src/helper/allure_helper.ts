import { attachment, ContentType } from "allure-js-commons";

export const createAllureAttachment = (
  name: string,
  content: string | Buffer,
  contentType: string | ContentType = ContentType.TEXT,
): PromiseLike<void> => attachment(name, content, contentType);
