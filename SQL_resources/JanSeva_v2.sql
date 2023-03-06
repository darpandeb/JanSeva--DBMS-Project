USE janseva;
SHOW TABLES;

DESC pilgrimage;

DROP TABLE customer;

CREATE TABLE customer(
custID int NOT NULL AUTO_INCREMENT,
custName VARCHAR(255) NOT NULL,
custAge INT NOT NULL,
custGender VARCHAR(1),
custEmail VARCHAR(50),
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



/*DROP TABLE pilgrimage;*/

CREATE TABLE pilgrimage(
pilgID int NOT NULL AUTO_INCREMENT,
pilgName VARCHAR(255) NOT NULL,
pilgLoc VARCHAR(255) NOT NULL,
pilgPin VARCHAR(7) NOT NULL,
pilgCity VARCHAR(255) NOT NULL,
pilgType VARCHAR(25) NOT NULL,
userExp FLOAT(2) NOT NULL,
PRIMARY KEY (pilgID)
);



INSERT INTO pilgrimge (pilgName , pilgLoc ,pilgPin,pilgCity,pilgType) VALUES 
(

Select * from pilgrimage;



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

