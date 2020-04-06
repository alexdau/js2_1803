class BestBurger {
  constructor (props= {}) {
    console.dir(props);
    let {size, inner, extra} = props;
    this.size = size;
    this.inner = inner;
    this.extra = extra === undefined ? {value: []} : extra;
  }

  get Calories() {
    return this._calc("data-cal");
  }

  get Cost() {
    return this._calc("data-cost");
  }

  _calc(selector) {
    let cal = 0;
    cal += +this.size[selector];
    cal += +this.inner[selector];
    return this.extra.value.reduce((start, val) => {
      return start + +val[selector];
    }, cal);
  }

}
