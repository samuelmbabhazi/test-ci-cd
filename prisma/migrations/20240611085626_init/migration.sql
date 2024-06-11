-- CreateTable
CREATE TABLE "Ordinateur" (
    "tag" TEXT NOT NULL,
    "modele" TEXT NOT NULL,
    "fabriquant" TEXT,

    CONSTRAINT "Ordinateur_pkey" PRIMARY KEY ("tag")
);

-- CreateTable
CREATE TABLE "Cohorte" (
    "code" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Cohorte_pkey" PRIMARY KEY ("code")
);

-- CreateTable
CREATE TABLE "Apprenant" (
    "matricule" TEXT NOT NULL,
    "prenom" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "postnom" TEXT,
    "dateNaissance" TIMESTAMP(3),
    "adresse" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telephone" TEXT NOT NULL,
    "tag_ordinateur" TEXT NOT NULL,
    "code_cohorte" TEXT NOT NULL,

    CONSTRAINT "Apprenant_pkey" PRIMARY KEY ("matricule")
);

-- AddForeignKey
ALTER TABLE "Apprenant" ADD CONSTRAINT "Apprenant_tag_ordinateur_fkey" FOREIGN KEY ("tag_ordinateur") REFERENCES "Ordinateur"("tag") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Apprenant" ADD CONSTRAINT "Apprenant_code_cohorte_fkey" FOREIGN KEY ("code_cohorte") REFERENCES "Cohorte"("code") ON DELETE RESTRICT ON UPDATE CASCADE;
