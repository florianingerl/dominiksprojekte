drop table if exists fotos;
drop table if exists bewertungen;

create table fotos (
    fotoname TEXT NOT NULL PRIMARY KEY
);

create table bewertungen (
    id Integer AUTO_INCREMENT PRIMARY KEY,
    fotoname TEXT NOT NULL,
    bewertung Integer NOT NULL,
    Foreign Key (fotoname) references fotos (fotoname)
);

insert into fotos
 (fotoname)
 values ("domi1.jpg"),
        ("domi2.png");
