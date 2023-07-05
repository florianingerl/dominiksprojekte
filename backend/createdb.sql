drop table if exists fotos;

create table fotos (
    fotoname TEXT NOT NULL,
    commentary TEXT,
    bewertung Integer
);

insert into fotos
 (fotoname, commentary, bewertung)
 values ("dom1.png", "Das bin ich!", 5),
        ("hallo.png", "Ein anderes Foto!", 10);