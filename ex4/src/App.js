import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Rectangle from './Classes/Rectangle';
import Triangle from './Classes/Triangle';

const App = () => {
  const [activeMenu, setActiveMenu] = useState('home');
  const [retailCompanies, setRetailCompanies] = useState([]);
  const [incrementValue, setIncrementValue] = useState(0);
  const [companiesafter1987, setCompaniesAfter1987] = useState([]);
  const counterRef = useRef(0);
  
  const rectangle = new Rectangle('Red', 10, 5);
  const triangle = new Triangle('Blue', 8, 4);
  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  const people = [
    { name: 'Jack', age: 50 },
    { name: 'Michael', age: 9 },
    { name: 'John', age: 40 },
    { name: 'Ann', age: 19 },
    { name: 'Elisabeth', age: 16 }
  ];

  const courses = [
    'Mathematics',
    'Physics',
    'Chemistry',
    'Biology',
    'Computer Science'
  ];


  const firstTeenager = people.find(person => person.age >= 10 && person.age <= 20);


  const allTeenagers = people.filter(person => person.age >= 10 && person.age <= 20);


  const isEveryPersonTeenager = people.every(person => person.age >= 10 && person.age <= 20);


  const isAnyPersonTeenager = people.some(person => person.age >= 10 && person.age <= 20);

  const array = [1, 2, 3, 4];

  const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2004 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
  ];

  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

  const person = {
    name: "Costas",
    address: {
      street: "Lalaland 12"
    }
  };


  useEffect(() => {
    companies.forEach(company => console.log(company.name));
  }, []);

 useEffect(() => {
    const updateCompanies = companies.filter(company => company.start > 1987);
    setCompaniesAfter1987(updateCompanies);
 }, []);

  useEffect(() => {
    const updatedRetailCompanies = companies
      .filter(company => company.category === 'Retail')
      .map(company => ({ ...company, start: company.start + 1 }));
    setRetailCompanies(updatedRetailCompanies);
  }, []);


  const sortedCompanies = [...companies].sort((a, b) => a.end - b.end);

  const sortedAges = [...ages].sort((a, b) => b - a);


  const sumOfAges = ages.reduce((acc, age) => acc + age, 0);

  const { name, category } = companies[0];
  const newObject = {
    name,
    category,
    print() {
      console.log(this.name);
    }
  };


  const sumNumbers = (...numbers) => numbers.reduce((acc, num) => acc + num, 0);

  
  const addToArray = (...args) => {
    return args.reduce((acc, arg) => {
      if (Array.isArray(arg)) {
        return [...acc, ...arg];
      }
      return [...acc, arg];
    }, []);
  };

  const { address: { street } } = person;

  const handleIncrement = () => {
    counterRef.current += 1;
    setIncrementValue(counterRef.current);
  };

 
  const parseQueryParams = (url) => {
    const queryParams = new URLSearchParams(url.split('?')[1]);
    const params = {};
    queryParams.forEach((value, key) => {
      params[key] = value;
    });
    return params;
  };

  return (
    <div className="App">
      <h1 className="hello-react">
        Hello <span className="react">React</span>
      </h1>
      <nav className="navbar">
        <ul className="navbar-list">
          <li className={`navbar-item ${activeMenu === 'home' ? 'active' : ''}`}>
            <a href="#home" onClick={() => handleMenuClick('home')}>Home</a>
          </li>
          <li className={`navbar-item ${activeMenu === 'search' ? 'active' : ''}`}>
            <a href="#search" onClick={() => handleMenuClick('search')}>Search</a>
          </li>
          <li className={`navbar-item ${activeMenu === 'contact' ? 'active' : ''}`}>
            <a href="#contact" onClick={() => handleMenuClick('contact')}>Contact</a>
          </li>
          <li className={`navbar-item ${activeMenu === 'login' ? 'active' : ''}`}>
            <a href="#login" onClick={() => handleMenuClick('login')}>Login</a>
          </li>
        </ul>
      </nav>
      <h1>Results</h1>
      <h2>First Teenager</h2>
      <p>{firstTeenager ? `${firstTeenager.name}, Age: ${firstTeenager.age}` : 'No teenager found'}</p>
      <h2>All Teenagers</h2>
      <ul>
        {allTeenagers.length > 0 ? allTeenagers.map((teenager, index) => (
          <li key={index}>{teenager.name}, Age: {teenager.age}</li>
        )) : <li>No teenagers found</li>}
      </ul>
      <h2>Is Every Person a Teenager?</h2>
      <p>{isEveryPersonTeenager ? 'Yes' : 'No'}</p>
      <h2>Is Any Person a Teenager?</h2>
      <p>{isAnyPersonTeenager ? 'Yes' : 'No'}</p>
      <h2>Sum of Array Elements</h2>
      <p>{sum}</p>
      <h2>List of Courses</h2>
      <ul>
        {courses.map((course, index) => (
          <li key={index}>{course}</li>
        ))}
      </ul>
      <h2>Company After 1987</h2>
      <ul>
        {companiesafter1987.map((company, index) => (
          <li key={index}>{company.name} - {company.start} - {company.end}</li>
        ))}
      </ul>
      <h2>Retail Companies</h2>
      <ul>
        {retailCompanies.map((company, index) => (
          <li key={index}>
            <div>Name: {company.name}</div>
            <div>Category: {company.category}</div>
            <div>Start: {company.start}</div>
            <div>End: {company.end}</div>
          </li>
        ))}
      </ul>
      <h2>Sorted Companies by End Date</h2>
      <ul>
        {sortedCompanies.map((company, index) => (
          <li key={index}>{company.name} (End: {company.end})</li>
        ))}
      </ul>
      <h2>Sorted Ages in Descending Order</h2>
      <p>{sortedAges.join(', ')}</p>
      <h2>Sum of All Ages</h2>
      <p>{sumOfAges}</p>
      <h2>New Object</h2>
      <p>Name: {newObject.name}</p>
      <p>Category: {newObject.category}</p>
      <button onClick={() => newObject.print()}>Print Name</button>
      <h2>Sum of Numbers</h2>
      <p>{sumNumbers(1, 2, 3, 4, 5)}</p>
      <h2>Add to Array</h2>
      <p>{JSON.stringify(addToArray(1, 'a', [2, 3], 'b', [4, 5]))}</p>
      <h2>Street</h2>
      <p>{street}</p>
      <h2>Increment Function</h2>
      <button onClick={handleIncrement}>Increment</button>
      <p>Increment Value: {incrementValue}</p>
      <h2>Parse Query Params</h2>
      <p>{JSON.stringify(parseQueryParams('http://example.com?name=John&age=30'))}</p>
      <h1>Ex4 - 4: Create Classes </h1>
      <h2>Shapes Example</h2>
      <p>{rectangle.toString()}</p>
      <p>{triangle.toString()}</p>

    </div>
  );
};

export default App;