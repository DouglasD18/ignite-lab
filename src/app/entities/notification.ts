import { Replace } from "src/utils/Replace";
import { Content } from "./content";

interface INotification {
  recipientId: string;
  content: Content;
  category: string;
  readedAt?: Date | null;
  createdAt: Date;
}

export class Notification {
  private props: INotification;

  constructor(props: Replace<INotification, { createdAt?: Date }>) {
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  public set recipientId(recipientId: string) {
    this.props.recipientId = recipientId;
  }

  public get recipientId() : string {
    return this.props.recipientId;
  }
  
  public set content(content: Content) {
    this.props.content = content;
  }

  public get content() : Content {
    return this.props.content;
  }

  public set category(category: string) {
    this.props.category = category;
  }

  public get category() : string {
    return this.props.category;
  }

  public set readedAt(readedAt: Date | null | undefined) {
    this.props.readedAt = readedAt;
  }

  public get readedAt() : Date | null | undefined {
    return this.props.readedAt;
  }

  public get createdAt() : Date {
    return this.props.createdAt;
  }
}
