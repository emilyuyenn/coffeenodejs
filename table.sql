create table users(
    id int primary key AUTO_INCREMENT,
    user_name varchar(250),
    phoneNumber varchar(20),
    email varchar(50),
    password varchar(50),
    status varchar(50),
    role varchar (20),
    UNIQUE (email)

);


insert into users(user_name,phoneNumber,email,password,status,role) values('admin','0902694406','uyenntt.124010121095@vtc.edu.vn','admin','true','admin');