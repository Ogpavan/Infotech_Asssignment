import { db } from '../src/firebase'; // your initialized firebase app
import { collection, setDoc, doc } from 'firebase/firestore';

const items = [
    [
        {
          "id": "item1",
          "category": "furniture",
          "name": "Modern Lamp",
          "imageUrl": "https://example.com/images/modern-lamp.jpg",
          "price": 40
        },
        {
          "id": "item2",
          "category": "electronics",
          "name": "Wireless Earbuds",
          "imageUrl": "https://example.com/images/earbuds.jpg",
          "price": 60
        },
        {
          "id": "item3",
          "category": "kitchen",
          "name": "Ceramic Dinner Set",
          "imageUrl": "https://example.com/images/dinner-set.jpg",
          "price": 85
        },
        {
          "id": "item4",
          "category": "decor",
          "name": "Wall Clock",
          "imageUrl": "https://example.com/images/wall-clock.jpg",
          "price": 25
        },
        {
          "id": "item5",
          "category": "furniture",
          "name": "Study Table",
          "imageUrl": "https://example.com/images/study-table.jpg",
          "price": 150
        },
        {
          "id": "item6",
          "category": "appliances",
          "name": "Electric Kettle",
          "imageUrl": "https://example.com/images/kettle.jpg",
          "price": 35
        },
        {
          "id": "item7",
          "category": "lighting",
          "name": "LED Strip Lights",
          "imageUrl": "https://example.com/images/led-strips.jpg",
          "price": 18
        }
      ]
      
];

items.forEach(async (item) => {
  await setDoc(doc(collection(db, "items"), item.id), item);
});
