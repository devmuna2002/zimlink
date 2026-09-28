// java enrichment
export const javaEnrichment = {
  "java": {
    notes: {
      c1: { title:"Java Essentials: Types, Control Flow & OOP", intro:"Java is a statically-typed, object-oriented language running on the JVM. Its 'write once, run anywhere' philosophy and strong typing make it a dominant language for enterprise systems.", sections:[
        { heading:"Primitives & Variables", body:"Java has 8 primitive types (int, double, boolean, char, etc.) and reference types (String, arrays, objects). Variables must be declared with a type: int count = 5;. Memory for primitives lives on the stack; objects on the heap.", bullets:["int, double, boolean, char are primitives","String, arrays, classes are reference types","Type is mandatory at declaration","JVM handles memory management via GC"] },
        { heading:"Control Flow & Methods", body:"if/else, for, while, switch. Methods define behavior: returnType name(params). Methods are called on objects (instance methods) or the class (static methods).", bullets:["if (cond) { } else { }","for (int i=0; i<n; i++) {}","Methods: accessModifier returnType name(params)","static methods belong to the class"] },
        { heading:"Classes & Objects", body:"A class is a blueprint; an object is an instance created with new. Encapsulation: private fields with public getters/setters. Constructors initialise objects.", bullets:["class Car { private String model; }","new Car() creates an instance","Encapsulation: private fields, public accessors","Constructors: methods with class name"] }
      ], tip:"Java is strongly typed — the compiler catches type mistakes before the code runs." },
      c2: { title:"Collections, Exceptions & Streams", intro:"The Java Collections Framework (List, Set, Map) provides reusable data structures. Exception handling with try/catch. Streams enable functional-style data processing.", sections:[
        { heading:"Collections Framework", body:"List (ArrayList, LinkedList), Set (HashSet), Map (HashMap). Interfaces define behavior; implementations optimise for different use cases. Generics enforce type safety: List<String>.", bullets:["List: ordered, allows duplicates","Set: unique, unordered","Map: key→value lookup","Generics: List<String> = type-safe list"] },
        { heading:"Exception Handling", body:"Checked exceptions must be handled (throws or try/catch). Unchecked exceptions (RuntimeException) don't require handling. try-with-resources auto-closes resources.", bullets:["try { risky() } catch (Exception e) { }","finally runs always","Checked exceptions: must handle","try-with-resources auto-closes"] },
        { heading:"Streams & Lambdas", body:"Lambda expressions: (args) -> body. Streams chain operations: list.stream().filter(x -> x>5).map(x -> x*2).collect(Collectors.toList()). Functional, declarative data processing.", bullets:["Lambda: (x) -> x * 2","filter: keep matching elements","map: transform each element","collect: gather into a collection"] }
      ], tip:"Prefer streams for readability on collections, but don't overuse them on small data where loops are clearer." },
      c3: { title:"Maven, JUnit & Spring Boot", intro:"Maven manages dependencies and builds. JUnit is the testing framework. Spring Boot is the most popular Java framework for web applications and microservices.", sections:[
        { heading:"Maven Builds", body:"pom.xml defines the project: dependencies, plugins, build config. Maven resolves libraries from central repositories. Lifecycle: compile → test → package → install.", bullets:["pom.xml is the project config","Dependencies auto-downloaded","Build lifecycle: compile, test, package","Repositories store shared artifacts"] },
        { heading:"JUnit Testing", body:"@Test methods verify behavior. Assertions (assertEquals, assertTrue) check expected vs actual. @BeforeEach sets up state before each test.", bullets:["@Test marks a test method","assertEquals(expected, actual)","@BeforeEach runs setup before each test","Tests give confidence to refactor"] },
        { heading:"Spring Boot", body:"Spring Boot creates production-ready apps with minimal config. Annotations (@RestController, @Service, @Repository) wired by dependency injection. Embedded server runs the app directly.", bullets:["@SpringBootApplication entry point","@RestController handles HTTP","Dependency injection wires beans","Embedded Tomcat runs the app"] }
      ], tip:"Learn Spring Boot for real-world Java APIs — it powers the vast majority of enterprise Java backends." }
    },
    exercises: [
      { chId:"c1", title:"Variable Declaration", instructions:"Declare x=10 and y=3. Compute x modulo y.", code:'x = 10\ny = 3\nprint(x % y)', expected:"1" },
      { chId:"c1", title:"Type Count", instructions:"Count the 8 primitive types in Java.", code:'primitives = 8\nprint(primitives)', expected:"8" },
      { chId:"c2", title:"Collection Size", instructions:"An ArrayList holds 5 elements. After adding 3 and removing 2, how many remain?", code:'initial = 5\nadded = 3\nremoved = 2\nprint(initial + added - removed)', expected:"6" },
      { chId:"c2", title:"Exception Count", instructions:"A try block calls 4 methods, each may throw. 1 throws. How many succeed?", code:'methods = 4\nthrown = 1\nprint(methods - thrown)', expected:"3" },
      { chId:"c3", title:"Build Lifecycle", instructions:"Maven lifecycle: compile, test, package. Count the steps listed.", code:'steps = 3\nprint(steps)', expected:"3" }
    ],
    quizzes: [
      { chId:"c1", question:"What are the 8 primitive types in Java?", options:["int, float, String, boolean","int, double, boolean, char, byte, short, long, float","int, double, String, Array","byte, word, dword, qword"], answer:1 },
      { chId:"c1", question:"What does 'new' do in Java?", options:["Deletes an object","Creates a new object instance","Declares a variable","Imports a class"], answer:1 },
      { chId:"c2", question:"Which collection stores unique, unordered elements?", options:["ArrayList","LinkedList","HashSet","HashMap"], answer:2 },
      { chId:"c2", question:"What is a lambda in Java?", options:["A class with one method","An anonymous function (args) -> body","A loop construct","An exception type"], answer:1 },
      { chId:"c3", question:"What does @Test do in JUnit?", options:["Runs the server","Marks a method as a test to run","Configures dependencies","Creates objects"], answer:1 }
    ],
    projects: [{
      title:"Java Orders System", brief:"Define a simple order-management system using classes: Order items, compute totals, validate stock, and summarise orders.", objectives:["Design Order and Item classes","Compute order totals","Check stock availability","Summarise multiple orders"], deliverables:["Class definitions","Total computation logic","Order summary output"],
      starterCode:'# Java Orders System (concept)\nclass Order:\n    def __init__(self, items):\n        self.items = items\n    def total(self):\n        return sum(self.items)\n\norder1 = Order([100, 50, 25])\norder2 = Order([200, 75])\nprint("Order 1 total:", order1.total())\nprint("Order 2 total:", order2.total())\nprint("Combined:", order1.total() + order2.total())'
    }]
  }
};
