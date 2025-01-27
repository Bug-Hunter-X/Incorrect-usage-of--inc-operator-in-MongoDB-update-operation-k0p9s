```javascript
// Correct usage of $inc operator for updating a field in MongoDB
db.collection('myCollection').updateOne({ _id: 1 }, { $inc: { count: 1 } });
```