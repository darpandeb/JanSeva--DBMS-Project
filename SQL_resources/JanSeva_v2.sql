USE janseva;
SHOW TABLES;



DROP TABLE customer;

CREATE TABLE customer(
custID int NOT NULL AUTO_INCREMENT,
custName VARCHAR(255) NOT NULL,
custAge INT NOT NULL,
custGender VARCHAR(1),
custEmail VARCHAR(50) UNIQUE,
custContact VARCHAR(10) NOT NULL UNIQUE,
custAddress VARCHAR(255) NOT NULL,
custPassword VARCHAR(128) NOT NULL,
custPin VARCHAR(7) NOT NULL,
PRIMARY KEY (custID),
CHECK(custAge>18)
);

DESC customer;

CREATE TABLE package(packID int NOT NULL, 
packName VARCHAR(255) NOT NULL, 
packCost INT NOT NULL, 
packRel VARCHAR(1), 
packContent VARCHAR(255), 
packImg VARCHAR(255), 
PRIMARY KEY (packID)
);



DROP TABLE pilgrimage;

CREATE TABLE pilgrimage(
pilgID int NOT NULL AUTO_INCREMENT,
pilgName VARCHAR(100) NOT NULL,
pilgLoc VARCHAR(255) NOT NULL,
pilgPin VARCHAR(7) NOT NULL,
pilgCity VARCHAR(255) NOT NULL,
pilgType VARCHAR(25) NOT NULL,
userExp FLOAT(2) NOT NULL,
img1 VARCHAR(100) NOT NULL,
img2 VARCHAR (100) NOT NULL,
PRIMARY KEY (pilgID)
);

DESC pilgrimage;

-- temple data
INSERT INTO pilgrimage (pilgName,pilgLoc,pilgPin,pilgCity,pilgType,userExp,img1,img2) VALUES 
("Kedarnath Temple","Garhwal Himalayan range","246445","Kedarnath","temple",4.5,"Dr8vHZ7/k3.jpg","R0sfcZ1/74285807.jpg"),
("Kamakhya Temple","Nilachal Hills","781010","Guwahati","temple",4.1,"ZJ6ygzN/Kamakhya-Guwahati.jpg","LZ0ktN5/Kamakhya41.jpg"),
("Venkateshwara Temple","Tirumala Tirupati","517504","Tirupati", "temple",4.0,"VLG8011/800px-Tirumala-090615.jpg","QbkDHgw/3479482.jpg"),
("Dwarkadhish Temple","Dwarka","361335","Dwarka","temple",3.9,"348hd3X/Dwarkadheesh-temple.jpg","7nXgfht/image3.png");
-- church data
INSERT INTO pilgrimage (pilgName,pilgLoc,pilgPin,pilgCity,pilgType,userExp,img1,img2) VALUES 
("St. Paul's Cathedral","Cathedral Rd, Maidan","700071","Kolkata","church",4.7,"RTN85QY/38293940552-cd3e78de29-k-20171214175140.jpg","HXK8L60/30c.jpg"),
("Basilica of Bom Jesus","Old Goa Rd, Konkan region","403402","Old Goa","church",4.2,"jZBTLN6/shutterstock-1073481062-20190822145857.jpg","NnHcXC6/600-X400-3-1280x720.jpg"),
("Immaculate Conception Cathedral","204, Mission St, MG Road Area","605001","Puducherry", "church",4.4,"1JdxWRv/Puducherry-Immaculate-Conception-Cathedral-2.jpg","5MwN8KN/shutterstock-1015155727.jpg"),
("St. John in the Wilderness Church","McLeod Ganj","176215","Dharamshala","church",3.6,"KbsRGNc/Nainital-stjohnchurch.jpg","bNxVM2Q/14681027494-1995e5d393-b.jpg");
-- masjid data
INSERT INTO pilgrimage (pilgName,pilgLoc,pilgPin,pilgCity,pilgType,userExp,img1,img2) VALUES 
();
Select * from pilgrimage;

DELETE from pilgrimage where pilgID =12;

/*DROP table RITUAL;
DROP TABLE priest;*/


CREATE TABLE priest(priID int NOT NULL,
priName VARCHAR(255) NOT NULL,
priContact VARCHAR(10) NOT NULL UNIQUE,
pilgID int,

PRIMARY KEY (priID),
FOREIGN KEY (pilgID) REFERENCES pilgrimage(pilgID)
);
DROP table payment;
CREATE TABLE payment(
payID INT NOT NULL, 
payAmt INT NOT NULL, --payID will be equal to priest charges, package charges, convenience fee of pilgrimages and convenience fee of company +gst as a total.
custID INT NOT NULL,
priID INT NOT NULL,
packID INT NOT NULL,
pilgID INT NOT NULL,

PRIMARY KEY (payID),
FOREIGN KEY (custID) REFERENCES customer(custID),
FOREIGN KEY (priID) REFERENCES priest(priID),
FOREIGN KEY (packID) REFERENCES package(packID),
FOREIGN KEY (pilgID) REFERENCES pilgrimage(pilgID)
);


INSERT INTO pilgrimage values
(),

