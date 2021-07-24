class Weight {
  text: string;
  date: Date;
  _id?: string;

  constructor(weightText: string) {
    this.text = weightText;
    this.date = new Date();
    this._id = undefined;
  }
}

export default Weight;
