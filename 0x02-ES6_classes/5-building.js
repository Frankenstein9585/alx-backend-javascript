export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    // eslint-disable-next-line no-prototype-builtins
    if (new.target !== Building && !Building.hasOwnProperty('evacuationWarningMessage')) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  // Getter
  get sqft() {
    return this._sqft;
  }

  // eslint-disable-next-line class-methods-use-this
  evacuationWarningMessage() {

  }
}
