// 1. push
// Method push digunakan untuk menambah satu atau lebih data baru di ahir dari sebuah array.
const number = [1, 2,3]
number.push(4);
console.log(number) // output : 1, 2, 3, 4

// 2. Pop
// Method pop adalah kebalikan dari push. Method pop digunakan untuk menghapus item terakhir dari sebuah array.
const Mynumber = [1, 2, 3]
Mynumber.pop()
console.log(Mynumber)// output : 1, 2

// 3. Unshift
// unshift digunakan untuk menambah item baru di awal sebuah array.
const food = ['bakso', 'soto']
food.unshift('rawon');
console.log(food) // output : bakso, soto, rawon

// 4. Shift
// Shift adalah kebalikan dari unshift. Digunakan untuk menghapus item pertama dari sebuah array.
const Myfood = ['bakso', 'soto', 'rawon']
Myfood.shift();
console.log(Myfood) // output : soto, rawon

// 5. Includes
// Method includes digunakan untuk mengecek apakah sebuah array memilik element tertentu.
const buah = ['semangka', 'pepaya', 'jeruk']
console.log(buah.includes('apel'));
console.log(buah.includes('pepaya'));

// 6. indexOf
// Method indexOf digunakan untuk mencari letak sebuah item dalam array.
const Mybuah = ['semangka', 'pepaya', 'jeruk']
console.log(Mybuah.indexOf('apel'));
console.log(Mybuah.indexOf('pepaya'));

// 7. Map
// Map merupakan method array di JavaScript yang mengembalikan array baru berisi elemen yang dikembalikan oleh fungsi callback.
const Num = [3, 15, 100, 25, 30, 45, 80]
const NumMap = Num.map((Num) => Num * 2)
console.log(NumMap) // 6, 30, 200, 50, 60, 90, 160


// 8. sort
// method sort digunakan untuk mengurutkan item dalam sebuah array.
const myNum = [3, 15, 100, 25, 30, 45, 80]
console.log(myNum.sort(function(a,b){return b- a}))

// 9. Reverse
// method reverse berfungsi untuk membalikkan urutan array, elemen pertama jadi terakhir dan elemen terakhir jadi yang pertama.
const numbers = [5, 4, 3, 2, 1]
const numbersReverse = numbers.reverse()
console.log(numbersReverse)

// 10. join
// Method join membuat dan mengembalikan string baru dengan menggabungkan semua elemen array dengan pemisah koma atau pemisah yang ditentukan.
const buahan = ['semangka', 'pepaya', 'jeruk']
const hasil = buahan.join()
console.log(hasil)


