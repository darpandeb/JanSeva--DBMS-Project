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
INSERT INTO pilgrimage (pilgName, pilgLoc, pilgPin, pilgCity, pilgType, userExp, img1, img2) VALUES
("Jama Masjid", "Meena Bazaar, Jama Masjid, Chandni Chowk", "110006", "New Delhi", "mosque", 4.5, "mJw54gW/jama-masjid-delhi.jpg","mHKZtqQ/Jama-Masjid-Delhi.jpg"),
("Charminar Mosque", "Charminar, Ghansi Bazaar", "500002", "Hyderabad", "mosque", 4.2, "0BWDF13/ZCEVDh-Fk5dj-NGYHn-Rug-M674kzgw-T5b-HSk-Nvgf-Zom.jpg", "CVTnSWv/d6307bd26ed7a3e42c7cc8b28713890c.jpg"),
("Taj-ul-Masjid", "Bhopal Railway Station Road, Kohefiza", "462001", "Bhopal", "mosque", 3.4, "6HQfFYq/optimized-tuar-1200x900.jpg", "myZzMNG/Bhopal-Tajulmasajid-20200315-104044.jpg"),
("Haji Ali Dargah Mosque", "Dargah Road, Haji Ali", "400026", "Mumbai", "mosque", 4.4, "x8gTFdQ/haji-ali-dargah2.jpg", "rQkkPQG/haji-ali-mosque-2-0.jpg");
-- gurudwara data
INSERT INTO pilgrimage (pilgName, pilgLoc, pilgPin, pilgCity, pilgType, userExp, img1, img2) 
VALUES 
("Golden Temple", "Golden Temple Rd, Atta Mandi", "143006", "Amritsar", "gurudwara", 4.9, "588QD4z/The-Golden-Temple-of-Amrithsar-7.jpg","yFzkKqg/D8R9MT.jpg"),
("Harmandir Sahib", "Sri Darbar Sahib, Guru Ram Das Ji Rd", "143006", "Amritsar", "gurudwara", 4.7, "Hx3pXZ1/Harmandir-Sahib-Amritsar-India-Punjab.jpg","0mT2tnz/3602506.jpg"),
("Bangla Sahib Gurudwara", "Ashoka Rd, Connaught Place", "110001", "New Delhi", "gurudwara", 4.6, "Yhh1QS6/Front-view-of-Gurudwara-Bangla-Sahib-Delhi.jpg","hsgDMRz/Getty-Images-1154390020.jpg"),
("Hazur Sahib Nanded", "Hazur Sahib Rd", "431601", "Nanded", "gurudwara", 3.7, "8gwPCSp/Hazur-Sahib.jpg","9Gs14xc/nanded-gurudwara-1.jpg");


INSERT INTO pilgrimage (pilgName,pilgLoc,pilgPin,pilgCity,pilgType,userExp,img1,img2) VALUES 
("");
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

