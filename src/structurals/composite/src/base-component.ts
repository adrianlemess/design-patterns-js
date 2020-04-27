export abstract class BaseComponent {
  protected parent: BaseComponent;

  public setParent(parent: BaseComponent) {
    this.parent = parent;
  }

  public getParent(): BaseComponent {
    return this.parent;
  }

  /**
   * In some cases, it would be beneficial to define the child-management
   * operations right in the base Component class. This way, you won't need to
   * expose any concrete component classes to the client code, even during the
   * object tree assembly. The downside is that these methods will be empty
   * for the leaf-level components.
   */
  public add(component: BaseComponent): void {}

  public remove(component: BaseComponent): void {}

  /**
   * You can provide a method that lets the client code figure out whether a
   * component can bear children.
   */
  public isComposite(): boolean {
    return false;
  }

  /**
   * The base Component may implement some default behavior or leave it to
   * concrete classes (by declaring the method containing the behavior as
   * "abstract").
   */
  public abstract executeOrder(order: string): string;
}
