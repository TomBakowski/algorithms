import HashTable from '../examples/hashTableInsertionAndLookup';


describe('O(1) - Constant Time: Hash Table Insertion and Lookup', () => {
  test('insert() should add a key-value pair to the hash table in constant time', () => {
    const hashTable = new HashTable();
      hashTable.insert('name', 'John Doe');
      expect(hashTable.lookup('name')).toBe('John Doe');
  });

  test('lookup() should retrieve the correct value from the hash table in constant time', () => {
    const hashTable = new HashTable();
      hashTable.insert('name', 'John Doe');
      const value = hashTable.lookup('name');
      expect(value).toBe('John Doe');
  });

  test('deleteKey() should remove the key-value pair from the hash table in constant time', () => {
    const hashTable = new HashTable();

      hashTable.insert('name', 'John Doe');
      hashTable.deleteKey('name');
      expect(hashTable.lookup('name')).toBeUndefined();
  });
});
