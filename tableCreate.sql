CREATE USER sorter WITH PASSWORD '12345678';
GRANT ALL PRIVILEGES ON DATABASE sorting TO sorter;
create TABLE list_sort (
  pk SERIAL PRIMARY KEY,
  id INT,
  item INT
);
ALTER TABLE list_sort OWNER TO sorter