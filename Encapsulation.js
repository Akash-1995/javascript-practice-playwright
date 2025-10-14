// class BankAccount {
//     constructor(owner, balance) {
//       this.owner = owner;
//       this.balance = balance;
//     }
//   }
  
//   const acc = new BankAccount("Akash", 5000);
  
//   // ❌ Anyone can change balance directly
//   acc.balance = -10000;
  
//   console.log(acc.balance); // -10000 (Invalid!)
  
class Student {
    #marks; // private data (hidden)
  
    constructor(name, marks) {
      this.name = name;
      this.#marks = marks;
    }
  
    // Getter - to read private data
    getMarks() {
      return this.#marks;
    }
  
    // Setter - to update private data safely
    setMarks(m) {
      if (m >= 0 && m <= 100) {
        this.#marks = m;
      } else {
        console.log("Invalid marks!");
      }
    }
  }
  
  const s1 = new Student("Akash", 85);
  
  // ✅ Access using method
  console.log(s1.getMarks()); // 85
  
  // ✅ Update safely
  s1.setMarks(95);
  console.log(s1.getMarks()); // 95
  
  // ❌ Try to set invalid marks
  s1.setMarks(150); // Invalid marks!
  
  // ❌ Try to access directly
  console.log(s1.#marks); // ❌ Error (not allowed)
  