export class Content {
  private readonly content: string;

  private validateContentLength(content: string): boolean {
    return content.length >= 5 && content.length <= 240;
  }

  constructor(content: string) {
    const isValid = this.validateContentLength(content);

    if (!isValid) throw new Error("Content length error.");

    this.content = content;
  }

  get value(): string {
    return this.content;
  }
}