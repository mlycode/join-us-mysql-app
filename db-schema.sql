CREATE TABLE users (
    email VARCHAR(255) PRIMARY KEY,
    created_at TIMESTAMP DEFAULT NOW()
);

--INSERT TEST USERS
INSERT INTO users (email) VALUES
("abc123@gmail.com"),
("TT@outlook.co.uk");