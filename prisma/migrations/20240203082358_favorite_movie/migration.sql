-- CreateTable
CREATE TABLE "Favorite" (
    "id" SERIAL NOT NULL,
    "movie_id" TEXT NOT NULL,
    "user_email" TEXT NOT NULL,
    "poster" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "genre" TEXT[],
    "release_date" TEXT NOT NULL,

    CONSTRAINT "Favorite_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Favorite_user_email_movie_id_key" ON "Favorite"("user_email", "movie_id");
