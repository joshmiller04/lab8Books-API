import { createClient } from "https://cdn.skypack.dev/@supabase/supabase-js";

const supabaseUrl = 'https://dyrqmyhxhrqravjforhy.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR5cnFteWh4aHJxcmF2amZvcmh5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE2NDQwODcsImV4cCI6MjA1NzIyMDA4N30.LAK6cxeIPc8YP23a0wUz3aDdmT4gslhHXbBr8cUhspI';

const supabase = createClient(supabaseUrl, supabaseKey);

async function getBooks() {
  let { data: books, error } = await supabase.from('books').select('*');

  if (error) {
    console.error("Error fetching books:", error);
    return;
  }

  let bookList = document.querySelector("#books tbody");

  books.forEach(book => {
    let row = document.createElement("tr");
    row.innerHTML = `<td>${book.title}</td><td>${book.author}</td><td>${book.ISBN}</td>`;
    bookList.appendChild(row);
  });
}

getBooks();
