class HashTable {
  constructor() {
      this.table = {};
  }

  // Insertion operation - O(1)
  insert(key, value) {
      this.table[key] = value;
  }

  // Lookup operation - O(1)
  lookup(key) {
      return this.table[key];
  }

  // Deletion operation - O(1)
  deleteKey(key) {
      delete this.table[key];
  }
}

export default HashTable;
