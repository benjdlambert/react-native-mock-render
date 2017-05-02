

class ListViewDataSource {
  constructor() {
    this._dataBlob = null;
  }

  getRowCount() {
    return this._dataBlob.length;
  }

  cloneWithRows(data) {
    const newSource = new ListViewDataSource();
    newSource._dataBlob = data;

    return newSource;
  }

  cloneWithRowsAndSections(data) {
    const newSource = new ListViewDataSource();
    newSource._dataBlob = data;

    return newSource;
  }
}

export default ListViewDataSource;
