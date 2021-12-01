export default class Section {
  constructor({ data, renderer }, containerSelector) {
    this._renderedItems = data;
    this._container = containerSelector;
    this._renderer = renderer;
  }

  addItem(element, prepend=true) {
    if(prepend) {
      this._container.prepend(element);
    }else{
      this._container.append(element);
    }
  }

  clear() {
    this._container.innerHTML = '';
  }

  renderItems() {
    this.clear();
    this._renderedItems.forEach(item => {
      this._renderer(item);
    });
  }
}
