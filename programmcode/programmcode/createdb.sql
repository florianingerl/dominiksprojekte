drop table if exists fotos;

create table fotos (
    fotoname TEXT NOT NULL,
    commentary TEXT,
    bewertung Integer
);

insert into fotos
 (fotoname, commentary, bewertung)
 values ("Florian", "Ingerl", 5),
        ("Hermann", "Ingerl", 10),
        ("Michael", "Ende", 18);
